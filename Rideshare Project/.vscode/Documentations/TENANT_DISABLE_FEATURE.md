# Tenant Enable/Disable Feature

## Overview
MASTER administrators can now disable/enable entire tenants from the Platform menu, preventing all users of that tenant from accessing the platform.

## Implementation Summary

### 1. Database Schema
- **File**: `prisma/schema.prisma`
- **Changes**: Added `isActive Boolean @default(true)` field to Tenant model with index
- **Migration**: Applied via `npx prisma db push`

```prisma
model Tenant {
  id         Int      @id @default(autoincrement())
  name       String   @unique
  isActive   Boolean  @default(true)  // NEW FIELD
  ...
  @@index([isActive])
}
```

### 2. API Endpoint
- **File**: `app/api/user-admin/tenants/[id]/route.ts`
- **Method**: PATCH
- **Access**: MASTER role only
- **Endpoint**: `/api/user-admin/tenants/{tenantId}`

**Request Body** (for status toggle):
```json
{
  "isActive": true/false
}
```

**Response**:
```json
{
  "success": true,
  "Tenant": {
    "id": 1,
    "name": "GigAssist",
    "isActive": true,
    ...
  }
}
```

**Security Features**:
- ✅ Only MASTER role can toggle tenant status
- ✅ Prevents MASTER from disabling their own tenant (self-lockout protection)
- ✅ Confirmation dialog warns about blocking all tenant users

### 3. Authentication Guard
- **File**: `lib/auth.ts`
- **Function**: `authorize()` callback
- **Behavior**: Blocks login attempts from users whose tenant is disabled

```typescript
// Check if tenant is active
if (!user.tenant?.isActive) {
  console.log(`Login blocked: Tenant "${user.tenant?.name}" is disabled`)
  return null
}
```

### 4. User Interface
- **File**: `app/tenants/page.tsx`
- **Location**: Platform → Tenant Management (MASTER users only)

**Features**:
- ✅ Status badge showing "Active" (green) or "Disabled" (red)
- ✅ Toggle button visible only to MASTER users
- ✅ Confirmation dialog with user count warning
- ✅ Icons: ✓ (enable) or ⊗ (disable)

**Toggle Function**:
```typescript
const handleToggleTenantStatus = async (tenant: Tenant) => {
  const warningMessage = tenant.isActive 
    ? `DISABLE "${tenant.name}"? This will prevent ALL ${tenant.userCount} user(s) from accessing the platform.`
    : `Enable "${tenant.name}"? Users will be able to log in again.`
  
  if (!confirm(warningMessage)) return
  
  // Call PATCH API endpoint
}
```

### 5. GET API Updates
- **File**: `app/api/user-admin/tenants/route.ts`
- **Change**: Added `isActive` field to tenant list response

## Usage

### As MASTER Admin:

1. **Navigate to Platform Menu**:
   - Click Platform → Tenant Management

2. **View Tenant Status**:
   - Green "Active" badge = Tenant enabled
   - Red "Disabled" badge = Tenant disabled

3. **Disable a Tenant**:
   - Click the orange ⊗ button on the tenant card
   - Confirm the warning dialog
   - All users of that tenant are immediately blocked from logging in

4. **Enable a Tenant**:
   - Click the green ✓ button on a disabled tenant
   - Confirm the dialog
   - Users can now log in again

### What Happens When a Tenant is Disabled:

1. **Existing Sessions**: 
   - Currently logged-in users remain logged in until session expires
   - Future implementation could add middleware to kick out active sessions

2. **New Login Attempts**:
   - All login attempts from that tenant's users are blocked
   - Users see "Invalid credentials" error (generic for security)
   - Auth log shows: "Login blocked: Tenant [name] is disabled"

3. **Re-enabling**:
   - Simply toggle the status back to Active
   - Users can immediately log in again

## Security Considerations

### Self-Lockout Prevention
MASTER users cannot disable their own tenant:
```typescript
if (currentUser?.tenantId === tenantId) {
  return NextResponse.json({ 
    error: 'Cannot disable your own tenant' 
  }, { status: 400 });
}
```

### Role-Based Access Control
- Only MASTER role can see toggle button in UI
- API endpoint verifies MASTER role on backend
- ADMIN users cannot disable any tenant (including their own)

### Audit Trail
Console logs capture disable events:
```
Login blocked: Tenant "Example Corp" is disabled
```

Future enhancement: Add audit logging to database for compliance.

## Testing Checklist

- [x] Database schema updated with isActive field
- [x] Migration applied successfully
- [x] API endpoint created and tested
- [x] UI toggle button visible only to MASTER users
- [x] Status badge shows correct state
- [x] Login blocked for disabled tenant users
- [x] Self-lockout prevention working
- [x] Confirmation dialog displays correctly
- [x] Re-enabling tenant works properly

## Future Enhancements

1. **Active Session Management**:
   - Add middleware to check tenant status on each request
   - Automatically log out users when tenant is disabled

2. **Audit Logging**:
   - Create TenantStatusLog table
   - Track who disabled/enabled, when, and why
   - Display audit history in UI

3. **Email Notifications**:
   - Notify tenant admins when their tenant is disabled
   - Send re-enable notification

4. **Scheduled Disable**:
   - Allow MASTER to schedule disable at specific date/time
   - Useful for non-payment scenarios

5. **Disable Reason**:
   - Add optional reason field when disabling
   - Show reason to users attempting to log in

6. **Bulk Operations**:
   - Disable multiple tenants at once
   - Useful for platform maintenance

## API Reference

### Toggle Tenant Status
```
PATCH /api/user-admin/tenants/{tenantId}
Authorization: MASTER role required
Content-Type: application/json

Body:
{
  "isActive": boolean
}

Response (200 OK):
{
  "success": true,
  "Tenant": { ...tenant object with updated isActive }
}

Errors:
- 401: Unauthorized (not logged in)
- 403: Forbidden (not MASTER role)
- 400: Cannot disable your own tenant
- 404: Tenant not found
- 500: Internal server error
```

### List Tenants (includes isActive)
```
GET /api/user-admin/tenants
Authorization: MASTER or ADMIN role required

Response (200 OK):
{
  "tenants": [
    {
      "id": 1,
      "name": "GigAssist",
      "isActive": true,
      "email": "...",
      "userCount": 5,
      ...
    }
  ]
}
```

## Files Modified

1. ✅ `prisma/schema.prisma` - Added isActive field
2. ✅ `app/api/user-admin/tenants/route.ts` - Include isActive in GET response
3. ✅ `app/api/user-admin/tenants/[id]/route.ts` - Added PATCH handler for toggle
4. ✅ `app/tenants/page.tsx` - Added toggle function and UI controls
5. ✅ `lib/auth.ts` - Added tenant isActive check in authorize callback

## Deployment Notes

- No additional environment variables required
- Database migration already applied
- No breaking changes to existing functionality
- Backward compatible (existing tenants default to isActive=true)

---

**Feature Status**: ✅ COMPLETE AND READY FOR USE

**Access**: Platform → Tenant Management (MASTER role only)
