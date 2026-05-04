# Company Onboarding Flow - Implementation Summary

## Overview
Implemented a comprehensive onboarding flow for new GigAssist users to configure their company profile, set up chart of accounts, and choose a subscription plan.

## Database Schema Changes

### CompanyProfile Model
New model to store business information:
- `businessName` - Company name (required)
- `businessNumber` - CRA business number
- `hstNumber` - HST/GST registration number
- Address fields: `addressLine1`, `addressLine2`, `city`, `province`, `postalCode`, `country`
- Contact: `phone`, `email`, `website`
- `fiscalYearEnd` - Fiscal year end date
- `incorporationDate` - Date of incorporation
- `businessType` - Sole Proprietorship, Partnership, Corporation, etc.
- `industryType` - Rideshare/Delivery, Transportation, etc.
- One-to-one relationship with User

### User Model Updates
- Added `onboardingCompleted` boolean field (default: false)
- Tracks whether user has completed initial setup

### Migration
- Applied migration: `20251207042803_add_company_profile_and_onboarding`

## Onboarding Page

### Location
`/app/onboarding/page.tsx`

### Features
Multi-step wizard with progress indicator:

#### Step 1: Company Information
- Business name (required)
- Business number and HST number
- Full address (line 1, line 2, city, province, postal code)
- Phone and email
- Business type dropdown (Sole Proprietorship, Partnership, Corporation, Other)
- Industry type dropdown (Rideshare/Delivery, Transportation, Courier, Other)
- Fiscal year end (default: December 31)

#### Step 2: Chart of Accounts
Two options:
1. **Initialize Canadian Chart of Accounts (Recommended)** - Creates 50+ standard accounts tailored for Canadian rideshare businesses
2. **Skip for Now** - User can create accounts manually later

Calls `/api/accounts/initialize` endpoint for default setup.

#### Step 3: Subscription Selection
Three tiers:
- **Free** - $0/mo (basic features, 1 vehicle)
- **Standard** - $15/mo (unlimited vehicles, advanced reports, tax summaries)
- **Pro** - $30/mo (multi-user, API access, priority support)

#### Step 4: Completion
Success message and auto-redirect to dashboard after 2 seconds.

### UI/UX
- Responsive design (mobile and desktop)
- Dark mode support via ThemeProvider
- Progress stepper with numbered circles
- Back/Continue navigation
- Loading states on all buttons
- Form validation (business name required)

## API Endpoints

### `/api/company/profile`

#### POST - Create or Update Company Profile
```typescript
{
  businessName: string (required)
  businessNumber?: string
  hstNumber?: string
  addressLine1?: string
  addressLine2?: string
  city?: string
  province?: string
  postalCode?: string
  phone?: string
  email?: string
  fiscalYearEnd?: string
  businessType?: string
  industryType?: string
}
```
- Creates new profile or updates existing
- Country automatically set to "Canada"
- Returns complete profile object

#### GET - Fetch Company Profile
- Returns user's company profile or 404 if not found

#### PUT - Update Company Profile
- Updates all company profile fields
- Includes `website` and `incorporationDate` fields

### `/api/user/onboarding-status`

#### GET - Check Onboarding Status
```typescript
{
  completed: boolean
}
```
- Returns whether user has completed onboarding
- Used for redirect logic

### `/api/user/complete-onboarding`

#### POST - Mark Onboarding Complete
```typescript
{
  subscriptionTier: 'free' | 'standard' | 'pro'
}
```
- Updates `user.onboardingCompleted` to true
- Sets `user.subscriptionTier`
- Returns updated user object

## Redirect Logic

### Dashboard Page
`/app/dashboard/page.tsx`
- On mount, checks `/api/user/onboarding-status`
- If `completed === false`, redirects to `/onboarding`
- Otherwise, loads dashboard normally

### Login Page
`/app/login/page.tsx`
- After successful authentication, checks onboarding status
- Redirects new users to `/onboarding`
- Existing users go to callback URL or dashboard

## Type Safety & Auth

### Session Handling
- Uses `auth()` from `@/lib/auth` (NextAuth v5 pattern)
- `session.user.id` is a string, converted to number for Prisma queries: `parseInt(session.user.id)`

### Type Assertions
- Used `(user as any)` temporarily for `onboardingCompleted` field due to Prisma client regeneration timing
- After Prisma generate, types should be fully available

## Technical Details

### Prisma Client
- Regenerated after schema changes with `npx prisma generate`
- Model: `companyProfile` (camelCase in Prisma client)
- Required Windows file lock workaround (killed Node processes before regenerating)

### Form State Management
- Local state with `useState` for each step
- Progressive disclosure (one step at a time)
- Maintains data across steps

### Error Handling
- Try-catch blocks on all API calls
- User-friendly error alerts
- Console error logging for debugging

## User Flow

1. **New User Registration**
   - User registers account
   - Redirected to `/login?registered=true`

2. **First Login**
   - User logs in
   - System checks onboarding status
   - Redirected to `/onboarding`

3. **Onboarding Wizard**
   - Step 1: Enter company information → Save to `/api/company/profile`
   - Step 2: Choose account setup → Initialize chart of accounts (optional)
   - Step 3: Select subscription plan → Update subscription tier
   - Step 4: Mark onboarding complete → Redirect to dashboard

4. **Subsequent Logins**
   - System checks onboarding status (completed = true)
   - User goes directly to dashboard

## Configuration & Settings

### Default Values
- Province: "ON" (Ontario)
- Country: "Canada"
- Fiscal year end: "December 31"
- Business type: "Sole Proprietorship"
- Industry type: "Rideshare / Delivery"
- Subscription tier: "free"

### Province Options
All Canadian provinces and territories: AB, BC, MB, NB, NL, NS, NT, NU, ON, PE, QC, SK, YT

## Future Enhancements

### Potential Improvements
1. **Email Verification** - Verify email before allowing onboarding completion
2. **Company Logo Upload** - Allow users to upload logo during onboarding
3. **CRA Integration** - Auto-verify business numbers with CRA API
4. **Import Existing Data** - Option to import past data during onboarding
5. **Skip Options** - Allow skipping steps and completing later
6. **Progress Persistence** - Save partial progress if user closes browser
7. **Stripe Integration** - Handle subscription creation/checkout for paid plans
8. **Onboarding Tutorial** - Interactive guide after completing setup
9. **Admin Override** - Allow admins to reset user onboarding status
10. **Profile Edit Page** - Dedicated settings page to update company profile

## Testing Checklist

- [ ] New user can complete full onboarding flow
- [ ] Company profile saves correctly
- [ ] Chart of accounts initializes (default option)
- [ ] Chart of accounts skips (skip option)
- [ ] Subscription tier updates correctly
- [ ] Dashboard redirect works after completion
- [ ] Returning users go directly to dashboard
- [ ] Dark mode works on all steps
- [ ] Mobile responsive design
- [ ] Form validation (business name required)
- [ ] Back button navigation works
- [ ] Loading states show during API calls
- [ ] Error messages display on failures

## Related Files

### New Files Created
- `/app/onboarding/page.tsx` - Main onboarding wizard
- `/app/api/company/profile/route.ts` - Company profile CRUD
- `/app/api/user/onboarding-status/route.ts` - Check onboarding status
- `/app/api/user/complete-onboarding/route.ts` - Mark onboarding complete

### Modified Files
- `/prisma/schema.prisma` - Added CompanyProfile model and User.onboardingCompleted
- `/app/dashboard/page.tsx` - Added onboarding check and redirect
- `/app/login/page.tsx` - Added onboarding redirect after login

### Existing Dependencies
- `/api/accounts/initialize` - Used for default chart of accounts setup
- `@/lib/auth` - Authentication utilities
- `@/lib/prisma` - Prisma client
- `@/components/theme/ThemeProvider` - Dark mode support

## Notes

### Windows File Locking
- Prisma client generation may show EPERM errors on Windows
- Solution: Kill Node processes before running `npx prisma generate`
- Error doesn't prevent successful generation

### Session ID Type
- `session.user.id` is a string (NextAuth v5 behavior)
- Must use `parseInt()` for Prisma queries that expect number

### Chart of Accounts
- Existing `/api/accounts/initialize` endpoint handles default setup
- Endpoint has "already initialized" protection
- Can be called with `force: true` to reset

### Production Considerations
- Add proper error tracking (Sentry, etc.)
- Implement analytics for funnel tracking
- Add email notifications for completed onboarding
- Consider multi-tenant isolation for company profiles
- Add audit logging for profile changes
