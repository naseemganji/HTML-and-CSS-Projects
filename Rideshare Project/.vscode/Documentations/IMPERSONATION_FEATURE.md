# User Impersonation Feature

## Overview
Allows MASTER_USER (Platform Admin) and USER_ADMIN to view the application as other users in read-only mode. This is useful for support, debugging, and understanding user experiences.

## Implementation Details

### 1. Backend API
**Endpoint**: `/api/user-admin/impersonate`

#### GET - List Available Users
Returns users that the current user can impersonate:
- **MASTER_USER**: Can impersonate any user except themselves
- **USER_ADMIN**: Can impersonate only non-admin users in their tenant

Response:
```json
{
  "users": [
    {
      "id": "user-id",
      "email": "user@example.com",
      "name": "User Name",
      "role": "SUB_USER",
      "tenantId": "tenant-id",
      "tenantName": "Tenant Name"
    }
  ]
}
```

#### POST - Start Impersonation
Validates and initiates impersonation session.

Request:
```json
{
  "targetUserId": "user-id-to-impersonate"
}
```

Validation Rules:
- Cannot impersonate yourself
- USER_ADMIN cannot impersonate MASTER_USER or other USER_ADMINs
- USER_ADMIN can only impersonate users in their tenant
- Target user must exist

### 2. Authentication Integration

#### JWT Token Extension (`lib/auth.ts`)
The JWT token now stores impersonation state:
```typescript
token.impersonating = {
  userId: string,
  email: string,
  name: string,
  role: string
}
token.originalUserId = string  // Original user's ID
token.originalRole = string    // Original user's role
```

#### Session Update Trigger
Impersonation is applied via `session.update()`:
```typescript
await update({
  impersonating: {
    userId: targetUser.id,
    email: targetUser.email,
    name: targetUser.name,
    role: targetUser.role
  },
  originalUserId: currentUser.id,
  originalRole: currentUser.role
});
```

To stop impersonation:
```typescript
await update({
  stopImpersonation: true
});
```

### 3. User Interface

#### Impersonation Banner
- **Location**: Top of navigation
- **Color**: Orange gradient (bg-gradient-to-r from-orange-600 to-orange-500)
- **Visibility**: Always visible when impersonating
- **Content**:
  - Eye icon
  - Target user name, email, role
  - "(Read-only mode)" label
  - "Exit View Mode" button

#### "View as User" Button
- **Location**: Navigation bar, between Profile and Sign Out
- **Color**: Purple (text-purple-400)
- **Icon**: Eye icon (SVG)
- **Visibility**: Only shown to MASTER_USER and USER_ADMIN when not currently impersonating
- **Action**: Opens impersonation modal

#### Impersonation Modal
Features:
- **Search Bar**: Filter users by name or email
- **User List**: Shows all available users with:
  - Avatar (initials in colored circle)
  - Name and email
  - Role badge (color-coded)
  - Tenant name (for MASTER_USER viewing cross-tenant)
- **Loading State**: Spinner while fetching users
- **Empty State**: Messages for no users or no search results

### 4. TypeScript Types

Extended NextAuth types (`types/next-auth.d.ts`):
```typescript
interface Session {
  user: {
    // ... existing fields
    impersonating?: {
      userId: string;
      email: string;
      name: string;
      role: string;
    };
    originalUserId?: string;
    originalRole?: string;
  }
}

interface JWT {
  // ... existing fields
  impersonating?: {
    userId: string;
    email: string;
    name: string;
    role: string;
  };
  originalUserId?: string;
  originalRole?: string;
}
```

## Security Considerations

### Permission Checks
1. **USER_ADMIN Restrictions**:
   - Cannot impersonate MASTER_USER
   - Cannot impersonate other USER_ADMINs
   - Can only impersonate users in their own tenant

2. **Self-Impersonation Block**:
   - API rejects attempts to impersonate yourself

3. **Validation**:
   - Target user existence verified
   - Tenant access verified
   - Role hierarchy enforced

### Visual Indicators
- Orange banner always visible when impersonating
- "Read-only mode" label prominent
- Target user details clearly displayed
- Easy one-click exit

### Session Persistence
- Impersonation state stored in JWT token
- Survives page refreshes and navigation
- Cleared on explicit exit or sign-out

## Usage Flow

### Starting Impersonation
1. Admin clicks "View as User" button (purple eye icon)
2. Modal opens with list of available users
3. Admin searches/selects target user
4. API validates and creates impersonation session
5. Page reloads with new session
6. Orange banner appears at top

### During Impersonation
- Admin sees application exactly as target user sees it
- Orange banner always visible with target user info
- All navigation and features work as if admin is that user
- "(Read-only mode)" label reminds admin of viewing context

### Ending Impersonation
1. Admin clicks "Exit View Mode" button in orange banner
2. Session clears impersonation data
3. Page reloads
4. Admin returns to their original account

## Future Enhancements

### Audit Logging
Track impersonation events:
- Who impersonated whom
- When impersonation started/ended
- Actions taken during impersonation

### Read-Only Enforcement
Add middleware to block write operations:
```typescript
if (session.user.impersonating) {
  return NextResponse.json({ error: 'Read-only mode' }, { status: 403 });
}
```

### Time Limits
Auto-exit impersonation after:
- Configurable duration (e.g., 30 minutes)
- Period of inactivity

### Reason Tracking
Require admins to specify reason:
- Support ticket number
- Bug investigation
- User assistance

### User Notifications
Optionally notify users when admin views as them:
- Email notification
- In-app notification
- Audit trail visible to user

## Testing Checklist

### Basic Functionality
- [ ] MASTER_USER can open impersonation modal
- [ ] USER_ADMIN can open impersonation modal
- [ ] Modal lists correct users for each role
- [ ] Search filter works correctly
- [ ] Clicking user starts impersonation
- [ ] Banner appears with correct user info
- [ ] Exit button returns to original account

### Permission Validation
- [ ] USER_ADMIN cannot see MASTER_USER in list
- [ ] USER_ADMIN cannot see other USER_ADMINs
- [ ] USER_ADMIN only sees users from their tenant
- [ ] MASTER_USER sees users from all tenants
- [ ] Cannot impersonate self (not in list)

### Session Management
- [ ] Impersonation persists across page refreshes
- [ ] Impersonation persists across navigation
- [ ] Sign out clears impersonation
- [ ] Exit button clears impersonation
- [ ] No console errors during transitions

### UI/UX
- [ ] Banner is clearly visible (orange)
- [ ] Button is clearly visible (purple eye icon)
- [ ] Modal is responsive on mobile
- [ ] Search works on both name and email
- [ ] Loading states show appropriately
- [ ] Empty states show appropriate messages

### Edge Cases
- [ ] Works with users having no name
- [ ] Works with long email addresses
- [ ] Works with many users (scrolling)
- [ ] Works when no users available
- [ ] Handles API errors gracefully

## Files Modified

1. **app/api/user-admin/impersonate/route.ts** (new)
   - GET and POST endpoints for impersonation

2. **lib/auth.ts**
   - Extended jwt callback for impersonation
   - Extended session callback to pass impersonation data

3. **types/next-auth.d.ts**
   - Added impersonation fields to Session and JWT interfaces

4. **components/Navigation.tsx**
   - Added impersonation state variables
   - Added fetchImpersonationUsers, handleStartImpersonation, handleStopImpersonation
   - Added canImpersonate and isImpersonating computed values
   - Added impersonation banner (orange)
   - Added "View as User" button (purple eye icon)
   - Added impersonation modal with search

## Notes

- Impersonation uses JWT tokens for persistence across page loads
- Session.update() triggers JWT callback with trigger='update'
- Window reload ensures clean state after starting/stopping
- Modal search is client-side (filters already-fetched users)
- Role badges match existing role badge styling throughout the app
- Banner design ensures high visibility without being intrusive
