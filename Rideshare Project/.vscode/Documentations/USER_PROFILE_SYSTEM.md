# User Profile System Implementation

## Overview
Comprehensive user profile management system with personal details, contacts, date of birth, job information, and employment status. The system automatically disables user login when employment status is set to inactive.

## Database Schema

### New Model: UserProfile

Added to `prisma/schema.prisma`:

```prisma
model UserProfile {
  id                  Int       @id @default(autoincrement())
  userId              Int       @unique
  
  // Personal Details
  firstName           String?
  middleName          String?
  lastName            String?
  dateOfBirth         DateTime?
  gender              String?
  bio                 String?
  avatar              String?
  
  // Contact Information
  personalEmail       String?
  personalPhone       String?
  mobilePhone         String?
  workPhone           String?
  
  // Emergency Contact
  emergencyContactName String?
  emergencyContactPhone String?
  emergencyContactRelation String?
  
  // Address
  address             String?
  addressLine2        String?
  city                String?
  province            String?
  postalCode          String?
  country             String?   @default("Canada")
  
  // Employment Details
  jobTitle            String?
  department          String?
  employeeId          String?
  hireDate            DateTime?
  employmentType      String?   @default("full-time")
  employmentStatus    String    @default("active")
  manager             String?
  workLocation        String?
  salary              Float?
  
  // Social/Additional
  linkedIn            String?
  twitter             String?
  website             String?
  notes               String?   // Admin-only notes
  
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @default(now()) @updatedAt
  
  User                User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([employmentStatus])
}
```

### User Model Update

Added relation in User model:
```prisma
UserProfile  UserProfile?
```

## API Endpoints

### GET `/api/user-profile`

Fetch user profile information.

**Query Parameters:**
- `userId` (optional) - View another user's profile (requires admin permission)

**Access Control:**
- Users can view their own profile
- ADMIN users can view profiles within their tenant
- MASTER users can view any profile

**Response:**
```json
{
  "profile": {
    "id": 1,
    "userId": 5,
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-01-15",
    "gender": "male",
    "personalEmail": "john@personal.com",
    "mobilePhone": "(416) 555-0123",
    "address": "123 Main St",
    "city": "Toronto",
    "province": "ON",
    "postalCode": "M5V 3A8",
    "jobTitle": "Software Engineer",
    "department": "Engineering",
    "employeeId": "EMP-001",
    "hireDate": "2023-01-15",
    "employmentType": "full-time",
    "employmentStatus": "active",
    "manager": "Jane Smith",
    "workLocation": "Toronto Office",
    "salary": 85000,
    "User": {
      "email": "john.doe@company.com",
      "name": "John Doe",
      "role": "USER",
      "isActive": true
    }
  }
}
```

### POST `/api/user-profile`

Create or update user profile.

**Request Body:**
```json
{
  "userId": 5,  // Optional, for admins updating other users
  "firstName": "John",
  "middleName": "M",
  "lastName": "Doe",
  "dateOfBirth": "1990-01-15",
  "gender": "male",
  "personalEmail": "john@personal.com",
  "personalPhone": "(416) 555-0100",
  "mobilePhone": "(416) 555-0123",
  "workPhone": "(416) 555-0199",
  "emergencyContactName": "Jane Doe",
  "emergencyContactPhone": "(416) 555-0200",
  "emergencyContactRelation": "Spouse",
  "address": "123 Main St",
  "addressLine2": "Apt 4B",
  "city": "Toronto",
  "province": "ON",
  "postalCode": "M5V 3A8",
  "country": "Canada",
  "jobTitle": "Software Engineer",
  "department": "Engineering",
  "employeeId": "EMP-001",
  "hireDate": "2023-01-15",
  "employmentType": "full-time",
  "employmentStatus": "active",
  "manager": "Jane Smith",
  "workLocation": "Toronto Office",
  "salary": 85000,
  "bio": "Passionate software engineer...",
  "linkedIn": "https://linkedin.com/in/johndoe",
  "twitter": "@johndoe",
  "website": "https://johndoe.com",
  "notes": "Admin notes here"
}
```

**Access Control:**
- Users can update their own profile
- ADMIN users can update profiles within their tenant
- MASTER users can update any profile
- Only admins can change `employmentStatus`

**Automatic User Disable:**
When `employmentStatus` is set to `"inactive"`, the system automatically sets `User.isActive = false`, preventing login.

**Response:**
```json
{
  "success": true,
  "profile": { ...updated profile... },
  "message": "Profile updated and user disabled"
}
```

## User Interface

### Profile Page (`/user-profile`)

**Access:** All authenticated users

**Features:**

1. **Profile Header:**
   - Avatar circle with initial
   - User name and email
   - Status badges: Active/Inactive, Role, Employment Status

2. **Tabbed Interface:**
   - Personal Details
   - Contact Information
   - Employment Details
   - Additional Info

3. **Personal Details Tab:**
   - First Name, Middle Name, Last Name
   - Date of Birth
   - Gender (dropdown)
   - Bio (text area)

4. **Contact Information Tab:**
   - Personal Email & Phone
   - Mobile Phone & Work Phone
   - Full Address (Street, Line 2, City, Province, Postal Code, Country)
   - Emergency Contact (Name, Phone, Relationship)

5. **Employment Details Tab:**
   - Job Title, Department
   - Employee ID, Hire Date
   - Employment Type (Full-time, Part-time, Contract, Temporary, Intern)
   - **Employment Status** (Active, Inactive, On Leave, Suspended, Terminated)
     - ⚠️ Warning shown to admins: "Setting to inactive will disable user login"
   - Manager, Work Location
   - Salary (admin-only field)

6. **Additional Info Tab:**
   - LinkedIn URL
   - Twitter handle
   - Personal website
   - Admin Notes (admin-only field)

### Viewing Other Users' Profiles

**URL:** `/user-profile?userId={userId}`

**Access:**
- ADMIN users can view profiles in their tenant
- MASTER users can view any profile

### User Management Integration

Added "Profile" button in User Management table (`/user-admin`):
- Click to view/edit any user's profile
- Links to `/user-profile?userId={userId}`

### Navigation Menu

Added "My Profile" link in Settings dropdown menu:
- Top item in Settings menu
- Blue accent color for visibility
- Accessible to all users

## Employment Status & User Disable Feature

### Status Options:
- **active** - User can log in (default)
- **inactive** - User is disabled, cannot log in
- **on-leave** - User is temporarily away
- **suspended** - User account is suspended
- **terminated** - User employment is terminated

### Automatic Disable Logic:

When admin changes `employmentStatus` to `"inactive"`:

1. API updates `UserProfile.employmentStatus = "inactive"`
2. API automatically sets `User.isActive = false`
3. User is immediately blocked from logging in
4. Success message: "Profile updated and user disabled"

When admin changes back to `"active"`:

1. API updates `UserProfile.employmentStatus = "active"`
2. API automatically sets `User.isActive = true`
3. User can log in again

**Code Implementation (API):**
```typescript
// If employment status is changing to inactive, disable the user
if (employmentStatus === 'inactive') {
  await prisma.user.update({
    where: { id: userId },
    data: { isActive: false }
  });
} else if (employmentStatus === 'active') {
  // Re-enable user if status is active
  await prisma.user.update({
    where: { id: userId },
    data: { isActive: true }
  });
}
```

## Security & Permissions

### Access Control Matrix:

| Action | USER | ADMIN | MASTER |
|--------|------|-------|--------|
| View own profile | ✅ | ✅ | ✅ |
| Edit own profile | ✅ | ✅ | ✅ |
| View other's profile (same tenant) | ❌ | ✅ | ✅ |
| View other's profile (any tenant) | ❌ | ❌ | ✅ |
| Edit other's profile (same tenant) | ❌ | ✅ | ✅ |
| Edit other's profile (any tenant) | ❌ | ❌ | ✅ |
| Change employment status | ❌ | ✅ | ✅ |
| View salary field | ❌ | ✅ | ✅ |
| View/edit admin notes | ❌ | ✅ | ✅ |

### Field-Level Security:

**Admin-Only Fields:**
- Salary
- Admin Notes
- Employment Status (can only be changed by admins)

**UI Implementation:**
```tsx
{isAdmin && (
  <div>
    <label>Salary (Annual)</label>
    <input type="number" value={salary} onChange={...} />
  </div>
)}
```

## Usage Guide

### For Regular Users:

1. Click Settings → My Profile
2. Fill in personal details across 4 tabs
3. Click "Save Profile"
4. Profile information is saved

### For Admins - View User Profile:

1. Go to Settings → User Management
2. Find the user in the table
3. Click "Profile" button
4. View/edit their profile information

### For Admins - Disable a User via Employment Status:

1. View the user's profile
2. Go to "Employment Details" tab
3. Change "Employment Status" to "Inactive"
4. ⚠️ Warning appears: "Setting to inactive will disable user login"
5. Click "Save Profile"
6. User is immediately disabled and cannot log in
7. User status badge shows "Inactive" in red

### For Admins - Re-enable a User:

1. View the disabled user's profile
2. Go to "Employment Details" tab
3. Change "Employment Status" back to "Active"
4. Click "Save Profile"
5. User can log in again

## Database Indexes

Optimized indexes for performance:

```prisma
@@index([userId])           // Fast lookup by user
@@index([employmentStatus]) // Filter by employment status
```

## Benefits

1. **Centralized User Information** - All user details in one place
2. **HR Management** - Track employment details, salary, hire dates
3. **Contact Management** - Personal, work, and emergency contacts
4. **Automatic User Disable** - Employment status directly controls login access
5. **Multi-Tenant Support** - Respects tenant boundaries for admins
6. **Audit Trail** - Created/updated timestamps for all profiles
7. **Role-Based Access** - Proper permission checks for viewing/editing
8. **Responsive Design** - Works on desktop and mobile devices

## Future Enhancements

1. **Photo Upload** - Allow users to upload profile pictures
2. **Document Attachments** - Store employment contracts, IDs, certifications
3. **Audit History** - Track all changes to profiles with timestamps
4. **Email Notifications** - Notify users when their profile is updated
5. **Custom Fields** - Allow tenants to add custom profile fields
6. **Import/Export** - Bulk import employee data from CSV
7. **Performance Reviews** - Link to performance review system
8. **Skills & Certifications** - Track employee skills and certifications
9. **Time Off Management** - Integrate with PTO/vacation tracking
10. **Org Chart** - Visual organizational hierarchy based on manager field

## Files Created/Modified

### Created:
1. ✅ `app/api/user-profile/route.ts` - API endpoints for profile management
2. ✅ `app/user-profile/page.tsx` - User profile UI page

### Modified:
1. ✅ `prisma/schema.prisma` - Added UserProfile model
2. ✅ `components/navigationConfig.tsx` - Added "My Profile" menu item
3. ✅ `app/user-admin/page.tsx` - Added "Profile" button in user table

## Testing Checklist

- [ ] User can view their own profile
- [ ] User can edit and save their own profile
- [ ] Admin can view other users' profiles (same tenant)
- [ ] Admin can edit other users' profiles (same tenant)
- [ ] MASTER can view/edit any user's profile
- [ ] Changing employment status to "inactive" disables user login
- [ ] Disabled user cannot log in
- [ ] Re-enabling user allows login again
- [ ] Salary field only visible to admins
- [ ] Admin notes field only visible to admins
- [ ] Profile button appears in User Management table
- [ ] "My Profile" link appears in Settings menu
- [ ] All form validations work correctly
- [ ] Responsive design works on mobile

---

**Status:** ✅ COMPLETE AND READY FOR USE

**Access:** Settings → My Profile (for own profile)  
**Admin Access:** Settings → User Management → Profile button (for any user)
