# Tenant Management & Impersonation Fixes

## Changes Made

### 1. Fixed User Impersonation Tenant Filtering

**Problem**: USER_ADMIN could see users from all tenants in the impersonation modal.

**Solution**: Updated `/api/user-admin/impersonate` GET endpoint to:
- For USER_ADMIN: Only show users from their own tenant
- For USER_ADMIN: Only show SUB_USER and SUB_USER_READONLY roles
- For MASTER_USER: Show all users across all tenants
- Properly return tenantId and tenantName for each user

**Code Changes** (`app/api/user-admin/impersonate/route.ts`):
```typescript
// Build query filter
const whereClause: any = {};

if (isUserAdmin) {
  // USER_ADMIN: Only see users from their own tenant
  whereClause.tenantId = currentUser.tenantId;
  whereClause.role = {
    in: ['SUB_USER', 'SUB_USER_READONLY']
  };
}
// MASTER_USER sees all users (no filter)
```

### 2. Created Tenant Management System

#### API Endpoints

**`/api/user-admin/tenants`**
- **GET**: List all tenants
  - MASTER_USER: See all tenants
  - USER_ADMIN: See only their own tenant
  - Returns: tenant name, user count, creation date
  
- **POST**: Create new tenant (MASTER_USER only)
  - Validates unique tenant name
  - Returns created tenant details

**`/api/user-admin/tenants/[id]`**
- **GET**: View single tenant with user list
  - MASTER_USER: Any tenant
  - USER_ADMIN: Only their tenant
  - Returns: tenant details + list of users
  
- **PATCH**: Update tenant name
  - MASTER_USER: Any tenant
  - USER_ADMIN: Only their tenant
  - Validates unique name
  
- **DELETE**: Delete tenant (MASTER_USER only)
  - Prevents deletion if tenant has users
  - Cascades to custom roles automatically

#### UI Page (`/tenants`)

**Features**:
- Grid view of all tenants
- Shows user count per tenant
- Create, edit, delete tenants
- Search tenants by name
- Color-coded tenant cards

**Access Control**:
- MASTER_USER: Full access (create, edit, delete all tenants)
- USER_ADMIN: View and edit their own tenant only
- Other roles: Redirected to dashboard

**UI Components**:
- Tenant cards with stats
- Create tenant modal
- Edit tenant modal
- Delete confirmation with validation

### 3. Added Navigation Menu Item

Added "Tenant Management" to Settings dropdown:
- Location: Settings → Tenant Management
- Requires: `requiresUserAdmin: true`
- Available to: MASTER_USER and USER_ADMIN

## File Changes

### Created Files
1. `app/api/user-admin/tenants/route.ts` - Tenant list and creation
2. `app/api/user-admin/tenants/[id]/route.ts` - Single tenant operations
3. `app/tenants/page.tsx` - Tenant management UI

### Modified Files
1. `app/api/user-admin/impersonate/route.ts`
   - Fixed tenant filtering for USER_ADMIN
   - Added proper role filtering
   - Return tenantId and tenantName

2. `components/navigationConfig.tsx`
   - Added "Tenant Management" menu item

## Testing Checklist

### Impersonation
- [ ] USER_ADMIN only sees users from their tenant
- [ ] USER_ADMIN only sees SUB_USER and SUB_USER_READONLY
- [ ] MASTER_USER sees users from all tenants
- [ ] Tenant name displays in impersonation modal
- [ ] Impersonation works after tenant filtering

### Tenant Management
- [ ] MASTER_USER can view all tenants
- [ ] USER_ADMIN can view only their tenant
- [ ] MASTER_USER can create new tenants
- [ ] USER_ADMIN cannot create tenants
- [ ] Both can edit tenant name
- [ ] USER_ADMIN restricted to their tenant
- [ ] Cannot delete tenant with users
- [ ] MASTER_USER can delete empty tenants
- [ ] Tenant name uniqueness enforced

### UI/UX
- [ ] Tenant cards display correctly
- [ ] User count accurate
- [ ] Modals open and close
- [ ] Form validation works
- [ ] Error messages clear
- [ ] Success feedback shown

## Security Validations

1. **Tenant Isolation**:
   - USER_ADMIN cannot see other tenants
   - USER_ADMIN cannot edit other tenants
   - USER_ADMIN cannot impersonate users from other tenants

2. **Role Hierarchy**:
   - USER_ADMIN cannot impersonate other USER_ADMINs
   - USER_ADMIN cannot impersonate MASTER_USERs
   - Only MASTER_USER can create/delete tenants

3. **Data Integrity**:
   - Tenant names must be unique
   - Cannot delete tenants with users
   - All operations validate tenant access

## API Examples

### Get Tenants (USER_ADMIN)
```bash
GET /api/user-admin/tenants
```
Response (USER_ADMIN):
```json
{
  "tenants": [
    {
      "id": 1,
      "name": "Acme Corp",
      "userCount": 5,
      "customRoleCount": 0,
      "createdAt": "2025-12-01T00:00:00Z",
      "updatedAt": "2025-12-07T00:00:00Z"
    }
  ]
}
```

### Create Tenant (MASTER_USER only)
```bash
POST /api/user-admin/tenants
Content-Type: application/json

{
  "name": "New Company"
}
```

### Update Tenant
```bash
PATCH /api/user-admin/tenants/1
Content-Type: application/json

{
  "name": "Updated Name"
}
```

### Get Impersonation Users (USER_ADMIN)
```bash
GET /api/user-admin/impersonate
```
Response (USER_ADMIN):
```json
{
  "users": [
    {
      "id": 10,
      "email": "user@example.com",
      "name": "John Doe",
      "role": "SUB_USER",
      "tenantId": 1,
      "tenantName": "Acme Corp"
    }
  ],
  "currentUser": {
    "id": 5,
    "email": "admin@example.com",
    "role": "USER_ADMIN",
    "tenantId": 1
  }
}
```

## Known Limitations

1. **Custom Role Count**: Currently hardcoded to 0 (CustomRole table exists but not in TenantCountOutputType)
2. **Bulk Operations**: No bulk tenant creation or deletion
3. **Tenant Transfer**: No way to move users between tenants (would need separate feature)
4. **Audit Logging**: Tenant changes not logged (consider adding)

## Future Enhancements

1. **Tenant Settings**: Add tenant-specific configuration (timezone, currency, etc.)
2. **Tenant Billing**: Track subscription status per tenant
3. **User Transfer**: Move users between tenants
4. **Tenant Stats**: Dashboard with tenant analytics
5. **Tenant Groups**: Organize tenants into groups/categories
6. **Tenant Suspension**: Temporarily disable tenants without deletion
