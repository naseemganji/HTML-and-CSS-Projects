# Role Management Implementation

## Overview
Implemented a comprehensive role management system that allows USER_ADMIN users to define custom roles with fine-grained permissions at the module level.

## Features

### 1. Custom Role Management
- **Create Custom Roles**: Define roles with specific names and descriptions
- **Dynamic Module Detection**: Automatically detects all available screens/modules
- **Permission Matrix**: Configure module-level permissions (View, Create, Edit, Delete) for:
  - Dashboard
  - Trips
  - Income
  - Expenses
  - Vehicles
  - Assets
  - Depreciation (CCA)
  - Chart of Accounts
  - General Ledger
  - Reports
  - Tax Summary
  - Merchants
  - User Management (USER_ADMIN only)
  - Role Management (USER_ADMIN only)
  - Settings

### 2. User Assignment
- Assign custom roles to users in addition to their base role
- Base roles (USER_ADMIN, SUB_USER, SUB_USER_READONLY) still apply
- Custom roles provide additional fine-grained control

### 3. Role Lifecycle
- Create new roles
- Edit existing roles
- Delete roles (only if no users are assigned)
- Activate/deactivate roles

## Database Schema

### CustomRole Model
```prisma
model CustomRole {
  id          Int      @id @default(autoincrement())
  tenantId    Int
  name        String
  description String   @default("")
  permissions Json     // Stores module-level permissions
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  tenant      Tenant   @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  users       User[]

  @@index([tenantId])
  @@unique([tenantId, name])
}
```

### User Model Updates
- Added `customRoleId` field (nullable)
- Added `customRole` relation
- Index on `customRoleId`

### Tenant Model Updates
- Added `customRoles` relation

## API Endpoints

### Module Discovery
- `GET /api/user-admin/modules` - List all available modules/screens dynamically

### Role Management
- `GET /api/user-admin/roles` - List all custom roles for tenant
- `POST /api/user-admin/roles` - Create new custom role
- `PATCH /api/user-admin/roles/[id]` - Update existing role
- `DELETE /api/user-admin/roles/[id]` - Delete role (with validation)

### User Management Updates
- `GET /api/user-admin/users` - Now includes customRole data
- `POST /api/user-admin/users` - Supports customRoleId parameter

## Pages

### Role Management Page (`/roles`)
- Accessible only to USER_ADMIN and MASTER_USER
- **Dynamic Module Loading**: Fetches available modules from API
- Features:
  - Create new roles with permission matrix
  - Edit existing roles
  - Delete roles (with user assignment validation)
  - View all roles with permission summaries
  - Active/inactive role management
  - Module descriptions for clarity
  - Automatically includes all application screens

### User Admin Page Updates (`/user-admin`)
- "Manage Roles" button added to header
- Custom role dropdown in user creation form
- Users table shows both base role and custom role (if assigned)
- Custom role displayed with purple badge

## Navigation Updates
- Added "Role Management" to Settings dropdown
- Requires USER_ADMIN permission
- Positioned between "User Management" and "Platform Admin"

## Permission Structure

Each custom role stores permissions as JSON:
```json
{
  "trips": {
    "module": "Trips",
    "canView": true,
    "canCreate": true,
    "canEdit": false,
    "canDelete": false
  },
  "income": {
    "module": "Income",
    "canView": true,
    "canCreate": false,
    "canEdit": false,
    "canDelete": false
  }
  // ... other modules
}
```

## Migration

Migration created: `20251207065203_add_custom_roles`

### Changes:
1. Created `CustomRole` table
2. Added `customRoleId` to `User` table
3. Added foreign key constraint with `SET NULL` on delete
4. Added indexes for performance

## Usage Flow

### Creating a Custom Role
1. USER_ADMIN navigates to Settings → Role Management
2. Click "Create New Role"
3. Enter role name and description
4. Configure permissions using the permission matrix
5. Click "Create Role"

### Assigning Role to User
1. Navigate to Settings → User Management
2. Click "Create User" or edit existing user
3. Select base role (USER_ADMIN, SUB_USER, etc.)
4. Optionally select a custom role from dropdown
5. Complete user creation/update

### Editing Roles
1. Navigate to Settings → Role Management
2. Click "Edit" on any role
3. Modify name, description, or permissions
4. Click "Update Role"

### Deleting Roles
1. Navigate to Settings → Role Management
2. Click "Delete" on any role
3. System validates no users are assigned
4. Confirms deletion

## Security

### Access Control
- Only USER_ADMIN and MASTER_USER can manage roles
- API endpoints validate user permissions
- Roles are scoped to tenants (multi-tenant isolation)

### Validation
- Role names must be unique within tenant
- Cannot delete roles with assigned users
- Custom role must belong to same tenant as user
- All modifications validated server-side

## Future Enhancements

Potential additions:
1. **Role Templates**: Pre-built role templates for common use cases
2. **Permission Enforcement**: Middleware to enforce custom role permissions in routes
3. **Audit Log**: Track role changes and assignments
4. **Bulk Operations**: Assign roles to multiple users at once
5. **Role Inheritance**: Allow roles to inherit from other roles
6. **Module-Level Hiding**: Hide entire modules based on permissions in navigation
7. **Custom Permissions**: Add more granular permission types beyond CRUD
8. **Auto-Discovery**: Automatically scan filesystem for routes and add to modules
9. **Route Protection**: Apply role permissions to protect routes server-side

## Testing Checklist

- [ ] Create custom role as USER_ADMIN
- [ ] Assign custom role to new user
- [ ] Assign custom role to existing user
- [ ] Edit custom role permissions
- [ ] Delete role with no users
- [ ] Attempt to delete role with users (should fail)
- [ ] View users with custom roles in user table
- [ ] Verify tenant isolation (roles only visible to same tenant)
- [ ] Test as non-USER_ADMIN (should not have access)
- [ ] Test with MASTER_USER (should have full access)

## Files Created/Modified

### Created Files
- `app/api/user-admin/roles/route.ts`
- `app/api/user-admin/roles/[id]/route.ts`
- `app/api/user-admin/modules/route.ts` (Dynamic module discovery)
- `app/roles/page.tsx`
- `prisma/migrations/20251207065203_add_custom_roles/migration.sql`
- `ROLE_MANAGEMENT_IMPLEMENTATION.md`

### Modified Files
- `prisma/schema.prisma`
- `app/api/user-admin/users/route.ts`
- `app/user-admin/page.tsx`
- `components/navigationConfig.tsx`

## Technical Notes

### Performance Considerations
- Indexed `tenantId` and `customRoleId` for fast lookups
- Unique constraint on `(tenantId, name)` prevents duplicates
- JSON permissions allow flexible schema without migrations

### Multi-Tenant Isolation
- All queries filtered by tenantId
- Foreign keys ensure referential integrity
- CASCADE delete on tenant removal

### Type Safety
- TypeScript interfaces for Permission, CustomRole, and Module
- Zod validation on API endpoints
- Prisma type generation for database operations

### Dynamic Module System
- Modules defined in `/api/user-admin/modules/route.ts`
- Easy to add new modules without changing UI code
- Each module includes:
  - Unique key identifier
  - Display label
  - Description (optional)
  - Associated routes
  - Access requirements (e.g., requiresUserAdmin)
