# DriveGo - Dual Platform Architecture

## Overview
DriveGo uses a **hybrid approach** with two applications sharing the same backend:

1. **Web App** (`/drivego`) - Next.js - Admin, reporting, tax features
2. **Mobile App** (`/drivego-mobile`) - React Native/Expo - GPS tracking, quick expense entry

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    PostgreSQL Database                   │
│  (User, Vehicle, Trip, Expense, Asset, Income, etc.)   │
└───────────────────┬─────────────────────────────────────┘
                    │
                    │
        ┌───────────┴──────────┐
        │                      │
┌───────▼────────┐    ┌────────▼─────────┐
│   Web App API  │    │  Mobile App      │
│   (Next.js)    │◄───┤  (React Native)  │
│                │    │                  │
│  - REST API    │    │  - HTTP Client   │
│  - Auth        │    │  - Async Storage │
│  - Business    │    │  - GPS Tracking  │
│    Logic       │    │  - Camera        │
└────────────────┘    └──────────────────┘
```

## Platform Responsibilities

### Web App (Desktop/Tablet Focus)
**Primary Users**: Accountants, admin, detailed analysis

**Features**:
- ✅ User authentication & registration
- ✅ Dashboard with detailed charts
- ✅ Vehicle management (CRUD)
- ✅ Manual trip entry & bulk editing
- ✅ Expense management with bulk upload
- ✅ Fixed asset tracking & depreciation
- ✅ General ledger & double-entry bookkeeping
- ✅ Income tracking & categorization
- ✅ Advanced reports (P&L, Balance Sheet, Tax Summary)
- ✅ Tax export (T2125, GST/HST, tax packets)
- ✅ Partner API management
- ✅ Subscription & payment management
- ✅ Admin dashboard

**Tech Stack**:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM
- NextAuth.js
- PostgreSQL

### Mobile App (iOS/Android)
**Primary Users**: Drivers on the go

**Features**:
- 📱 Quick login & biometric auth
- 📱 **GPS auto-tracking** (background location)
- 📱 Start/stop trip with one tap
- 📱 Camera receipt capture with OCR
- 📱 Quick expense entry
- 📱 Voice notes for trips
- 📱 Push notifications (trip reminders, tax deadlines)
- 📱 Offline mode (sync when online)
- 📱 Quick stats dashboard
- 📱 Mileage summary
- 📱 Today's earnings

**Tech Stack**:
- React Native (Expo)
- TypeScript
- Native Base / React Native Paper
- Expo Location, Camera, AsyncStorage
- Axios for API calls

## API Endpoints (Shared Backend)

### Authentication
- `POST /api/register` - Create account
- `POST /api/auth/[...nextauth]` - Login (NextAuth)
- `POST /api/auth/mobile-login` - Mobile login (returns JWT)

### Trips
- `GET /api/trips` - List trips
- `POST /api/trips` - Create trip
- `PUT /api/trips/[id]` - Update trip
- `DELETE /api/trips/[id]` - Delete trip
- `POST /api/trips/start` - Start GPS tracking (mobile)
- `POST /api/trips/stop` - Stop GPS tracking (mobile)

### Expenses
- `GET /api/expenses` - List expenses
- `POST /api/expenses` - Create expense
- `PUT /api/expenses/[id]` - Update expense
- `DELETE /api/expenses/[id]` - Delete expense
- `POST /api/expenses/upload-receipt` - Upload receipt image

### Vehicles
- `GET /api/vehicles` - List vehicles
- `POST /api/vehicles` - Create vehicle
- `PUT /api/vehicles/[id]` - Update vehicle
- `DELETE /api/vehicles/[id]` - Delete vehicle

### Dashboard
- `GET /api/dashboard/stats` - Summary stats
- `GET /api/dashboard/recent` - Recent activity

### Income (Web only)
- `GET /api/income` - List income entries
- `POST /api/income` - Create income entry

### Assets (Web only)
- `GET /api/assets` - List assets
- `POST /api/assets` - Create asset
- `GET /api/depreciation` - Depreciation schedule

### Reports (Web only)
- `GET /api/reports/tax-summary?year=YYYY`
- `GET /api/export/t2125?year=YYYY`
- `GET /api/export/gst-hst?period=YYYY-QQ`

## Development Workflow

### Phase 1: Foundation ✅
- [x] Web app setup
- [x] Database schema (10 tables)
- [x] Authentication
- [ ] **Next**: Mobile app setup

### Phase 2: Core Features
- [ ] Build API routes
- [ ] Web: Vehicle & trip management
- [ ] Mobile: GPS tracking UI
- [ ] Mobile: Camera receipt capture

### Phase 3: Sync & Offline
- [ ] Mobile offline storage
- [ ] Background sync
- [ ] Conflict resolution

### Phase 4: Advanced Features
- [ ] Web: Accounting & assets
- [ ] Web: Reports & exports
- [ ] Mobile: Push notifications

### Phase 5: Launch
- [ ] Testing (web + mobile)
- [ ] App Store submission
- [ ] Deployment

## Database Sharing Strategy

Both apps use the **same PostgreSQL database** via the Next.js API:

- **Web app**: Direct Prisma access (server-side)
- **Mobile app**: HTTP requests to web API endpoints

**Authentication**:
- Web: NextAuth.js session cookies
- Mobile: JWT tokens (stored in AsyncStorage)

## File Structure

```
Rideshare Project/
├── drivego/                    # Web App (Next.js)
│   ├── app/
│   │   ├── api/               # REST API (used by both apps)
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── register/
│   │   ├── trips/
│   │   ├── expenses/
│   │   ├── assets/
│   │   └── reports/
│   ├── components/
│   ├── lib/
│   ├── prisma/
│   └── types/
│
├── drivego-mobile/            # Mobile App (React Native)
│   ├── app/                   # Expo Router
│   │   ├── (auth)/
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── (tabs)/
│   │   │   ├── trips.tsx
│   │   │   ├── expenses.tsx
│   │   │   └── dashboard.tsx
│   ├── components/
│   ├── services/
│   │   ├── api.ts            # API client
│   │   ├── gps.ts            # GPS tracking
│   │   └── storage.ts        # AsyncStorage
│   └── types/
│
└── Planning and Preps/        # Documentation
```

## Next Steps

1. **Complete web authentication** ✅
2. **Initialize mobile app** with Expo
3. **Build shared API endpoints**
4. **Implement GPS tracking** in mobile
5. **Test end-to-end** (mobile → API → database → web)

---

**Benefits of This Approach**:
- ✅ One database, one source of truth
- ✅ Reuse API logic
- ✅ Best UX for each platform
- ✅ Easier to maintain
- ✅ Can launch web first, mobile later
