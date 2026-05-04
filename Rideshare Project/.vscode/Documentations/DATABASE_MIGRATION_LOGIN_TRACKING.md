# Database Migration: Add Login Activity Tracking and Account Lockout

## Add to prisma/schema.prisma

Add this new model BEFORE the User model:

```prisma
model LoginAttempt {
  id              Int       @id @default(autoincrement())
  userId          Int?
  email           String
  ipAddress       String?
  userAgent       String?
  success         Boolean   @default(false)
  failureReason   String?
  createdAt       DateTime  @default(now())
  User            User?     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([email])
  @@index([userId])
  @@index([createdAt])
  @@index([success])
}
```

## Add to User model (around line 414):

Add these fields to the User model:

```prisma
  failedLoginAttempts  Int       @default(0)
  lockedUntil          DateTime?
  lastLoginAt          DateTime?
  lastLoginIp          String?
```

And add this relation:

```prisma
  LoginAttempt         LoginAttempt[]
```

## Full Updated User Model Section

Replace lines 394-432 with:

```prisma
model User {
  id                                                          Int                  @id @default(autoincrement())
  email                                                       String               @unique
  password                                                    String
  name                                                        String?
  phone                                                       String?
  subscriptionTier                                            String               @default("free")
  createdAt                                                   DateTime             @default(now())
  updatedAt                                                   DateTime             @default(now()) @updatedAt
  role                                                        Role                 @default(USER)
  allowPostedExpenseEdits                                     Boolean              @default(true)
  allowPostedIncomeEdits                                      Boolean              @default(true)
  tenantId                                                    Int
  onboardingCompleted                                         Boolean              @default(false)
  requirePasswordChange                                       Boolean              @default(false)
  customRoleId                                                Int?
  isActive                                                    Boolean              @default(true)
  failedLoginAttempts                                         Int                  @default(0)
  lockedUntil                                                 DateTime?
  lastLoginAt                                                 DateTime?
  lastLoginIp                                                 String?
  Account                                                     Account[]
  Asset                                                       Asset[]
  CompanyProfile                                              CompanyProfile?
  DepreciationEntry                                           DepreciationEntry[]
  Expense                                                     Expense[]
  Income                                                      Income[]
  LedgerEntry                                                 LedgerEntry[]
  LoginAttempt                                                LoginAttempt[]
  Merchant                                                    Merchant[]
  SupportAccessGrant_SupportAccessGrant_grantedByUserIdToUser SupportAccessGrant[] @relation("SupportAccessGrant_grantedByUserIdToUser")
  SupportAccessGrant_SupportAccessGrant_supportUserIdToUser   SupportAccessGrant[] @relation("SupportAccessGrant_supportUserIdToUser")
  TaxYear                                                     TaxYear[]
  CustomRole                                                  CustomRole?          @relation(fields: [customRoleId], references: [id])
  Tenant                                                      Tenant               @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  Vehicle                                                     Vehicle[]

  @@index([customRoleId])
  @@index([tenantId])
}
```

## Migration Commands

```bash
# 1. Generate migration
npx prisma migrate dev --name add_login_tracking_and_lockout

# 2. Apply to database
npx prisma generate
```

## What This Adds

### LoginAttempt Model
- Tracks every login attempt (success and failure)
- Records IP address and user agent
- Links to User (if found)
- Includes failure reason
- Indexed for fast queries

### User Model Updates
- `failedLoginAttempts` - Counter for failed attempts
- `lockedUntil` - Timestamp when account unlocks
- `lastLoginAt` - Last successful login time
- `lastLoginIp` - IP address of last login

## Benefits

✅ Persistent login tracking (survives server restart)
✅ Admin can view login history
✅ Admin can see locked accounts
✅ Admin can manually unlock accounts
✅ Audit trail for security investigations
✅ Identify brute force attacks
✅ Compliance with security regulations
