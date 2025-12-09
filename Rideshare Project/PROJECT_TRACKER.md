# DriveGo — Project Tracker

## Overview
This document tracks the development progress of DriveGo, breaking down implementation into manageable, sequential steps. Each step includes status updates, completed deliverables, and implementation details.

---

## 📊 Project Status Overview

### ✅ Completed Phases (8/11)

**Phase 1: Foundation & Setup** ✅ COMPLETED
- Step 1.1: Initialize Project Structure ✅
- Step 1.2: Database Schema Design ✅
- Step 1.3: Authentication Setup ✅

**Phase 2: Core Features — Mileage Tracking** ✅ COMPLETED
- Step 2.1: Vehicle Management ✅
- Step 2.2: Manual Trip Entry ✅
- Step 2.3: Automatic GPS Mileage Tracking ✅

**Phase 3: Expense Tracking** ✅ COMPLETED
- Step 3.1: Manual Expense Entry ✅
- Step 3.2: Receipt Upload ✅
- Step 3.3: OCR Integration ✅

**Phase 4: Accounting & Asset Management** ✅ COMPLETED
- Step 4.1: Asset Management ✅
- Step 4.2: Depreciation & CCA Calculator ✅
- Step 4.3: General Ledger ✅
- Step 4.4: Income Tracking ✅

**Phase 5: Reports & Analytics** ✅ COMPLETED
- Step 5.1: Dashboard Overview ✅
- Step 5.2: Reports Generator ✅
- Step 5.3: Tax Summary ✅

**Phase 6: Tax Export Integration** ✅ COMPLETED
- Step 6.1: T2125 Export ✅
- Step 6.2: GST/HST Export ✅
- Step 6.3: Tax Packet Download ✅

**Phase 7: Financial Statements & Analytics** ✅ COMPLETED
- Step 7.1: Income Statement & P&L Refresh ✅
- Step 7.2: Balance Sheet Snapshot ✅
- Step 7.3: Financial KPI Dashboard ✅

**Phase 8: Subscription & Payments** ✅ COMPLETED
- Step 8.1: Subscription Tiers ✅
- Step 8.2: Payment Integration ✅ (Configuration Required)

### 🟡 In Progress Phases (2/11)

**Phase 9: Admin & Partner Features** 🟡 IN PROGRESS
- Step 9.0: Company Onboarding Flow ✅
- Step 9.1: Admin Dashboard ✅
- Step 9.2: Partner API 🚧 Not Started (Optional)
- Step 9.3: Double-Entry Posting Hooks ✅
- Step 9.4: Multi-Tenant User Management System ✅
- Step 9.5: Plan Configurator & Pricing Designer ✅
- Step 9.6: RBAC & Access Rights Enhancement ✅

**Phase 10: Polish & Launch** 🟡 IN PROGRESS
- Step 10.1: Mobile Responsiveness ✅ 100% Complete
- Step 10.2: Security & Vulnerability Assessment 🚧 Not Started
- Step 10.3: Testing & QA 🚧 Not Started
- Step 10.4: Performance Optimization 🚧 Not Started
- Step 10.5: Deployment 🚧 Not Started

### 🚧 Not Started Phases (1/11)

**Phase 11: Native Mobile Apps - iOS & Android** 🚧 NOT STARTED (Future)
- Step 11.1: React Native Project Setup 🚧
- Step 11.2: Authentication & User Management 🚧
- Step 11.3: Trip Tracking with GPS 🚧
- Step 11.4: Expense Management & Receipt Scanning 🚧
- Step 11.5: Income & Vehicle Management 🚧
- Step 11.6: Reports & Analytics Dashboard 🚧
- Step 11.7: Settings & Profile Management 🚧
- Step 11.8: Push Notifications & Background Services 🚧
- Step 11.9: Testing, Optimization & Deployment 🚧

---

## 📈 Progress Summary

**Overall Completion**: ~82% (9/11 phases complete)

**Web Application Status**: 
- ✅ Core Features: 100% Complete
- ✅ Financial Management: 100% Complete
- ✅ Tax Integration: 100% Complete
- ✅ Admin Features: 95% Complete (Partner API optional)
- 🟡 Polish & Testing: 30% Complete

**Mobile Application Status**: 
- 🚧 Not Started (Phase 11)

**Next Priorities**:
1. Complete Mobile Responsiveness (Phase 10.1)
2. Implement Testing & QA (Phase 10.2)
3. Production Deployment (Phase 10.3)
4. Optional: Partner API (Phase 9.2)
5. Future: Plan Mobile App Development (Phase 11)

---

## Tech Stack Recommendation
- **Frontend**: Next.js 14 (React) with TypeScript, Tailwind CSS
- **Backend**: Next.js API routes + Prisma ORM
- **Database**: PostgreSQL (local development + production)
- **Authentication**: NextAuth.js
- **File Storage**: AWS S3 or Cloudflare R2
- **Deployment**: Vercel (frontend) + Railway/Render (database)

---

## Phase 1: Foundation & Setup (Week 1)

### Step 1.1: Initialize Project Structure ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created Next.js 14 project with TypeScript and Tailwind CSS
- Set up folder structure: `/app`, `/components`, `/lib`, `/prisma`, `/types`
- Installed dependencies: prisma, @prisma/client, next-auth@beta, bcryptjs, zod
- Configured `.env` file with PostgreSQL connection string
- Created Prisma client utility in `lib/prisma.ts`

**Deliverables**:
- ✅ Next.js project initialized at `/drivego`
- ✅ package.json with all required dependencies
- ✅ tsconfig.json configured
- ✅ Complete folder structure

### Step 1.2: Database Schema Design ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created comprehensive Prisma schema with **10 tables**:
  - **Core Tables**: User, Vehicle, Trip, Expense, TaxYear
  - **Accounting Tables**: Asset, DepreciationEntry, LedgerEntry, Income, Account
- Configured PostgreSQL as database provider
- Changed all IDs from text (CUID) to integer with auto-increment
- Added proper relations, indexes, and constraints
- Implemented CCA (Capital Cost Allowance) tracking for Canadian tax compliance
- Added double-entry bookkeeping support with ledger entries
- Applied migrations successfully

**Deliverables**:
- ✅ Complete Prisma schema with 10 models
- ✅ PostgreSQL database created (`drivego`)
- ✅ Migration files applied
- ✅ Prisma Client generated

**Enhanced Schema Details**:
```
Core Business Models:
- User: Authentication, profile, subscription tier
- Vehicle: Vehicle details, starting odometer
- Trip: Mileage tracking (business/personal), GPS data
- Expense: Expense tracking, receipt URLs, tax deductible flag
- TaxYear: Annual tax filing status and data

Accounting & Asset Management:
- Asset: Fixed assets with CCA class, rate, useful life, disposal tracking
- DepreciationEntry: Yearly depreciation/CCA calculations per asset
- LedgerEntry: Double-entry bookkeeping (debit/credit)
- Income: Revenue tracking (Uber, Lyft, etc.) with GST/HST collected
- Account: Chart of accounts (hierarchical structure)
```

### Step 1.3: Authentication Setup ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Configured NextAuth.js v5 with credentials provider
- Created authentication utilities (`lib/auth.ts`)
- Built login page with form validation
- Built registration page with password confirmation
- Created protected dashboard page
- Implemented user registration API with Zod validation
- Added TypeScript definitions for NextAuth
- Password hashing with bcrypt (12 rounds)

**Deliverables**:
- ✅ `/app/login/page.tsx` - Sign in form
- ✅ `/app/register/page.tsx` - User registration form
- ✅ `/app/dashboard/page.tsx` - Protected dashboard
- ✅ `/app/api/auth/[...nextauth]/route.ts` - NextAuth handler
- ✅ `/app/api/register/route.ts` - Registration API
- ✅ `/components/AuthProvider.tsx` - Auth helper
- ✅ `/lib/auth.ts` - NextAuth configuration
- ✅ `/types/next-auth.d.ts` - TypeScript definitions

**Testing**:
- Server running at http://localhost:3000
- Registration: http://localhost:3000/register
- Login: http://localhost:3000/login
- Dashboard: http://localhost:3000/dashboard (requires login)

---

## Platform Decision: Web App + PWA (Option A)

**Approach**: Build responsive web application with Progressive Web App capabilities
- Works on desktop, tablet, and mobile browsers
- GPS tracking via browser Geolocation API
- Camera access for receipt capture
- Installable as PWA (acts like native app)
- Offline support with service workers
- Push notifications
- One codebase for all platforms

**Why this approach**:
- ✅ Faster time to market (2-3 weeks vs 2-3 months)
- ✅ Lower development cost (one codebase)
- ✅ No app store fees or approval delays
- ✅ Instant updates for all users
- ✅ 90% of features work great in browser
- ✅ Can add native mobile app later if needed

---

## Phase 2: Core Features — Mileage Tracking (Week 2)

### Step 2.1: Vehicle Management ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created vehicle management system with full CRUD operations
- Built vehicle list page showing all user vehicles with details
- Created add vehicle form with make, model, year, license plate, starting odometer
- Implemented edit and delete functionality
- Created API routes: POST /api/vehicles, GET /api/vehicles, PUT /api/vehicles/[id], DELETE /api/vehicles/[id]
- Added proper authorization checks (users can only manage their own vehicles)

**Deliverables**:
- ✅ `/app/vehicles/page.tsx` - Vehicle list with edit/delete
- ✅ `/app/vehicles/add/page.tsx` - Add vehicle form
- ✅ `/app/api/vehicles/route.ts` - GET (list) and POST (create)
- ✅ `/app/api/vehicles/[id]/route.ts` - GET (single), PUT (update), DELETE

### Step 2.2: Manual Trip Entry ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Built comprehensive trip logging system with full CRUD operations
- Created trip entry form with date/time, start/end location, distance, vehicle selection, purpose (business/personal), notes
- Implemented trip list page with filters (date range, vehicle, purpose)
- Added edit trip functionality with pre-populated form
- Added delete trip functionality with confirmation
- Created trip summary showing total business vs personal miles
- **ENHANCED**: Added distance auto-calculate feature using OpenStreetMap Nominatim geocoding
- **ENHANCED**: Implemented Haversine distance calculation from addresses
- Fixed distance input precision to accept 2 decimal places (0.01 step)
- All API routes properly handle Next.js 15 async params

**Deliverables***:
- ✅ `/app/trips/page.tsx` - Trip list with filters and summary
- ✅ `/app/trips/add/page.tsx` - Add trip form with auto-calculate distance
- ✅ `/app/trips/edit/[id]/page.tsx` - Edit trip page
- ✅ `/app/api/trips/route.ts` - GET (list) and POST (create)
- ✅ `/app/api/trips/[id]/route.ts` - GET, PUT, DELETE with async params support

### Step 2.3: Automatic GPS Mileage Tracking ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Implemented full GPS-based automatic tracking using browser Geolocation API
- Created start/stop/pause/resume trip controls
- Real-time location tracking with navigator.geolocation.watchPosition()
- Auto-calculate distance using Haversine formula between GPS coordinates
- Store GPS waypoints (locationHistory) for audit trail
- Display live speed (m/s → km/h conversion)
- Display live duration (HH:MM:SS format)
- Idle detection (5-minute timeout, 5 km/h movement threshold)
- **ENHANCED**: localStorage persistence for trip recovery
- **ENHANCED**: Auto-save active trip every 5 seconds
- **ENHANCED**: Trip recovery prompt on page reload if active trip exists
- Location permission handling with error messages
- Business/Personal purpose selection
- Auto-save to database on trip completion

**Deliverables**:
- ✅ `/app/trips/track/page.tsx` - Full GPS tracking interface
- ✅ Haversine distance calculation utility
- ✅ Location permission handling with error states
- ✅ localStorage trip persistence (key: 'drivego_active_trip')
- ✅ Trip recovery system with user confirmation

---

## Phase 3: Expense Tracking (Week 3)

### Step 3.1: Manual Expense Entry ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created comprehensive expense tracking system with full CRUD operations
- Built expense entry form with date, category dropdown (Fuel, Maintenance, Insurance, etc.), amount, tax amount, fuel quantity, merchant, description
- **ENHANCED**: Added tax deductible checkbox for business expense tracking
- Implemented expense list page with advanced filters:
  * Search by description, merchant name, or category
  * Date range filter (start/end dates)
  * Category filter tabs
  * Tax deductible status filter (all/deductible/not deductible)
- Created comprehensive summary dashboard showing:
  * Total expenses
  * Total tax deductible amount
  * Expense count
  * Category breakdown with totals
  * Tax and fuel quantity totals
- Added edit and delete functionality with confirmation
- **ENHANCED**: Included OCR receipt scanning with Tesseract.js
  * Auto-extract amount, merchant, date, tax, fuel quantity from receipt images
  * Camera capture and file upload support
  * Progress indicator during scanning
  * Auto-populate form fields from extracted data
- All API routes support filters and return summary statistics
- Merchant auto-complete with case-insensitive matching

**Deliverables**:
- ✅ `/app/expenses/page.tsx` - Expense list with filters, search, summary stats, edit/delete
- ✅ `/app/expenses/add/page.tsx` - Add expense form with OCR receipt scanning and tax deductible checkbox
- ✅ `/app/expenses/edit/[id]/page.tsx` - Edit expense page with pre-populated form
- ✅ `/app/api/expenses/route.ts` - GET (with filters) and POST with summary statistics
- ✅ `/app/api/expenses/[id]/route.ts` - GET, PUT, DELETE with proper authorization
- ✅ Expense categories configuration (10 categories)
- ✅ Merchant linking and auto-creation

### Step 3.2: Receipt Upload ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Implemented receipt image upload with camera capture and file upload
- Built file upload component with camera and gallery options
- Image preview functionality before submission
- Store receipts as base64 in database (linked to expenses via receiptImage field)
- Receipt viewing from expense list (click to open in new tab)
- Integrated seamlessly with add expense form

**Deliverables**:
- ✅ File upload component in add expense form
- ✅ Camera capture support (mobile-friendly)
- ✅ Receipt preview and display
- ✅ Receipt storage in database

**Note**: Currently using base64 database storage. Cloud storage (S3/R2) can be added later for production scalability if needed.

### Step 3.3: OCR Integration ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Integrated Tesseract.js for client-side OCR processing
- Advanced receipt data extraction with intelligent parsing:
  * Amount extraction with priority-based matching (balance, total sales, grand total, etc.)
  * Merchant name detection using known brands and header heuristics
  * Date extraction from multiple date formats
  * Tax amount extraction (GST/HST/Sales Tax)
  * Fuel quantity extraction (liters/gallons)
  * Category auto-detection based on keywords
- Auto-populate expense form from OCR data with manual correction capability
- Progress indicator during scanning (0-100%)
- Robust error handling and fallback to manual entry
- Enhanced merchant extraction with:
  * Known brand pattern matching (Shell, Chevron, H-E-B, Starbucks, etc.)
  * Font size/positioning heuristics for merchant headers
  * Address and phone number filtering

**Deliverables**:
- ✅ Tesseract.js integration in add expense form
- ✅ Advanced receipt parsing logic with extractReceiptData()
- ✅ Auto-fill expense form functionality
- ✅ Scanning progress indicator
- ✅ Manual correction always available

---

## Phase 4: Accounting & Asset Management (NEW - Week 4)

### Step 4.1: Asset Management ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created comprehensive fixed asset tracking system
- Built add asset form with type, name, acquisition date, cost, salvage value, useful life, CCA class/rate
- Implemented asset list showing current book value, UCC, accumulated depreciation, accumulated CCA
- Added asset disposal tracking (disposal date, proceeds, gain/loss calculation)
- Created API routes for full CRUD operations
- Support for multiple depreciation methods (declining-balance, straight-line)
- Integrated with Canadian CCA system for tax compliance
- Proper separation of book value (accounting) and UCC (tax)

**Deliverables**:
- ✅ `/app/assets/page.tsx` - Asset list with book/tax values
- ✅ `/app/assets/add/page.tsx` - Add asset form
- ✅ `/app/api/assets/route.ts` - GET and POST
- ✅ `/app/api/assets/[id]/route.ts` - GET, PUT, DELETE
- ✅ Asset schema with CCA fields in Prisma

### Step 4.2: Depreciation & CCA Calculator ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Implemented automatic yearly depreciation entry generation
- Built support for multiple depreciation methods:
  * Declining-balance (CCA) method with proper rate application
  * Straight-line depreciation with constant annual amounts
- Implemented Canadian half-year rule (50% depreciation in first year for both methods)
- Created depreciation schedule view with comprehensive table
- Tracks both opening/closing book value (accounting) and opening/closing UCC (tax)
- **ENHANCED**: Multi-year schedule generation (1-50 years at once)
- **ENHANCED**: Stops generating when asset fully depreciated (closingBalance ≤ salvageValue)
- **ENHANCED**: Separate totals for book depreciation and CCA amounts
- Dual button interface: "Generate Current Year" and "Generate Schedule"
- Fixed schema field alignment (openingBookValue, bookDepreciation, closingBookValue, ccaAmount)

**Deliverables**:
- ✅ `/app/depreciation/page.tsx` - Depreciation schedule with asset selector and multi-year generation
- ✅ `/lib/ccaCalculator.ts` - Core calculation utilities with both methods
- ✅ `/app/api/depreciation/generate/route.ts` - Single year generation
- ✅ `/app/api/depreciation/generate-schedule/route.ts` - Multi-year generation endpoint
- ✅ Half-year rule implementation in both methods
- ✅ Comprehensive UI showing year, book values, CCA, and half-year indicator

### Step 4.3: General Ledger ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Enhanced Prisma schema with `journalNumber` field and bidirectional Account-LedgerEntry relation
- Created automatic Chart of Accounts initialization (52 standard Canadian accounts)
- Accounts automatically created on first access - no manual setup required
- Built Chart of Accounts management page with hierarchical display
- Implemented full CRUD API routes for accounts with proper authorization
- Created General Ledger page with double-entry bookkeeping
- Automatic journal numbering (JE000001 format)
- Double-entry validation ensuring debits = credits
- Account balance updates on entry creation
- Filtering by date range, account, and reconciliation status
- Grouped display by journal number
- Summary dashboard showing balance verification
- **ENHANCED**: Built Trial Balance report with comprehensive balance verification
- Trial Balance calculates debit/credit balances per account based on normal balance conventions
- Groups accounts by type (Asset, Liability, Equity, Revenue, Expense)
- Verifies that total debits equal total credits
- Displays balance status with visual indicators (✓ Balanced / ✗ Unbalanced)
- Includes CSV export functionality with complete balance data

**Deliverables**:
- ✅ `/lib/ensureChartOfAccounts.ts` - Auto-initialization utility
- ✅ `/app/accounts/page.tsx` - Chart of Accounts UI
- ✅ `/app/api/accounts/route.ts` - Accounts GET and POST
- ✅ `/app/api/accounts/[id]/route.ts` - Account GET, PUT, DELETE
- ✅ `/app/api/accounts/initialize/route.ts` - Manual initialization endpoint
- ✅ `/app/ledger/page.tsx` - General Ledger UI with journal entries
- ✅ `/app/api/ledger/route.ts` - Ledger GET and POST with validation
- ✅ `/app/api/reports/trial-balance/route.ts` - Trial Balance calculations
- ✅ `/app/reports/trial-balance/page.tsx` - Trial Balance UI with export
- ✅ Enhanced Prisma schema with proper relations and indexes
- ✅ Type-safe implementation with zero compilation errors

**Key Features**:
- **Auto-Initialization**: Chart of Accounts created automatically on first use
- **Canadian Standards**: 52 pre-configured accounts for rideshare business
- **Double-Entry**: Automatic validation that debits equal credits
- **Journal Numbering**: Sequential journal entry numbering
- **Balance Tracking**: Real-time account balance updates
- **Hierarchical Accounts**: Parent-child account relationships
- **Trial Balance**: Comprehensive balance verification report with type grouping
- **Type Safety**: Full TypeScript coverage with proper types

### Step 4.4: Income Tracking ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created comprehensive income recording system for rideshare platforms
- Built income entry form with detailed breakdown:
  * Gross earnings (fares, tips, bonuses, tolls, misc income)
  * Platform fees (service, booking, regulatory, airport, split, other fees)
  * GST/HST tracking (collected from riders/platform, paid to platforms for ITC)
  * Trip statistics (trip count, distance, online hours)
  * Period tracking (for quarterly/summary entries)
- Implemented income list page with advanced features:
  * Date range filters (start/end dates)
  * Search by description
  * Source filter tabs (Uber, Lyft, DoorDash, etc.)
  * Platform management (add/edit/remove custom platforms)
  * Comprehensive summary dashboard showing:
    - Gross earnings, total fees, net earnings
    - GST/HST collected and paid (for ITC claims)
    - Total trips, distance, online hours
    - Breakdown by platform source
- Added edit and delete functionality with confirmation
- **ENHANCED**: API returns summary statistics with bySource breakdown
- **ENHANCED**: Net earnings auto-calculated (gross - fees)
- **ENHANCED**: All async params properly handled for Next.js 15
- Full CRUD with proper authorization checks

**Deliverables**:
- ✅ `/app/income/page.tsx` - Income list with filters, search, platform management, edit/delete
- ✅ `/app/income/add/page.tsx` - Comprehensive income entry form
- ✅ `/app/income/edit/[id]/page.tsx` - Edit income page with pre-populated data
- ✅ `/app/api/income/route.ts` - GET (with filters/summary) and POST
- ✅ `/app/api/income/[id]/route.ts` - GET, PUT, DELETE with async params
- ✅ Income summary dashboard with detailed breakdown
- ✅ GST/HST collection and ITC tracking reports

---

## Phase 5: Reports & Analytics (Week 5)

### Step 5.1: Dashboard Overview ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created comprehensive dashboard statistics API endpoint
- Built enhanced dashboard page with data visualization
- Integrated Recharts library for interactive charts
- Implemented current month summary with 4 key metrics cards:
  * Income (with entry count)
  * Expenses (with entry count)
  * Net Profit (calculated, color-coded)
  * Business Mileage (with trip count)
- Added Year-to-Date summary section with 5 aggregated metrics
- Created Monthly Mileage Trend line chart (last 6 months)
- Created Expenses by Category pie chart (YTD breakdown)
- Added Quick Actions section with 4 prominent action buttons
- Built Recent Activity section with:
  * Recent Trips (top 5 with vehicle, date, distance, purpose)
  * Recent Expenses (top 5 with category, merchant, amount)
- Implemented loading states and error handling
- Applied gradient backgrounds and modern UI styling
- All data fetched via parallel API calls for performance

**Deliverables**:
- ✅ `/app/api/dashboard/stats/route.ts` - Comprehensive stats API with parallel data fetching
- ✅ `/app/dashboard/page.tsx` - Enhanced client-side dashboard with charts and real-time data
- ✅ Recharts integration (LineChart, PieChart, responsive containers)
- ✅ Current month + YTD statistics
- ✅ Visual data representation with color-coded metrics
- ✅ Recent activity feeds with "View All" links

### Step 5.2: Reports Generator ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created comprehensive reports system with three main report types
- Built mileage report API endpoint with date range and vehicle filters
- Built expense report API endpoint with category breakdown and tax deductible summary
- Built P&L (Profit & Loss) report API endpoint with income vs expenses analysis
- Implemented tabbed reports UI with three tabs:
  * Mileage Report: Shows all trips with distance breakdown (business/personal)
  * Expense Report: Shows expenses with category breakdown and tax deductibility
  * Profit & Loss: Shows comprehensive income, expenses, and profitability metrics
- Added advanced filtering:
  * Date range filters (start/end date) for all reports
  * Vehicle filter for mileage report
  * Category filter for expense report
- Implemented CSV export functionality for all three report types
- Created visual data representation with progress bars and summary cards
- Added GST/HST summary section in P&L report
- Included tax deduction summary showing profit before and after deductions

**Deliverables**:
- ✅ `/app/api/reports/mileage/route.ts` - Mileage report API with vehicle filtering
- ✅ `/app/api/reports/expenses/route.ts` - Expense report API with category breakdown
- ✅ `/app/api/reports/pl/route.ts` - P&L report API with comprehensive income/expense analysis
- ✅ `/app/reports/page.tsx` - Enhanced reports UI with tabs, filters, and visual analytics
- ✅ CSV export for mileage, expenses, and P&L reports
- ✅ Summary cards showing key metrics for each report type
- ✅ Visual progress bars for category/source breakdowns
- ✅ Responsive table views with detailed transaction data

**Features**:
- **Mileage Report**: Total trips, total/business/personal distance, filterable by vehicle and date
- **Expense Report**: Total expenses, tax amounts, deductible vs non-deductible breakdown
- **P&L Report**: Income by source, expenses by category, net profit, profit margin, GST/HST summary
- **Export Options**: CSV download for all report types with formatted data
- **Visual Analytics**: Color-coded cards, progress bars, responsive tables

### Step 5.3: Tax Summary ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created comprehensive tax year summary API endpoint aggregating all tax-relevant data
- Built tax summary page with year selector and detailed breakdown:
  * Overview cards showing gross income, net income, total expenses, net profit
  * Business mileage summary with breakdown by vehicle
  * Deductible expenses by category with GST/HST amounts
  * Vehicle expenses subset calculation
  * Asset & CCA summary section
- Implemented T2125 (Statement of Business Activities) preview with pre-filled values:
  * Part 1: Business identification and fiscal period
  * Part 3: Gross business income
  * Part 4: Expenses breakdown by CRA line numbers (8521, 8690, 8710, etc.)
  * Capital Cost Allowance (CCA) calculation
  * Net income (loss) calculation
- Created GST/HST calculator with comprehensive tracking:
  * GST/HST collected from rideshare income
  * Input Tax Credits (ITCs) from business expenses
  * ITCs from platform fees paid
  * Net tax owing or refund calculation
  * Quarterly breakdown for filing periods
- All calculations properly map to CRA forms and line numbers
- Type-safe implementation with proper Prisma schema field usage

**Deliverables**:
- ✅ `/app/api/tax-summary/route.ts` - Tax summary API with year filtering
- ✅ `/app/tax-summary/page.tsx` - Comprehensive tax summary UI
- ✅ T2125 preview with all expense categories and CRA line numbers
- ✅ GST/HST calculator with quarterly breakdown
- ✅ Business mileage and vehicle expense calculations
- ✅ Navigation link added for easy access

---

## Phase 6: Tax Export Integration (Week 6) ✅ COMPLETED

### Step 6.1: T2125 Export ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created T2125 CSV export endpoint with comprehensive CRA line mapping
- Mapped all income/expense categories to proper T2125 line numbers
- Included Part 3 (Income), Part 4 (Expenses), Part 5 (Net Income), Part 6 (CCA)
- Added business mileage summary section
- Implemented year parameter filtering
- CSV format with line numbers and descriptions for direct CRA portal import
- Export button integrated in Tax Summary page

**Deliverables**:
- ✅ `/app/api/export/t2125/route.ts` - T2125 CSV export endpoint
- ✅ Export button in Tax Summary page (green gradient)
- ✅ CRA line number mapping:
  * Line 8230: Gross business income
  * Lines 8521-9270: Various expense categories
  * Line 9936: Capital Cost Allowance
  * Line 9946: Net income (loss)

### Step 6.2: GST/HST Export ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Implemented GST/HST return export supporting both quarterly and annual periods
- Period parameter parsing (YYYY for annual, YYYY-QQ for quarterly)
- Comprehensive GST/HST calculations:
  * Line 101: Total sales and other revenue
  * Line 103: GST/HST collected
  * Line 106-108: Input Tax Credits (ITCs) from expenses and platform fees
  * Line 109: Net tax owing/refund
- Detailed transaction listings (income and expense breakdowns)
- CSV format for easy import to CRA My Business Account
- Multiple export buttons in Tax Summary: Annual, Q1, Q2, Q3, Q4

**Deliverables**:
- ✅ `/app/api/export/gst-hst/route.ts` - GST/HST CSV export endpoint
- ✅ Quarterly period support (Q1-Q4)
- ✅ Annual period support
- ✅ Export buttons in GST/HST section (5 buttons: Annual + quarterly)
- ✅ Complete Line 101-109 calculations
- ✅ Status indication (owing vs refund)

### Step 6.3: Tax Packet Download ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created comprehensive tax packet ZIP generator using archiver library
- Bundles complete tax filing package including:
  * README.txt with CRA filing instructions and document checklist
  * T2125 CSV for Statement of Business Activities
  * GST/HST Return CSV (annual)
  * GST/HST quarterly returns (Q1, Q2, Q3, Q4 CSVs)
  * All receipt images from expenses (organized by date and category)
- Intelligent receipt image extraction from base64 database storage
- Comprehensive README with:
  * Filing instructions and deadlines
  * Summary of income, expenses, CCA
  * CRA contact information
  * Line-by-line filing guidance
- Professional ZIP filename: `DriveGo_Tax_Packet_YYYY_BusinessName.zip`
- Prominent download button in Tax Summary page (blue-purple gradient)

**Deliverables**:
- ✅ `/app/api/export/tax-packet/route.ts` - Complete tax packet ZIP endpoint
- ✅ archiver library integration for ZIP creation
- ✅ README.txt generator with CRA instructions
- ✅ T2125 CSV inclusion
- ✅ GST/HST annual + quarterly CSV inclusion
- ✅ Receipt image extraction and packaging
- ✅ Download button in Tax Summary page header
- ✅ Year parameter support

**Phase 6 Summary**:
Phase 6 is now **100% complete** with all three export features implemented. Users can now:
1. Export T2125 CSV for CRA business income filing
2. Export GST/HST returns for quarterly or annual periods
3. Download complete tax packet ZIP with all documents and instructions ready for CRA submission

---

## Phase 7: Financial Statements & Analytics (Week 7) ✅ COMPLETED

### Step 7.1: Income Statement & P&L Refresh ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Introduced a shared income statement builder (`lib/reports/incomeStatement.ts`) that consolidates revenue, direct costs, operating expenses, depreciation, and GST/HST balances with consistent calculations.
- Added `/app/api/reports/income-statement/route.ts` and upgraded the legacy `/app/api/reports/pl/route.ts` to use the new builder for backward compatibility.
- Updated `/app/reports/page.tsx` with a dedicated "Income Statement (P&L)" tab that now mirrors traditional financial statements with structured tables, revenue source analysis, direct cost breakdowns, operating expense drilldowns, and GST/HST summary cards.
- Enhanced CSV export logic so the download reflects the new statement sections and totals (gross revenue, platform fees, cost of sales, operating income, EBITDA, net income, GST balances).

**Deliverables**:
- ✅ `lib/reports/incomeStatement.ts` — shared builder + helpers
- ✅ `/app/api/reports/income-statement/route.ts` — new endpoint
- ✅ `/app/api/reports/pl/route.ts` — refactored to use shared builder
- ✅ `/app/reports/page.tsx` — new Income Statement tab + UI overhaul and CSV export updates

### Step 7.2: Balance Sheet Snapshot ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created `/app/api/reports/balance-sheet/route.ts` to aggregate simplified assets, liabilities, and equity using asset book values, loan balances, lease obligations, GST/HST liabilities or recoverables, and retained earnings derived from net income.
- Added Balance Sheet tab in `/app/reports/page.tsx` with dual-column layout (Assets vs. Liabilities & Equity), section subtotals, and automatic balance validation messaging.
- Provides at-a-glance totals for cash, GST receivables/payables, vehicle value, accumulated depreciation, loans, lease obligations, and retained earnings.

**Deliverables**:
- ✅ `/app/api/reports/balance-sheet/route.ts` — balance sheet API
- ✅ `/app/reports/page.tsx` — Balance Sheet tab with responsive layout and advisory banner if totals fall out of balance

### Step 7.3: Financial KPI Dashboard ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Implemented `/app/api/reports/financial-kpis/route.ts` that aggregates revenue, expenses, trip counts, and asset values for any date range to compute metrics such as gross margin, operating margin, burn rate, average daily revenue, revenue per trip, expense ratio, asset turnover, run rate, and net take-home percentage.
- Added a Financial KPIs tab in `/app/reports/page.tsx` featuring summary cards and a responsive metric grid with contextual descriptions and trend highlighting.

**Deliverables**:
- ✅ `/app/api/reports/financial-kpis/route.ts`
- ✅ `/app/reports/page.tsx` — Financial KPI tab with metric cards

---

## Phase 8: Subscription & Payments (Week 8) ✅ COMPLETED

### Step 8.1: Subscription Tiers ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Created three-tier subscription system:
  * **Free**: 10 expenses/month, basic mileage tracking, manual entry only
  * **Standard ($99/year)**: Unlimited expenses, GPS tracking, CSV export, tax exports
  * **Pro ($199/year)**: Everything + OCR scanning, asset management, financial reports
- Built comprehensive pricing page at `/pricing` with:
  * Feature comparison table
  * Monthly/yearly billing toggle
  * Upgrade call-to-actions
  * FAQ section
- Implemented subscription utility library (`lib/subscription.ts`):
  * Feature access checking functions
  * Usage limit enforcement (canAddExpense, canAddAsset)
  * Tier comparison helpers
  * Upgrade message generators
- Added expense limit enforcement in API:
  * Free tier limited to 10 expenses per month
  * Standard/Pro have unlimited expenses
  * Returns clear error message when limit reached
- Created subscription settings page at `/settings/subscription`:
  * Current plan display with feature list
  * Usage statistics (expenses, assets this month)
  * Plan comparison with upgrade buttons
  * Subscription cancellation flow
- Added subscription links to Navigation menu:
  * "Subscription" link to settings
  * "Upgrade Plan" link to pricing page

**Deliverables**:
- ✅ `/app/pricing/page.tsx` - Pricing and feature comparison
- ✅ `/lib/subscription.ts` - Feature gating utility functions
- ✅ `/app/settings/subscription/page.tsx` - Subscription management
- ✅ `/app/api/subscription/usage/route.ts` - Usage statistics endpoint
- ✅ `/app/api/subscription/cancel/route.ts` - Cancellation endpoint
- ✅ Modified `/app/api/expenses/route.ts` - Enforces limits
- ✅ Navigation menu updated with subscription links

### Step 8.2: Payment Integration ✅ COMPLETED
**Status**: ✅ **COMPLETED** (Configuration Required)

**What was done**:
- Installed Stripe SDK (`stripe` and `@stripe/stripe-js`)
- Created Stripe configuration file (`lib/stripe.ts`):
  * Server-side Stripe instance
  * Price ID mapping for Standard/Pro monthly/yearly
  * Checkout session creation helper
  * Billing portal session helper
- Implemented Stripe checkout endpoint (`/api/stripe/checkout`):
  * Accepts tier (standard/pro) and interval (month/year) parameters
  * Creates Stripe checkout session
  * Redirects to Stripe hosted checkout page
  * Handles success/cancel redirects
- Built comprehensive webhook handler (`/api/stripe/webhooks`):
  * Handles checkout.session.completed
  * Handles customer.subscription.updated
  * Handles customer.subscription.deleted
  * Handles invoice.payment_succeeded
  * Handles invoice.payment_failed
  * Updates user subscription tier in database
- Created comprehensive setup guide (`STRIPE_SETUP.md`):
  * Step-by-step Stripe account configuration
  * Product/price creation instructions
  * Webhook setup guide
  * Local testing with Stripe CLI
  * Production deployment checklist
- Updated `.env.example` with Stripe variables

**Deliverables**:
- ✅ Stripe SDK installed
- ✅ `/lib/stripe.ts` - Stripe configuration
- ✅ `/app/api/stripe/checkout/route.ts` - Checkout endpoint
- ✅ `/app/api/stripe/webhooks/route.ts` - Webhook handler
- ✅ `STRIPE_SETUP.md` - Complete setup guide
- ✅ `.env.example` - Updated with Stripe keys

**Note**: Stripe requires dashboard configuration to be fully functional:
1. Create Stripe account
2. Create products and prices
3. Add API keys and price IDs to `.env`
4. Configure webhook endpoint
5. Test with Stripe CLI or test cards

See `STRIPE_SETUP.md` for detailed instructions.

---

## Phase 9: Admin & Partner Features (Week 9)

**Status**: 🟡 In progress (posting hooks underway)

### Step 9.0: Company Onboarding Flow ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Implemented comprehensive onboarding wizard for new users
- Created CompanyProfile model to store business information
- Built multi-step wizard with progress indicator:
  * **Step 1: Company Information** - Business name, HST#, address, phone, business type, industry
  * **Step 2: Chart of Accounts** - Initialize default Canadian accounts or skip
  * **Step 3: Subscription Selection** - Choose Free, Standard, or Pro plan
  * **Step 4: Completion** - Success message and auto-redirect
- Added redirect logic to guide new users through onboarding on first login
- Dashboard checks onboarding status and redirects incomplete users
- Mobile responsive with dark mode support
- Form validation and loading states throughout
- Provincial dropdowns for all Canadian provinces/territories

**Deliverables**:
- ✅ `/app/onboarding/page.tsx` - Multi-step onboarding wizard
- ✅ `/app/api/company/profile/route.ts` - Company profile CRUD (POST/GET/PUT)
- ✅ `/app/api/user/onboarding-status/route.ts` - Check onboarding completion status
- ✅ `/app/api/user/complete-onboarding/route.ts` - Mark onboarding complete and set subscription
- ✅ CompanyProfile model in Prisma schema with business details
- ✅ User.onboardingCompleted field to track setup status
- ✅ Migration: `20251207042803_add_company_profile_and_onboarding`
- ✅ Dashboard redirect logic for incomplete onboarding
- ✅ Login redirect logic to route new users to onboarding
- ✅ `/drivego/ONBOARDING_IMPLEMENTATION.md` - Full technical documentation

**Company Profile Fields**:
- Business name, business number, HST/GST number
- Full address (line 1, line 2, city, province, postal code, country)
- Contact information (phone, email, website)
- Fiscal year end, incorporation date
- Business type (Sole Proprietorship, Partnership, Corporation, Other)
- Industry type (Rideshare/Delivery, Transportation, Courier, Other)

**User Flow**:
1. New user registers → redirected to login
2. User logs in → system checks onboarding status
3. If not completed → redirected to `/onboarding`
4. Complete 3-step wizard → marked as complete → redirected to dashboard
5. Subsequent logins → go directly to dashboard

### Step 9.1: Admin Dashboard ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Built comprehensive admin dashboard with full user management capabilities
- Created user list page with search by email/name and filter by subscription tier
- Implemented analytics cards showing total users, MRR, ARR, new users this month, churn rate, and user distribution by tier
- Added user creation functionality (create new users with email, name, password, role, and subscription tier)
- Implemented subscription tier changes (upgrade/downgrade users between free/standard/pro)
- Implemented role changes (change user roles for access control)
- Built RBAC system with role-based access control functions
- Created admin API routes with proper authentication and authorization checks
- Added pagination for user list (20 users per page)
- Integrated admin link in navigation (visible only to admins)
- **ENHANCED**: Added tenant column to user list showing organization affiliation

**Deliverables**:
- ✅ `/app/admin/page.tsx` - Full admin dashboard with analytics, user management, and tenant column
- ✅ `/app/api/admin/check-role/route.ts` - Role verification endpoint
- ✅ `/app/api/admin/stats/route.ts` - Analytics and statistics endpoint
- ✅ `/app/api/admin/users/route.ts` - User list and creation endpoint (includes tenant data)
- ✅ `/app/api/admin/users/[id]/tier/route.ts` - Subscription tier update endpoint
- ✅ `/app/api/admin/users/[id]/role/route.ts` - Role update endpoint
- ✅ `/lib/rbac.ts` - Role-based access control utilities
- ✅ Navigation integration with requiresAdmin flag
- ✅ Dark mode support throughout admin dashboard

**Features**:
- **Analytics Dashboard**: Total users, MRR, ARR, new users this month, churn rate, user distribution
- **User Search**: Search by email or name
- **Filters**: Filter by subscription tier (all/free/standard/pro)
- **Tenant Display**: Shows which organization each user belongs to
- **User Management**: View user details, activity counts (expenses, income, trips, vehicles)
- **User Management**: View user details, activity counts (expenses, income, trips, vehicles)
- **Subscription Management**: Change user subscription tiers
- **Role Management**: Assign/change user roles for access control
- **User Creation**: Create new users directly from admin panel
- **Pagination**: Handle large user lists efficiently
- **Access Control**: Only MASTER_USER and USER_ADMIN roles can access

**Testing**:
- Access admin dashboard: http://localhost:3000/admin (requires admin role)
- Test with MASTER_USER or USER_ADMIN role
- Verify non-admin users are redirected to dashboard

### Step 9.2: Partner API
**Prompt**: "Implement partner API:
- OAuth2 token endpoint
- GET /partners/users/{id}/tax-packet
- Webhook registration
- API documentation page
- Rate limiting"

**Deliverables**:
- OAuth2 implementation
- Partner API routes
- API docs page

### Step 9.3: Double-Entry Posting Hooks ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Posting service maps all business events to balanced double-entry journal entries
- Expense posting: Debit expense account + Debit GST paid (ITC) + Credit cash/bank
- Income posting: Debit cash + Credit revenue + Credit tips + Debit platform fees + GST/HST tracking
- Asset acquisition posting: Debit asset cost + Debit GST paid + Credit cash + Credit loan payable (if financed)
- Depreciation posting: Debit depreciation expense + Credit accumulated depreciation
- Asset disposal posting: Debit cash (proceeds) + Debit accumulated depreciation + Credit asset cost + Gain/Loss account
- All POST/PUT/DELETE routes for expenses, income, and assets use transaction-wrapped posting
- Idempotent updates: deleteLedgerEntries removes prior entries before re-posting
- Backfill script created to post historical records
- GST/HST reconciliation API and UI page
- Test suite validates debits = credits for all transaction types

**Deliverables**:
- ✅ `/lib/posting.ts` - Posting service with all business event handlers
- ✅ `postExpenseEntries()` - Maps expenses to journal entries
- ✅ `postIncomeEntries()` - Maps income to journal entries with platform fee splits
- ✅ `postAssetEntries()` - Maps asset acquisitions to journal entries
- ✅ `postDepreciationEntries()` - Creates depreciation journal entries
- ✅ `postAssetDisposalEntries()` - Handles asset disposals with gain/loss calculation
- ✅ `deleteLedgerEntries()` - Removes existing entries before re-posting (idempotent)
- ✅ `/scripts/backfill-ledger.ts` - Backfills historical data with ledger entries
- ✅ `/app/api/reports/gst-reconciliation/route.ts` - GST/HST reconciliation API
- ✅ `/app/reports/gst-reconciliation/page.tsx` - GST/HST reconciliation UI
- ✅ `/__tests__/posting.test.ts` - Test suite validating balanced entries
- ✅ `/lib/accounts/standardAccounts.ts` - Added Gain/Loss on Asset Disposal account (4300)
- ✅ All expense/income/asset APIs use `ensureAccountsAndRun()` wrapper
- ✅ Transaction safety: All posting happens within Prisma transactions
- ✅ Audit trail: All ledger entries have referenceType and referenceId

**GST/HST Reconciliation Features**:
- Tracks GST collected from riders and platforms
- Tracks GST paid on platform fees
- Calculates Input Tax Credits (ITC) from expenses and asset purchases
- Shows net GST position (payable or refundable)
- Displays all GST-related ledger entries
- Year-based filtering for reporting periods

**Testing**:
- Run tests: `npm test posting.test.ts`
- Run backfill: `npx ts-node --compiler-options '{"module":"CommonJS"}' scripts/backfill-ledger.ts`
- Access GST reconciliation: `/reports/gst-reconciliation`

### Step 9.4: Multi-Tenant User Management System ✅ COMPLETED
**Status**: ✅ **COMPLETED**

**What was done**:
- Implemented comprehensive tenant-based user management system with role hierarchy
- Created custom role management with granular permission control
- Built tenant management for multi-organization support
- Implemented user impersonation for support and admin purposes
- Added inline user editing with role changes and enable/disable functionality
- Integrated all management screens with consistent navigation and theming

**Role Hierarchy**:
- **MASTER_USER** (Platform Admin): Full system access, manage all tenants
- **USER_ADMIN** (Organization Admin): Manage users within their tenant
- **SUB_USER** (Standard User): Full access to their data
- **SUB_USER_READONLY** (View-Only User): Read-only access
- **Custom Roles**: Organization-specific roles with configurable permissions

**Deliverables**:
- ✅ `/app/user-admin/page.tsx` - User management with inline editing
- ✅ `/app/roles/page.tsx` - Custom role management with permission matrix
- ✅ `/app/tenants/page.tsx` - Tenant management (create, edit, delete)
- ✅ `/app/api/user-admin/users/route.ts` - User CRUD with tenant scoping
- ✅ `/app/api/user-admin/users/[id]/route.ts` - User updates (role, status)
- ✅ `/app/api/user-admin/roles/route.ts` - Custom role CRUD
- ✅ `/app/api/user-admin/roles/[id]/route.ts` - Role updates and deletion
- ✅ `/app/api/user-admin/tenants/route.ts` - Tenant CRUD
- ✅ `/app/api/user-admin/tenants/[id]/route.ts` - Tenant updates
- ✅ `/app/api/user-admin/modules/route.ts` - Dynamic module discovery (15 modules)
- ✅ `/app/api/user-admin/impersonate/route.ts` - User impersonation API
- ✅ Prisma schema updates: Tenant, CustomRole models; User.isActive field
- ✅ Navigation integration with Settings dropdown (requiresUserAdmin flags)
- ✅ Impersonation UI in Navigation component with user search

**User Management Features**:
- **User List**: View all users in organization with activity counts
- **Inline Role Editing**: Change user roles via dropdown (base roles + custom roles)
- **Enable/Disable Users**: Toggle user account status with single click
- **Self-Protection**: Cannot edit own account (prevents accidental lockout)
- **Tenant Scoping**: USER_ADMIN only sees/manages users in their tenant
- **Status Indicators**: Color-coded badges (Active/Disabled/Pending Password Change)
- **User Creation**: Create new users with temporary passwords
- **Activity Tracking**: Shows expense, income, vehicle, trip counts per user

**Role Management Features**:
- **Dynamic Module Discovery**: Automatically detects 15 application modules
- **Permission Matrix**: Granular control (View, Create, Edit, Delete) per module
- **Custom Role Creation**: Organization-specific roles with custom permissions
- **Role Templates**: Copy and modify existing roles
- **Active/Inactive Roles**: Disable roles without deletion
- **Tenant Isolation**: Roles scoped to specific tenants
- **Permission Preview**: Visual display of role capabilities

**Tenant Management Features**:
- **Tenant CRUD**: Create, edit, delete tenants (MASTER_USER only)
- **User Count Display**: See number of users per tenant
- **Custom Role Count**: Track roles created per tenant
- **Cascade Protection**: Prevent deletion of tenants with users
- **Tenant Switching**: View and manage different organizations
- **Audit Trail**: Created/updated timestamps

**User Impersonation Features**:
- **View as User**: Admin/USER_ADMIN can view system as any user
- **Tenant Filtering**: USER_ADMIN only sees users in their tenant
- **User Search**: Real-time search by name or email
- **Session Management**: Clear indication when impersonating
- **Easy Exit**: Stop impersonation with single click
- **Security**: Impersonation logged, cannot modify data while impersonating
- **Role Display**: Shows user's role and tenant in impersonation modal

**Database Schema Additions**:
```prisma
model Tenant {
  id          Int      @id @default(autoincrement())
  name        String   @unique
  users       User[]
  customRoles CustomRole[]
}

model CustomRole {
  id          Int      @id @default(autoincrement())
  tenantId    Int
  name        String
  description String
  permissions Json     // Module-level permissions
  isActive    Boolean  @default(true)
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  users       User[]
}

// User model additions:
// - tenantId: Int (foreign key to Tenant)
// - customRoleId: Int? (optional custom role)
// - isActive: Boolean (enable/disable account)
```

**Security & Validation**:
- **Tenant Isolation**: USER_ADMIN cannot access other tenants' data
- **Role Restrictions**: USER_ADMIN cannot modify other USER_ADMINs
- **Self-Modification Prevention**: Users cannot edit their own accounts
- **Custom Role Validation**: Ensures roles match user's tenant
- **Permission Checks**: All API routes validate user permissions
- **Active Status**: Disabled users cannot log in

**UI/UX Enhancements**:
- **Consistent Navigation**: All management screens have navigation panel
- **Theme Support**: Dark/light mode across all user management pages
- **Modal Close Buttons**: All modals have X close buttons
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Loading States**: Skeleton loaders and spinners during data fetch
- **Error Handling**: Clear error messages for validation failures
- **Confirmation Dialogs**: Confirm destructive actions (delete, disable)

**Module Discovery** (15 modules detected):
1. Dashboard - Main application dashboard
2. Trips - Trip tracking and mileage logs
3. Income - Revenue and earnings tracking
4. Expenses - Expense management
5. Accounts - Chart of accounts
6. Ledger - General ledger entries
7. Assets - Fixed asset management
8. Vehicles - Vehicle management
9. Depreciation - CCA calculations
10. Reports - Financial reports
11. Tax Summary - Tax preparation
12. Settings - Application settings
13. User Management - User administration
14. Role Management - Custom roles
15. Tenant Management - Organization management

**Testing**:
- User Management: http://localhost:3000/user-admin (requires USER_ADMIN or MASTER_USER)
- Role Management: http://localhost:3000/roles (requires USER_ADMIN or MASTER_USER)
- Tenant Management: http://localhost:3000/tenants (requires USER_ADMIN or MASTER_USER)
- Platform Admin: http://localhost:3000/admin (requires MASTER_USER - includes tenant column)
- Test impersonation from Navigation menu (Settings → View as User)
- Verify USER_ADMIN can only see/manage users in their tenant
- Confirm cannot edit own account in user management
- Test enable/disable user functionality
- Verify custom roles appear in role selection dropdowns

### Step 9.5: Plan Configurator & Pricing Designer
**Status**: ✅ COMPLETED
**Completed**: December 2025

**What Was Built**:
- Full plan configurator UI at `/admin/plans` with inline editing
- 14-feature module system (Expenses, Trips, OCR, GPS, etc.)
- Dynamic feature limits and boolean flags per plan tier
- Three-tier subscription structure (Free, Standard, Pro)
- Module-based pricing logic integrated throughout the app
- Real-time plan preview and validation

**Deliverables**:
- ✅ Plan model with feature flags and usage limits (`SubscriptionPlan`)
- ✅ Admin UI for creating/updating/deleting plans (inline editing table)
- ✅ Pricing page dynamically reads from database plans
- ✅ Validation prevents invalid feature configurations
- ✅ Module-based access control throughout the application

### Step 9.6: RBAC & Access Rights Enhancement
**Status**: ✅ COMPLETED
**Completed**: December 2025

**What Was Built**:
- Custom role system with granular module-level permissions
- Tenant isolation enforced at database and API level
- Role assignment UI in user management dashboard
- Permission checking middleware for protected routes
- Module-based feature access tied to subscriptions
- Admin role with full system access

**Deliverables**:
- ✅ Role/permission schema (CustomRole model with JSON permissions)
- ✅ UI to assign/revoke roles (inline editing in user management)
- ✅ Tenant isolation in all database queries
- ✅ Protected routes with role-based access control
- ✅ Module permissions integrated with subscription tiers

---

## Phase 10: Polish & Launch (Week 10)

### Step 10.1: Mobile Responsiveness 🟡 90% COMPLETE
**Status**: 🟡 **IN PROGRESS** (Started December 8, 2025)

**Completed Today**:
- ✅ Created comprehensive mobile responsiveness audit document
- ✅ Implemented Service Worker for PWA functionality
- ✅ Optimized Expenses, Income, and Trips pages for mobile
- ✅ All data tables verified mobile-ready with horizontal scroll
- ✅ 44x44px touch targets on all interactive elements
- ✅ touch-manipulation CSS for instant tap response

**Remaining (10%)**:
- [ ] Test forms on 375px viewport (Add Expense, Add Income, Add Trip)
- [ ] Test GPS tracking on real mobile device
- [ ] Final QA pass with end-to-end user flows
- [ ] Run Lighthouse mobile audit (target >90 score)

**Deliverables**:
- ✅ `MOBILE_RESPONSIVENESS_AUDIT.md` - Testing checklist
- ✅ `MOBILE_PROGRESS.md` - Implementation tracking
- ✅ `MOBILE_OPTIMIZATION_COMPLETE.md` - Completion summary
- ✅ `public/sw.js` - Service Worker with offline support
- ✅ Mobile-optimized pages: Expenses, Income, Trips

### Step 10.2: Security & Vulnerability Assessment 🚧 NOT STARTED
**Status**: 🚧 **NOT STARTED**

**Overview**: Comprehensive security audit and vulnerability assessment of the DriveGo application to identify and remediate potential security weaknesses before production deployment. This phase ensures the application meets industry security standards and protects sensitive financial and personal data.

**Security Assessment Workflow**:

1. **Automated Security Scanning** (Day 1-2)
   - Run npm audit for dependency vulnerabilities
   - Use OWASP ZAP or Burp Suite for web application scanning
   - Scan for exposed secrets and API keys with tools like truffleHog or git-secrets
   - Check for outdated dependencies with npm outdated
   - Analyze bundle for security issues with Snyk or npm audit

2. **Manual Code Review** (Day 3-5)
   - Review authentication and authorization logic
   - Audit API routes for proper access control
   - Check database queries for SQL injection vulnerabilities
   - Review file upload handlers for malicious file detection
   - Examine session management and token handling
   - Check for exposed sensitive data in client-side code
   - Review error messages for information leakage

3. **Penetration Testing** (Day 6-7)
   - Test authentication bypass attempts
   - Attempt privilege escalation (user → admin)
   - Test for Cross-Site Scripting (XSS) vulnerabilities
   - Test for Cross-Site Request Forgery (CSRF) protection
   - Attempt SQL/NoSQL injection attacks
   - Test file upload vulnerabilities
   - Test for insecure direct object references (IDOR)
   - Verify rate limiting on sensitive endpoints

4. **Remediation & Verification** (Day 8-10)
   - Fix identified vulnerabilities by priority (Critical → High → Medium → Low)
   - Re-test fixed vulnerabilities
   - Document security improvements
   - Update security policies and procedures
   - Create security incident response plan

**Security Checklist**:

**A. Injection Flaws Prevention**
- [ ] **SQL Injection**: All database queries use Prisma ORM with parameterized queries (already implemented)
- [ ] **NoSQL Injection**: Validate and sanitize all user inputs before database operations
- [ ] **Command Injection**: Avoid using eval(), exec(), or shell commands with user input
- [ ] **XSS Prevention**: Sanitize all user-generated content displayed in UI
- [ ] **LDAP Injection**: N/A (not using LDAP)
- [ ] **XML Injection**: N/A (not parsing XML)

**B. Authentication & Session Management**
- [ ] **Password Security**:
  * Passwords hashed with bcrypt (12 rounds) ✅ Already implemented
  * Minimum password length enforced (8 characters)
  * Password complexity requirements (uppercase, lowercase, number, special char)
  * Password reset tokens expire after 1 hour
  * Account lockout after 5 failed login attempts
- [ ] **Session Security**:
  * NextAuth session tokens use httpOnly cookies ✅ Already implemented
  * Session tokens regenerated after login ✅ NextAuth handles this
  * Sessions expire after inactivity (24 hours default)
  * Implement "remember me" functionality with separate long-lived token
  * Sessions invalidated on password change
  * Logout properly clears all session data (client + server)
- [ ] **Multi-Factor Authentication (MFA)**:
  * Implement TOTP-based 2FA (Google Authenticator, Authy)
  * Backup codes for account recovery
  * Optional: SMS-based 2FA (less secure, but better than nothing)
- [ ] **JWT Token Security** (if implementing API tokens):
  * Short expiration time (15 minutes for access tokens)
  * Refresh token rotation
  * Token stored in httpOnly cookies or secure storage (not localStorage)
  * Verify token signature on every request

**C. Authorization & Access Control**
- [ ] **Server-Side Authorization**:
  * All API routes check user authentication ✅ Partially implemented
  * All sensitive operations verify user permissions before execution
  * Implement row-level security (users can only access their own data)
  * Admin routes check for admin role ✅ Already implemented with canAccessPlatformAdmin
  * Tenant isolation enforced (users cannot access other tenants' data) ✅ Implemented in Phase 9.4
- [ ] **Insecure Direct Object References (IDOR)**:
  * Never use sequential IDs in URLs (consider UUIDs for sensitive resources)
  * Always verify resource ownership before returning data
  * Example: `GET /api/expenses/[id]` must verify expense belongs to authenticated user
- [ ] **URL/Backspace Navigation Protection**:
  * Protected pages redirect to login if not authenticated ✅ Implemented with NextAuth
  * Middleware checks authentication on every protected route
  * Browser back button does not expose sensitive data after logout
  * Cache-Control headers prevent caching of sensitive pages
- [ ] **Role-Based Access Control (RBAC)**:
  * MASTER_USER, USER_ADMIN, SUB_USER, SUB_USER_READONLY roles enforced ✅ Implemented in Phase 9.6
  * Custom roles with granular permissions ✅ Implemented in Phase 9.4
  * Permission checks on both client and server (never trust client-side checks)

**D. Data Protection & Privacy**
- [ ] **Sensitive Data Exposure**:
  * No sensitive data in client-side code (API keys, secrets, credentials)
  * No sensitive data in hidden form fields
  * No sensitive data in query parameters (use POST body instead)
  * No sensitive data logged to console in production
  * Database credentials stored in .env (not committed to Git) ✅ Already configured
- [ ] **Data Encryption**:
  * HTTPS enforced on all pages (HTTP Strict Transport Security headers)
  * Stripe payment data never stored in database ✅ Using Stripe hosted checkout
  * Credit card numbers never logged or displayed
  * Database backups encrypted
  * Encrypt sensitive fields at rest (e.g., social security numbers, tax IDs)
- [ ] **Privacy Compliance**:
  * GDPR compliance: User data export, right to be forgotten
  * Privacy policy and terms of service published
  * Cookie consent banner (if using tracking cookies)
  * Data retention policy (delete old data after X years)
  * Audit log for data access and modifications

**E. Input Validation & Output Encoding**
- [ ] **Server-Side Validation**:
  * All user inputs validated on server (never trust client validation)
  * Use Zod or Joi for schema validation ✅ Using Zod in some routes
  * Validate data types, lengths, formats (email, phone, postal code)
  * Whitelist allowed values (e.g., expense categories)
  * Reject unexpected fields in request body
- [ ] **File Upload Security**:
  * Validate file types (check magic bytes, not just extension)
  * Limit file size (e.g., 5MB for receipts)
  * Scan uploads for malware (optional: use ClamAV or VirusTotal API)
  * Store files outside web root or use cloud storage (S3, R2)
  * Prevent directory traversal attacks (../ in filenames)
  * Generate random filenames (don't use user-provided names)
- [ ] **Output Encoding**:
  * React automatically escapes JSX content ✅ Using React
  * Sanitize HTML if rendering user-generated content (use DOMPurify)
  * Encode data in API responses (JSON.stringify handles this)

**F. Cross-Site Request Forgery (CSRF) Protection**
- [ ] **CSRF Tokens**:
  * NextAuth provides CSRF protection ✅ Already implemented
  * All state-changing requests (POST, PUT, DELETE) verify CSRF token
  * SameSite cookie attribute set to 'Lax' or 'Strict'
- [ ] **Additional CSRF Mitigation**:
  * Require re-authentication for sensitive operations (delete account, change password)
  * Check Referer header on sensitive endpoints
  * Use custom request headers (X-Requested-With: XMLHttpRequest)

**G. Cross-Site Scripting (XSS) Protection**
- [ ] **Content Security Policy (CSP)**:
  * Implement strict CSP headers (disallow inline scripts)
  * Use nonces or hashes for inline scripts if necessary
  * Disallow `eval()`, `new Function()`, inline event handlers
- [ ] **XSS Prevention**:
  * React escapes content by default ✅ Using React
  * Never use dangerouslySetInnerHTML without sanitization
  * Sanitize user input before storing in database
  * Encode output when rendering user data
  * Set X-XSS-Protection header

**H. Security Headers**
- [ ] **Implement Security Headers** (in next.config.ts or middleware):
  ```javascript
  headers: {
    'X-Frame-Options': 'DENY', // Prevent clickjacking
    'X-Content-Type-Options': 'nosniff', // Prevent MIME sniffing
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(self), camera=(self)', // Feature policy
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; ...",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload' // HSTS
  }
  ```

**I. Rate Limiting & DDoS Protection**
- [ ] **API Rate Limiting**:
  * Implement rate limiting on authentication endpoints (5 attempts per minute)
  * Limit expensive operations (report generation, CSV export) to 10 per hour
  * Use express-rate-limit or upstash/ratelimit ✅ Partially implemented in lib/rate-limit.ts
  * Return 429 Too Many Requests with Retry-After header
- [ ] **Brute Force Protection**:
  * Account lockout after 5 failed login attempts (30-minute lockout)
  * CAPTCHA after 3 failed attempts (optional: use hCaptcha or reCAPTCHA)
  * IP-based rate limiting for login endpoint
- [ ] **DDoS Mitigation**:
  * Use Cloudflare or similar CDN/WAF for DDoS protection
  * Implement request size limits (e.g., 10MB max body size)
  * Timeout long-running requests (30 seconds max)

**J. Dependency & Supply Chain Security**
- [ ] **Dependency Management**:
  * Run `npm audit` regularly and fix vulnerabilities
  * Keep dependencies up to date (especially security patches)
  * Use Snyk, Dependabot, or Renovate for automated updates
  * Remove unused dependencies
  * Review dependencies before adding (check npm downloads, last updated, maintainer)
- [ ] **Subresource Integrity (SRI)**:
  * Use SRI for CDN-loaded scripts (not applicable if bundling all assets)
  * Pin dependency versions in package.json (avoid ^ or ~)

**K. Logging & Monitoring**
- [ ] **Security Logging**:
  * Log all authentication events (login, logout, failed attempts)
  * Log authorization failures (access denied)
  * Log sensitive operations (delete user, change subscription, export data)
  * Never log sensitive data (passwords, tokens, credit cards)
  * Include timestamp, user ID, IP address, user agent in logs
- [ ] **Monitoring & Alerting**:
  * Set up error tracking (Sentry, Rollbar, or similar)
  * Alert on unusual activity (spike in failed logins, mass data exports)
  * Monitor for SQL injection attempts (unusual query patterns)
  * Dashboard showing security metrics (failed logins, rate limit hits)
- [ ] **Audit Trail**:
  * Log all changes to sensitive data (who, what, when)
  * Store audit logs separately from application logs
  * Implement log retention policy (keep for X months/years)

**L. Third-Party Integrations**
- [ ] **Stripe Security**:
  * Never store credit card details ✅ Using Stripe hosted checkout
  * Use Stripe Elements for PCI DSS compliance
  * Verify webhook signatures ✅ Implemented in webhook handler
  * Use test mode for development (separate API keys)
  * Restrict Stripe API key permissions (least privilege)
- [ ] **OCR/Tesseract.js Security**:
  * Client-side processing ✅ No data sent to external API
  * Validate extracted data before saving
  * Limit file size and type for OCR processing
- [ ] **Google Maps / Geolocation API**:
  * Restrict API key to specific domains/apps
  * Set usage quotas to prevent abuse
  * Never expose API keys in client-side code (use backend proxy if needed)

**M. Error Handling & Information Disclosure**
- [ ] **Error Messages**:
  * Generic error messages in production ("Something went wrong")
  * Detailed errors only in development mode
  * Never expose stack traces to users
  * Never expose database errors or query details
  * Log detailed errors server-side for debugging
- [ ] **HTTP Status Codes**:
  * Use appropriate status codes (401 Unauthorized, 403 Forbidden, 404 Not Found)
  * Don't reveal if user exists (same error for "wrong email" and "wrong password")

**N. Database Security**
- [ ] **Prisma ORM Security**:
  * Parameterized queries prevent SQL injection ✅ Using Prisma
  * Connection pooling configured properly
  * Database user has minimal privileges (not root/superuser)
  * Separate database users for read-only operations (if applicable)
- [ ] **Database Configuration**:
  * PostgreSQL not exposed to public internet (only accessible from app server)
  * Strong database password (32+ characters, random)
  * SSL/TLS connection to database
  * Regular database backups (automated, encrypted, tested)
  * Database backup stored in separate location (off-site)

**O. Deployment & Infrastructure Security**
- [ ] **Environment Variables**:
  * All secrets in environment variables (never hardcoded)
  * Different secrets for dev, staging, production
  * Secrets rotated periodically (every 90 days)
  * Use secret management service (AWS Secrets Manager, Vercel Environment Variables)
- [ ] **Server Security** (if self-hosting):
  * Keep OS and software up to date
  * Firewall configured (only allow necessary ports)
  * SSH key authentication (disable password login)
  * Fail2ban or similar intrusion prevention
  * Regular security patches applied
- [ ] **Vercel/Cloud Platform Security**:
  * Enable Vercel Authentication (if needed)
  * Configure security headers in next.config.ts
  * Use Vercel's DDoS protection
  * Enable branch protection on GitHub (require PR reviews)

**P. Incident Response Plan**
- [ ] **Prepare for Security Incidents**:
  * Document incident response procedures
  * Identify security team roles (who handles what)
  * Communication plan (how to notify users of breach)
  * Backup and recovery procedures tested
  * Legal compliance (data breach notification laws)

**Prompt for AI Security Audit**:

```
Perform a comprehensive security audit of the DriveGo rideshare expense tracking application. Analyze the provided codebase (or specific files) for potential security weaknesses and recommend mitigation strategies. Focus on explaining defensive practices necessary to prevent common vulnerabilities.

**SCOPE OF ANALYSIS**:
- Next.js 15 web application with TypeScript
- NextAuth.js authentication with credentials provider
- Prisma ORM with PostgreSQL database
- Stripe payment integration
- Multi-tenant architecture with RBAC
- File uploads (receipt images stored as base64)
- Client-side OCR with Tesseract.js
- GPS tracking via browser Geolocation API

**CRITICAL AREAS TO ANALYZE**:

1. **Injection Flaws**:
   - Review all database queries in `/app/api/**/route.ts` files
   - Confirm Prisma ORM prevents SQL injection with parameterized queries
   - Check for NoSQL injection in JSON field queries (e.g., `features`, `permissions`)
   - Verify no eval() or new Function() calls with user input
   - Analyze user input handling in API routes (body parsing, query parameters)
   - Recommendation: Explain how to use Prisma's type-safe queries and input validation with Zod

2. **Access Control & Authorization**:
   - Review all API route handlers for authentication checks
   - Verify user can only access their own data (tenant isolation)
   - Check for Insecure Direct Object References (IDOR) vulnerabilities
   - Example: Can user access `/api/expenses/123` if expense belongs to another user?
   - Verify admin routes require proper role (MASTER_USER, USER_ADMIN)
   - Check if deleted/disabled users can still access the system
   - Review custom role permission enforcement in Phase 9.4/9.6 implementation
   - Recommendation: Explain importance of server-side authorization checks, never trust client-side role checks, implement middleware for consistent authorization

3. **Session Management**:
   - Analyze NextAuth session configuration in `/lib/auth.ts`
   - Verify session tokens are httpOnly, secure, and SameSite cookies
   - Check if sessions properly invalidate on logout (`/api/auth/signout`)
   - Verify sessions expire after inactivity (current timeout?)
   - Check if password change invalidates all existing sessions
   - Review if "remember me" functionality exists and its security
   - Recommendation: Detail techniques for proper session invalidation, token rotation, and secure cookie configuration

4. **Client-Side Data Exposure**:
   - Analyze all React components for sensitive data in props or state
   - Check browser localStorage/sessionStorage usage (are tokens stored there?)
   - Review if API keys are exposed in client-side code (Stripe publishable key is okay, but check others)
   - Check if sensitive data is in hidden form fields or HTML comments
   - Verify error messages don't expose internal details (stack traces, database errors)
   - Analyze Network tab in DevTools: Are API responses exposing unnecessary data?
   - Recommendation: Explain how to keep all business logic and sensitive data server-side, validate on server even if client validates

5. **Authentication Security**:
   - Review password hashing implementation (bcrypt rounds, salt)
   - Check if password complexity requirements are enforced
   - Verify account lockout after failed login attempts (currently implemented?)
   - Check if login rate limiting exists (`/lib/rate-limit.ts`)
   - Review password reset flow for vulnerabilities (token expiration, token reuse)
   - Check if two-factor authentication is implemented (recommendation if not)
   - Recommendation: Explain brute force protection, password policy best practices, MFA implementation

6. **Cross-Site Request Forgery (CSRF)**:
   - Verify NextAuth CSRF protection is enabled
   - Check if all state-changing requests (POST, PUT, DELETE) verify CSRF token
   - Review if SameSite cookie attribute is set
   - Check if sensitive operations require re-authentication (delete account, change email)
   - Recommendation: Explain CSRF attack vectors and NextAuth's built-in protection

7. **Cross-Site Scripting (XSS)**:
   - Review all places where user input is rendered in UI
   - Check if dangerouslySetInnerHTML is used anywhere (risk if used)
   - Verify Content Security Policy headers are configured
   - Check if user-generated content is sanitized (expense descriptions, trip notes, merchant names)
   - Analyze OCR-extracted text handling (could attacker craft receipt to inject script?)
   - Recommendation: Explain XSS prevention with React, when to use DOMPurify, CSP headers

8. **File Upload Vulnerabilities**:
   - Review receipt upload implementation (`/app/expenses/add/page.tsx`)
   - Check if file type validation exists (magic bytes, not just extension)
   - Verify file size limits are enforced
   - Check if uploaded files are served directly (risk of executing malicious files)
   - Analyze base64 storage: Are images validated before storing?
   - Check if filenames are sanitized (prevent directory traversal)
   - Recommendation: Explain file upload security best practices, malware scanning, cloud storage benefits

9. **API Security**:
   - Review all API routes for input validation
   - Check if rate limiting is implemented on all endpoints
   - Verify proper HTTP status codes (401 vs 403, don't reveal if user exists)
   - Check if API returns unnecessary data (only return fields user needs)
   - Review error handling (are detailed errors exposed in production?)
   - Check if CORS is configured correctly
   - Recommendation: Explain API security principles, rate limiting strategies, input validation with Zod

10. **Sensitive Data Handling**:
    - Verify Stripe webhooks verify signatures before processing
    - Check if credit card data is never stored (PCI DSS compliance)
    - Review if GST/HST numbers, business numbers are encrypted at rest
    - Check if database backups include sensitive data
    - Verify .env file is in .gitignore
    - Analyze if sensitive data is logged (console.log statements in production)
    - Recommendation: Explain data classification, encryption at rest/in transit, secure logging practices

11. **Dependency Vulnerabilities**:
    - Run `npm audit` and analyze results
    - Check if dependencies are up to date
    - Review if unused dependencies can be removed
    - Identify high-severity vulnerabilities and recommend updates
    - Check if package-lock.json is committed (prevents supply chain attacks)
    - Recommendation: Explain dependency security, Snyk integration, regular audit process

12. **Security Headers**:
    - Verify security headers in `next.config.ts` or middleware
    - Check for: X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security, CSP
    - Verify HTTPS is enforced in production
    - Check if Referrer-Policy is set
    - Recommendation: Explain each security header and how to implement in Next.js

13. **Multi-Tenancy Security**:
    - Review tenant isolation in Phase 9.4 implementation
    - Verify users cannot access other tenants' data
    - Check if tenant ID is validated on every request
    - Analyze if admin impersonation is logged and auditable
    - Review custom role permissions enforcement
    - Recommendation: Explain tenant isolation strategies, row-level security, audit logging

14. **Third-Party Integration Security**:
    - Review Stripe integration security (`/lib/stripe.ts`, `/app/api/stripe/**`)
    - Check if API keys are properly restricted (environment-specific)
    - Verify webhook signature validation
    - Analyze if Tesseract.js poses any security risks (client-side processing, so likely safe)
    - Check if Google Maps API key (if used) is restricted
    - Recommendation: Explain third-party security best practices, API key management

**OUTPUT FORMAT**:
For each vulnerability found, provide:
1. **Severity**: Critical / High / Medium / Low
2. **Location**: File path and line numbers
3. **Description**: What is the vulnerability?
4. **Attack Scenario**: How could an attacker exploit this?
5. **Impact**: What damage could this cause?
6. **Remediation**: Step-by-step fix with code examples
7. **Prevention**: How to prevent this in future development

**PRIORITIZATION**:
- Critical: Fix immediately (authentication bypass, SQL injection, RCE)
- High: Fix before production (XSS, CSRF, IDOR, sensitive data exposure)
- Medium: Fix in next sprint (missing security headers, weak rate limiting)
- Low: Address when convenient (information disclosure, minor misconfigurations)

**DELIVERABLE**:
Provide a comprehensive security audit report in markdown format with:
- Executive summary of findings
- Detailed vulnerability list with remediation steps
- Code snippets showing secure implementations
- Security checklist for ongoing development
- Recommendations for security tools and processes
```

**Testing & Verification Steps**:

1. **Run Automated Scans**:
   ```powershell
   # Dependency audit
   npm audit --production

   # Check for outdated packages
   npm outdated

   # Snyk scan (if installed)
   npx snyk test

   # OWASP Dependency-Check (optional)
   # Download from https://owasp.org/www-project-dependency-check/
   ```

2. **Manual Security Testing**:
   - Use Burp Suite Community Edition or OWASP ZAP for web app scanning
   - Test authentication with invalid credentials, expired sessions, concurrent logins
   - Test authorization by manipulating user IDs in URLs/requests
   - Test file uploads with malicious files (.php, .exe, oversized files)
   - Test input fields with XSS payloads: `<script>alert('XSS')</script>`
   - Test SQL injection: `' OR '1'='1`, `'; DROP TABLE users;--`
   - Test CSRF by crafting malicious forms
   - Test rate limiting by sending rapid requests

3. **Code Review Checklist**:
   ```
   [ ] Review all API routes for authentication checks
   [ ] Verify user input validation in all POST/PUT endpoints
   [ ] Check for hardcoded secrets or API keys
   [ ] Ensure error messages don't leak sensitive info
   [ ] Verify file upload handling is secure
   [ ] Check for insecure direct object references
   [ ] Review session management implementation
   [ ] Verify CSRF protection on state-changing endpoints
   [ ] Check for XSS vulnerabilities in user-generated content
   [ ] Ensure SQL queries use parameterized statements (Prisma)
   [ ] Verify sensitive data is not logged
   [ ] Check security headers are configured
   [ ] Review third-party integrations (Stripe, etc.)
   [ ] Verify rate limiting on authentication endpoints
   [ ] Check password reset flow for vulnerabilities
   ```

4. **Penetration Testing Scenarios**:
   - **Scenario 1: Privilege Escalation**
     1. Register as regular user (SUB_USER role)
     2. Attempt to access admin routes (`/admin`, `/api/admin/users`)
     3. Try to modify another user's data (`PUT /api/expenses/[id]` with someone else's ID)
     4. Attempt to change own role via API manipulation
     5. Expected: All attempts should fail with 401/403 errors

   - **Scenario 2: IDOR Vulnerability**
     1. Create expense as User A
     2. Note expense ID from response
     3. Log in as User B
     4. Attempt `GET /api/expenses/[User A's expense ID]`
     5. Expected: 403 Forbidden or 404 Not Found

   - **Scenario 3: Session Fixation**
     1. Log in as User A
     2. Copy session cookie
     3. Log out
     4. Try to use old session cookie
     5. Expected: Session invalidated, redirect to login

   - **Scenario 4: Brute Force Protection**
     1. Attempt login with wrong password 10 times
     2. Expected: Account locked or rate limit enforced

   - **Scenario 5: XSS Attack**
     1. Create expense with description: `<script>alert('XSS')</script>`
     2. View expense list page
     3. Expected: Script not executed, shown as text

5. **Security Tools Recommendations**:
   - **npm audit**: Built-in dependency vulnerability scanner
   - **Snyk**: Continuous security monitoring (free tier available)
   - **OWASP ZAP**: Web application security scanner (free, open-source)
   - **Burp Suite**: Web vulnerability scanner (Community Edition free)
   - **truffleHog**: Scan Git history for secrets
   - **git-secrets**: Prevent committing secrets to Git
   - **Lighthouse**: Security audit (part of Chrome DevTools)
   - **Sentry**: Error tracking and monitoring
   - **Dependabot**: Automated dependency updates (GitHub)

**Deliverables**:
- [ ] Security audit report (PDF/Markdown) with findings and recommendations
- [ ] Updated codebase with all critical/high vulnerabilities fixed
- [ ] Security testing documentation
- [ ] Incident response plan document
- [ ] Security checklist for ongoing development
- [ ] Updated deployment guide with security best practices

**Success Criteria**:
- Zero critical or high-severity vulnerabilities in production
- All authentication and authorization tests pass
- npm audit shows no high/critical vulnerabilities
- Security headers properly configured
- Rate limiting implemented on all sensitive endpoints
- Error messages don't expose sensitive information
- Session management follows security best practices
- OWASP Top 10 vulnerabilities addressed

### Step 10.3: Testing & QA 🚧 NOT STARTED
**Status**: 🚧 **NOT STARTED**

### Overview: Mobile App Strategy

**Decision Point**: The web app (Phase 1-10) provides a solid foundation. Now we'll build native mobile apps that share the same backend API while providing platform-specific features and optimal mobile UX.

**Project Structure Decision**: Create mobile app as a **SEPARATE PROJECT** alongside the web app:

```
Rideshare Project/
├── drivego/                    # Existing Next.js web app
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── prisma/
│   └── ...
│
└── drivego-mobile/             # NEW: React Native mobile app
    ├── src/
    │   ├── screens/
    │   ├── components/
    │   ├── services/
    │   ├── navigation/
    │   └── store/
    ├── ios/
    ├── android/
    └── package.json
```

**Why Separate Projects?**
- ✅ Different build systems (Next.js vs React Native Metro)
- ✅ Different dependencies (prevents conflicts)
- ✅ Independent versioning and deployments
- ✅ Platform-specific tooling (Xcode, Android Studio)
- ✅ Clearer separation of concerns
- ✅ Easier team collaboration

**Technology Stack**:
- **Framework**: React Native (code sharing between iOS & Android)
- **Alternative**: Flutter (if team prefers Dart)
- **Backend**: Existing Next.js API routes (reuse 100%)
- **State Management**: Redux Toolkit or Zustand
- **Navigation**: React Navigation
- **Authentication**: JWT tokens with secure storage
- **Maps**: React Native Maps (Google Maps/Apple Maps)
- **Camera**: React Native Camera or Expo Camera
- **Storage**: AsyncStorage + SecureStore
- **Push Notifications**: Firebase Cloud Messaging
- **Testing**: Jest + Detox (E2E)

**Why Native Mobile Apps**:
- ✅ Better performance than PWA
- ✅ Full access to device features (GPS, camera, background processing)
- ✅ App Store presence & discoverability
- ✅ Better offline capabilities
- ✅ Platform-specific UI/UX (iOS Human Interface, Material Design)
- ✅ Push notifications
- ✅ Background GPS tracking for automatic trip logging
- ✅ Native camera integration for receipt scanning

**Code Reusability**:
- Backend APIs: 100% reuse (no changes needed)
- Business logic: 80% reuse (utility functions, calculations)
- UI components: 60% adapt (mobile-first redesign)
- Platform-specific: 20% (iOS/Android specific features)

---

### Step 11.1: React Native Project Setup

**Status**: 🚧 Not started

**Prompt**: 
```
I want to create native mobile apps (iOS & Android) for my DriveGo rideshare expense tracking application using React Native. I have a fully functional Next.js web application with a complete REST API backend.

IMPORTANT: Create this as a SEPARATE project called "drivego-mobile" alongside the existing "drivego" web app. Both will share the same backend API but have independent codebases.

PROJECT LOCATION:
Create new folder at: C:\Users\nasee\Web and Software Development Course\Rideshare Project\drivego-mobile

PROJECT REQUIREMENTS:
1. Initialize a new React Native project with TypeScript
2. Set up project structure following best practices:
   - /src folder with /screens, /components, /services, /utils, /navigation, /store, /types
   - Environment configuration for development, staging, production
   - API service layer to connect to existing Next.js backend
3. Configure both iOS and Android build environments
4. Set up essential dependencies:
   - Navigation: @react-navigation/native, @react-navigation/stack, @react-navigation/bottom-tabs
   - State Management: @reduxjs/toolkit, react-redux
   - API Client: axios with interceptors for auth tokens
   - UI Library: react-native-paper or NativeBase for consistent components
   - Forms: react-hook-form with validation
   - Secure Storage: react-native-keychain for JWT tokens
   - Date Handling: date-fns or dayjs
5. Create base app structure with:
   - Authentication flow (login/register screens)
   - Main tab navigation (Dashboard, Trips, Expenses, Reports, Settings)
   - API service configuration with base URL and auth headers
   - Redux store setup with auth slice
   - TypeScript interfaces for all API responses matching backend schema
6. Implement splash screen and app icons (placeholders)
7. Configure app name: "DriveGo" for both platforms

EXISTING BACKEND API (from drivego folder):
- Base URL: https://your-domain.com/api (or http://localhost:3000/api for dev)
- Authentication: NextAuth with credentials provider
- Endpoints: /api/auth, /api/trips, /api/expenses, /api/income, /api/vehicles, /api/reports, /api/tax-summary
- All endpoints use JWT authentication via session cookies or Bearer tokens

SHARED CODE STRATEGY:
- Copy utility functions from drivego/lib/ to drivego-mobile/src/utils/ as needed
- Examples: Haversine distance calculation, date formatters, currency formatters
- Keep TypeScript types in sync manually or via shared types file

DELIVERABLES:
- React Native project initialized at drivego-mobile/ with Expo or React Native CLI
- package.json with all dependencies
- tsconfig.json for TypeScript
- Complete folder structure with boilerplate
- API service layer with axios configuration
- Authentication flow with login/register screens
- Tab navigation structure
- Redux store setup with auth state
- Environment configuration (.env files)
- README with setup instructions for both iOS and Android

Please provide complete code with proper TypeScript types and follow React Native best practices.
```

**Deliverables**:
- ✅ React Native project structure
- ✅ TypeScript configuration
- ✅ Navigation setup
- ✅ API service layer
- ✅ Authentication screens
- ✅ Redux store configuration
- ✅ Environment setup

---

### Step 11.2: Authentication & User Management

**Status**: 🚧 Not started

**Prompt**:
```
Implement complete authentication and user management for the DriveGo mobile app, integrating with the existing NextAuth backend.

REQUIREMENTS:
1. Create authentication screens:
   - Login screen with email/password and "Remember Me" option
   - Registration screen with email, name, password, password confirmation
   - Forgot password screen with email input
   - Password reset screen (if user receives reset link)
2. Implement secure token storage:
   - Use react-native-keychain to store JWT tokens securely
   - Implement automatic token refresh logic
   - Clear tokens on logout
3. Create authentication service:
   - login(email, password): Promise<User>
   - register(userData): Promise<User>
   - logout(): Promise<void>
   - refreshToken(): Promise<string>
   - getCurrentUser(): Promise<User>
4. Implement Redux auth slice:
   - State: user, token, isAuthenticated, loading, error
   - Actions: loginRequest, loginSuccess, loginFailure, logout, setUser
   - Persist auth state using redux-persist with secure storage
5. Create auth navigation flow:
   - Protect routes requiring authentication
   - Auto-navigate to login if token expired
   - Show splash screen while checking auth status
   - Redirect to dashboard after successful login
6. Add biometric authentication (optional):
   - Face ID / Touch ID support for iOS
   - Fingerprint authentication for Android
   - "Enable Biometrics" toggle in settings
7. Implement profile management:
   - View/edit profile screen
   - Change password functionality
   - Update email/name
8. Error handling:
   - Display user-friendly error messages
   - Handle network errors gracefully
   - Show loading states during API calls

BACKEND API ENDPOINTS (already implemented):
- POST /api/register - Register new user
- POST /api/auth/callback/credentials - Login
- GET /api/auth/session - Get current session
- POST /api/user/profile - Update profile
- POST /api/user/change-password - Change password

DESIGN REQUIREMENTS:
- Follow platform design guidelines (iOS: SF Symbols, Android: Material Icons)
- Smooth transitions and animations
- Dark mode support
- Accessibility (screen reader support, proper labels)
- Input validation with clear error messages
- Loading indicators during network requests

Please provide complete implementation with TypeScript, proper error handling, and security best practices.
```

**Deliverables**:
- ✅ Login & Registration screens
- ✅ Secure token storage
- ✅ Auth service layer
- ✅ Redux auth slice
- ✅ Protected navigation
- ✅ Biometric authentication (optional)
- ✅ Profile management

---

### Step 11.3: Trip Tracking with GPS

**Status**: 🚧 Not started

**Prompt**:
```
Implement comprehensive trip tracking functionality with real-time GPS tracking, automatic mileage calculation, and background tracking for the DriveGo mobile app.

REQUIREMENTS:
1. Install and configure location services:
   - react-native-geolocation-service for accurate location tracking
   - react-native-background-geolocation for background tracking
   - Request location permissions (Always/When in Use)
   - Handle permission denials gracefully
2. Create Trip Tracking Service:
   - startTracking(): Start GPS tracking
   - stopTracking(): Stop GPS tracking and save trip
   - pauseTracking(): Pause tracking (idle detection)
   - resumeTracking(): Resume tracking after pause
   - getCurrentLocation(): Get current coordinates
   - calculateDistance(coords1, coords2): Haversine distance calculation
3. Build Trip Tracking Screen:
   - Live map view showing current location and route polyline
   - Real-time display of:
     * Current speed (km/h or mph)
     * Distance traveled (updating every second)
     * Trip duration (HH:MM:SS)
     * Current location address (reverse geocoding)
   - Control buttons:
     * Start Trip (green) - begins tracking
     * Pause Trip (yellow) - pauses tracking
     * End Trip (red) - stops and saves
   - Vehicle selector dropdown
   - Purpose toggle: Business / Personal
   - Notes input field
4. Implement background tracking:
   - Continue GPS tracking when app is backgrounded
   - Show persistent notification with trip status
   - Battery optimization (smart location updates)
   - Idle detection: pause after 5 minutes < 5 km/h
   - Auto-resume when movement detected
5. Create Trips List Screen:
   - List of all trips with date, distance, vehicle, purpose
   - Filters: Date range, Vehicle, Purpose (Business/Personal)
   - Search by start/end location
   - Summary cards: Total trips, Business miles, Personal miles
   - Pull-to-refresh
   - Infinite scroll pagination
6. Build Trip Details Screen:
   - Full trip information display
   - Map view with route polyline
   - Start/End locations with addresses
   - Distance, duration, average speed
   - Vehicle and purpose
   - GPS waypoints (if needed for audit)
   - Edit trip button
   - Delete trip button (with confirmation)
7. Create Add/Edit Trip Screen (Manual Entry):
   - Date/Time picker
   - Start/End location inputs with autocomplete
   - Distance input (auto-calculate if locations provided)
   - Vehicle selector
   - Purpose toggle
   - Notes textarea
   - Odometer readings (optional)
8. Implement offline support:
   - Queue trips locally if no internet
   - Sync to backend when connection restored
   - Show sync status indicator
9. Implement automatic trip detection (advanced):
   - Detect when user starts driving (motion detection)
   - Auto-start tracking with notification
   - Smart classification: Business vs Personal based on time/location patterns

BACKEND API ENDPOINTS:
- GET /api/trips - List trips with filters
- POST /api/trips - Create trip
- GET /api/trips/[id] - Get trip details
- PUT /api/trips/[id] - Update trip
- DELETE /api/trips/[id] - Delete trip
- GET /api/vehicles - List user vehicles

DESIGN REQUIREMENTS:
- Map theme matching app theme (dark/light)
- Large, touch-friendly buttons for driving safety
- Voice announcements for trip milestones (optional)
- Haptic feedback on trip start/stop
- Battery usage optimization
- Background notification with trip stats
- Permission rationale screens
- Smooth map animations

TECHNICAL CONSIDERATIONS:
- Use React Native Maps for map display
- Implement proper permission flows for iOS/Android
- Handle location permission edge cases (denied, restricted, etc.)
- Optimize location update frequency based on speed
- Store waypoints efficiently (compress if needed)
- Implement proper cleanup on component unmount
- Handle app termination gracefully (save state)

Please provide complete implementation with TypeScript, proper state management, error handling, and battery-efficient GPS tracking.
```

**Deliverables**:
- ✅ GPS tracking service
- ✅ Background location tracking
- ✅ Live tracking screen with map
- ✅ Trips list and details screens
- ✅ Manual trip entry
- ✅ Offline support with sync
- ✅ Automatic trip detection (optional)

---

### Step 11.4: Expense Management & Receipt Scanning

**Status**: 🚧 Not started

**Prompt**:
```
Implement comprehensive expense tracking with camera-based receipt scanning, OCR text extraction, and offline support for the DriveGo mobile app.

REQUIREMENTS:
1. Install camera and OCR dependencies:
   - react-native-vision-camera for camera access
   - react-native-ml-kit for OCR (Google ML Kit)
   - react-native-image-picker for photo library access
   - react-native-fs for file operations
2. Create Camera Screen for Receipt Scanning:
   - Full-screen camera view
   - Auto-focus on receipt
   - Flash toggle
   - Capture button with haptic feedback
   - Gallery button to select existing photo
   - Crop/rotate interface after capture
   - OCR processing indicator (loading spinner)
   - Display extracted data with confidence scores
3. Implement OCR Service:
   - extractTextFromImage(imageUri): Promise<ExtractedData>
   - Parse receipt data:
     * Merchant name (pattern matching + ML)
     * Date (multiple format support)
     * Total amount (prioritize: balance, total, grand total)
     * Tax amount (GST/HST/Sales Tax)
     * Fuel quantity (liters/gallons) if gas station
     * Category detection (keywords: fuel, maintenance, insurance, etc.)
   - Handle low-quality images with retry/manual entry option
4. Build Add Expense Screen:
   - Camera button (primary action)
   - Manual entry option
   - Form fields:
     * Date picker (default: today)
     * Category dropdown (10 categories)
     * Amount input (currency formatted)
     * Tax amount input (auto-calculate from amount if possible)
     * Fuel quantity input (conditional for Fuel category)
     * Merchant name autocomplete
     * Description textarea
     * Tax deductible checkbox
     * Vehicle selector (optional, for vehicle-specific expenses)
   - Receipt image preview (if captured)
   - Save and Cancel buttons
5. Create Expenses List Screen:
   - List of expenses with date, category icon, merchant, amount
   - Filters:
     * Date range picker
     * Category filter (multi-select)
     * Tax deductible toggle
     * Search by merchant/description
   - Summary cards:
     * Total expenses
     * Tax deductible amount
     * Expenses by category (chart)
   - Swipe actions: Edit, Delete
   - Pull-to-refresh
   - Infinite scroll pagination
6. Build Expense Details Screen:
   - Full expense details
   - Receipt image (full screen on tap)
   - Edit button
   - Delete button (with confirmation)
   - Share receipt via email/messaging
   - Export single expense as PDF
7. Implement Merchants Management:
   - Merchant autocomplete in add expense
   - Recently used merchants
   - Favorite merchants
   - Add new merchant on the fly
8. Create Categories Configuration:
   - 10 default categories with icons:
     * Fuel (⛽)
     * Maintenance (🔧)
     * Insurance (🛡️)
     * Parking & Tolls (🅿️)
     * Car Wash (🧽)
     * Licensing & Fees (📋)
     * Phone & Internet (📱)
     * Office Supplies (📎)
     * Professional Services (💼)
     * Other (📦)
9. Implement offline support:
   - Save expenses locally when offline
   - Store receipt images in local cache
   - Sync to backend when online
   - Show sync status badge
   - Conflict resolution (last write wins)
10. Add bulk import feature:
    - CSV import from email/file
    - Map CSV columns to expense fields
    - Preview before import
    - Validation and error handling

BACKEND API ENDPOINTS:
- GET /api/expenses - List expenses with filters
- POST /api/expenses - Create expense
- GET /api/expenses/[id] - Get expense details
- PUT /api/expenses/[id] - Update expense
- DELETE /api/expenses/[id] - Delete expense
- GET /api/merchants - List merchants
- POST /api/merchants - Create merchant

DESIGN REQUIREMENTS:
- Large capture button for easy one-handed use
- Visual feedback during OCR processing
- Confidence indicators for extracted data (green/yellow/red)
- Allow manual correction of OCR data
- Receipt image compression for storage efficiency
- Camera preview with receipt boundary detection
- Haptic feedback on capture
- Dark mode support for camera screen
- Accessibility (VoiceOver/TalkBack support)

TECHNICAL CONSIDERATIONS:
- Request camera permissions properly (iOS/Android)
- Handle camera not available scenarios
- Optimize OCR for low-end devices
- Compress images before upload (< 2MB)
- Implement proper error handling for camera failures
- Use native image picker for gallery access
- Cache recent merchants for fast autocomplete
- Implement proper memory management for images
- Handle orientation changes during camera use

Please provide complete implementation with TypeScript, proper camera handling, efficient OCR processing, and offline-first architecture.
```

**Deliverables**:
- ✅ Camera-based receipt scanning
- ✅ OCR text extraction service
- ✅ Add expense screen with form
- ✅ Expenses list with filters
- ✅ Expense details screen
- ✅ Offline support with sync
- ✅ Merchant management

---

### Step 11.5: Income & Vehicle Management

**Status**: 🚧 Not started

**Prompt**:
```
Implement income tracking and vehicle management features for the DriveGo mobile app, allowing users to record rideshare earnings and manage their vehicle fleet.

REQUIREMENTS:

INCOME MANAGEMENT:
1. Create Add Income Screen:
   - Platform selector (Uber, Lyft, DoorDash, custom)
   - Date/Period picker (single day or week/month summary)
   - Earnings breakdown:
     * Gross earnings input
     * Fares input
     * Tips input
     * Bonuses input
     * Tolls reimbursement input
     * Other income input
   - Platform fees breakdown:
     * Service fee input
     * Booking fee input
     * Regulatory fee input
     * Airport fee input
     * Split fee input
     * Other fees input
   - GST/HST section:
     * GST collected from riders input
     * GST collected from platform input
     * GST paid on platform fees input
   - Trip statistics:
     * Number of trips input
     * Total distance input
     * Online hours input
   - Notes textarea
   - Auto-calculate net earnings (gross - fees)
   - Save button with validation
2. Create Income List Screen:
   - List of income entries with date, platform logo, net earnings
   - Filters:
     * Date range picker
     * Platform filter (multi-select)
     * Search by description
   - Summary cards:
     * Gross earnings
     * Total fees
     * Net earnings
     * GST/HST collected
     * Breakdown by platform (chart)
   - Swipe actions: Edit, Delete
   - Pull-to-refresh
   - Export option (CSV)
3. Build Income Details Screen:
   - Full breakdown of earnings and fees
   - Platform logo and name
   - Edit and Delete buttons
   - Share income summary
4. Implement Platform Management:
   - Add custom platforms
   - Set default platform
   - Platform logos/icons
   - Recent platforms quick access

VEHICLE MANAGEMENT:
1. Create Vehicles List Screen:
   - List of user vehicles with:
     * Photo (placeholder if not added)
     * Make, Model, Year
     * License plate
     * Current odometer reading
     * Status badge (Active/Inactive)
   - Add Vehicle button (FAB)
   - Tap to view details
   - Set primary vehicle indicator
2. Build Add/Edit Vehicle Screen:
   - Vehicle photo capture/upload
   - Make input (autocomplete with popular makes)
   - Model input (autocomplete based on make)
   - Year picker (1990-current year)
   - License plate input
   - VIN input (optional)
   - Starting odometer reading input
   - Current odometer reading input
   - Color picker
   - Purchase date picker
   - Purchase price input (optional, for asset tracking)
   - Vehicle type: Personal / Business / Both
   - Notes textarea
   - Active/Inactive toggle
   - Save button with validation
3. Create Vehicle Details Screen:
   - Vehicle photo (large)
   - All vehicle information display
   - Edit button
   - Delete button (with confirmation - check for linked trips/expenses)
   - Usage statistics:
     * Total trips
     * Total mileage
     * Total fuel expenses
     * Total maintenance expenses
   - Recent trips list
   - Recent expenses list
   - Set as primary vehicle button
4. Implement vehicle-specific features:
   - Link trips to vehicles
   - Link expenses to vehicles
   - Calculate per-vehicle profitability
   - Maintenance reminders (optional)
   - Fuel efficiency tracking (optional)
5. Create Vehicle Comparison View:
   - Side-by-side comparison of vehicles
   - Metrics: Total mileage, expenses, trips, profit
   - Charts for visual comparison

BACKEND API ENDPOINTS:
- GET /api/income - List income entries
- POST /api/income - Create income
- GET /api/income/[id] - Get income details
- PUT /api/income/[id] - Update income
- DELETE /api/income/[id] - Delete income
- GET /api/vehicles - List vehicles
- POST /api/vehicles - Create vehicle
- GET /api/vehicles/[id] - Get vehicle details
- PUT /api/vehicles/[id] - Update vehicle
- DELETE /api/vehicles/[id] - Delete vehicle

DESIGN REQUIREMENTS:
- Income: Green-themed for revenue
- Vehicles: Car icons and branded colors
- Large touch targets for inputs
- Smart defaults (platform from last entry, current date)
- Auto-save drafts
- Confirmation dialogs for deletions
- Loading states during API calls
- Success/error toast messages
- Dark mode support
- Smooth animations

TECHNICAL CONSIDERATIONS:
- Form validation with clear error messages
- Currency formatting based on locale
- Date formatting based on locale
- Autocomplete with debouncing
- Image compression for vehicle photos
- Cascade checks before vehicle deletion
- Proper state management (Redux)
- Offline support for income/vehicle creation
- Sync queue for offline entries

Please provide complete implementation with TypeScript, proper form validation, and efficient state management.
```

**Deliverables**:
- ✅ Income entry screens
- ✅ Income list with filters
- ✅ Platform management
- ✅ Vehicle CRUD screens
- ✅ Vehicle details with stats
- ✅ Vehicle comparison view

---

### Step 11.6: Reports & Analytics Dashboard

**Status**: 🚧 Not started

**Prompt**:
```
Implement comprehensive reports and analytics dashboard for the DriveGo mobile app, providing visual insights into business performance with charts, graphs, and exportable reports.

REQUIREMENTS:
1. Install charting library:
   - react-native-chart-kit or victory-native for charts
   - react-native-svg for custom visualizations
2. Create Dashboard Screen:
   - Current month summary cards:
     * Total income (with trend indicator)
     * Total expenses (with trend indicator)
     * Net profit (color-coded: green/red)
     * Business mileage (with trip count)
   - Year-to-date summary section
   - Quick charts:
     * Monthly income trend (6 months line chart)
     * Expenses by category (pie chart)
     * Income vs Expenses (bar chart)
   - Quick actions:
     * Add Trip button
     * Add Expense button
     * Add Income button
     * Scan Receipt button
   - Recent activity feed:
     * Last 5 trips
     * Last 5 expenses
     * Last 5 income entries
   - Refresh indicator (pull-to-refresh)
3. Build Reports Screen with tabs:
   - **Mileage Report Tab**:
     * Date range selector
     * Vehicle filter (multi-select)
     * Summary cards: Total trips, Business miles, Personal miles
     * Trip list with details
     * Export to CSV/PDF
     * Visual breakdown: Business vs Personal (pie chart)
   - **Expense Report Tab**:
     * Date range selector
     * Category filter (multi-select)
     * Tax deductible filter
     * Summary cards: Total expenses, Tax deductible, Top category
     * Expense list with details
     * Category breakdown (bar chart)
     * Export to CSV/PDF
   - **Income Report Tab**:
     * Date range selector
     * Platform filter (multi-select)
     * Summary cards: Gross, Fees, Net earnings
     * Income list with details
     * Platform breakdown (pie chart)
     * Export to CSV/PDF
   - **Profit & Loss Tab**:
     * Date range selector
     * Income section: By source with amounts
     * Expense section: By category with amounts
     * Net profit calculation
     * Profit margin percentage
     * GST/HST summary
     * Export to CSV/PDF
4. Create Tax Summary Screen:
   - Year selector (current and past years)
   - Overview cards:
     * Gross income
     * Total expenses
     * Net income
     * GST/HST owing/refund
   - Sections:
     * Business mileage summary (by vehicle)
     * Deductible expenses (by category with CRA line numbers)
     * Income breakdown (by source)
     * GST/HST reconciliation (collected, paid, net)
   - T2125 preview (read-only summary)
   - Export buttons:
     * Download T2125 CSV
     * Download GST/HST Return
     * Download Tax Packet ZIP
5. Implement Financial KPIs Screen:
   - Date range selector
   - KPI cards:
     * Gross Margin (%)
     * Operating Margin (%)
     * Profit Margin (%)
     * Average Revenue Per Trip
     * Average Expense Per Trip
     * Burn Rate (monthly)
     * Revenue Growth Rate (%)
     * Expense Ratio (%)
     * Asset Turnover
     * Net Take-Home (%)
   - Trend indicators (up/down arrows, colors)
   - Comparison with previous period
   - Charts for visualization
6. Create Trial Balance Screen:
   - Date selector
   - Account list grouped by type:
     * Assets
     * Liabilities
     * Equity
     * Revenue
     * Expenses
   - Debit/Credit columns
   - Total debits and credits
   - Balance validation indicator
   - Export to CSV
7. Build Income Statement Screen:
   - Date range selector
   - Sections:
     * Revenue (by source)
     * Cost of Sales (platform fees)
     * Gross Profit
     * Operating Expenses (by category)
     * EBITDA
     * Depreciation
     * Net Income
   - Export to PDF
8. Implement export functionality:
   - CSV export for all reports
   - PDF export with branding
   - Email reports directly
   - Save to device
   - Share via messaging apps

BACKEND API ENDPOINTS:
- GET /api/dashboard/stats - Dashboard statistics
- GET /api/reports/mileage - Mileage report
- GET /api/reports/expenses - Expense report
- GET /api/reports/income - Income report (if separate from /api/income)
- GET /api/reports/pl - P&L report
- GET /api/tax-summary?year=2024 - Tax summary
- GET /api/reports/trial-balance - Trial balance
- GET /api/reports/income-statement - Income statement
- GET /api/reports/financial-kpis - Financial KPIs
- GET /api/export/t2125?year=2024 - T2125 CSV
- GET /api/export/gst-hst?period=2024-Q1 - GST/HST return
- GET /api/export/tax-packet?year=2024 - Tax packet ZIP

DESIGN REQUIREMENTS:
- Charts with smooth animations
- Color-coded data (green for income, red for expenses)
- Interactive charts (tap for details)
- Responsive date range pickers
- Loading skeletons for charts
- Empty states with illustrations
- Filter chips for quick access
- Horizontal scroll for chart legends if needed
- Dark mode support for all charts
- Print-friendly layouts for exports

TECHNICAL CONSIDERATIONS:
- Cache chart data to avoid re-rendering
- Optimize large datasets (pagination, virtualization)
- Date range validation (end >= start)
- Handle zero data gracefully
- Format currency based on locale
- Format dates based on locale
- Implement proper error boundaries
- Show loading states during data fetch
- Handle API errors with retry option
- Efficient chart rendering (avoid re-renders)

Please provide complete implementation with TypeScript, interactive charts, proper data visualization, and export functionality.
```

**Deliverables**:
- ✅ Dashboard with summary cards
- ✅ Reports screen with multiple tabs
- ✅ Tax summary screen
- ✅ Financial KPIs dashboard
- ✅ Trial balance screen
- ✅ Income statement
- ✅ Export functionality (CSV/PDF)

---

### Step 11.7: Settings & Profile Management

**Status**: 🚧 Not started

**Prompt**:
```
Implement comprehensive settings and profile management screens for the DriveGo mobile app, including app preferences, account settings, subscription management, and support features.

REQUIREMENTS:
1. Create Main Settings Screen:
   - Profile section:
     * Avatar (tap to change photo)
     * Name and email
     * View/Edit profile button
   - Account Settings group:
     * Change Password
     * Email Preferences
     * Notification Settings
     * Biometric Authentication toggle
     * Auto-sync toggle
   - App Preferences group:
     * Theme: Light / Dark / System
     * Language selector
     * Currency selector
     * Distance Unit: Kilometers / Miles
     * Date Format: MM/DD/YYYY / DD/MM/YYYY
     * First Day of Week: Sunday / Monday
   - Data Management group:
     * Offline Data Storage (show used space)
     * Clear Cache
     * Export All Data
     * Sync Now button (with last sync time)
   - Subscription group:
     * Current Plan display
     * Usage statistics
     * Upgrade Plan button
     * Manage Subscription
   - Support & About group:
     * Help Center
     * Contact Support
     * FAQs
     * Privacy Policy
     * Terms of Service
     * About App (version, build number)
   - Logout button (with confirmation)
2. Build Profile Edit Screen:
   - Avatar upload/change (camera or gallery)
   - Name input
   - Email input (read-only, change requires verification)
   - Phone number input
   - Business name input
   - Tax ID / HST number input
   - Address fields (optional)
   - Save changes button
   - Cancel button
3. Create Change Password Screen:
   - Current password input
   - New password input (with strength indicator)
   - Confirm new password input
   - Password requirements display
   - Save button
   - Validation messages
4. Build Notification Settings Screen:
   - Enable/disable notifications toggle
   - Notification categories:
     * Trip reminders
     * Expense reminders
     * Income reminders
     * Tax deadlines
     * Sync notifications
     * Marketing emails
   - Quiet hours: Start time / End time
   - Save preferences
5. Create Subscription Management Screen:
   - Current plan card:
     * Plan name and price
     * Features list
     * Renewal date
     * Payment method
   - Usage statistics:
     * Expenses this month
     * Assets count
     * Storage used
   - Plan comparison table (Free vs Standard vs Pro)
   - Upgrade/Change plan buttons
   - Cancel subscription button
   - Billing history list
6. Build Help Center Screen:
   - Search bar for help articles
   - Categories:
     * Getting Started
     * Trip Tracking
     * Expense Management
     * Reports & Taxes
     * Troubleshooting
   - Popular articles list
   - Contact support button
7. Create Contact Support Screen:
   - Issue category selector
   - Subject input
   - Description textarea
   - Attach screenshots option
   - Send button
   - Previous support tickets list
8. Implement Data Management:
   - Calculate offline storage usage
   - Clear cache confirmation dialog
   - Export data functionality (ZIP with CSV files)
   - Force sync button
   - Show sync status and last sync time
9. Add About Screen:
   - App logo
   - App version and build number
   - Copyright information
   - Open source licenses
   - Links to website, social media
   - Rate app button (link to App Store/Play Store)
   - Share app button
10. Implement Account Deletion:
    - Delete account option (buried in settings)
    - Warning screen with consequences
    - Confirmation with password
    - Feedback form (optional)
    - API call to delete account
    - Logout and clear local data

BACKEND API ENDPOINTS:
- GET /api/user/profile - Get user profile
- PATCH /api/user/profile - Update profile
- POST /api/user/change-password - Change password
- GET /api/subscription/current - Get current subscription
- POST /api/subscription/cancel - Cancel subscription
- GET /api/subscription/usage - Get usage statistics
- POST /api/support/ticket - Create support ticket
- DELETE /api/user/account - Delete user account

DESIGN REQUIREMENTS:
- Grouped settings with section headers
- Icons for each setting item
- Toggle switches for boolean settings
- Chevron indicators for navigation items
- Destructive actions in red (delete, logout)
- Confirmation dialogs for important actions
- Loading states during API calls
- Success/error toast messages
- Dark mode support
- Accessibility (proper labels, contrast)

TECHNICAL CONSIDERATIONS:
- Persist app preferences locally (AsyncStorage)
- Secure password storage
- Validate inputs before API calls
- Handle network errors gracefully
- Cache profile data
- Implement proper logout (clear tokens, Redux state, local storage)
- Check subscription status before feature access
- Implement proper deep linking for support articles
- Handle app updates (show "Update Available" banner)
- Implement crash reporting (optional: Sentry)

Please provide complete implementation with TypeScript, proper form validation, and secure data handling.
```

**Deliverables**:
- ✅ Main settings screen
- ✅ Profile edit screen
- ✅ Change password screen
- ✅ Notification settings
- ✅ Subscription management
- ✅ Help center & support
- ✅ Data management
- ✅ About screen
- ✅ Account deletion

---

### Step 11.8: Push Notifications & Background Services

**Status**: 🚧 Not started

**Prompt**:
```
Implement push notifications, background services, and app lifecycle management for the DriveGo mobile app to enhance user engagement and provide timely reminders.

REQUIREMENTS:
1. Set up Firebase Cloud Messaging (FCM):
   - Install @react-native-firebase/app and @react-native-firebase/messaging
   - Configure iOS APNs certificates
   - Configure Android google-services.json
   - Request notification permissions
   - Handle permission states (granted, denied, provisional)
2. Implement notification service:
   - registerForPushNotifications(): Get FCM token
   - saveFCMTokenToBackend(token): Store token in database
   - handleNotificationReceived(notification): Process incoming notifications
   - handleNotificationOpened(notification): Navigate to relevant screen
   - scheduleLocalNotification(data): Schedule local notifications
   - cancelNotification(id): Cancel scheduled notification
3. Create notification types:
   - **Trip Reminders**:
     * "Start tracking your trip?" (when motion detected)
     * "Don't forget to end your trip" (if tracking > 8 hours)
   - **Expense Reminders**:
     * "Log today's expenses" (daily reminder at 8 PM)
     * "You have 3 unsynced expenses" (if offline expenses exist)
   - **Income Reminders**:
     * "Record this week's earnings" (weekly reminder)
   - **Tax Deadlines**:
     * "GST/HST return due in 7 days"
     * "T2125 deadline approaching"
   - **Sync Notifications**:
     * "Data synced successfully"
     * "Sync failed, retrying..."
   - **Achievement Notifications**:
     * "You've driven 1,000 business miles this month!"
4. Implement notification handlers:
   - Foreground: Show in-app banner
   - Background: Display system notification
   - Notification tap: Navigate to relevant screen with deep linking
   - Action buttons: Quick actions from notification (e.g., "Add Expense")
5. Create notification preferences:
   - Enable/disable per category
   - Set quiet hours (no notifications during sleep)
   - Notification sound selection
   - Vibration toggle
   - Badge count management
6. Implement background tasks:
   - Periodic data sync (every 15 minutes when online)
   - Auto-backup to cloud (nightly)
   - Background GPS tracking (if trip active)
   - Battery optimization strategies
   - Task cancellation on app termination
7. Set up deep linking:
   - Configure URL schemes (drivego://)
   - Handle universal links (https://drivego.app/...)
   - Parse deep link parameters
   - Navigate to screens with context:
     * drivego://trips/123 → Trip details
     * drivego://expenses/add → Add expense
     * drivego://reports/tax → Tax summary
8. Implement app lifecycle management:
   - App foreground: Resume sync, refresh data
   - App background: Pause non-critical tasks
   - App terminated: Save state, schedule background tasks
   - Handle app updates: Show changelog
9. Create in-app notification center:
   - Notification list screen
   - Unread count badge
   - Mark as read/unread
   - Clear all notifications
   - Notification categories filter
10. Add reminder scheduling:
    - Schedule daily expense reminder
    - Schedule weekly income reminder
    - Schedule tax deadline reminders
    - Schedule sync failure retries

BACKEND API ENDPOINTS:
- POST /api/notifications/register - Register FCM token
- DELETE /api/notifications/unregister - Remove FCM token
- GET /api/notifications/preferences - Get notification preferences
- PUT /api/notifications/preferences - Update preferences
- POST /api/notifications/send - Send push notification (admin only)

DESIGN REQUIREMENTS:
- Rich notifications with images/icons
- Notification categories with colors
- Sound/vibration patterns per category
- Badges on app icon (iOS) and in-app
- Custom notification layouts (Android)
- Interactive notifications with actions
- Quiet hours respect
- Dark mode notification styles

TECHNICAL CONSIDERATIONS:
- Handle iOS notification permissions properly
- Request permission at appropriate time (not on app launch)
- Handle Android notification channels
- Implement proper token refresh logic
- Store FCM token securely
- Handle notification token changes
- Implement exponential backoff for failed syncs
- Optimize battery usage for background tasks
- Test notifications on both platforms
- Handle notification limits (iOS: 64, Android: none)
- Implement proper error handling
- Log notification events for debugging

TESTING CHECKLIST:
- [ ] Notifications received when app is foreground
- [ ] Notifications received when app is background
- [ ] Notifications received when app is terminated
- [ ] Notification tap navigates correctly
- [ ] Action buttons work correctly
- [ ] Quiet hours respected
- [ ] Badge count updates correctly
- [ ] Deep links work from notifications
- [ ] Permission flow works on both platforms
- [ ] Background tasks execute correctly

Please provide complete implementation with TypeScript, proper permission handling, and battery-efficient background processing.
```

**Deliverables**:
- ✅ Push notification setup (FCM)
- ✅ Notification handlers
- ✅ Background services
- ✅ Deep linking
- ✅ App lifecycle management
- ✅ In-app notification center
- ✅ Reminder scheduling

---

### Step 11.9: Testing, Optimization & Deployment

**Status**: 🚧 Not started

**Prompt**:
```
Implement comprehensive testing, performance optimization, and production deployment for the DriveGo mobile apps (iOS & Android).

REQUIREMENTS:

TESTING:
1. Set up testing framework:
   - Jest for unit tests
   - React Native Testing Library for component tests
   - Detox for E2E tests
   - Configure test environments
2. Write unit tests:
   - API service layer (auth, trips, expenses, etc.)
   - Utility functions (distance calculation, date formatting, currency)
   - Redux reducers and actions
   - Form validation logic
   - OCR text extraction logic
   - Coverage target: 80%+
3. Write component tests:
   - Test rendering with different props
   - Test user interactions (button presses, input changes)
   - Test navigation flows
   - Test error states
   - Test loading states
4. Write E2E tests:
   - User registration flow
   - Login/logout flow
   - Create trip with GPS tracking
   - Add expense with receipt scanning
   - View and filter reports
   - Change user settings
   - Run on both iOS and Android simulators
5. Implement error tracking:
   - Install Sentry or similar
   - Configure error boundaries
   - Track JS errors
   - Track native crashes
   - Set up alerts for critical errors

PERFORMANCE OPTIMIZATION:
1. Optimize app performance:
   - Use React.memo for expensive components
   - Implement FlatList optimization (getItemLayout, keyExtractor)
   - Lazy load screens with React.lazy
   - Optimize images (compress, cache, progressive loading)
   - Use native driver for animations
   - Profile with React DevTools and Flipper
2. Optimize bundle size:
   - Remove unused dependencies
   - Use Hermes JavaScript engine
   - Enable ProGuard (Android)
   - Enable bitcode (iOS)
   - Analyze bundle with react-native-bundle-visualizer
3. Optimize network requests:
   - Implement request caching
   - Use pagination for lists
   - Implement request debouncing
   - Compress API responses (gzip)
   - Optimize image uploads (resize before upload)
4. Optimize storage:
   - Clean up old cache periodically
   - Limit local database size
   - Compress stored images
   - Remove orphaned data
5. Battery optimization:
   - Optimize GPS tracking frequency
   - Use geofencing instead of continuous tracking
   - Reduce background sync frequency
   - Batch network requests
   - Profile battery usage

SECURITY:
1. Implement security best practices:
   - Secure token storage (Keychain/Keystore)
   - Enable SSL pinning
   - Obfuscate code (ProGuard, minification)
   - Validate all inputs
   - Sanitize user data
   - Implement rate limiting
2. Add security checks:
   - Detect jailbreak/root
   - Prevent screenshots on sensitive screens
   - Implement biometric authentication timeout
   - Log suspicious activity
3. Code signing:
   - Set up iOS provisioning profiles
   - Configure Android keystore
   - Implement automatic code signing

BUILD & DEPLOYMENT:
1. iOS App Store deployment:
   - Create App Store Connect account
   - Set up app metadata (name, description, keywords, screenshots)
   - Configure app privacy details
   - Set up IAP (if subscription via app)
   - Create provisioning profiles
   - Build archive in Xcode
   - Upload to TestFlight for beta testing
   - Submit for App Store review
   - Prepare marketing materials
2. Android Play Store deployment:
   - Create Google Play Console account
   - Set up app listing (name, description, screenshots)
   - Configure app content rating
   - Create release APK/AAB
   - Upload to internal track for testing
   - Move to beta/production track
   - Submit for review
   - Prepare marketing materials
3. Set up CI/CD:
   - Configure Fastlane for automated builds
   - Set up GitHub Actions or similar:
     * Run tests on push
     * Build release on tag
     * Auto-deploy to TestFlight/Play Store beta
   - Implement version bumping automation
   - Set up changelog generation
4. Configure app analytics:
   - Install Firebase Analytics or Mixpanel
   - Track key user actions:
     * App opens
     * Trip created
     * Expense added
     * Report viewed
     * Subscription upgraded
   - Set up conversion funnels
   - Track retention metrics
   - Monitor crash-free rate
5. Prepare for launch:
   - Create app icons (all sizes)
   - Create splash screens
   - Prepare screenshots (all device sizes)
   - Write app descriptions
   - Create promotional graphics
   - Set up app website/landing page
   - Prepare press kit
   - Plan launch marketing campaign

BETA TESTING:
1. TestFlight setup (iOS):
   - Add internal testers (team)
   - Add external testers (users)
   - Configure test information
   - Distribute builds
   - Collect feedback
2. Play Console Internal Testing (Android):
   - Create internal testing track
   - Add internal testers
   - Distribute builds
   - Collect feedback
3. Feedback collection:
   - In-app feedback form
   - Bug reporting mechanism
   - User surveys
   - Analytics review
   - Crash reports analysis

POST-LAUNCH:
1. Monitor app health:
   - Track crash rate
   - Monitor API error rates
   - Review user reviews
   - Track performance metrics
   - Monitor user retention
2. Implement updates:
   - Fix critical bugs immediately
   - Plan feature updates
   - Respond to user feedback
   - A/B test new features
   - Regular dependency updates

DELIVERABLES:
- ✅ Complete test suite (unit, component, E2E)
- ✅ Error tracking setup
- ✅ Performance optimizations applied
- ✅ Security measures implemented
- ✅ iOS App Store listing and submission
- ✅ Android Play Store listing and submission
- ✅ CI/CD pipeline configured
- ✅ Analytics tracking implemented
- ✅ Beta testing completed
- ✅ Launch materials prepared

Please provide complete testing setup, optimization strategies, deployment scripts, and production readiness checklist.
```

**Deliverables**:
- ✅ Test suite (unit, component, E2E)
- ✅ Error tracking
- ✅ Performance optimizations
- ✅ Security hardening
- ✅ iOS deployment
- ✅ Android deployment
- ✅ CI/CD pipeline
- ✅ Analytics setup
- ✅ Beta testing

---

## Phase 11 Summary

**Timeline**: 4 weeks (11-14) for MVP mobile app

**Week 11**: Project setup, authentication, trip tracking
**Week 12**: Expense management, income & vehicles
**Week 13**: Reports, settings, notifications
**Week 14**: Testing, optimization, deployment

**Milestones**:
- Week 11 End: Users can log in and track trips
- Week 12 End: Users can manage expenses and income
- Week 13 End: Users can view reports and configure settings
- Week 14 End: Apps published on App Store and Play Store

**Post-Launch Roadmap**:
1. **Phase 11.5**: Widget support (iOS 14+, Android 12+)
2. **Phase 11.6**: Apple Watch & Wear OS apps
3. **Phase 11.7**: Siri Shortcuts & Google Assistant actions
4. **Phase 11.8**: CarPlay integration for safer trip tracking
5. **Phase 11.9**: Tablet optimization (iPad, Android tablets)
6. **Phase 11.10**: Advanced AI features (expense categorization, fraud detection)

**Success Metrics**:
- 1,000+ downloads in first month
- 4.0+ star rating on both stores
- 60%+ Day 7 retention rate
- <2% crash rate
- Average session duration: 5+ minutes

---

## Quick Reference: Mobile Development Commands

### Initial Setup
```powershell
# Navigate to parent folder
cd "C:\Users\nasee\Web and Software Development Course\Rideshare Project"

# Option 1: Create with Expo (Recommended for beginners)
npx create-expo-app drivego-mobile --template

# Option 2: Create with React Native CLI (More control)
npx react-native init DriveGoMobile --template react-native-template-typescript
cd DriveGoMobile
# Then rename folder to drivego-mobile
```

### React Native CLI
```powershell
# Navigate to mobile project
cd "C:\Users\nasee\Web and Software Development Course\Rideshare Project\drivego-mobile"

# Run on iOS
npx react-native run-ios

# Run on Android
npx react-native run-android

# Start Metro bundler
npx react-native start

# Clear cache
npx react-native start --reset-cache
```

### Expo CLI (Alternative)
```powershell
# Navigate to mobile project
cd "C:\Users\nasee\Web and Software Development Course\Rideshare Project\drivego-mobile"

# Start development server
npx expo start

# Build iOS
eas build --platform ios

# Build Android
eas build --platform android
```

### Testing
```powershell
# Run unit tests
npm test

# Run E2E tests
detox build -c ios.sim.debug
detox test -c ios.sim.debug

# Generate coverage
npm test -- --coverage
```

### Deployment
```powershell
# iOS build
cd ios; pod install; cd ..
npx react-native run-ios --configuration Release

# Android build
cd android; .\gradlew assembleRelease

# Fastlane iOS
fastlane ios beta

# Fastlane Android
fastlane android beta
```

---

## Additional Resources

**React Native Documentation**: https://reactnative.dev/
**Expo Documentation**: https://docs.expo.dev/
**Firebase**: https://rnfirebase.io/
**React Navigation**: https://reactnavigation.org/
**Redux Toolkit**: https://redux-toolkit.js.org/
**Fastlane**: https://fastlane.tools/

---

## Phase 10: Polish & Launch (Week 10)

### Step 10.1: Mobile Responsiveness
**Status**: 🟡 In Progress (Started December 8, 2025)

**Progress**:
- ✅ Mobile responsiveness audit completed
- ✅ Service Worker created with offline support
- ✅ Expenses page optimized for mobile (responsive cards, 44px touch targets)
- ✅ PWA manifest configured
- ✅ Install button component verified
- 🔄 Income page optimization in progress
- 🔄 Trips page optimization in progress
- 🔄 Table responsiveness (Ledger, Admin, Reports) in progress

**Deliverables**:
- ✅ `MOBILE_RESPONSIVENESS_AUDIT.md` - Comprehensive audit document
- ✅ `MOBILE_PROGRESS.md` - Implementation tracking document
- ✅ `public/sw.js` - Service Worker with caching and background sync
- ✅ Expenses page mobile-responsive with 44px touch targets
- 🔄 All remaining pages mobile-responsive
- 🔄 Real device testing (iOS/Android)
- 🔄 Performance optimization (Lighthouse > 90)

**Next**: Complete Income, Trips, and table-heavy pages, then test on real devices.

### Step 10.2: Testing & QA
**Status**: 🚧 Not started
**Prompt**: "Implement testing:
- Unit tests for utility functions
- API route tests
- E2E tests for critical flows (registration, trip logging, export)
- Load testing
- Security audit"

**Deliverables**:
- Test suite (Jest, Playwright)
- Test coverage report

### Step 10.3: Deployment
**Status**: 🚧 Not started
**Prompt**: "Deploy to production:
- Set up Vercel project
- Configure production database
- Set environment variables
- Configure domain and SSL
- Set up monitoring (Sentry, LogRocket)
- Create CI/CD pipeline"

**Deliverables**:
- Production deployment
- Monitoring setup
- CI/CD pipeline

---

## Quick Start Commands

### Initialize Project
```bash
# Create Next.js app
npx create-next-app@latest drivego --typescript --tailwind --app --src-dir

# Install dependencies
cd drivego
npm install prisma @prisma/client next-auth bcryptjs
npm install -D @types/bcryptjs

# Initialize Prisma
npx prisma init
```

### Development Workflow
```bash
# Start dev server
npm run dev

# Run Prisma migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# Seed database
npx prisma db seed
```
# Tests
---
npx tsc --noEmit
npm test
 
## Next Steps
Start with **Step 1.1** and work through each step sequentially. Use the prompts provided to implement each feature. After completing each step, test thoroughly before moving to the next.

Good luck! 🚀
