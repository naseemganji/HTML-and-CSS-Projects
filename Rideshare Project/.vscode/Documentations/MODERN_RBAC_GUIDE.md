# Modern User Management & Dynamic Access Control

## Industry Standards for Role-Based Access Control (RBAC)

### Overview
Modern applications require flexible, scalable access control systems that can adapt to changing business needs without code changes. This document outlines industry best practices for implementing dynamic user management and role-based access control (RBAC).

**✨ Good News:** GigAssist already has a partial implementation! See [Current Implementation Status](#current-implementation-status) below.

---

## Current Implementation Status

### ✅ Already Implemented in GigAssist

GigAssist has the foundation of a dynamic permission system:

#### Database Schema (`prisma/schema.prisma`)
- **Permission** - 17 pre-configured permissions
- **UserPermission** - User-specific overrides with expiration
- **TenantPermission** - Tenant-wide feature toggles
- **RolePermissionDefault** - Role-based defaults

#### Permission Service (`lib/permissions.ts`)
```typescript
hasPermission(userId, code)      // Check single permission
hasPermissions(userId, codes[])  // Check multiple
getUserPermissions(userId)       // Get all with status
grantPermission(userId, code)    // Grant with audit
revokePermission(userId, code)   // Revoke permission
```

#### Pre-configured Permissions
- **Admin:** `user_management`, `role_management`, `tenant_management`, `platform_admin`, `subscription_management`
- **Financial:** `view_dashboard`, `view_reports`, `manage_trips`, `manage_expenses`, `manage_income`, `manage_vehicles`, `manage_depreciation`, `view_ledger`, `manage_accounts`
- **Settings:** `manage_settings`, `view_support_access`, `install_app`

#### Management UI (Partially Complete)
- Page exists at `/permissions` (removed from nav, needs migration)
- Features: User selection, permission toggles, category filters, reset to defaults
- API endpoints at `/api/permissions/user/[userId]`

### 🚀 Quick Setup (5 Minutes)

```bash
# 1. Generate Prisma client
npx prisma generate

# 2. Run migration (if needed)
npx prisma migrate dev --name add_dynamic_permissions

# 3. Restart server
npm run dev:https

# 4. Re-add to navigation (components/navigationConfig.tsx):
{ href: '/permissions', label: 'Permission Management', requiresUserAdmin: true }
```

### 🎯 How to Use

1. Go to `/permissions` (or Settings → Permission Management)
2. Select user from left panel
3. Toggle permission on/off
4. Done! No code changes, no restart needed

### 📋 Default Role Permissions

| Permission | MASTER | ADMIN | USER | VIEWER |
|-----------|--------|-------|------|--------|
| user_management | ✅ | ✅ | ❌ | ❌ |
| platform_admin | ✅ | ❌ | ❌ | ❌ |
| manage_expenses | ✅ | ✅ | ✅ | ❌ |
| view_reports | ✅ | ✅ | ✅ | ✅ |

---

## Core Concepts

### 1. **Separation of Concerns**
- **Authentication**: Who you are (login credentials)
- **Authorization**: What you can do (permissions)
- **Roles**: Groups of permissions assigned to users
- **Resources**: Protected entities (pages, API endpoints, data)

### 2. **Dynamic vs. Hard-Coded Access Control**

#### ❌ Hard-Coded Approach (Anti-Pattern)
```typescript
// BAD: Hard-coded in code
if (user.role === 'ADMIN') {
  showUserManagement()
}
```

**Problems:**
- Requires code changes for new roles
- No runtime configurability
- Difficult to audit
- Can't delegate permission management to non-developers

#### ✅ Dynamic Approach (Best Practice)
```typescript
// GOOD: Database-driven
if (await hasPermission(user.id, 'users.manage')) {
  showUserManagement()
}
```

**Benefits:**
- Configure via UI without code changes
- Audit trail of permission changes
- Business users can manage access
- Easy to add new permissions

---

## Modern RBAC Architecture

### Database Schema

```prisma
// 1. Permission Registry
model Permission {
  id          Int       @id @default(autoincrement())
  code        String    @unique  // e.g., "users.create", "reports.view"
  name        String              // Human-readable: "Create Users"
  description String?
  category    String              // Grouping: "User Management", "Reports"
  resource    String              // Resource type: "users", "reports"
  action      String              // Action: "create", "view", "update", "delete"
  createdAt   DateTime  @default(now())
  
  // Relations
  userPermissions     UserPermission[]
  roleDefaults        RolePermissionDefault[]
  tenantPermissions   TenantPermission[]
}

// 2. User-Specific Overrides
model UserPermission {
  id           Int       @id @default(autoincrement())
  userId       Int
  permissionId Int
  granted      Boolean   // true = granted, false = explicitly denied
  expiresAt    DateTime? // Optional: time-limited permissions
  grantedBy    Int?      // Audit: who granted this
  grantedAt    DateTime  @default(now())
  reason       String?   // Audit: why was this granted
  
  user         User       @relation(fields: [userId], references: [id])
  permission   Permission @relation(fields: [permissionId], references: [id])
  grantedByUser User?     @relation("GrantedPermissions", fields: [grantedBy], references: [id])
  
  @@unique([userId, permissionId])
  @@index([userId])
}

// 3. Role-Based Defaults
model RolePermissionDefault {
  id           Int        @id @default(autoincrement())
  role         String     // "ADMIN", "USER", "VIEWER"
  permissionId Int
  granted      Boolean    @default(true)
  
  permission   Permission @relation(fields: [permissionId], references: [id])
  
  @@unique([role, permissionId])
  @@index([role])
}

// 4. Tenant-Wide Policy
model TenantPermission {
  id           Int        @id @default(autoincrement())
  tenantId     Int
  permissionId Int
  enabled      Boolean    @default(true) // Can disable features per tenant
  
  tenant       Tenant     @relation(fields: [tenantId], references: [id])
  permission   Permission @relation(fields: [permissionId], references: [id])
  
  @@unique([tenantId, permissionId])
  @@index([tenantId])
}
```

---

## Permission Resolution Algorithm

### Priority Order (Highest to Lowest)

1. **Explicit User Denial** - User-specific "denied" permission
2. **Tenant Disabled** - Feature disabled for entire organization
3. **User Override** - User-specific granted permission
4. **Role Default** - Default permission for user's role
5. **Deny by Default** - If no match found, deny access

```typescript
async function hasPermission(userId: number, permissionCode: string): Promise<boolean> {
  // 1. Get permission by code
  const permission = await prisma.permission.findUnique({
    where: { code: permissionCode }
  })
  if (!permission) return false

  // 2. Get user with tenant info
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { tenant: true }
  })
  if (!user) return false

  // 3. Check if tenant has disabled this feature
  const tenantPolicy = await prisma.tenantPermission.findUnique({
    where: {
      tenantId_permissionId: {
        tenantId: user.tenantId,
        permissionId: permission.id
      }
    }
  })
  if (tenantPolicy && !tenantPolicy.enabled) {
    return false // Tenant has disabled this feature
  }

  // 4. Check for explicit user-specific permission
  const userPermission = await prisma.userPermission.findUnique({
    where: {
      userId_permissionId: {
        userId: userId,
        permissionId: permission.id
      }
    }
  })

  // 4a. If explicitly denied, return false
  if (userPermission && !userPermission.granted) {
    return false
  }

  // 4b. If explicitly granted, check expiration
  if (userPermission && userPermission.granted) {
    if (userPermission.expiresAt && userPermission.expiresAt < new Date()) {
      return false // Permission expired
    }
    return true
  }

  // 5. Fall back to role defaults
  const roleDefault = await prisma.rolePermissionDefault.findUnique({
    where: {
      role_permissionId: {
        role: user.role,
        permissionId: permission.id
      }
    }
  })

  return roleDefault?.granted ?? false // Default deny
}
```

---

## Permission Naming Convention

### Format: `<resource>.<action>[.<scope>]`

**Examples:**
- `users.view` - View users list
- `users.create` - Create new users
- `users.update` - Update user details
- `users.delete` - Delete users
- `users.update.own` - Update only own profile
- `users.update.any` - Update any user
- `reports.view` - View reports
- `reports.export` - Export reports
- `billing.view` - View billing information
- `billing.manage` - Manage billing settings
- `settings.system` - System-level settings
- `settings.tenant` - Tenant-level settings

### Categories
Group permissions for better UI organization:
- User Management
- Financial Management
- Reporting
- System Administration
- Content Management
- API Access

---

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
```typescript
// PROMPT FOR AI:
// Create a database schema for a dynamic permission system with:
// - Permission registry table with code, name, category, resource, action
// - UserPermission table for user-specific overrides
// - RolePermissionDefault table for role-based defaults
// - TenantPermission table for tenant-wide policies
// Include proper indexes, relations, and audit fields (grantedBy, grantedAt, reason)

// Create migration and seed with common permissions:
// - User management (view, create, update, delete)
// - Financial management (view, create, update, delete)
// - Reporting (view, export)
// - System administration (settings, tenant management)
```

### Phase 2: Permission Checker (Week 2-3)
```typescript
// PROMPT FOR AI:
// Create a permission checking service in lib/permissions.ts with:
// - hasPermission(userId, permissionCode) - Check single permission
// - hasAnyPermission(userId, permissionCodes[]) - Check if user has any of the permissions
// - hasAllPermissions(userId, permissionCodes[]) - Check if user has all permissions
// - getUserPermissions(userId) - Get all user permissions with status (granted, inherited, denied)
// 
// Implement the priority order:
// 1. Explicit user denial
// 2. Tenant disabled
// 3. User override
// 4. Role default
// 5. Deny by default
//
// Add caching with Redis/in-memory cache for performance
// Add logging for audit trail
```

### Phase 3: API Middleware (Week 3)
```typescript
// PROMPT FOR AI:
// Create API route protection middleware in lib/middleware/requirePermission.ts:
// - requirePermission(permissionCode) - Decorator/HOC for API routes
// - requireAnyPermission(permissionCodes[]) - Require any of the permissions
// - requireAllPermissions(permissionCodes[]) - Require all permissions
//
// Usage:
// export async function POST(request) {
//   await requirePermission('users.create')(request)
//   // ... route logic
// }
//
// Return 403 Forbidden with clear error message if permission denied
// Log all permission checks for security audit
```

### Phase 4: UI Components (Week 4)
```typescript
// PROMPT FOR AI:
// Create React components for permission-based UI:
// 1. <PermissionGate permission="users.create"> - Show/hide based on permission
// 2. usePermission(permissionCode) - Hook to check permissions in components
// 3. usePermissions(permissionCodes[]) - Hook to check multiple permissions
// 
// Example:
// <PermissionGate permission="users.create">
//   <button>Create User</button>
// </PermissionGate>
//
// const { hasPermission, loading } = usePermission('users.delete')
// 
// Add loading states and error handling
```

### Phase 5: Admin UI (Week 5-6)
```typescript
// PROMPT FOR AI:
// Create a permission management admin interface at /admin/permissions with:
// 
// Features:
// 1. Permission Registry View
//    - List all permissions grouped by category
//    - Search and filter
//    - Add/edit/delete permissions
//
// 2. Role Configuration
//    - Select a role (ADMIN, USER, VIEWER)
//    - Toggle default permissions for that role
//    - Bulk operations
//
// 3. User Permission Overrides
//    - Search for a user
//    - View their effective permissions (role defaults + overrides)
//    - Grant/revoke specific permissions
//    - Set expiration dates for temporary access
//    - Add reason for audit trail
//
// 4. Tenant Policy
//    - Enable/disable features for entire tenant
//    - Useful for feature flags and plan limits
//
// 5. Audit Log
//    - Show permission grant/revoke history
//    - Filter by user, permission, date
//    - Export for compliance
//
// Include inline help text and tooltips
// Use color coding: green=granted, red=denied, gray=inherited, yellow=expiring
```

### Phase 6: Migration & Optimization (Week 7)
```typescript
// PROMPT FOR AI:
// Create migration script to convert existing hard-coded permissions to dynamic system:
// 1. Analyze codebase for all canAccessX(), requiresAdmin checks
// 2. Extract unique permissions
// 3. Seed permission registry
// 4. Create role defaults based on current RBAC
// 5. Update all auth checks to use new permission system
//
// Add performance optimizations:
// - Redis caching for permission checks (5 min TTL)
// - Batch permission checking
// - Pre-load user permissions on login
// - Database query optimization with proper indexes
//
// Add monitoring:
// - Track permission check latency
// - Alert on denied access patterns (potential security issue)
// - Dashboard showing most-used permissions
```

---

## Advanced Features

### 1. **Hierarchical Permissions**
```typescript
// Parent permission implies children
"reports.*" includes:
  - "reports.view"
  - "reports.create"
  - "reports.export"
  
// Implementation:
function hasPermission(userId, code) {
  // Check exact match
  if (await checkExact(userId, code)) return true
  
  // Check wildcards: "reports.*" matches "reports.view"
  const parts = code.split('.')
  for (let i = parts.length - 1; i > 0; i--) {
    const wildcard = parts.slice(0, i).join('.') + '.*'
    if (await checkExact(userId, wildcard)) return true
  }
  
  return false
}
```

### 2. **Contextual Permissions**
```typescript
// Permission depends on resource ownership
async function canUpdateUser(currentUserId: number, targetUserId: number): Promise<boolean> {
  // Can update any user
  if (await hasPermission(currentUserId, 'users.update.any')) {
    return true
  }
  
  // Can update own profile
  if (currentUserId === targetUserId) {
    return await hasPermission(currentUserId, 'users.update.own')
  }
  
  // Can update users in same tenant
  if (await sameCompany(currentUserId, targetUserId)) {
    return await hasPermission(currentUserId, 'users.update.tenant')
  }
  
  return false
}
```

### 3. **Time-Based Permissions**
```typescript
// Temporary elevated access
await grantPermission({
  userId: 123,
  permissionCode: 'system.maintenance',
  expiresAt: addHours(new Date(), 2), // 2 hours from now
  grantedBy: adminUserId,
  reason: 'Emergency database maintenance'
})

// Auto-revoke expired permissions (cron job)
async function cleanupExpiredPermissions() {
  await prisma.userPermission.deleteMany({
    where: {
      expiresAt: { lt: new Date() }
    }
  })
}
```

### 4. **Permission Groups (Bundles)**
```typescript
// Pre-defined permission sets for common roles
const PERMISSION_BUNDLES = {
  'basic_user': [
    'dashboard.view',
    'trips.view',
    'trips.create',
    'expenses.view',
    'expenses.create',
    'profile.update.own'
  ],
  'financial_manager': [
    ...PERMISSION_BUNDLES.basic_user,
    'reports.view',
    'reports.export',
    'billing.view'
  ],
  'administrator': [
    ...PERMISSION_BUNDLES.financial_manager,
    'users.manage',
    'settings.tenant'
  ]
}

// Apply bundle
async function applyPermissionBundle(userId: number, bundleName: string) {
  const permissions = PERMISSION_BUNDLES[bundleName]
  for (const code of permissions) {
    await grantPermission(userId, code)
  }
}
```

### 5. **IP/Location-Based Restrictions**
```typescript
model UserPermission {
  // ... existing fields
  allowedIPs      String[]  // Restrict to specific IPs
  allowedCountries String[] // Restrict to specific countries
}

async function hasPermissionWithContext(
  userId: number, 
  permissionCode: string,
  context: { ip?: string, country?: string }
): Promise<boolean> {
  const hasBase = await hasPermission(userId, permissionCode)
  if (!hasBase) return false
  
  const userPerm = await getUserPermission(userId, permissionCode)
  if (!userPerm) return true // No restrictions
  
  // Check IP restriction
  if (userPerm.allowedIPs?.length > 0) {
    if (!context.ip || !userPerm.allowedIPs.includes(context.ip)) {
      return false
    }
  }
  
  // Check country restriction
  if (userPerm.allowedCountries?.length > 0) {
    if (!context.country || !userPerm.allowedCountries.includes(context.country)) {
      return false
    }
  }
  
  return true
}
```

---

## Security Best Practices

### 1. **Least Privilege Principle**
- Grant minimum permissions needed
- Regular permission audits
- Remove unused permissions

### 2. **Separation of Duties**
- Critical operations require multiple permissions
- Example: "billing.approve" separate from "billing.create"

### 3. **Audit Trail**
```typescript
model PermissionAuditLog {
  id            Int      @id @default(autoincrement())
  userId        Int
  permissionId  Int
  action        String   // "GRANTED", "REVOKED", "CHECKED"
  result        Boolean? // For "CHECKED" action
  performedBy   Int?     // Who made the change
  reason        String?
  ipAddress     String?
  userAgent     String?
  createdAt     DateTime @default(now())
}

// Log every permission change
async function grantPermission(...) {
  // ... grant logic
  
  await prisma.permissionAuditLog.create({
    data: {
      userId,
      permissionId,
      action: 'GRANTED',
      performedBy: currentUserId,
      reason,
      ipAddress: request.ip,
      userAgent: request.headers['user-agent']
    }
  })
}
```

### 4. **Rate Limiting**
```typescript
// Prevent permission enumeration attacks
import rateLimit from 'express-rate-limit'

const permissionCheckLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  message: 'Too many permission checks'
})
```

### 5. **Fail Secure**
```typescript
// Always deny if error occurs
async function hasPermission(userId: number, code: string): Promise<boolean> {
  try {
    // ... permission check logic
  } catch (error) {
    console.error('Permission check error:', error)
    return false // DENY on error
  }
}
```

---

## Performance Optimization

### 1. **Caching Strategy**
```typescript
import { Redis } from 'ioredis'
const redis = new Redis()

async function hasPermissionCached(userId: number, code: string): Promise<boolean> {
  const cacheKey = `perm:${userId}:${code}`
  
  // Check cache
  const cached = await redis.get(cacheKey)
  if (cached !== null) {
    return cached === '1'
  }
  
  // Compute
  const result = await hasPermission(userId, code)
  
  // Cache for 5 minutes
  await redis.setex(cacheKey, 300, result ? '1' : '0')
  
  return result
}

// Invalidate cache on permission change
async function grantPermission(...) {
  // ... grant logic
  
  // Clear user's permission cache
  const keys = await redis.keys(`perm:${userId}:*`)
  if (keys.length > 0) {
    await redis.del(...keys)
  }
}
```

### 2. **Batch Loading**
```typescript
// Load all user permissions at once on login
async function preloadUserPermissions(userId: number) {
  const permissions = await getUserPermissions(userId)
  
  // Cache all at once
  const pipeline = redis.pipeline()
  permissions.forEach(perm => {
    const cacheKey = `perm:${userId}:${perm.code}`
    pipeline.setex(cacheKey, 300, perm.granted ? '1' : '0')
  })
  await pipeline.exec()
}

// Call on login
session.user.permissionsLoaded = true
await preloadUserPermissions(session.user.id)
```

### 3. **Database Indexes**
```sql
-- Critical indexes for performance
CREATE INDEX idx_user_permission_user ON "UserPermission"("userId");
CREATE INDEX idx_user_permission_lookup ON "UserPermission"("userId", "permissionId");
CREATE INDEX idx_role_permission_role ON "RolePermissionDefault"("role");
CREATE INDEX idx_tenant_permission_tenant ON "TenantPermission"("tenantId");
CREATE INDEX idx_permission_code ON "Permission"("code");
```

---

## Testing Strategy

### Unit Tests
```typescript
describe('Permission System', () => {
  test('grants permission correctly', async () => {
    await grantPermission(userId, 'users.create')
    expect(await hasPermission(userId, 'users.create')).toBe(true)
  })
  
  test('respects role defaults', async () => {
    // User has ADMIN role with default permissions
    expect(await hasPermission(adminUserId, 'users.manage')).toBe(true)
  })
  
  test('user override takes precedence over role default', async () => {
    // Explicitly deny even though role allows it
    await revokePermission(userId, 'reports.export')
    expect(await hasPermission(userId, 'reports.export')).toBe(false)
  })
  
  test('tenant disabled blocks all users', async () => {
    await disableTenantFeature(tenantId, 'billing.manage')
    expect(await hasPermission(userId, 'billing.manage')).toBe(false)
  })
  
  test('expired permission returns false', async () => {
    const expiredDate = subHours(new Date(), 1)
    await grantPermission(userId, 'admin.access', { expiresAt: expiredDate })
    expect(await hasPermission(userId, 'admin.access')).toBe(false)
  })
})
```

### Integration Tests
```typescript
describe('API Permission Enforcement', () => {
  test('POST /api/users requires users.create permission', async () => {
    // User without permission
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${userToken}` }
    })
    expect(res.status).toBe(403)
  })
  
  test('GET /api/users succeeds with users.view permission', async () => {
    await grantPermission(userId, 'users.view')
    const res = await fetch('/api/users', {
      headers: { 'Authorization': `Bearer ${adminToken}` }
    })
    expect(res.status).toBe(200)
  })
})
```

---

## Migration from Hard-Coded RBAC

### Step 1: Audit Current System
```bash
# Find all permission checks in codebase
grep -r "canAccessAdmin\|requiresAdmin\|role === 'ADMIN'" --include="*.ts" --include="*.tsx"
```

### Step 2: Map to New Permissions
```typescript
// Old code → New permission mapping
const MIGRATION_MAP = {
  "canAccessAdmin()": "admin.access",
  "canManageUsers()": "users.manage",
  "canAccessPlatformAdmin()": "platform.admin",
  "role === 'MASTER'": "platform.admin",
  "role === 'ADMIN'": ["users.manage", "settings.tenant"],
}
```

### Step 3: Dual System (Transition Period)
```typescript
// Support both old and new systems
async function canAccessAdmin(user: User): Promise<boolean> {
  // New system (preferred)
  if (await hasPermission(user.id, 'admin.access')) {
    return true
  }
  
  // Old system (fallback)
  return ['MASTER', 'ADMIN'].includes(user.role)
}
```

### Step 4: Gradual Rollout
1. Deploy new permission system (disabled)
2. Run in shadow mode (check both, log discrepancies)
3. Fix any issues
4. Enable for 10% of users
5. Monitor for 1 week
6. Gradually increase to 100%
7. Remove old code

---

## Monitoring & Alerting

### Metrics to Track
```typescript
// Permission check latency
histogram('permission.check.duration', duration, { permission: code })

// Cache hit rate
counter('permission.cache.hit')
counter('permission.cache.miss')

// Denied access attempts
counter('permission.denied', { user: userId, permission: code })

// Permission changes
counter('permission.granted', { grantedBy: adminId })
counter('permission.revoked', { revokedBy: adminId })
```

### Alerts
- **High denial rate**: Possible misconfiguration or attack
- **Slow permission checks**: Database/cache issues
- **Mass permission changes**: Possible unauthorized access
- **Failed admin logins**: Security threat

---

## Common Pitfalls to Avoid

### ❌ Don't: Check Permissions in UI Only
```typescript
// BAD: Only hiding button
{hasPermission('users.delete') && <DeleteButton />}

// API is still accessible!
```

### ✅ Do: Enforce at API Level
```typescript
// GOOD: Enforce in API
export async function DELETE(request) {
  await requirePermission('users.delete')(request)
  // ... delete logic
}

// UI for better UX
{hasPermission('users.delete') && <DeleteButton />}
```

### ❌ Don't: Hard-Code Permission Lists
```typescript
// BAD: Hard to maintain
const ADMIN_PERMISSIONS = ['users.create', 'users.delete', ...]
```

### ✅ Do: Use Database Configuration
```typescript
// GOOD: Configurable
const adminPerms = await getRolePermissions('ADMIN')
```

### ❌ Don't: Forget to Invalidate Cache
```typescript
// BAD: Permission changes not reflected immediately
await grantPermission(userId, code)
// User still sees old permission from cache
```

### ✅ Do: Clear Cache on Changes
```typescript
// GOOD: Immediate effect
await grantPermission(userId, code)
await clearUserPermissionCache(userId)
```

---

## Resources & References

### Industry Standards
- **NIST RBAC Model**: [https://csrc.nist.gov/projects/role-based-access-control](https://csrc.nist.gov/projects/role-based-access-control)
- **OWASP Access Control**: [https://owasp.org/www-community/Access_Control](https://owasp.org/www-community/Access_Control)
- **OAuth 2.0 Scopes**: Similar concept for API permissions

### Open Source Examples
- **Casbin**: Policy-based access control library
- **Permify**: Authorization service
- **Oso**: Authorization library with declarative policies
- **Auth0 RBAC**: Commercial implementation reference

### Books
- "Access Control, Security, and Trust" by Pierangela Samarati
- "OAuth 2.0 Simplified" by Aaron Parecki (for API permissions)

---

## GigAssist-Specific Troubleshooting

### "Schema drift detected"

```bash
# Option 1: Apply pending migrations
npx prisma migrate deploy

# Option 2: Mark as applied (if tables exist)
npx prisma migrate resolve --applied "migration_name"

# Option 3: Force sync (development only)
npx prisma db push
```

### "Cannot generate Prisma client - file locked"

The dev server locks Prisma client files:

```powershell
# Stop all Node processes
Stop-Process -Name node -Force -ErrorAction SilentlyContinue

# Wait 2 seconds
Start-Sleep -Seconds 2

# Regenerate
npx prisma generate

# Restart server
npm run dev:https
```

### Permission changes not taking effect

1. Hard refresh browser (Ctrl+Shift+R)
2. Check Network tab for API response
3. Verify in database: `SELECT * FROM "UserPermission" WHERE "userId" = X`
4. Clear any caching layer (Redis, if implemented)

### Permission UI not visible

```typescript
// Check components/navigationConfig.tsx line ~143
{ href: '/permissions', label: 'Permission Management', requiresUserAdmin: true }

// Ensure user has MASTER or ADMIN role
SELECT email, role FROM "User" WHERE email = 'your@email.com'
```

---

## Conclusion

Modern user management requires:
1. ✅ **Database-driven permissions** (not hard-coded)
2. ✅ **Granular control** (resource.action format)
3. ✅ **Multiple layers** (user, role, tenant)
4. ✅ **Audit trail** (who, what, when, why)
5. ✅ **Performance** (caching, indexes)
6. ✅ **UI for management** (non-technical users)
7. ✅ **Testing** (unit + integration)
8. ✅ **Monitoring** (security + performance)

By following these principles, you create a flexible, secure, and maintainable access control system that scales with your application's needs.

---

## Implementation Prompts Summary

Use these prompts with AI assistants (Claude, ChatGPT, etc.) to implement each phase:

### 🔹 Phase 1: Database Schema
```
Create a Prisma schema for a dynamic permission system with four tables:
1. Permission (code, name, description, category, resource, action)
2. UserPermission (user overrides with expiration, audit fields)
3. RolePermissionDefault (default permissions per role)
4. TenantPermission (tenant-wide feature toggles)

Include proper relations, indexes, and seed 20 common permissions for:
- User management (view, create, update, delete)
- Financial (view, create, update, delete, export)
- Reports (view, export)
- System admin (settings, platform admin)
```

### 🔹 Phase 2: Permission Service
```
Create lib/permissions.ts with functions:
- hasPermission(userId, permissionCode): Check with priority order (tenant disabled > user override > role default > deny)
- hasAnyPermission(userId, codes[]): Check if user has any permission
- getUserPermissions(userId): Get all effective permissions with source (role/user/tenant)
- grantPermission(userId, code, options): Grant with audit trail
- revokePermission(userId, code): Revoke with audit trail

Add Redis caching with 5-minute TTL. Include error handling and logging.
```

### 🔹 Phase 3: API Protection
```
Create middleware lib/middleware/requirePermission.ts:
- requirePermission(code): Protect API routes
- requireAnyPermission(codes[]): Require any of the permissions

Return 403 with clear error message. Log all checks for audit.
Example usage in Next.js App Router API routes.
```

### 🔹 Phase 4: React Components
```
Create React components and hooks:
1. <PermissionGate permission="code" fallback={<>}>: Conditionally render
2. usePermission(code): Hook returning { hasPermission, loading, error }
3. usePermissions(codes[]): Hook for multiple permissions

Include loading states, error handling, and TypeScript types.
```

### 🔹 Phase 5: Admin UI
```
Create /admin/permissions page with:
1. Permission registry (list, search, add/edit/delete)
2. Role configuration (select role, toggle defaults, bulk ops)
3. User overrides (search user, view effective permissions, grant/revoke with reason and expiration)
4. Tenant policy (enable/disable features per tenant)
5. Audit log (filter by user, permission, date, export)

Use TailwindCSS for styling. Include color coding: green=granted, red=denied, gray=inherited.
```

### 🔹 Phase 6: Migration Script
```
Create script to migrate from hard-coded RBAC to dynamic permissions:
1. Scan codebase for canAccessX(), role === 'X' checks
2. Generate permission registry from findings
3. Create role defaults matching current behavior
4. Update all auth checks to use hasPermission()
5. Run in dual mode for testing (check both systems)

Include rollback plan and gradual rollout strategy.
```

---

**Last Updated**: December 2025
**Version**: 1.0
**Author**: GigAssist Platform Team
