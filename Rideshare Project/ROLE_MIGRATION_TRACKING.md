# Role Name Migration Tracking

## Overview
Updating role names from verbose legacy names to industry-standard terminology.

## Role Name Mapping

| Old Name | New Name | User-Facing Display | Description |
|----------|----------|---------------------|-------------|
| `MASTER_USER` | `MASTER` | "Platform Admin" | Platform administrator with full system access |
| `USER_ADMIN` | `ADMIN` | "Tenant Admin" | Tenant administrator, manages their organization |
| `SUB_USER` | `USER` | "User" | Standard user with full data access |
| `SUB_USER_READONLY` | `VIEWER` | "Viewer" | Read-only user |
| `PORTAL_TECH_SUPPORT` | `SUPPORT` | "Support" | Technical support staff |
| `PARTNER_USER` | `PARTNER` | "Partner" | External partner with data write access |
| `PARTNER_READ_ONLY` | `PARTNER_VIEWER` | "Partner Viewer" | External partner with read-only access |

## Migration Status

### ✅ Completed Files

1. **prisma/schema.prisma** - Database schema
   - Updated `enum Role` with new values
   - Expanded `Tenant` model with contact fields
   - Updated default role from MASTER_USER to USER

2. **prisma/migrations/20251208000000_update_roles_and_tenant_fields/migration.sql**
   - Created migration script with enum transformation
   - Includes Tenant model expansion

3. **lib/rbac.ts** - Role-based access control
   - Updated `RoleValue` type
   - Added `LEGACY_ROLE_MAP` for backward compatibility
   - Updated all role arrays
   - Enhanced `asRole()` function

4. **types/next-auth.d.ts** - NextAuth type definitions
   - Updated Role union type with 7 new values

5. **components/Navigation.tsx** - Main navigation component
   - Updated role checks from MASTER_USER/USER_ADMIN to MASTER/ADMIN
   - Updated role badge displays with industry-standard labels
   - Added colors for all 7 role types including PARTNER roles
   - Updated mobile/desktop role display names

6. **app/tenants/page.tsx** - Tenant management UI
   - Updated role checks to 'MASTER' and 'ADMIN'
   - Expanded tenant form with all contact/address fields

7. **app/api/user-admin/tenants/route.ts** - Tenant list/create API
   - Updated role checks throughout

8. **app/api/user-admin/tenants/[id]/route.ts** - Tenant detail API
   - Updated all role references

9. **app/user-admin/page.tsx** - User administration page
   - Updated ROLE_OPTIONS array to ['ADMIN', 'USER', 'VIEWER']
   - Changed default role to 'USER'
   - Updated role check from 'USER_ADMIN' to 'ADMIN'
   - Updated all dropdown labels to industry-standard names

10. **app/api/user-admin/users/route.ts** - User list/create API
    - Updated Zod schema enum to ['ADMIN', 'USER', 'VIEWER']

11. **app/api/user-admin/users/[id]/route.ts** - User update API
    - Updated Zod schema enum validation
    - Updated admin protection check from USER_ADMIN to ADMIN

12. **app/api/user-admin/impersonate/route.ts** - Impersonation API
    - Updated GET endpoint role checks (MASTER/ADMIN)
    - Updated POST endpoint impersonation rules
    - Changed filter to show only USER/VIEWER for ADMIN

13. **app/admin/page.tsx** - Platform admin dashboard
    - Updated ROLE_OPTIONS to all 7 new role names
    - Changed default role to 'USER'

14. **app/api/admin/users/route.ts** - Platform admin user creation
    - Updated role enum to all 7 new values
    - Changed default from SUB_USER to USER

15. **app/api/admin/users/[id]/role/route.ts** - Role assignment API
    - Updated ALLOWED_ROLES constant to new values

16. **app/roles/page.tsx** - Custom roles management
    - Updated role check from USER_ADMIN/MASTER_USER to ADMIN/MASTER

17. **prisma/seed.ts** - Database seed script
    - Updated master user role from MASTER_USER to MASTER

18. **scripts/seed-production.ts** - Production seeding script
    - Updated system user role to MASTER

19. **scripts/import-data.ts** - Data import utility
    - Updated fallback role to MASTER

20. **app/api/register/route.ts** - User registration API
    - Updated first user role from MASTER_USER to MASTER

21. **__tests__/lib/posting.test.ts** - Unit tests
    - Updated test user role to MASTER

### 🔄 Files Requiring Updates (NONE REMAINING)

All 23 files have been successfully updated!

#### High Priority - Navigation & Auth

7. **components/Navigation.tsx** (7 matches)
   - Line 452, 577: Check for `'MASTER_USER'` → `'MASTER'`
   - Line 781-789: Role badge colors and display names
     * `'MASTER_USER'` → `'MASTER'`, display "Platform Admin"
     * `'USER_ADMIN'` → `'ADMIN'`, display "Tenant Admin"
     * `'SUB_USER'` → `'USER'`, display "User"
     * `'SUB_USER_READONLY'` → `'VIEWER'`, display "Viewer"
   - Line 793-795: Short role names for mobile
     * "Admin", "User", "Sub" → Update to "Plat", "Tenant", "User", "View"

8. **types/next-auth.d.ts** (7 matches)
   - Update Role union type from old names to new names

#### User Management Pages

9. **app/user-admin/page.tsx** (15 matches)
   - Line 36: `ROLE_OPTIONS` array → `['ADMIN', 'USER', 'VIEWER']`
   - Line 53, 163: Default role `'SUB_USER'` → `'USER'`
   - Line 88: Role check `'USER_ADMIN'` → `'ADMIN'`
   - Lines 312, 320-322, 456, 465-466: Dropdowns and option values
     * "User Admin" → "Tenant Admin"
     * "User / Sub User" → "User"
     * "Read Only" → "Viewer"

10. **app/admin/page.tsx** (6 matches)
    - Lines 41-44: `VALID_ROLES` array
    - Line 63, 199: Default role `'SUB_USER'` → `'USER'`
    - Update role display dropdowns

11. **app/roles/page.tsx** (1 match)
    - Line 52: Role authorization check

#### API Routes - User Management

12. **app/api/user-admin/users/route.ts** (2 matches)
    - Line 76: Zod enum validation

13. **app/api/user-admin/users/[id]/route.ts** (4 matches)
    - Line 8: Zod enum validation
    - Lines 66-67: Admin protection logic

14. **app/api/user-admin/impersonate/route.ts** (10 matches)
    - Lines 29-31: Role checks for impersonation authorization
    - Lines 41, 44: Tenant filtering logic
    - Lines 113-114, 147, 152-153: Impersonation permission checks

15. **app/api/user-admin/modules/route.ts** (2 matches)
    - Lines 84, 91: Module descriptions (comments only)

#### API Routes - Admin

16. **app/api/admin/users/route.ts** (4 matches)
    - Lines 95-98, 103: Role enums and defaults

17. **app/api/admin/users/[id]/role/route.ts** (4 matches)
    - Lines 7-10: Valid roles array

18. **app/api/admin/check-role/route.ts** (1 match)
    - Line 8: Comment only

19. **app/api/register/route.ts** (1 match)
    - Line 41: First user gets MASTER role

#### Scripts & Seeds

20. **scripts/seed-production.ts** (1 match)
    - Line 23: Default role for seed user

21. **scripts/import-data.ts** (1 match)
    - Line 48: Fallback role during import

22. **prisma/seed.ts** (1 match)
    - Line 25: Master user creation

#### Tests

23. **__tests__/lib/posting.test.ts** (1 match)
    - Line 17: Mock user role

## Action Items

### Immediate Actions (Database)

- [ ] Verify DATABASE_URL and DIRECT_URL in .env
- [ ] Apply migration: `npx prisma migrate deploy` or `npx prisma migrate dev`
- [ ] Regenerate Prisma Client: `npx prisma generate`
- [ ] Verify existing user roles migrated correctly

### Code Updates (Systematic Approach) ✅

**Phase 1: Type Definitions & Core Utilities** ✅
- [x] lib/rbac.ts
- [x] prisma/schema.prisma
- [x] types/next-auth.d.ts

**Phase 2: API Routes** ✅
- [x] app/api/user-admin/users/route.ts
- [x] app/api/user-admin/users/[id]/route.ts
- [x] app/api/user-admin/impersonate/route.ts
- [x] app/api/admin/users/route.ts
- [x] app/api/admin/users/[id]/role/route.ts
- [x] app/api/register/route.ts

**Phase 3: UI Components** ✅
- [x] components/Navigation.tsx
- [x] app/user-admin/page.tsx
- [x] app/admin/page.tsx
- [x] app/roles/page.tsx

**Phase 4: Scripts & Tests** ✅
- [x] prisma/seed.ts
- [x] scripts/seed-production.ts
- [x] scripts/import-data.ts
- [x] __tests__/lib/posting.test.ts

### Testing Checklist

- [ ] **Migration Verification**
  - [ ] All existing users retain their roles
  - [ ] Role enum values updated correctly
  - [ ] No orphaned data

- [ ] **Authorization Tests**
  - [ ] MASTER (Platform Admin) can access all features
  - [ ] ADMIN (Tenant Admin) can manage their tenant only
  - [ ] USER can access their data
  - [ ] VIEWER has read-only access
  - [ ] SUPPORT has appropriate access
  - [ ] PARTNER users work correctly

- [ ] **UI Display Tests**
  - [ ] Role badges show correct labels
  - [ ] Role dropdowns have correct options
  - [ ] Navigation menus show/hide correctly per role
  - [ ] User profile shows correct role name

- [ ] **API Tests**
  - [ ] User creation with new roles
  - [ ] Role updates work
  - [ ] Impersonation respects role hierarchy
  - [ ] Tenant management authorization correct

## Notes

- **Backward Compatibility**: `LEGACY_ROLE_MAP` in `rbac.ts` handles old role names temporarily
- **Display Names**: Use user-friendly names in UI (e.g., "Platform Admin" not "MASTER")
- **Database Migration**: Uses CASE statement to preserve existing role assignments
- **Authorization**: Role checks throughout codebase need updating to use new names
- **Partner Roles**: `PARTNER` and `PARTNER_VIEWER` roles added for future partner integration

## References

- Primary tracking: `PROJECT_TRACKER.md` (Phase 9.1)
- Architecture: `ARCHITECTURE.md`
- Database: `prisma/schema.prisma`
