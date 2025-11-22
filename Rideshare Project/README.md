# 🚗 GigAssist — Rideshare Driver Financial Management System

> A comprehensive financial management platform for gig economy workers (rideshare and delivery drivers) to track income, expenses, vehicles, mileage, taxes, and reports across platforms like Uber, Lyft, DoorDash, and more.

- **Version:** 2.0  
- **Document Status:** Final — Ready for Implementation  
- **Last Updated:** January 2025

<p align="center">
  <img alt="build" src="https://img.shields.io/badge/build-passing-brightgreen?logo=github" />
  <img alt="version" src="https://img.shields.io/badge/version-2.0-blue" />
  <img alt="license" src="https://img.shields.io/badge/license-TBD-lightgrey" />
  <img alt="coverage" src="https://img.shields.io/badge/coverage-—-orange" />
</p>

---

## Table of Contents
- [Overview](#overview)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Status](#project-status)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Full Requirements (Raw)](#full-requirements-raw)

## Overview
GigAssist solves fragmented bookkeeping for gig workers by unifying earnings, expenses, mileage, and tax prep into one platform, with mobile-first workflows and IRS-compliant reporting.

**Target Users:**
- Rideshare and delivery drivers (single or multi-platform)
- Accountants/tax preparers (read-only access)
- Fleet managers

**Key Outcomes:**
- Save 10–15 hours/month on bookkeeping
- Maximize deductions and simplify Schedule C filing
- Understand true profitability and vehicle costs

## Core Features
- 💵 **Unified income tracking:** CSV/PDF imports, platform consolidation, analytics
- 🧾 **Expense management:** Receipt OCR, auto-categorization, templates
- 🚗 **Vehicle management:** Finance/lease tracking, depreciation, maintenance
- 📍 **Mileage tracking:** GPS-based auto-tracking, business/personal classification
- 🧮 **Tax support:** Quarterly estimators, deduction optimizer, form prep
- 📊 **Reporting:** P&L, platform breakdowns, depreciation schedules, exports
- 📂 **Document storage:** Full-text search, 7-year retention, secure sharing

## Tech Stack
- Backend: Node.js 20+, TypeScript, NestJS, Prisma, PostgreSQL, Redis, Bull
- Web: React 18, TypeScript, Vite, React Query, Zustand, Tailwind/shadcn
- Mobile: React Native, React Navigation, Encrypted Storage, Maps, Camera
- Storage/Infra: S3-compatible storage, CDN, Docker, CI/CD (GitHub Actions)

## Getting Started
This repository currently contains the product requirements document. Implementation code and setup instructions will be added in this project. When code is introduced, this section will include:
- Installation steps
- Environment configuration
- Database migrations and seeding
- Run scripts for API, Web, and Mobile

## Project Status
- Document Status: Final — Ready for Implementation
- Year 1 Success Metrics: 5,000 active users, 60% activation, 40% 30-day retention, 4.5★+ app ratings

## Roadmap
- MVP: Income/expense capture, mileage tracking, core reports
- Phase 2: Imports, OCR, accountant sharing, notifications
- Phase 3: Advanced tax tooling, multi-state support, forecasting

## Contributing
Contribution guidelines will be added once implementation begins. For now, feedback on requirements is welcome via issues/PRs.

## License
TBD

---

## Full Requirements (Raw)

<details>
<summary>🔽 Expand the complete requirements (very long)</summary>

<a id="full-requirements-raw"></a>

The detailed requirements document begins below. It will be progressively normalized into Markdown sections as the implementation advances.

---

Complete Requirements Documentation: GigAssist
Rideshare Driver Financial Management System
________________________________________
Document Information
Project Name: GigAssist
Version: 2.0
Last Updated: January 2025
Document Status: Final - Ready for Implementation
Prepared By: Development Team
________________________________________
Table of Contents
1.	Executive Summary
2.	Project Overview
3.	Technology Stack
4.	Functional Requirements
5.	Non-Functional Requirements
6.	Database Schema
7.	API Specifications
8.	User Interface Requirements
9.	Security Requirements
10.	Deployment Strategy
11.	Testing Requirements
12.	Project Timeline
13.	Budget Estimates
14.	Risk Management
15.	Future Enhancements
16.	Appendices
________________________________________
1. Executive Summary
1.1 Project Vision
GigAssist is a comprehensive financial management platform designed specifically for gig economy workers, particularly rideshare and delivery drivers. The platform addresses the unique challenges faced by independent contractors in managing their income, expenses, vehicle maintenance, tax obligations, and financial reporting.
1.2 Problem Statement
Gig economy workers face significant challenges:
•	Fragmented Income Tracking: Multiple platforms (Uber, Lyft, DoorDash, etc.)
•	Complex Tax Requirements: Self-employment taxes, quarterly payments, deductions
•	Vehicle Expense Management: Fuel, maintenance, depreciation tracking
•	Poor Record Keeping: Lost receipts, missing documentation
•	Limited Financial Visibility: Difficulty understanding profitability
•	Tax Filing Complexity: Schedule C preparation, mileage logs, depreciation
1.3 Solution Overview
GigAssist provides:
•	✅ Unified Income Tracking: Consolidate all platform earnings
•	✅ Automated Expense Management: Receipt scanning, OCR, categorization
•	✅ Smart Mileage Tracking: GPS-based automatic tracking (mobile)
•	✅ Vehicle Asset Management: Depreciation, maintenance, finance tracking
•	✅ Tax Preparation Support: IRS-compliant reports, deduction optimization
•	✅ Financial Insights: Profit/loss analysis, trends, forecasting
•	✅ Document Storage: Secure cloud storage with 7-year retention
•	✅ Multi-Platform Access: Web, iOS, and Android applications
1.4 Target Users
Primary Users:
•	Rideshare drivers (Uber, Lyft)
•	Delivery drivers (DoorDash, Uber Eats, Grubhub, Instacart)
•	Multi-platform gig workers
Secondary Users:
•	Accountants (read-only access to client data)
•	Tax preparers
•	Fleet managers
1.5 Key Benefits
For Drivers:
•	Save 10-15 hours/month on bookkeeping
•	Maximize tax deductions (average $3,000-$5,000 additional savings)
•	Simplify tax filing process
•	Understand true profitability
•	Track vehicle health and maintenance
For Business:
•	Large addressable market (5+ million gig workers in US)
•	Recurring revenue model (subscription-based)
•	Low customer acquisition cost (organic growth, referrals)
•	High customer lifetime value (yearly retention)
•	Scalable technology platform
1.6 Success Metrics
Year 1 Goals:
•	5,000 active users
•	60% user activation rate
•	40% 30-day retention
•	4.5+ star rating (app stores)
•	50+ five-star reviews
•	$50 customer acquisition cost
•	$200+ customer lifetime value
________________________________________
2. Project Overview
2.1 Project Name
GigAssist - Your Financial Co-Pilot for the Gig Economy
2.2 Tagline Options
•	"Your Financial Co-Pilot for the Gig Economy"
•	"Smart Finance for Gig Drivers"
•	"Track. Save. Succeed."
•	"Drive Smart. Earn More."
2.3 Core Features
2.3.1 Revenue Management
•	Manual revenue entry with detailed fields
•	Automated import from platform reports (CSV, Excel, PDF)
•	Multi-platform support (Uber, Lyft, DoorDash, etc.)
•	Revenue analytics and trends
•	Platform comparison
•	Tips tracking
•	Bonus/incentive tracking
2.3.2 Expense Management
•	Quick expense entry (mobile-optimized)
•	Receipt scanning with OCR
•	Automatic categorization
•	Recurring expense setup
•	Vendor management
•	Payment method tracking
•	Tax-deductible flagging
2.3.3 Vehicle Management
•	Multiple vehicle support
•	Acquisition tracking (purchase, finance, lease)
•	Depreciation calculation (MACRS, Section 179, Bonus)
•	Maintenance scheduling and tracking
•	Fuel logging
•	Repair history
•	Vehicle valuation
2.3.4 Mileage Tracking
•	GPS-based automatic tracking (mobile)
•	Manual trip logging
•	Business vs. personal classification
•	IRS-compliant mileage logs
•	Standard mileage vs. actual expense comparison
•	Route visualization
•	Annual mileage summaries
2.3.5 Tax Management
•	Quarterly estimated tax calculator
•	Tax payment tracking
•	Filing deadline reminders
•	Tax deduction optimizer
•	Form preparation assistance (Schedule C, Form 4562)
•	Tax news and updates
•	Multi-state support
2.3.6 Document Management
•	Secure cloud storage
•	Multiple file type support (PDF, Excel, images, etc.)
•	OCR text extraction
•	Category-based organization
•	Full-text search
•	7-year retention
•	Easy sharing with accountants
2.3.7 Financial Reporting
•	Income statements (P&L)
•	Expense reports by category
•	Revenue reports by platform
•	Tax summary reports
•	Depreciation schedules
•	Vehicle cost analysis
•	Customizable date ranges
•	Export to PDF, Excel, CSV
2.4 Platform Support
2.4.1 Web Application
•	Technology: React 18+ with TypeScript
•	Responsive Design: Mobile, tablet, desktop
•	Progressive Web App: Offline support
•	Browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
2.4.2 iOS Application
•	Technology: React Native with TypeScript
•	Minimum Version: iOS 14.0+
•	Devices: iPhone, iPad
•	Features: Native integrations (Face ID, Camera, GPS, Siri Shortcuts)
2.4.3 Android Application
•	Technology: React Native with TypeScript
•	Minimum Version: Android 8.0 (API 26)
•	Devices: Phones, tablets
•	Features: Native integrations (Fingerprint, Camera, GPS, Quick Settings)
2.5 Unique Selling Propositions (USPs)
1.	Built Specifically for Gig Workers: Unlike generic accounting software
2.	Automated Mileage Tracking: GPS-based, zero manual effort
3.	Multi-Platform Revenue Consolidation: See all earnings in one place
4.	Tax-Optimized: Maximize deductions, minimize liability
5.	Mobile-First: Designed for on-the-go usage
6.	Affordable: Fraction of accountant costs
7.	IRS-Compliant: All reports meet IRS requirements
8.	Vehicle-Centric: Comprehensive vehicle asset management
________________________________________
3. Technology Stack
3.1 Backend Technology
3.1.1 Core Technologies
javascript
{
  "runtime": "Node.js 20+ LTS",
  "language": "TypeScript 5+",
  "framework": "NestJS 10+",
  "database": "PostgreSQL 15+",
  "orm": "Prisma 5+",
  "cache": "Redis 7+",
  "queue": "Bull 4+"
}
3.1.2 Key Backend Dependencies
json
{
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/jwt": "^10.0.0",
    "@nestjs/passport": "^10.0.0",
    "@nestjs/config": "^3.0.0",
    "@nestjs/bull": "^10.0.0",
    "@prisma/client": "^5.0.0",
    "prisma": "^5.0.0",
    "passport-jwt": "^4.0.1",
    "passport-google-oauth20": "^2.0.0",
    "bcrypt": "^5.1.0",
    "class-validator": "^0.14.0",
    "redis": "^4.6.0",
    "bull": "^4.11.0",
    "aws-sdk": "^2.1400.0",
    "multer": "^1.4.5-lts.1",
    "sharp": "^0.32.0",
    "tesseract.js": "^4.1.0",
    "pdf-parse": "^1.1.1",
    "xlsx": "^0.18.5",
    "nodemailer": "^6.9.0",
    "winston": "^3.10.0"
  }
}
3.2 Frontend Technology
3.2.1 Web Application
javascript
{
  "framework": "React 18.2+",
  "language": "TypeScript 5+",
  "build": "Vite 5+",
  "routing": "React Router 6+",
  "state": "Zustand 4+ / React Query 5+",
  "ui": "Tailwind CSS 3+ / shadcn/ui",
  "forms": "React Hook Form 7+",
  "validation": "Zod 3+",
  "charts": "Recharts 2+"
}
3.2.2 Web Dependencies
json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.1.0",
    "@tanstack/react-query": "^5.0.0",
    "zustand": "^4.4.0",
    "axios": "^1.5.0",
    "react-hook-form": "^7.46.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "date-fns": "^2.30.0",
    "recharts": "^2.8.0",
    "lucide-react": "^0.279.0",
    "tailwindcss": "^3.3.0",
    "class-variance-authority": "^0.7.0"
  }
}
3.3 Mobile Application
3.3.1 React Native Stack
javascript
{
  "framework": "React Native 0.72+",
  "language": "TypeScript 5+",
  "navigation": "React Navigation 6+",
  "state": "Zustand 4+ / React Query 5+",
  "ui": "React Native Paper 5+ / NativeBase",
  "forms": "React Hook Form 7+",
  "storage": "React Native Encrypted Storage"
}
3.3.2 Mobile Dependencies
json
{
  "dependencies": {
    "react-native": "0.72.0",
    "@react-navigation/native": "^6.1.0",
    "@react-navigation/bottom-tabs": "^6.5.0",
    "@tanstack/react-query": "^5.0.0",
    "zustand": "^4.4.0",
    "axios": "^1.5.0",
    "react-hook-form": "^7.46.0",
    "zod": "^3.22.0",
    "@react-native-async-storage/async-storage": "^1.19.0",
    "react-native-keychain": "^8.1.0",
    "react-native-encrypted-storage": "^4.0.3",
    "react-native-maps": "^1.7.1",
    "react-native-geolocation-service": "^5.3.1",
    "react-native-vision-camera": "^3.0.0",
    "react-native-document-picker": "^9.0.1",
    "react-native-fs": "^2.20.0",
    "react-native-paper": "^5.10.0"
  }
}
3.4 Database & Storage
3.4.1 Primary Database
•	PostgreSQL 15+: Relational data, transactions, user data
•	Features: ACID compliance, JSONB support, full-text search
•	Extensions: pg_trgm (fuzzy search), pgcrypto (encryption)
3.4.2 Cache Layer
•	Redis 7+: Session storage, API caching, job queues
•	Features: Sub-millisecond performance, pub/sub, persistence
3.4.3 File Storage
•	Cloud Storage: AWS S3 / DigitalOcean Spaces / Azure Blob
•	CDN: CloudFlare or AWS CloudFront
•	Encryption: AES-256 at rest, TLS 1.3 in transit
3.5 Third-Party Services
3.5.1 Authentication
•	JWT-based authentication
•	Google OAuth 2.0
•	Apple Sign-In
•	Bcrypt password hashing
3.5.2 Notifications
•	Push Notifications: 
o	iOS: Apple Push Notification Service (APNs)
o	Android: Firebase Cloud Messaging (FCM)
•	Email: SendGrid or Amazon SES
•	SMS (optional): Twilio
3.5.3 OCR & Document Processing
•	Tesseract.js: Open-source OCR
•	Google Cloud Vision API: Advanced OCR (optional premium)
•	PDF Processing: pdf-parse, pdf-lib
3.5.4 Analytics & Monitoring
•	Mobile Analytics: Firebase Analytics
•	Error Tracking: Sentry
•	Application Monitoring: New Relic / Datadog / self-hosted Grafana
•	Uptime Monitoring: UptimeRobot
3.6 Development & Deployment
3.6.1 Version Control
•	Git: GitHub or GitLab
•	Branching: GitFlow (main, develop, feature/, bugfix/, hotfix/*)
3.6.2 CI/CD
•	Pipeline: GitHub Actions / GitLab CI
•	Automation: Build, test, lint, deploy
•	Environments: Development, Staging, Production
3.6.3 Containerization
•	Docker: Container images
•	Docker Compose: Local development
3.6.4 Hosting Options
Budget-Friendly (Year 1):
•	DigitalOcean: $30-100/month 
o	App Platform: Managed Node.js
o	Managed PostgreSQL
o	Spaces: S3-compatible storage
Scalable (Year 2+):
•	AWS: $50-500/month 
o	EC2 or ECS for compute
o	RDS for PostgreSQL
o	S3 for storage
o	CloudFront CDN
3.7 Why This Stack?
3.7.1 Cost Efficiency 💰
•	PostgreSQL: Free, open-source (vs. MSSQL $1,800-$12,000/year)
•	Node.js: Free, no licensing costs
•	React Native: One codebase for iOS + Android
•	Linux Hosting: 30-50% cheaper than Windows
•	Total Year 1 Savings: $2,000-$10,000+
3.7.2 Developer Productivity 🚀
•	TypeScript Everywhere: Type safety across stack
•	JavaScript/TypeScript: Same language for frontend, backend, mobile
•	Rich Ecosystem: npm has 2M+ packages
•	Fast Development: Rapid prototyping and iteration
•	Easy Hiring: JavaScript is most popular language
3.7.3 Performance ⚡
•	Node.js: Excellent for I/O-heavy operations (APIs)
•	PostgreSQL: Handles millions of records efficiently
•	React Native: Near-native mobile performance
•	Redis: Sub-millisecond caching
3.7.4 Scalability 📈
•	Horizontal Scaling: Easy to add more servers
•	Microservices Ready: Can split into services later
•	Database Replication: PostgreSQL supports read replicas
•	Proven at Scale: Used by Netflix, LinkedIn, PayPal
________________________________________
4. Functional Requirements
4.1 User Management
4.1.1 User Registration & Authentication
Registration:
•	Email and password registration
•	Email verification required
•	Password requirements: 
o	Minimum 8 characters
o	At least one uppercase letter
o	At least one lowercase letter
o	At least one number
o	Special character recommended
•	Terms of service acceptance
•	Privacy policy acknowledgment
Social Authentication:
•	Google Sign-In (OAuth 2.0)
•	Apple Sign-In (required for iOS)
•	Account linking (connect social account to existing email account)
Login:
•	Email and password
•	Social login (Google, Apple)
•	"Remember Me" option (30-day session)
•	Failed login tracking (5 attempts → 15-minute lockout)
Password Management:
•	Forgot password (email reset link)
•	Password reset with token (24-hour expiration)
•	Change password (requires current password)
•	Password history (prevent reuse of last 5 passwords)
Two-Factor Authentication (2FA):
•	TOTP-based (Time-based One-Time Password)
•	QR code generation for authenticator apps
•	Backup codes (10 single-use codes)
•	Optional SMS-based 2FA (premium feature)
Biometric Authentication (Mobile):
•	Face ID (iOS)
•	Touch ID (iOS)
•	Fingerprint (Android)
•	Fallback to PIN/password
•	Biometric token stored in Keychain/Keystore
Session Management:
•	JWT access token (15-minute expiration)
•	Refresh token (7-day expiration, sliding window)
•	Multiple device support
•	Device management (view/remove devices)
•	Force logout on password change
•	Automatic timeout after 30 minutes of inactivity
4.1.2 User Profile
Personal Information:
typescript
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string; // Primary identifier
  phoneNumber?: string;
  profilePhoto?: string; // URL to uploaded photo
  dateOfBirth?: Date;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}
Business Information:
typescript
interface BusinessInfo {
  businessName?: string;
  ein?: string; // Employer Identification Number
  businessStructure?: 'Sole Proprietor' | 'LLC' | 'S-Corp' | 'C-Corp' | 'Partnership';
  businessAddress?: Address;
  industryType: 'Rideshare' | 'Delivery' | 'Both' | 'Other';
  startDate?: Date;
}
Tax Information:
typescript
interface TaxInfo {
  filingStatus: 'Single' | 'Married Filing Jointly' | 'Married Filing Separately' | 'Head of Household';
  taxState: string; // State code (e.g., 'CA', 'NY')
  additionalStates?: string[]; // For multi-state workers
  estimatedTaxFrequency: 'Quarterly' | 'Annually';
  federalWithholding?: number;
  stateWithholding?: number;
}
Profile Management:
•	Edit personal information
•	Upload/change profile photo
•	Update business information
•	Manage tax settings
•	Update notification preferences
•	Privacy settings (data sharing, analytics opt-out)
4.1.3 User Preferences
Notification Preferences:
typescript
interface NotificationPreferences {
  pushNotifications: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  notificationTypes: {
    taxDeadlines: boolean;
    maintenanceDue: boolean;
    weeklyReports: boolean;
    monthlyReports: boolean;
    lowProfitAlerts: boolean;
    milestoneAchievements: boolean;
  };
}
Display Preferences:
typescript
interface DisplayPreferences {
  darkModeEnabled: boolean;
  language: 'en' | 'es'; // English, Spanish (future)
  dateFormat: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD';
  currency: 'USD' | 'CAD' | 'EUR'; // Future multi-currency
  firstDayOfWeek: 0 | 1; // 0 = Sunday, 1 = Monday
  timeFormat: '12h' | '24h';
}
App Preferences:
typescript
interface AppPreferences {
  defaultDashboardView: 'weekly' | 'monthly' | 'yearly';
  autoMileageTracking: boolean;
  mileageUnit: 'miles' | 'kilometers';
  defaultExpenseCategory?: string;
  quickEntryEnabled: boolean;
  offlineMode: boolean;
}
4.1.4 Account Management
Data Export:
•	Export all user data (GDPR/CCPA compliance)
•	Format: JSON, CSV, PDF
•	Includes: Profile, transactions, documents, reports
•	Generated on-demand
•	Download link sent via email (24-hour expiration)
Account Deletion:
•	Soft delete: 30-day grace period (recoverable)
•	Hard delete: Permanent after 30 days
•	Data retention: Backups purged after 90 days
•	Tax records: User notified to export (7-year retention recommended)
•	Confirmation required (email verification + password)
Data Portability:
•	Export to compatible formats
•	API access for data retrieval
•	Migration assistance (import from competitors)
________________________________________
4.2 Revenue Management
4.2.1 Manual Revenue Entry
Entry Form Fields:
typescript
interface RevenueEntry {
  // Required Fields
  date: Date;
  platform: PlatformType;
  grossEarnings: number;
  netEarnings: number;
  
  // Optional Fields
  time?: string; // HH:MM format
  platformFees?: number; // Auto-calculated: gross - net
  tips?: number;
  bonuses?: number;
  distance?: number; // Miles or kilometers
  hoursWorked?: number;
  numTrips?: number;
  vehicleId?: string; // Link to vehicle
  notes?: string;
  
  // Metadata
  createdFrom: 'web' | 'ios' | 'android';
  syncStatus: 'pending' | 'synced' | 'conflict';
}

type PlatformType = 
  | 'Uber'
  | 'Lyft'
  | 'DoorDash'
  | 'Uber Eats'
  | 'Grubhub'
  | 'Instacart'
  | 'Postmates'
  | 'Amazon Flex'
  | 'Shipt'
  | 'Roadie'
  | 'Other';
Quick Entry Mode (Mobile):
•	Simplified form with essential fields only
•	Recent platform pre-selected
•	Default values from last entry
•	Voice input for amounts
•	One-tap save
Bulk Entry:
•	Enter multiple trips at once
•	Duplicate previous entry with date change
•	Weekly summary entry (total for week)
Entry Validation:
•	Net earnings ≤ Gross earnings
•	Platform fees = Gross - Net (auto-calculated)
•	Date not in future
•	Required fields validation
•	Duplicate detection (same date, time, amount, platform)
4.2.2 Automated Revenue Import
Supported Platforms & Formats:
Platform	Supported Formats	Import Method
Uber	CSV, PDF, Excel	File upload
Lyft	CSV, PDF	File upload
DoorDash	CSV, Excel	File upload
Uber Eats	CSV, PDF	File upload
Grubhub	CSV, Excel	File upload
Instacart	CSV	File upload
Amazon Flex	PDF	File upload + OCR
Postmates	CSV	File upload
Import Process:
1.	File Upload: 
o	Web: Drag-and-drop or file picker
o	Mobile: Camera (photo of report), file picker, cloud storage, share sheet
2.	File Parsing:
typescript
   interface ImportJob {
     jobId: string;
     userId: string;
     fileName: string;
     fileType: 'csv' | 'excel' | 'pdf' | 'json';
     platform: PlatformType;
     status: 'pending' | 'processing' | 'completed' | 'failed';
     totalRecords: number;
     processedRecords: number;
     successCount: number;
     errorCount: number;
     duplicateCount: number;
     errors: ImportError[];
     createdAt: Date;
     completedAt?: Date;
   }
   
   interface ImportError {
     row: number;
     field: string;
     error: string;
     value?: string;
   }
3.	Data Validation: 
o	Required field validation
o	Data type validation
o	Date range validation
o	Amount validation (positive numbers)
o	Platform-specific validation
4.	Duplicate Detection: 
o	Check for existing records with same: 
	Date
	Platform
	Amount (within $0.10)
	Trip ID (if available)
o	User options: 
	Skip duplicates
	Replace existing
	Keep both
5.	Preview & Confirmation: 
o	Show first 10 records
o	Display summary: 
	Total records: X
	New records: Y
	Duplicates: Z
	Errors: A
o	Allow user to review and approve
6.	Import Execution: 
o	Background job processing
o	Progress updates via WebSocket/SSE
o	Email notification on completion
Column Mapping:
•	Automatic mapping for known formats
•	Manual mapping for custom formats
•	Save mapping templates for reuse
OCR for PDF Reports:
•	Extract text from PDF using Tesseract.js or Google Cloud Vision
•	Parse structured data: 
o	Date patterns
o	Currency amounts
o	Trip IDs
o	Totals
•	Confidence scoring
•	Manual review for low-confidence extractions
4.2.3 Revenue Tracking & Analytics
Summary Views:
typescript
interface RevenueSummary {
  period: 'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom';
  dateRange: { start: Date; end: Date };
  
  totals: {
    grossEarnings: number;
    platformFees: number;
    netEarnings: number;
    tips: number;
    bonuses: number;
    totalDistance: number;
    totalHours: number;
    totalTrips: number;
  };
  
  averages: {
    perTrip: number;
    perHour: number;
    perMile: number;
    perDay: number;
  };
  
  comparison: {
    previousPeriod: number; // Percentage change
    yearOverYear: number;
  };
}
Platform Breakdown:
typescript
interface PlatformRevenue {
  platform: PlatformType;
  grossEarnings: number;
  netEarnings: number;
  percentage: number; // Of total revenue
  trips: number;
  averagePerTrip: number;
  trend: 'up' | 'down' | 'stable';
  trendPercentage: number;
}
Revenue Charts:
•	Line Chart: Daily/weekly/monthly revenue trends
•	Bar Chart: Platform comparison
•	Pie Chart: Revenue by platform (percentage)
•	Area Chart: Cumulative revenue over time
•	Heatmap: Revenue by day of week and hour
Peak Analysis:
typescript
interface PeakAnalysis {
  bestEarningDay: {
    date: Date;
    earnings: number;
  };
  bestEarningWeek: {
    weekStart: Date;
    earnings: number;
  };
  bestEarningMonth: {
    month: string; // 'YYYY-MM'
    earnings: number;
  };
  bestPlatform: {
    platform: PlatformType;
    averagePerTrip: number;
  };
  peakHours: {
    hour: number; // 0-23
    averageEarnings: number;
  }[];
  peakDays: {
    dayOfWeek: string;
    averageEarnings: number;
  }[];
}
Tips Analysis:
typescript
interface TipsAnalysis {
  totalTips: number;
  tipsPercentageOfRevenue: number;
  averageTipPerTrip: number;
  cashTips: number;
  appTips: number;
  tipsByPlatform: {
    platform: PlatformType;
    totalTips: number;
    averageTip: number;
    tipsPercentage: number;
  }[];
  tipsOverTime: {
    date: Date;
    amount: number;
  }[];
}
Goal Tracking:
typescript
interface RevenueGoal {
  goalId: string;
  type: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  targetAmount: number;
  currentAmount: number;
  progress: number; // Percentage
  remainingAmount: number;
  daysRemaining: number;
  onTrack: boolean;
  projectedAmount: number; // Based on current pace
  startDate: Date;
  endDate: Date;
}
Mobile-Specific Features:
•	Home Screen Widget: Today's earnings, week-to-date
•	Quick Stats: Swipeable cards with key metrics
•	Push Notification: Daily earnings summary
•	Siri Shortcut: "Hey Siri, what did I earn today?"
________________________________________
4.3 Expense Management
4.3.1 General Expense Entry
Expense Entry Form:
typescript
interface ExpenseEntry {
  // Required Fields
  date: Date;
  category: ExpenseCategory;
  description: string;
  amount: number;
  
  // Optional Fields
  time?: string;
  paymentMethod?: PaymentMethod;
  isTaxDeductible?: boolean; // Default: true
  businessUsePercentage?: number; // Default: 100
  vendorName?: string;
  vehicleId?: string; // Link to specific vehicle
  receiptDocumentId?: string; // Link to uploaded receipt
  location?: {
    latitude: number;
    longitude: number;
    name: string; // e.g., "Shell Gas Station"
  };
  notes?: string;
  
  // Recurring Expense
  isRecurring?: boolean;
  recurrenceRule?: RecurrenceRule;
  
  // Metadata
  createdFrom: 'web' | 'ios' | 'android';
  syncStatus: 'pending' | 'synced' | 'conflict';
}

type ExpenseCategory = 
  // Vehicle & Fuel
  | 'Fuel - Gasoline'
  | 'Fuel - Diesel'
  | 'Fuel - Electric Charging'
  | 'Car Wash'
  | 'Car Detailing'
// Maintenance & Repairs | 'Oil Change' | 'Tire Rotation' | 'Tire Replacement' | 'Brake Service' | 'Battery Replacement' | 'General Maintenance' | 'Repairs' | 'Vehicle Inspection'
// Insurance & Licensing | 'Auto Insurance' | 'Rideshare Insurance' | 'Vehicle Registration' | 'Driver License Renewal' | 'Business License'
// Phone & Internet | 'Phone Bill' | 'Data Plan' | 'Hotspot/Internet'
// Supplies & Tools | 'Phone Mount' | 'Chargers/Cables' | 'Cleaning Supplies' | 'Water/Snacks for Passengers' | 'Safety Equipment' | 'Tools'
// Professional Services | 'Accounting/Bookkeeping' | 'Legal Services' | 'Tax Preparation'
// Parking & Tolls | 'Parking Fees' | 'Toll Roads' | 'Airport Fees'
// Other | 'Uniforms/Clothing' | 'Roadside Assistance' | 'DMV Fees' | 'Bank Fees' | 'Other';
type PaymentMethod = | 'Cash' | 'Credit Card' | 'Debit Card' | 'Bank Transfer' | 'PayPal' | 'Venmo' | 'Zelle' | 'Check' | 'Other';
interface RecurrenceRule { frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly' | 'yearly'; interval: number; // e.g., every 2 weeks startDate: Date; endDate?: Date; occurrences?: number; // Total number of occurrences daysOfWeek?: number[]; // For weekly: [0,1,2,3,4,5,6] dayOfMonth?: number; // For monthly: 1-31 }

**Quick Expense Entry (Mobile)**:
- Large category icons (tap to select)
- Amount input with numeric keyboard
- Recent vendors autocomplete
- GPS auto-detects location
- One-tap to add receipt photo
- Voice input for description
- Save button (large, prominent)

**Expense Templates**:
```typescript
interface ExpenseTemplate {
  templateId: string;
  name: string;
  category: ExpenseCategory;
  defaultAmount?: number;
  defaultVendor?: string;
  defaultPaymentMethod?: PaymentMethod;
  isTaxDeductible: boolean;
  businessUsePercentage: number;
  notes?: string;
}
```

Common templates:
- "Gas Fill-up" (category: Fuel, payment: Credit Card)
- "Car Wash" (category: Car Wash, amount: $15)
- "Monthly Phone Bill" (category: Phone Bill, recurring: monthly)
- "Insurance Payment" (category: Auto Insurance, recurring: monthly)

**Bulk Operations**:
- Select multiple expenses (checkbox)
- Bulk actions:
  - Change category
  - Add/remove tags
  - Mark as tax-deductible
  - Change payment method
  - Delete
  - Export

**Expense Validation**:
- Amount must be positive
- Date not in future
- Category required
- Receipt recommended for amounts > $75
- Vendor name suggested for known locations

#### 4.3.2 Receipt Scanning & OCR

**Receipt Capture (Mobile)**:
```typescript
interface ReceiptCapture {
  // Camera Settings
  flashMode: 'auto' | 'on' | 'off';
  cameraType: 'back' | 'front'; // Default: back
  
  // Capture Features
  autoEdgeDetection: boolean;
  perspectiveCorrection: boolean;
  contrastEnhancement: boolean;
  multiPageMode: boolean; // For multi-page receipts
  
  // Preview
  showPreview: boolean;
  allowRetake: boolean;
  allowCrop: boolean;
  allowRotate: boolean;
}
```

**OCR Processing**:
```typescript
interface OCRResult {
  documentId: string;
  status: 'processing' | 'completed' | 'failed';
  confidence: number; // 0-100
  
  extractedData: {
    merchantName?: string;
    date?: Date;
    time?: string;
    totalAmount?: number;
    subtotal?: number;
    tax?: number;
    paymentMethod?: string;
    lastFourDigits?: string; // Card number
    
    lineItems?: {
      description: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
    }[];
    
    rawText: string; // Full OCR text
  };
  
  suggestions: {
    category?: ExpenseCategory;
    vendor?: string;
    confidence: number;
  };
  
  processingTime: number; // milliseconds
}
```

**OCR Workflow**:
1. **Capture**: Take photo with camera or select from gallery
2. **Enhance**: Auto-adjust brightness, contrast, perspective
3. **Upload**: Send to server (compressed)
4. **Process**: Run OCR (Tesseract.js or Google Cloud Vision)
5. **Extract**: Parse structured data (regex patterns)
6. **Validate**: Confidence scoring
7. **Suggest**: Auto-fill expense form
8. **Review**: User confirms/edits data
9. **Save**: Create expense record with linked receipt

**OCR Accuracy Improvements**:
- Pre-process images (grayscale, denoise, sharpen)
- Receipt-specific training data
- Fuzzy matching for merchant names
- Date parser (multiple formats)
- Currency extraction (regex: `$\d+\.\d{2}`)
- Learn from user corrections

**Multiple Receipt Support**:
- Batch upload (up to 10 receipts)
- Process in background (job queue)
- Progress indicator
- Notifications when complete

#### 4.3.3 Expense Analytics

**Expense Summary**:
```typescript
interface ExpenseSummary {
  period: DateRange;
  
  totals: {
    totalExpenses: number;
    taxDeductible: number;
    nonDeductible: number;
    businessPercentage: number; // Weighted average
  };
  
  byCategory: {
    category: ExpenseCategory;
    amount: number;
    percentage: number; // Of total
    count: number;
    averageAmount: number;
    trend: 'up' | 'down' | 'stable';
  }[];
  
  byPaymentMethod: {
    method: PaymentMethod;
    amount: number;
    percentage: number;
  }[];
  
  byVehicle: {
    vehicleId: string;
    vehicleName: string;
    amount: number;
    percentage: number;
  }[];
  
  topExpenses: {
    description: string;
    amount: number;
    date: Date;
    category: ExpenseCategory;
  }[];
  
  comparison: {
    previousPeriod: number; // Percentage change
    yearOverYear: number;
  };
}
```

**Expense Trends**:
- Monthly expense comparison (bar chart)
- Category trends over time (line chart)
- Expense breakdown (pie chart)
- Running total (area chart)
- Heatmap (day of week × category)

**Budget Tracking** (Optional Feature):
```typescript
interface ExpenseBudget {
  budgetId: string;
  category: ExpenseCategory;
  period: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  budgetAmount: number;
  currentSpent: number;
  remaining: number;
  percentageUsed: number;
  status: 'under' | 'on-track' | 'over';
  alerts: {
    at50Percent: boolean;
    at75Percent: boolean;
    at90Percent: boolean;
    overBudget: boolean;
  };
}
```

**Tax Deduction Analysis**:
```typescript
interface TaxDeductionSummary {
  period: DateRange;
  
  totalDeductible: number;
  deductibleByCategory: {
    category: ExpenseCategory;
    amount: number;
    count: number;
  }[];
  
  businessUsePercentage: number;
  
  potentialMissedDeductions: {
    category: ExpenseCategory;
    estimatedAmount: number;
    suggestion: string;
  }[];
  
  estimatedTaxSavings: {
    federal: number;
    state: number;
    selfEmployment: number;
    total: number;
  };
}
```

#### 4.3.4 Invoice Management

**Invoice Creation**:
```typescript
interface Invoice {
  invoiceId: string;
  invoiceNumber: string; // Auto-generated: INV-2024-001
  userId: string;
  
  // Invoice Details
  issueDate: Date;
  dueDate: Date;
  
  // Vendor Information
  vendor: {
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    taxId?: string; // Vendor EIN
  };
  
  // Line Items
  items: InvoiceLineItem[];
  
  // Calculations
  subtotal: number; // Sum of line items
  taxRate?: number; // Percentage
  taxAmount?: number;
  discount?: {
    type: 'percentage' | 'fixed';
    value: number;
    amount: number; // Calculated discount amount
  };
  totalAmount: number; // Subtotal + tax - discount
  
  // Payment Tracking
  paymentStatus: 'unpaid' | 'partially_paid' | 'paid' | 'overdue' | 'cancelled';
  amountPaid: number;
  remainingAmount: number;
  paymentMethod?: PaymentMethod;
  paymentDate?: Date;
  
  // Documents
  documentIds: string[]; // Linked receipts/invoices
  
  // Notes
  notes?: string;
  terms?: string; // Payment terms
  
  // Reminders
  reminderSent: boolean;
  reminderDates: Date[];
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

interface InvoiceLineItem {
  itemId: string;
  description: string;
  quantity: number;
  unitPrice: number;
  subtotal: number; // quantity × unitPrice
}
```

**Invoice Features**:
- **Auto-numbering**: Sequential invoice numbers
- **Templates**: Save vendor information for reuse
- **Line Items**: Add multiple items per invoice
- **Tax Calculation**: Automatic or manual
- **Discount**: Percentage or fixed amount
- **Payment Tracking**: Record partial payments
- **Overdue Alerts**: Notification when due date passes
- **PDF Generation**: Professional invoice format
- **Email Sending**: Send invoice directly to vendor

**Recurring Invoices**:
```typescript
interface RecurringInvoice {
  recurringId: string;
  invoiceTemplate: Partial<Invoice>;
  frequency: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  nextGenerationDate: Date;
  endDate?: Date;
  occurrences?: number;
  autoGenerate: boolean; // Auto-create on schedule
  notifyBeforeGeneration: boolean;
}
```

**Invoice Reports**:
- Unpaid invoices (sorted by due date)
- Overdue invoices (with aging: 30, 60, 90+ days)
- Paid invoices (by date range)
- Invoice by vendor
- Payment history
- Total payable amount

---

### 4.4 Vehicle & Asset Management

#### 4.4.1 Vehicle Information

**Vehicle Record**:
```typescript
interface Vehicle {
  vehicleId: string;
  userId: string;
  
  // Basic Information
  make: string;
  model: string;
  year: number;
  vin: string; // Vehicle Identification Number
  licensePlate: string;
  licensePlateState: string; // State code
  color?: string;
  trim?: string;
  
  // Photos
  photos: {
    photoId: string;
    url: string;
    type: 'front' | 'back' | 'left' | 'right' | 'interior' | 'other';
    uploadedAt: Date;
  }[];
  
  // Acquisition Details
  acquisitionType: 'cash_purchase' | 'financed' | 'leased' | 'gift';
  acquisitionDate: Date;
  purchasePrice: number;
  currentValue?: number; // User-estimated or API
  
  // Odometer
  initialOdometer: number;
  currentOdometer: number;
  odometerUnit: 'miles' | 'kilometers';
  lastOdometerUpdate: Date;
  
  // Usage
  primaryUse: 'rideshare' | 'delivery' | 'both' | 'personal';
  businessUsePercentage?: number; // Calculated from mileage logs
  
  // Status
  isActive: boolean;
  soldDate?: Date;
  soldPrice?: number;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}
```

**Vehicle Operations**:
- Add new vehicle
- Edit vehicle information
- Upload/manage photos
- Update odometer reading
- View vehicle history
- Archive/delete vehicle
- Set as primary vehicle

**VIN Decoder** (Optional Feature):
```typescript
interface VINDecoder {
  vin: string;
  
  decoded: {
    make: string;
    model: string;
    year: number;
    trim: string;
    bodyStyle: string;
    engineSize: string;
    fuelType: string;
    transmission: string;
    driveTrain: string;
  };
  
  // Using NHTSA API or third-party service
  source: 'nhtsa' | 'carmd' | 'manual';
}
```

**Mobile Features**:
- **VIN Scanner**: Camera barcode scanner
- **Photo Management**: Multiple angle photos
- **Quick Odometer Update**: Snap photo of dashboard
- **Voice Input**: Dictate vehicle details

#### 4.4.2 Vehicle Finance & Lease Tracking

**Finance Record**:
```typescript
interface VehicleFinance {
  financeId: string;
  vehicleId: string;
  
  // Lender Information
  lenderName: string;
  lenderContact?: {
    phone: string;
    email: string;
    website: string;
  };
  accountNumber?: string;
  
  // Loan Details
  loanAmount: number;
  downPayment: number;
  interestRate: number; // APR as decimal (e.g., 4.5% = 4.5)
  termMonths: number;
  monthlyPayment: number;
  
  // Dates
  startDate: Date;
  endDate: Date; // Calculated: startDate + termMonths
  firstPaymentDate: Date;
  nextPaymentDate: Date;
  
  // Balance
  originalBalance: number; // loanAmount
  currentBalance: number; // Remaining principal
  totalInterestPaid: number;
  totalPrincipalPaid: number;
  
  // Payoff
  payoffAmount?: number; // Current payoff amount
  earlyPayoffPenalty?: number;
  
  // Documents
  loanDocumentIds: string[];
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}
```

**Lease Record**:
```typescript
interface VehicleLease {
  leaseId: string;
  vehicleId: string;
  
  // Lessor Information
  lessorName: string;
  lessorContact?: {
    phone: string;
    email: string;
    website: string;
  };
  leaseAgreementNumber?: string;
  
  // Lease Details
  leaseAmount: number; // Total lease cost
  downPayment: number; // Capitalized cost reduction
  monthlyPayment: number;
  termMonths: number;
  
  // Dates
  startDate: Date;
  endDate: Date;
  
  // Mileage
  allowedAnnualMileage: number;
  totalAllowedMileage: number; // allowedAnnualMileage × (termMonths/12)
  currentMileage: number; // From vehicle odometer
  mileageOverage: number; // Calculated
  overageRate: number; // $ per mile
  estimatedOverageCharge: number;
  
  // End of Lease
  purchaseOptionPrice?: number; // Residual value
  dispositionFee?: number;
  wearAndTearAllowance?: string;
  
  // Documents
  leaseDocumentIds: string[];
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}
```

**Payment Tracking**:
```typescript
interface FinancePayment {
  paymentId: string;
  financeId: string;
  
  paymentDate: Date;
  amountPaid: number;
  
  // Breakdown
  principalAmount: number;
  interestAmount: number;
  lateFee?: number;
  otherFees?: number;
  
  paymentMethod: PaymentMethod;
  confirmationNumber?: string;
  
  // Remaining Balance After Payment
  remainingBalance: number;
  
  notes?: string;
  
  createdAt: Date;
}
```

**Payment Schedule**:
```typescript
interface PaymentSchedule {
  scheduleId: string;
  financeId: string;
  
  payments: {
    paymentNumber: number;
    dueDate: Date;
    scheduledAmount: number;
    principalAmount: number;
    interestAmount: number;
    remainingBalance: number;
    isPaid: boolean;
    paidDate?: Date;
    actualAmountPaid?: number;
  }[];
  
  summary: {
    totalPayments: number;
    totalPrincipal: number;
    totalInterest: number;
    averageMonthlyPayment: number;
  };
}
```

**Finance Features**:
- Auto-generate payment schedule (amortization)
- Record payments (manual entry)
- Track remaining balance
- Calculate payoff amount
- Extra payment calculator (impact on term/interest)
- Refinance comparison tool
- Payment reminders (push notifications)
- Late payment alerts

**Lease Features**:
- Track mileage vs. allowance
- Overage charge calculator
- End-of-lease checklist
- Purchase option calculator
- Lease-end notifications (6 months, 3 months, 1 month)

#### 4.4.3 Depreciation Calculation

**Depreciation Methods**:

**1. Straight-Line Depreciation**:
```typescript
interface StraightLineDepreciation {
  method: 'straight_line';
  
  inputs: {
    purchasePrice: number;
    salvageValue: number;
    usefulLifeYears: number;
  };
  
  calculated: {
    annualDepreciation: number; // (price - salvage) / years
    monthlyDepreciation: number; // annual / 12
    accumulatedDepreciation: number;
    currentBookValue: number; // price - accumulated
  };
  
  schedule: {
    year: number;
    beginningValue: number;
    depreciation: number;
    accumulatedDepreciation: number;
    endingValue: number;
  }[];
}
```

Formula: `Annual Depreciation = (Purchase Price - Salvage Value) / Useful Life`

**2. MACRS Depreciation** (Modified Accelerated Cost Recovery System):
```typescript
interface MACRSDepreciation {
  method: 'macrs';
  propertyClass: '5-year'; // Vehicles are 5-year property
  
  inputs: {
    purchasePrice: number;
    businessUsePercentage: number;
    dateInService: Date;
  };
  
  calculated: {
    depreciableBasis: number; // price × businessUse%
    
    yearlyDepreciation: {
      year: number;
      rate: number; // MACRS percentage
      depreciation: number;
      accumulatedDepreciation: number;
      remainingBasis: number;
    }[];
  };
  
  // MACRS 5-year property percentages (half-year convention)
  rates: [20.00, 32.00, 19.20, 11.52, 11.52, 5.76]; // %
}
```

MACRS Rates for 5-Year Property:
- Year 1: 20.00%
- Year 2: 32.00%
- Year 3: 19.20%
- Year 4: 11.52%
- Year 5: 11.52%
- Year 6: 5.76%

**3. Section 179 Deduction**:
```typescript
interface Section179Deduction {
  method: 'section_179';
  
  inputs: {
    purchasePrice: number;
    businessUsePercentage: number;
    taxYear: number;
  };
  
  eligibility: {
    isEligible: boolean;
    reasons: string[];
    requirements: {
      businessUseOver50Percent: boolean; // Must be > 50%
      purchasedAndInService: boolean; // Same tax year
      newOrUsed: 'new' | 'used'; // Both eligible
    };
  };
  
  limits: {
    annualLimit: number; // $1,160,000 for 2023
    phaseOutThreshold: number; // $2,890,000 for 2023
    availableDeduction: number;
  };
  
  calculated: {
    eligibleAmount: number; // Min(price × businessUse%, annualLimit)
    deductionTaken: number;
    remainingBasis: number; // For MACRS on remainder
  };
}
```

Section 179 Limits (2023):
- Maximum Deduction: $1,160,000
- Phase-out threshold: $2,890,000
- Business use must be > 50%

**4. Bonus Depreciation**:
```typescript
interface BonusDepreciation {
  method: 'bonus';
  
  inputs: {
    purchasePrice: number;
    businessUsePercentage: number;
    dateInService: Date;
    bonusRate: number; // 80% for 2023, 60% for 2024
  };
  
  calculated: {
    eligibleAmount: number; // price × businessUse%
    bonusDeduction: number; // eligible × bonusRate
    remainingBasis: number; // For MACRS
  };
  
  schedule: {
    year: number;
    bonusDepreciation: number;
    macrsDepreciation: number;
    totalDepreciation: number;
  }[];
}
```

Bonus Depreciation Rates:
- 2023: 80%
- 2024: 60%
- 2025: 40%
- 2026: 20%
- 2027: 0%

**Depreciation Comparison Tool**:
```typescript
interface DepreciationComparison {
  vehicle: Vehicle;
  scenarios: {
    straightLine: StraightLineDepreciation;
    macrs: MACRSDepreciation;
    section179: Section179Deduction;
    bonus: BonusDepreciation;
  };
  
  comparison: {
    method: string;
    year1Deduction: number;
    year5TotalDeduction: number;
    taxSavings: number; // Estimated
  }[];
  
  recommendation: {
    bestMethod: string;
    reason: string;
    estimatedSavings: number;
  };
}
```

**Depreciation Features**:
- Method selection wizard (guided questions)
- Automatic calculation
- Visual comparison (bar chart)
- Tax year selection
- What-if scenarios
- Export depreciation schedule
- Form 4562 data preparation

#### 4.4.4 Business vs. Personal Usage Tracking

**Mileage Log Entry**:
```typescript
interface MileageLog {
  logId: string;
  vehicleId: string;
  userId: string;
  
  // Trip Details
  date: Date;
  startTime: Date;
  endTime?: Date;
  
  // Locations
  startLocation: string;
  endLocation: string;
  startCoordinates?: { latitude: number; longitude: number };
  endCoordinates?: { latitude: number; longitude: number };
  
  // Odometer
  odometerStart?: number;
  odometerEnd?: number;
  
  // Distance
  miles: number; // Or kilometers
  
  // Classification
  purpose: 'business' | 'personal' | 'commute';
  tripDescription: string; // Business purpose required for business trips
  
  // Platform (if business trip)
  platform?: PlatformType;
  
  // Route
  routePolyline?: string; // Encoded polyline for map display
  
  // Tracking
  autoTracked: boolean; // GPS auto-tracking vs manual entry
  trackingAccuracy?: 'high' | 'medium' | 'low';
  
  notes?: string;
  
  // Metadata
  createdFrom: 'web' | 'ios' | 'android';
  createdAt: Date;
  updatedAt: Date;
}
```

**Trip Classification**:
- **Business**: Rideshare, delivery, business errands, meetings
- **Personal**: Personal errands, vacation, non-business activities
- **Commute**: Home to first pickup, last drop-off to home

**GPS-Based Automatic Tracking (Mobile)**:

**Start Trip**:
```typescript
interface TripTracking {
  trackingId: string;
  status: 'active' | 'paused' | 'completed';
  
  startTime: Date;
  startLocation: {
    address: string;
    coordinates: { latitude: number; longitude: number };
  };
  
  // Live Data
  currentDistance: number;
  currentDuration: number; // seconds
  currentSpeed: number; // mph or kph
  
  // Route Points
  routePoints: {
    timestamp: Date;
    latitude: number;
    longitude: number;
    accuracy: number; // meters
    speed?: number;
  }[];
  
  // Battery Optimization
  trackingFrequency: 'high' | 'balanced' | 'power_saver';
  significantLocationChangesOnly: boolean;
}
```

**Auto-Tracking Features**:
- Background location tracking (with permission)
- Battery-efficient sampling (significant location changes)
- Pause/resume trip
- Add waypoints
- Real-time distance/duration
- Map view with route overlay
- Speed indicator

**Geofencing** (Optional):
```typescript
interface Geofence {
  fenceId: string;
  name: string; // e.g., "Home", "Work", "Airport"
  type: 'home' | 'work' | 'custom';
  
  location: {
    latitude: number;
    longitude: number;
    radius: number; // meters
  };
  
  triggers: {
    onEnter: 'start_trip' | 'classify_commute' | 'none';
    onExit: 'end_trip' | 'classify_business' | 'none';
  };
  
  isActive: boolean;
}
```

**ML-Based Classification** (Future Feature):
```typescript
interface MLClassification {
  logId: string;
  
  features: {
    dayOfWeek: number;
    timeOfDay: number;
    distance: number;
    duration: number;
    startLocation: string;
    endLocation: string;
    routePattern: string;
  };
  
  prediction: {
    purpose: 'business' | 'personal' | 'commute';
    confidence: number; // 0-1
  };
  
  userFeedback?: {
    correctedPurpose: 'business' | 'personal' | 'commute';
    timestamp: Date;
  };
}
```

**Business Use Calculation**:
```typescript
interface BusinessUseCalculation {
  vehicleId: string;
  period: DateRange;
  
  totals: {
    businessMiles: number;
    personalMiles: number;
    commuteMiles: number;
    totalMiles: number;
  };
  
  businessUsePercentage: number; // business / total × 100
  
  deductionMethods: {
    standardMileage: {
      rate: number; // IRS standard rate (e.g., $0.655/mile)
      totalDeduction: number; // business miles × rate
    };
    actualExpense: {
      totalExpenses: number; // From expense records
      deductibleAmount: number; // expenses × businessUse%
    };
    recommendation: 'standard_mileage' | 'actual_expense';
    savings: number; // Difference between methods
  };
  
  comparisonChart: {
    month: string;
    businessMiles: number;
    personalMiles: number;
    businessPercentage: number;
  }[];
}
```

**Mileage Reports**:
- **IRS-Compliant Log**: All required fields
- **Monthly Summary**: Business vs. personal breakdown
- **Annual Summary**: Total deductible miles
- **Vehicle Comparison**: Multi-vehicle usage
- **Export Formats**: PDF (formatted), Excel, CSV

**Mobile Mileage Features**:
- Large "Start Trip" button
- Active trip widget (floating)
- Quick classification (one-tap)
- Siri Shortcut: "Start business trip"
- Android Quick Settings tile
- Notification with trip stats
- Map visualization
- Favorite locations (quick select)

#### 4.4.5 Vehicle Maintenance Tracking

**Fuel Records**:
```typescript
interface FuelRecord {
  fuelId: string;
  vehicleId: string;
  
  // Basic Info
  date: Date;
  time?: string;
  odometer: number;
  
  // Fuel Details
  fuelType: 'Regular (87)' | 'Mid-Grade (89)' | 'Premium (91-93)' | 'Diesel' | 'Electric (kWh)';
  gallons?: number; // Or liters
  costPerGallon?: number;
  totalCost: number;
  
  // Location
  stationName?: string;
  location?: {
    address: string;
    coordinates: { latitude: number; longitude: number };
  };
  
  // Payment
  paymentMethod: PaymentMethod;
  isPartialFillup: boolean;
  
  // Receipt
  receiptDocumentId?: string;
  
  // Calculated Metrics
  mpg?: number; // Miles per gallon (calculated)
  costPerMile?: number;
  
  notes?: string;
  createdAt: Date;
}
```

**Fuel Analytics**:
```typescript
interface FuelAnalytics {
  vehicleId: string;
  period: DateRange;
  
  totals: {
    totalFuelCost: number;
    totalGallons: number;
    totalMiles: number;
  };
  
  averages: {
    mpg: number; // Miles per gallon
    costPerGallon: number;
    costPerMile: number;
    fillupFrequency: number; // Days between fill-ups
  };
  
  trends: {
    mpgOverTime: { date: Date; mpg: number }[];
    costOverTime: { date: Date; cost: number }[];
  };
  
  bestStation: {
    name: string;
    averagePrice: number;
    visitCount: number;
  };
  
  estimatedRange: number; // Miles until next fill-up
}
```

**Oil Change Records**:
```typescript
interface OilChangeRecord {
  oilChangeId: string;
  vehicleId: string;
// Service Details date: Date; odometer: number;
// Service Provider serviceProvider: string; shopLocation?: string; shopPhone?: string;
// Oil Details oilType: 'Conventional' | 'Synthetic Blend' | 'Full Synthetic' | 'High Mileage'; oilGrade: string; // e.g., '5W-30', '10W-30', '0W-20' oilBrand?: string;
// Service Details filterReplaced: boolean; filterBrand?: string;
// Costs laborCost?: number; oilCost?: number; filterCost?: number; otherPartsCost?: number; totalCost: number;
// Next Service nextDueDate?: Date; nextDueMileage?: number; // current + 3000-10000 recommendedInterval: number; // miles
// Documents receiptDocumentId?: string;
// Warranty warrantyMonths?: number; warrantyMiles?: number;
notes?: string; createdAt: Date; }

**Tire Service Records**:
```typescript
interface TireServiceRecord {
  serviceId: string;
  vehicleId: string;
  
  // Service Type
  serviceType: 'Rotation' | 'Replacement' | 'Balance' | 'Alignment' | 'Repair';
  
  // Service Details
  date: Date;
  odometer: number;
  serviceProvider: string;
  
  // Tire Details (for replacement)
  tiresReplaced?: ('FL' | 'FR' | 'RL' | 'RR')[]; // Front Left, Front Right, etc.
  tireBrand?: string;
  tireModel?: string;
  tireSize?: string; // e.g., 'P215/65R16'
  quantity?: number;
  
  // Costs
  costPerTire?: number;
  laborCost?: number;
  disposalFee?: number;
  alignmentCost?: number;
  totalCost: number;
  
  // Warranty (for new tires)
  warrantyMileage?: number;
  warrantyMonths?: number;
  roadHazardCoverage?: boolean;
  
  // Next Service
  nextRotationDue?: number; // Odometer reading
  expectedLifespan?: number; // miles
  
  // Tire Condition (inspection)
  treadDepth?: {
    frontLeft: number; // mm or 32nds of inch
    frontRight: number;
    rearLeft: number;
    rearRight: number;
  };
  
  // Documents
  receiptDocumentId?: string;
  
  notes?: string;
  createdAt: Date;
}
```

**General Maintenance Records**:
```typescript
interface MaintenanceRecord {
  maintenanceId: string;
  vehicleId: string;
  
  // Maintenance Type
  maintenanceType: 
    | 'Brake Service'
    | 'Battery Replacement'
    | 'Air Filter'
    | 'Cabin Air Filter'
    | 'Transmission Service'
    | 'Coolant Flush'
    | 'Spark Plugs'
    | 'Timing Belt'
    | 'Serpentine Belt'
    | 'Suspension'
    | 'Exhaust System'
    | 'Windshield Wipers'
    | 'Inspection'
    | 'Other';
  
  // Service Details
  date: Date;
  odometer: number;
  serviceProvider: string;
  description: string;
  
  // Parts
  partsReplaced: {
    partName: string;
    partNumber?: string;
    brand?: string;
    quantity: number;
    costPerUnit: number;
    warrantyMonths?: number;
    warrantyMiles?: number;
  }[];
  
  // Costs
  partsCost: number;
  laborCost: number;
  shopSuppliesFee?: number;
  totalCost: number;
  
  // Next Service
  nextDueDate?: Date;
  nextDueMileage?: number;
  recommendedIntervalMiles?: number;
  recommendedIntervalMonths?: number;
  
  // Severity
  severity: 'Routine' | 'Important' | 'Critical';
  
  // Documents
  receiptDocumentIds: string[];
  
  notes?: string;
  createdAt: Date;
}
```

**Repair Records**:
```typescript
interface RepairRecord {
  repairId: string;
  vehicleId: string;
  
  // Issue Details
  date: Date;
  odometer: number;
  
  issueDescription: string; // Symptoms reported
  diagnosisDescription: string; // Problem identified
  
  // Repair Category
  category: 
    | 'Engine'
    | 'Transmission'
    | 'Electrical'
    | 'Suspension'
    | 'Brakes'
    | 'Cooling System'
    | 'Exhaust'
    | 'Body/Exterior'
    | 'Interior'
    | 'Other';
  
  // Service Provider
  serviceProvider: string;
  mechanicName?: string;
  shopPhone?: string;
  shopAddress?: string;
  
  // Parts
  partsReplaced: {
    partName: string;
    partNumber?: string;
    brand?: string;
    quantity: number;
    cost: number;
    isOEM: boolean; // OEM vs Aftermarket
    warrantyInfo?: string;
  }[];
  
  // Labor
  laborHours?: number;
  laborRate?: number;
  laborCost: number;
  
  // Additional Costs
  diagnosticFee?: number;
  shopSupplies?: number;
  environmentalFees?: number;
  towing?: number;
  
  totalCost: number;
  
  // Payment
  paymentMethod: PaymentMethod;
  
  // Insurance
  insuranceClaim: boolean;
  claimNumber?: string;
  insurancePaid?: number;
  deductible?: number;
  
  // Warranty
  coveredByWarranty: boolean;
  warrantyProvider?: string;
  
  partsWarranty?: {
    duration: string; // e.g., '12 months / 12,000 miles'
    expirationDate: Date;
    expirationMileage: number;
  };
  
  laborWarranty?: {
    duration: string;
    expirationDate: Date;
  };
  
  // Quality
  serviceRating?: number; // 1-5 stars
  wouldRecommend?: boolean;
  
  // Documents
  beforePhotos?: string[]; // Document IDs
  afterPhotos?: string[];
  receiptDocumentIds: string[];
  
  notes?: string;
  createdAt: Date;
}
```

**Maintenance Reminders**:
```typescript
interface MaintenanceReminder {
  reminderId: string;
  vehicleId: string;
  
  // Reminder Type
  reminderType: string; // e.g., 'Oil Change', 'Tire Rotation'
  
  // Due Conditions (either or both)
  dueMileage?: number;
  dueDate?: Date;
  
  // Current Status
  currentMileage: number;
  milesUntilDue?: number;
  daysUntilDue?: number;
  
  // Status
  status: 'upcoming' | 'due_soon' | 'overdue';
  severity: 'low' | 'medium' | 'high';
  
  // Reminder Settings
  reminderIntervalMiles?: number; // e.g., every 5,000 miles
  reminderIntervalDays?: number; // e.g., every 90 days
  
  notificationThresholds: {
    milesBefore?: number[]; // e.g., [500, 200, 100]
    daysBefore?: number[]; // e.g., [30, 14, 7, 3, 1]
  };
  
  // Notifications
  lastNotificationSent?: Date;
  notificationsSent: {
    date: Date;
    type: 'push' | 'email' | 'sms';
    message: string;
  }[];
  
  // Completion
  isCompleted: boolean;
  completedDate?: Date;
  completedMileage?: number;
  linkedMaintenanceRecordId?: string;
  
  notes?: string;
  
  createdAt: Date;
  updatedAt: Date;
}
```

**Maintenance Dashboard**:
```typescript
interface MaintenanceDashboard {
  vehicleId: string;
  
  // Upcoming Maintenance
  upcoming: {
    reminder: MaintenanceReminder;
    priority: 'high' | 'medium' | 'low';
    daysUntilDue: number;
    milesUntilDue: number;
    estimatedCost?: number;
  }[];
  
  // Overdue Maintenance
  overdue: {
    reminder: MaintenanceReminder;
    daysOverdue: number;
    milesOverdue: number;
    urgency: 'critical' | 'high' | 'medium';
  }[];
  
  // Recent Maintenance
  recentlyCompleted: {
    date: Date;
    type: string;
    cost: number;
    serviceProvider: string;
  }[];
  
  // Cost Summary
  costs: {
    lastMonth: number;
    lastYear: number;
    lifetime: number;
    averageMonthly: number;
  };
  
  // Vehicle Health Score
  healthScore: {
    score: number; // 0-100
    factors: {
      maintenanceAdherence: number; // On-time service %
      recentRepairs: number; // Recent major repairs
      vehicleAge: number;
      mileage: number;
      overdueServices: number;
    };
    rating: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Critical';
  };
  
  // Recommendations
  recommendations: {
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    estimatedCost?: number;
    dueBy?: Date;
  }[];
}
```

**Maintenance Analytics**:
```typescript
interface MaintenanceAnalytics {
  vehicleId: string;
  period: DateRange;
  
  // Cost Analysis
  totalCosts: {
    fuel: number;
    oilChanges: number;
    tires: number;
    repairs: number;
    maintenance: number;
    total: number;
  };
  
  costBreakdown: {
    category: string;
    amount: number;
    percentage: number;
  }[];
  
  // Cost Trends
  costOverTime: {
    month: string;
    amount: number;
    category: string;
  }[];
  
  // Service Frequency
  serviceFrequency: {
    serviceType: string;
    count: number;
    averageInterval: number; // days
    lastPerformed: Date;
  }[];
  
  // Cost per Mile
  costPerMile: {
    fuel: number;
    maintenance: number;
    repairs: number;
    total: number;
  };
  
  // Comparison to Average
  comparison: {
    vehicleType: string; // Sedan, SUV, etc.
    yourCosts: number;
    averageCosts: number;
    difference: number;
    percentile: number; // Your costs vs others (lower is better)
  };
  
  // Efficiency Metrics
  efficiency: {
    fuelEfficiency: number; // MPG
    maintenanceAdherence: number; // % on-time
    averageDaysInShop: number;
    reliabilityScore: number; // 0-100
  };
}
```

**Mobile Maintenance Features**:
- Quick service entry (tap service type → enter cost)
- Receipt photo with OCR (auto-extract service details)
- Location-based shop suggestions
- Reminder notifications (with snooze)
- Barcode scanner (for parts)
- Service history timeline
- Cost tracking widgets
- "Mark as Complete" from notification

---

### 4.5 Tax Management

#### 4.5.1 Tax Collection & Payment Tracking

**Tax Collection Record** (for applicable services):
```typescript
interface TaxCollectionRecord {
  collectionId: string;
  userId: string;
  
  // Collection Details
  date: Date;
  transactionId?: string; // Link to revenue record
  
  // Jurisdiction
  jurisdiction: {
    state: string;
    county?: string;
    city?: string;
  };
  
  // Tax Details
  taxableAmount: number;
  taxRate: number; // Percentage
  taxCollected: number;
  
  // Tax Type
  taxType: 'Sales Tax' | 'Service Tax' | 'Other';
  
  // Platform
  platform?: PlatformType; // If collected via platform
  
  notes?: string;
  createdAt: Date;
}
```

**Tax Payment Record**:
```typescript
interface TaxPaymentRecord {
  paymentId: string;
  userId: string;
  
  // Payment Details
  paymentDate: Date;
  
  // Tax Information
  taxType: 'Federal Income' | 'State Income' | 'Local Income' | 'Self-Employment' | 'Sales Tax' | 'Other';
  taxYear: number;
  taxQuarter?: 1 | 2 | 3 | 4; // For quarterly payments
  
  // Amount
  amount: number;
  
  // Payment Details
  paymentMethod: 
    | 'Check'
    | 'Electronic Funds Transfer'
    | 'Credit Card'
    | 'IRS Direct Pay'
    | 'EFTPS' // Electronic Federal Tax Payment System
    | 'State Tax Portal'
    | 'Other';
  
  confirmationNumber?: string;
  transactionId?: string;
  
  // Application
  appliedTo: string; // e.g., 'Q1 2024 Estimated Tax', 'Annual 2023 Tax'
  
  // Documents
  receiptDocumentId?: string;
  
  notes?: string;
  createdAt: Date;
}
```

**Tax Payment Summary**:
```typescript
interface TaxPaymentSummary {
  taxYear: number;
  
  federal: {
    estimatedQuarterlyPayments: {
      q1: number;
      q2: number;
      q3: number;
      q4: number;
      total: number;
    };
    annualFilingPayment?: number;
    refundReceived?: number;
    netPayment: number;
  };
  
  state: {
    estimatedQuarterlyPayments: {
      q1: number;
      q2: number;
      q3: number;
      q4: number;
      total: number;
    };
    annualFilingPayment?: number;
    refundReceived?: number;
    netPayment: number;
  };
  
  selfEmployment: {
    estimatedPayments: number;
    actualTax: number;
  };
  
  local: {
    payments: number;
  };
  
  totalPaid: number;
  
  penalties?: number;
  interest?: number;
}
```

#### 4.5.2 Tax Filing Alerts & Reminders

**Tax Deadline Types**:
```typescript
interface TaxDeadline {
  deadlineId: string;
  userId: string;
  
  // Deadline Type
  deadlineType: 
    | 'Quarterly Estimated Tax'
    | 'Annual Tax Filing'
    | 'Extension Filing'
    | 'State Quarterly Tax'
    | 'Sales Tax Filing'
    | 'Business License Renewal'
    | 'Vehicle Registration'
    | 'Insurance Renewal'
    | 'Custom';
  
  // Details
  description: string;
  dueDate: Date;
  
  // Tax Specific
  taxYear?: number;
  taxQuarter?: 1 | 2 | 3 | 4;
  taxAuthority?: 'IRS' | 'State' | 'Local';
  
  // Recurrence
  isRecurring: boolean;
  recurrenceRule?: string; // e.g., 'YEARLY', 'QUARTERLY'
  
  // Reminder Settings
  reminderDays: number[]; // Days before due date [30, 14, 7, 3, 1]
  
  // Notifications
  notificationsSent: {
    date: Date;
    type: 'push' | 'email' | 'sms';
  }[];
  
  // Status
  isCompleted: boolean;
  completedDate?: Date;
  linkedPaymentId?: string;
  
  // Priority
  priority: 'critical' | 'high' | 'medium' | 'low';
  
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

**Federal Tax Deadlines (Default)**:
```typescript
const FEDERAL_TAX_DEADLINES_2024 = [
  { type: 'Q1 Estimated Tax', date: '2024-04-15' },
  { type: 'Annual Filing (2023)', date: '2024-04-15' },
  { type: 'Q2 Estimated Tax', date: '2024-06-17' },
  { type: 'Q3 Estimated Tax', date: '2024-09-16' },
  { type: 'Extension Deadline', date: '2024-10-15' },
  { type: 'Q4 Estimated Tax', date: '2025-01-15' },
];
```

**Reminder Configuration**:
```typescript
interface TaxReminderSettings {
  userId: string;
  
  // Notification Channels
  pushNotifications: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  
  // Timing
  defaultReminderDays: number[]; // e.g., [30, 14, 7, 3, 1]
  
  // Custom Reminders
  customReminders: {
    deadlineType: string;
    reminderDays: number[];
  }[];
  
  // Quiet Hours
  quietHours: {
    enabled: boolean;
    start: string; // '22:00'
    end: string; // '08:00'
  };
  
  // Calendar Integration
  syncToCalendar: boolean;
  calendarType: 'apple' | 'google' | 'outlook';
}
```

**Tax Alert Dashboard**:
```typescript
interface TaxAlertDashboard {
  // Upcoming Deadlines
  upcoming: {
    deadline: TaxDeadline;
    daysUntil: number;
    estimatedAmount?: number;
    status: 'prepared' | 'in_progress' | 'not_started';
  }[];
  
  // Overdue
  overdue: {
    deadline: TaxDeadline;
    daysOverdue: number;
    penalties?: number;
  }[];
  
  // This Week
  thisWeek: TaxDeadline[];
  
  // This Month
  thisMonth: TaxDeadline[];
  
  // This Quarter
  thisQuarter: TaxDeadline[];
  
  // Calendar View
  calendarEvents: {
    date: Date;
    deadlines: TaxDeadline[];
  }[];
}
```

#### 4.5.3 Tax News & Updates

**Tax News Feed**:
```typescript
interface TaxNewsItem {
  newsId: string;
  
  // Content
  title: string;
  summary: string;
  fullContent: string;
  
  // Metadata
  publishDate: Date;
  source: 'IRS' | 'State Revenue Dept' | 'Tax Foundation' | 'News Site' | 'GigAssist';
  category: 
    | 'Law Changes'
    | 'Rate Updates'
    | 'Form Updates'
    | 'Deadline Changes'
    | 'Deduction Opportunities'
    | 'Court Rulings'
    | 'Gig Economy Specific'
    | 'Tips & Advice';
  
  // Relevance
  relevance: 'all_users' | 'state_specific' | 'gig_workers_only';
  affectedStates?: string[];
  priority: 'critical' | 'high' | 'medium' | 'low';
  
  // Links
  sourceUrl?: string;
  officialDocumentUrl?: string;
  
  // User Actions
  isBookmarked?: boolean;
  isRead?: boolean;
  
  tags: string[];
  
  createdAt: Date;
}
```

**Tax Updates**:
```typescript
interface TaxRateUpdate {
  updateId: string;
  
  effectiveDate: Date;
  taxYear: number;
  
  updates: {
    // Standard Mileage Rate
    standardMileageRate?: {
      previous: number;
      new: number;
      change: number;
    };
    
    // Tax Brackets
    federalTaxBrackets?: {
      previous: TaxBracket[];
      new: TaxBracket[];
    };
    
    // Standard Deduction
    standardDeduction?: {
      previous: { single: number; marriedJoint: number; headOfHousehold: number };
      new: { single: number; marriedJoint: number; headOfHousehold: number };
    };
    
    // Section 179
    section179Limit?: {
      previous: number;
      new: number;
    };
    
    // State Tax Rates
    stateTaxRates?: {
      state: string;
      previous: number;
      new: number;
    }[];
  };
  
  notificationSent: boolean;
  notificationDate?: Date;
}

interface TaxBracket {
  rate: number; // Percentage
  min: number; // Income threshold
  max?: number; // Income threshold (undefined for highest bracket)
}
```

**Tax Resource Library**:
```typescript
interface TaxResource {
  resourceId: string;
  
  // Content
  title: string;
  description: string;
  type: 'Article' | 'Video' | 'Guide' | 'Calculator' | 'Form' | 'Checklist';
  
  // Topics
  topics: string[]; // e.g., ['Mileage Deduction', 'Schedule C', 'Quarterly Taxes']
  
  // Content
  content?: string; // HTML or Markdown
  videoUrl?: string;
  downloadUrl?: string; // For PDFs, forms
  
  // Metadata
  audience: 'Beginner' | 'Intermediate' | 'Advanced' | 'All';
  estimatedReadTime?: number; // minutes
  
  // Links
  externalLinks: {
    title: string;
    url: string;
    type: 'IRS' | 'State' | 'Third Party';
  }[];
  
  // User Engagement
  views: number;
  likes?: number;
  isBookmarked?: boolean;
  
  tags: string[];
  
  createdAt: Date;
  updatedAt: Date;
}
```

**Mobile Tax News Features**:
- Push notifications for critical updates
- News feed (scroll, pull-to-refresh)
- Bookmark articles
- Share articles
- Search news
- Filter by category, state
- Mark as read

#### 4.5.4 Tax Calculation & Estimation

**Tax Calculator**:
```typescript
interface TaxCalculatorInput {
  // Tax Year
  taxYear: number;
  
  // Filing Status
  filingStatus: 'Single' | 'Married Filing Jointly' | 'Married Filing Separately' | 'Head of Household';
  
  // Income
  income: {
    selfEmploymentIncome: number; // Net profit from Schedule C
    otherIncome?: number; // W-2 jobs, investments, etc.
    spouseIncome?: number; // If married filing jointly
  };
  
  // Deductions
  deductions: {
    standardOrItemized: 'standard' | 'itemized';
    
    // Standard Deduction (auto-calculated by filing status)
    standardDeduction?: number;
    
    // Itemized Deductions
    itemizedDeductions?: {
      stateTaxesPaid: number;
      mortgageInterest: number;
      charitableContributions: number;
      medicalExpenses: number;
      other: number;
    };
    
    // Above-the-Line Deductions
    healthInsurancePremiums?: number;
    retirementContributions?: number; // SEP IRA, Solo 401k
    halfOfSelfEmploymentTax?: number; // Auto-calculated
  };
  
  // Credits
  credits?: {
    childTaxCredit?: number;
    earnedIncomeCredit?: number;
    other?: number;
  };
  
  // Withholding & Payments
  withholdingAndPayments: {
    federalWithholding?: number;
    stateWithholding?: number;
    estimatedTaxPayments: number;
  };
}

interface TaxCalculatorResult {
  // Income
  totalIncome: number;
  adjustedGrossIncome: number; // After above-the-line deductions
  
  // Deductions
  totalDeductions: number;
  taxableIncome: number; // AGI - deductions
  
  // Federal Tax
  federal: {
    incomeTax: number;
    effectiveTaxRate: number; // %
    taxBracket: number; // Highest marginal rate
    
    selfEmploymentTax: {
      socialSecurity: number; // 12.4% on net earnings
      medicare: number; // 2.9% on net earnings
      additionalMedicare?: number; // 0.9% over threshold
      total: number;
    };
    
    totalTax: number; // Income tax + SE tax
    
    credits: number;
    taxAfterCredits: number;
    
    payments: number; // Withholding + estimated payments
    
    refundOrOwed: number; // Negative = refund, Positive = owed
  };
  
  // State Tax
  state: {
    incomeTax: number;
    effectiveTaxRate: number;
    
    payments: number;
    refundOrOwed: number;
  };
  
  // Total
  totalTaxLiability: number;
  totalPayments: number;
  totalRefundOrOwed: number;
  
  // Quarterly Estimated Tax
  quarterlyEstimatedTax: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    total: number;
  };
  
  // Safe Harbor
  safeHarbor: {
    method: '90% Current Year' | '100% Prior Year' | '110% Prior Year (High Income)';
    requiredPayment: number;
    yourPayments: number;
    penaltyAvoidance: boolean;
  };
}
```

**Quarterly Tax Estimator**:
```typescript
interface QuarterlyTaxEstimator {
  taxYear: number;
  quarter: 1 | 2 | 3 | 4;
  
  // Income to Date
  incomeYTD: number;
  expensesYTD: number;
  netProfitYTD: number;
  
  // Projected Annual
  projectedAnnualIncome: number;
  projectedAnnualExpenses: number;
  projectedNetProfit: number;
  
  // Estimated Tax
  estimatedAnnualTax: {
    federal: number;
    state: number;
    selfEmployment: number;
    total: number;
  };
  
  // Quarterly Payment
  quarterlyPayment: number; // Total annual tax / 4
  
  // Payments Made
  paymentsMadeYTD: number;
  
  // Amount Due This Quarter
  dueThisQuarter: number;
  
  // Due Date
  dueDate: Date;
  
  // Recommendations
  recommendations: {
    payFullAmount: boolean;
    suggestedAmount: number;
    reason: string;
  };
}
```

**Deduction Optimizer**:
```typescript
interface DeductionOptimizer {
  taxYear: number;
  
  // Vehicle Deductions
  vehicleDeductions: {
    standardMileage: {
      businessMiles: number;
      rate: number;
      deduction: number;
    };
    actualExpense: {
      totalExpenses: number;
      businessUsePercentage: number;
      deduction: number;
    };
    recommendation: 'standard_mileage' | 'actual_expense';
    savings: number;
  };
  
  // Home Office Deduction
  homeOffice?: {
    method: 'simplified' | 'actual';
    squareFeet?: number;
    percentage?: number;
    deduction: number;
    eligible: boolean;
  };
  
  // Self-Employed Health Insurance
  healthInsurance?: {
    premiumsPaid: number;
    deduction: number;
    eligible: boolean;
  };
  
  // Retirement Contributions
  retirementContributions?: {
    sepIRA?: number;
    solo401k?: number;
    totalDeduction: number;
  };
  
  // Identified Opportunities
  opportunities: {
    category: string;
    description: string;
    estimatedSavings: number;
    requirements: string[];
  }[];
  
  // Warnings
  warnings: {
    category: string;
    issue: string;
    recommendation: string;
  }[];
  
  // Total Optimization
  totalDeductions: number;
  potentialAdditionalDeductions: number;
  estimatedAdditionalSavings: number;
}
```

#### 4.5.5 Tax Form Preparation Support

**Schedule C Data**:
```typescript
interface ScheduleCData {
  taxYear: number;
  
  // Part I: Income
  grossReceipts: number; // Line 1
  returns: number; // Line 2
  subtotal: number; // Line 3
  costOfGoodsSold: number; // Line 4 (usually 0 for gig workers)
  grossProfit: number; // Line 5
  otherIncome: number; // Line 6
  grossIncome: number; // Line 7
  
  // Part II: Expenses
  expenses: {
    advertising: number; // Line 8
    carAndTruck: number; // Line 9
    commissions: number; // Line 10
    contractLabor: number; // Line 11
    depletion: number; // Line 12
    depreciation: number; // Line 13
    employeeBenefitPrograms: number; // Line 14
    insurance: number; // Line 15
    interest: number; // Line 16a (mortgage), 16b (other)
    legalProfessional: number; // Line 17
    officeExpense: number; // Line 18
    pensionProfit: number; // Line 19
    rentLease: {
      vehicles: number; // Line 20a
      machinery: number; // Line 20b
      other: number; // Line 20c
    };
    repairs: number; // Line 21
    supplies: number; // Line 22
    taxes: number; // Line 23
    travel: number; // Line 24a
    meals: number; // Line 24b (50% deductible)
    utilities: number; // Line 25
    wages: number; // Line 26
    otherExpenses: { // Line 27a
      description: string;
      amount: number;
    }[];
  };
  
  totalExpenses: number; // Line 28

// Net Profit or Loss netProfit: number; // Line 31 (Line 7 - Line 28)
// Part IV: Information on Your Vehicle vehicles: { vehicleId: string; dateInService: Date; businessMiles: number; commuteMiles: number; otherMiles: number; totalMiles: number; availableForOffDutyHours: boolean; anotherVehicleAvailable: boolean; evidenceToSupport: boolean; evidenceWritten: boolean; }[];
// Part V: Other Expenses otherExpenses: { description: string; amount: number; }[];
// Supporting Documentation hasAllReceipts: boolean; hasMileageLog: boolean; hasDepreciationSchedule: boolean;
// Export Ready exportReady: boolean; lastUpdated: Date; }

**Form 4562 Data** (Depreciation):
```typescript
interface Form4562Data {
  taxYear: number;
  
  // Part I: Section 179
  section179: {
    elected: boolean;
    assets: {
      description: string;
      cost: number;
      businessUsePercentage: number;
      section179Deduction: number;
    }[];
    totalSection179: number;
  };
  
  // Part II: Special Depreciation Allowance (Bonus)
  bonusDepreciation: {
    elected: boolean;
    rate: number; // e.g., 80% for 2023
    assets: {
      description: string;
      cost: number;
      bonusAmount: number;
    }[];
    totalBonus: number;
  };
  
  // Part III: MACRS Depreciation
  macrsDepreciation: {
    assets: {
      description: string;
      dateInService: Date;
      cost: number;
      businessUsePercentage: number;
      recoveryPeriod: number; // 5 years for vehicles
      convention: 'Half-year' | 'Mid-quarter';
      method: 'GDS' | 'ADS';
      depreciationDeduction: number;
    }[];
    totalMACRS: number;
  };
  
  // Part IV: Summary
  totalDepreciation: number;
  
  // Part V: Listed Property (Vehicles, Computers)
  listedProperty: {
    type: 'Vehicle' | 'Computer' | 'Other';
    dateInService: Date;
    cost: number;
    businessUsePercentage: number;
    section179: number;
    electedCost: number;
    carryover: number;
    depreciation: number;
  }[];
  
  exportReady: boolean;
  lastUpdated: Date;
}
```

**Mileage Log Report** (IRS-Compliant):
```typescript
interface IRSMileageLog {
  taxYear: number;
  vehicleId: string;
  
  // Summary
  summary: {
    totalBusinessMiles: number;
    totalCommuteMiles: number;
    totalPersonalMiles: number;
    totalMiles: number;
    businessUsePercentage: number;
  };
  
  // Detailed Log
  trips: {
    date: Date;
    startOdometer: number;
    endOdometer: number;
    miles: number;
    startLocation: string;
    endLocation: string;
    businessPurpose: string;
    tripType: 'Business' | 'Commute' | 'Personal';
  }[];
  
  // Deduction Calculation
  deduction: {
    method: 'Standard Mileage' | 'Actual Expense';
    
    standardMileage?: {
      businessMiles: number;
      rate: number;
      totalDeduction: number;
    };
    
    actualExpense?: {
      totalExpenses: number;
      businessUsePercentage: number;
      totalDeduction: number;
    };
  };
  
  // Compliance
  compliance: {
    hasAllRequiredFields: boolean;
    contemporaneousRecords: boolean; // Recorded timely
    adequateEvidence: boolean;
    irsCompliant: boolean;
  };
  
  // Export Formats
  exportFormats: {
    pdf: boolean; // Formatted for IRS
    excel: boolean;
    csv: boolean;
  };
  
  generatedDate: Date;
}
```

**Tax Summary Report**:
```typescript
interface TaxSummaryReport {
  taxYear: number;
  userId: string;
  
  // Income Summary
  income: {
    totalRevenue: number;
    platformBreakdown: {
      platform: PlatformType;
      revenue: number;
    }[];
    otherIncome: number;
    totalIncome: number;
  };
  
  // Expense Summary
  expenses: {
    totalExpenses: number;
    categoryBreakdown: {
      category: ExpenseCategory;
      amount: number;
    }[];
    taxDeductibleExpenses: number;
    nonDeductibleExpenses: number;
  };
  
  // Vehicle Summary
  vehicles: {
    vehicleId: string;
    make: string;
    model: string;
    year: number;
    
    mileage: {
      businessMiles: number;
      personalMiles: number;
      totalMiles: number;
      businessPercentage: number;
    };
    
    expenses: {
      fuel: number;
      maintenance: number;
      repairs: number;
      insurance: number;
      other: number;
      total: number;
    };
    
    depreciation: {
      method: string;
      amount: number;
    };
    
    deduction: {
      method: 'Standard Mileage' | 'Actual Expense';
      amount: number;
    };
  }[];
  
  // Net Profit/Loss
  netProfit: number; // Income - Expenses
  
  // Tax Liability Estimate
  estimatedTax: {
    federalIncome: number;
    selfEmployment: number;
    stateIncome: number;
    totalEstimated: number;
  };
  
  // Payments Made
  paymentsMade: {
    federalWithholding: number;
    stateWithholding: number;
    estimatedPayments: number;
    totalPayments: number;
  };
  
  // Balance Due or Refund
  balanceDueOrRefund: number;
  
  // Documentation Status
  documentation: {
    receiptsComplete: boolean;
    mileageLogComplete: boolean;
    bankStatementsAvailable: boolean;
    form1099sReceived: boolean;
    readyForTaxPrep: boolean;
  };
  
  // Forms Ready
  formsReady: {
    scheduleC: boolean;
    form4562: boolean;
    scheduleSE: boolean;
  };
  
  generatedDate: Date;
}
```

**Tax Preparation Checklist**:
```typescript
interface TaxPrepChecklist {
  taxYear: number;
  
  checklist: {
    category: string;
    items: {
      itemId: string;
      description: string;
      isCompleted: boolean;
      completedDate?: Date;
      priority: 'required' | 'recommended' | 'optional';
      notes?: string;
    }[];
  }[];
  
  progress: {
    totalItems: number;
    completedItems: number;
    percentComplete: number;
    requiredComplete: boolean;
    recommendedComplete: boolean;
  };
}
```

Example Checklist:
```typescript
const TAX_PREP_CHECKLIST = {
  taxYear: 2024,
  checklist: [
    {
      category: 'Income Documentation',
      items: [
        { description: 'All revenue entered in app', priority: 'required' },
        { description: 'Form 1099-NEC from Uber', priority: 'required' },
        { description: 'Form 1099-NEC from Lyft', priority: 'required' },
        { description: 'Form 1099-K from DoorDash', priority: 'required' },
        { description: 'Bank statements for cash tips', priority: 'recommended' },
      ]
    },
    {
      category: 'Expense Documentation',
      items: [
        { description: 'All expenses entered in app', priority: 'required' },
        { description: 'Receipts for expenses > $75', priority: 'required' },
        { description: 'Credit card statements', priority: 'recommended' },
        { description: 'Bank statements', priority: 'recommended' },
      ]
    },
    {
      category: 'Vehicle Records',
      items: [
        { description: 'Complete mileage log', priority: 'required' },
        { description: 'Vehicle purchase/lease documents', priority: 'required' },
        { description: 'Insurance policy documents', priority: 'required' },
        { description: 'Maintenance and repair receipts', priority: 'recommended' },
      ]
    },
    {
      category: 'Deductions',
      items: [
        { description: 'Choose mileage method (standard vs actual)', priority: 'required' },
        { description: 'Calculate depreciation', priority: 'required' },
        { description: 'Health insurance premiums documented', priority: 'recommended' },
        { description: 'Home office documentation (if applicable)', priority: 'optional' },
      ]
    },
  ]
};
```

---

### 4.6 Document Management

#### 4.6.1 Document Upload & Storage

**Document Upload**:
```typescript
interface DocumentUpload {
  // File Information
  file: File | Blob;
  originalFileName: string;
  fileSize: number; // bytes
  fileType: string; // MIME type
  
  // Metadata
  category: DocumentCategory;
  tags: string[];
  description?: string;
  
  // Linking
  linkedEntityType?: 'expense' | 'invoice' | 'vehicle' | 'tax_payment' | 'maintenance' | 'revenue';
  linkedEntityId?: string;
  
  // Upload Options
  compress: boolean; // Compress images before upload
  extractOCR: boolean; // Run OCR processing
  
  // Upload Progress
  uploadProgress: number; // 0-100
  uploadStatus: 'pending' | 'uploading' | 'processing' | 'completed' | 'failed';
}

type DocumentCategory = 
  // Receipts
  | 'Receipts - Fuel'
  | 'Receipts - Maintenance'
  | 'Receipts - Repairs'
  | 'Receipts - General'
  
  // Invoices
  | 'Invoices - Received'
  | 'Invoices - Sent'
  
  // Vehicle Documents
  | 'Vehicle - Registration'
  | 'Vehicle - Title'
  | 'Vehicle - Insurance'
  | 'Vehicle - Warranty'
  | 'Vehicle - Loan/Lease'
  
  // Tax Documents
  | 'Tax - Form 1099'
  | 'Tax - Form W-9'
  | 'Tax - Prior Returns'
  | 'Tax - IRS Letters'
  | 'Tax - State Documents'
  
  // Business Documents
  | 'Business - License'
  | 'Business - EIN Letter'
  | 'Business - Formation'
  | 'Business - Contracts'
  
  // Financial Documents
  | 'Financial - Bank Statements'
  | 'Financial - Credit Card Statements'
  | 'Financial - Loan Documents'
  
  // Insurance
  | 'Insurance - Policy'
  | 'Insurance - Claims'
  
  // Personal
  | 'Personal - ID'
  | 'Personal - Other'
  
  // Other
  | 'Other';
```

**Document Record**:
```typescript
interface Document {
  documentId: string;
  userId: string;
  
  // File Information
  originalFileName: string;
  storedFileName: string; // UUID-based filename
  fileType: string; // MIME type
  fileExtension: string; // .pdf, .jpg, etc.
  fileSize: number; // bytes
  
  // Storage
  storagePath: string; // S3 key or storage path
  storageProvider: 'aws_s3' | 'digitalocean_spaces' | 'azure_blob';
  thumbnailPath?: string; // For images/PDFs
  
  // Metadata
  category: DocumentCategory;
  tags: string[];
  description?: string;
  
  // OCR
  ocrText?: string; // Extracted text
  ocrConfidence?: number; // 0-100
  ocrProcessed: boolean;
  ocrProcessedDate?: Date;
  
  // Linking
  linkedEntities: {
    entityType: 'expense' | 'invoice' | 'vehicle' | 'tax_payment' | 'maintenance' | 'revenue';
    entityId: string;
  }[];
  
  // Access
  isAvailableOffline: boolean; // Cached on mobile
  downloadCount: number;
  lastAccessedDate?: Date;
  
  // Sharing
  sharedWith: {
    userId: string;
    userEmail: string;
    permission: 'view' | 'download';
    sharedDate: Date;
    expirationDate?: Date;
  }[];
  
  // Organization
  isFavorite: boolean;
  isArchived: boolean;
  
  // Dates
  uploadDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

**Upload Methods**:

**Web Upload**:
- Drag-and-drop zone
- File picker (click to browse)
- Multiple file selection
- Paste from clipboard (images)
- Max file size: 10MB per file
- Max files per upload: 20

**Mobile Upload**:
```typescript
interface MobileUploadMethods {
  // Camera
  camera: {
    capturePhoto: boolean;
    captureVideo: boolean; // Future
    flashMode: 'auto' | 'on' | 'off';
  };
  
  // Photo Library
  photoLibrary: {
    selectMultiple: boolean;
    maxSelection: number;
  };
  
  // Document Scanner
  documentScanner: {
    autoEdgeDetection: boolean;
    perspectiveCorrection: boolean;
    multiPage: boolean;
  };
  
  // Files App / File Manager
  fileManager: {
    allowAllFileTypes: boolean;
  };
  
  // Cloud Storage
  cloudStorage: {
    iCloudDrive: boolean;
    googleDrive: boolean;
    dropbox: boolean;
    oneDrive: boolean;
  };
  
  // Share Sheet
  shareSheet: {
    fromEmail: boolean;
    fromOtherApps: boolean;
  };
}
```

**Batch Upload**:
```typescript
interface BatchUpload {
  batchId: string;
  userId: string;
  
  files: {
    fileId: string;
    fileName: string;
    fileSize: number;
    status: 'pending' | 'uploading' | 'processing' | 'completed' | 'failed';
    progress: number; // 0-100
    error?: string;
  }[];
  
  totalFiles: number;
  completedFiles: number;
  failedFiles: number;
  
  totalSize: number;
  uploadedSize: number;
  
  status: 'in_progress' | 'completed' | 'partial' | 'failed';
  
  startTime: Date;
  endTime?: Date;
}
```

#### 4.6.2 Document Organization & Search

**Document Filters**:
```typescript
interface DocumentFilters {
  // Date Range
  dateRange?: {
    start: Date;
    end: Date;
  };
  
  // Presets
  datePeriod?: 'today' | 'this_week' | 'this_month' | 'this_year' | 'last_7_days' | 'last_30_days' | 'last_90_days' | 'custom';
  
  // Category
  categories?: DocumentCategory[];
  
  // File Type
  fileTypes?: ('pdf' | 'image' | 'excel' | 'word' | 'csv' | 'other')[];
  
  // Tags
  tags?: string[];
  tagMatchMode?: 'any' | 'all'; // Match any tag or all tags
  
  // Linking
  hasLinkedEntity?: boolean;
  linkedEntityType?: string[];
  
  // Size
  fileSizeRange?: {
    min: number; // bytes
    max: number;
  };
  
  // Status
  isFavorite?: boolean;
  isArchived?: boolean;
  hasOCR?: boolean;
  isAvailableOffline?: boolean;
  
  // Text Search
  searchQuery?: string;
  searchFields?: ('filename' | 'description' | 'tags' | 'ocr_text')[];
}
```

**Document Search**:
```typescript
interface DocumentSearch {
  // Query
  query: string;
  
  // Search Options
  options: {
    fuzzyMatch: boolean; // Typo tolerance
    caseSensitive: boolean;
    wholeWord: boolean;
    
    // Fields to Search
    searchFileName: boolean;
    searchDescription: boolean;
    searchTags: boolean;
    searchOCRText: boolean;
    
    // Highlighting
    highlightResults: boolean;
  };
  
  // Filters
  filters?: DocumentFilters;
  
  // Sorting
  sortBy: 'relevance' | 'date_uploaded' | 'date_modified' | 'filename' | 'size';
  sortOrder: 'asc' | 'desc';
  
  // Pagination
  page: number;
  pageSize: number;
}

interface DocumentSearchResult {
  documents: {
    document: Document;
    relevanceScore: number; // 0-1
    matchedFields: string[];
    highlights: {
      field: string;
      text: string; // With <mark> tags
    }[];
  }[];
  
  totalResults: number;
  totalPages: number;
  currentPage: number;
  
  searchTime: number; // milliseconds
  
  suggestions?: string[]; // Did you mean...
}
```

**Full-Text Search** (PostgreSQL):
```sql
-- Full-text search on documents
CREATE INDEX idx_documents_fts ON documents 
USING GIN (to_tsvector('english', 
  coalesce(original_file_name, '') || ' ' || 
  coalesce(description, '') || ' ' || 
  coalesce(array_to_string(tags, ' '), '') || ' ' || 
  coalesce(ocr_text, '')
));
```

**Smart Filters** (Suggested):
```typescript
interface SmartFilters {
  // Common Filters
  commonFilters: {
    name: string;
    description: string;
    filter: DocumentFilters;
    icon: string;
  }[];
}
```

Examples:
- "Recent Receipts" (uploaded last 30 days, category: receipts)
- "Tax Documents 2024" (year: 2024, categories: tax)
- "Missing Receipts" (expenses without linked receipts)
- "Untagged Documents" (no tags assigned)
- "Large Files" (> 5MB)

**Document Views**:

**Grid View**:
- Thumbnail preview
- File name (truncated)
- Date
- File size
- Tags (badges)
- Quick actions (view, download, delete)
- Checkbox for multi-select

**List View**:
- File icon
- File name
- Category
- Tags
- Date uploaded
- File size
- Linked to (entity type + count)
- Quick actions

**Gallery View** (Images only):
- Large thumbnails
- Grid layout (3-4 columns)
- Lightbox on click
- Swipe navigation
- Slideshow mode

#### 4.6.3 Document Operations

**View/Preview**:
```typescript
interface DocumentViewer {
  document: Document;
  
  // Viewer Features
  features: {
    zoom: boolean;
    rotate: boolean;
    fullscreen: boolean;
    download: boolean;
    print: boolean;
    share: boolean;
    
    // Navigation (for multi-page)
    pagination: boolean;
    thumbnails: boolean;
    search: boolean; // Search within document
  };
  
  // Supported Formats
  supportedFormats: {
    pdf: 'native'; // Browser native or PDF.js
    images: 'native';
    excel: 'preview'; // Limited preview
    word: 'preview';
    csv: 'table'; // Render as table
    txt: 'text';
    json: 'formatted'; // Syntax highlighted
  };
}
```

**Document Actions**:
```typescript
interface DocumentActions {
  // View
  view: () => void;
  preview: () => void;
  
  // Download
  download: () => void;
  downloadOriginal: () => void;
  downloadCompressed: () => void;
  
  // Edit Metadata
  rename: (newName: string) => void;
  changeCategory: (category: DocumentCategory) => void;
  addTags: (tags: string[]) => void;
  removeTags: (tags: string[]) => void;
  updateDescription: (description: string) => void;
  
  // Linking
  linkToEntity: (entityType: string, entityId: string) => void;
  unlinkFromEntity: (entityType: string, entityId: string) => void;
  
  // Organization
  favorite: () => void;
  unfavorite: () => void;
  archive: () => void;
  unarchive: () => void;
  
  // Sharing
  share: (options: ShareOptions) => void;
  generateShareLink: (options: ShareLinkOptions) => void;
  
  // Processing
  reprocessOCR: () => void;
  generateThumbnail: () => void;
  
  // Offline (Mobile)
  makeAvailableOffline: () => void;
  removeOffline: () => void;
  
  // Deletion
  moveToTrash: () => void;
  restoreFromTrash: () => void;
  permanentDelete: () => void;
  
  // Export
  exportWithMetadata: () => void;
  
  // Print
  print: () => void;
}
```

**Bulk Operations**:
```typescript
interface BulkDocumentActions {
  selectedDocumentIds: string[];
  
  actions: {
    // Category
    changeCategory: (category: DocumentCategory) => void;
    
    // Tags
    addTags: (tags: string[]) => void;
    removeTags: (tags: string[]) => void;
    
    // Organization
    favoriteAll: () => void;
    archiveAll: () => void;
    
    // Download
    downloadAsZip: () => void;
    
    // Deletion
    moveAllToTrash: () => void;
    
    // Export
    exportAll: (format: 'zip' | 'pdf') => void;
  };
  
  progress: {
    total: number;
    completed: number;
    failed: number;
    status: 'in_progress' | 'completed' | 'partial' | 'failed';
  };
}
```

**Document Sharing**:
```typescript
interface ShareOptions {
  // Recipient
  recipientEmail?: string;
  recipientUserId?: string; // For accountant access
  
  // Permissions
  permission: 'view' | 'download';
  
  // Expiration
  expirationDate?: Date;
  expirationDays?: number; // Auto-calculate expiration
  
  // Security
  requirePassword?: boolean;
  password?: string;
  
  // Notification
  notifyRecipient: boolean;
  message?: string;
}

interface ShareLink {
  linkId: string;
  documentId: string;
  
  url: string; // Public share URL
  shortUrl?: string; // Shortened URL
  
  permissions: 'view' | 'download';
  
  security: {
    requirePassword: boolean;
    passwordHash?: string;
  };
  
  expiration: {
    expiresAt?: Date;
    isExpired: boolean;
  };
  
  tracking: {
    views: number;
    downloads: number;
    lastAccessed?: Date;
  };
  
  createdBy: string;
  createdAt: Date;
  
  isActive: boolean;
  revokedAt?: Date;
}
```

#### 4.6.4 Document Storage & Security

**Storage Strategy**:
```typescript
interface DocumentStorage {
  // Primary Storage
  primary: {
    provider: 'aws_s3' | 'digitalocean_spaces' | 'azure_blob';
    bucket: string;
    region: string;
    endpoint?: string;
  };
  
  // Backup Storage (Optional)
  backup?: {
    provider: string;
    bucket: string;
    region: string;
  };
  
  // CDN
  cdn: {
    enabled: boolean;
    provider: 'cloudflare' | 'aws_cloudfront' | 'fastly';
    domain: string;
  };
  
  // Encryption
  encryption: {
    atRest: 'AES-256';
    inTransit: 'TLS-1.3';
    keyManagement: 'aws_kms' | 'azure_key_vault' | 'self_managed';
  };
  
  // Access Control
  accessControl: {
    signedUrls: boolean; // Pre-signed URLs for secure access
    urlExpiration: number; // seconds
    corsEnabled: boolean;
    allowedOrigins: string[];
  };
}
```

**File Organization** (Storage):
/users/{userId}/ /documents/ /2024/ /01/ (January) /{documentId}.{ext} /02/ ... /thumbnails/ /{documentId}_thumb.jpg /temp/ /{uploadId}.{ext}

**Backup & Retention**:
```typescript
interface DocumentRetention {
  // Retention Policy
  retentionPeriod: {
    taxDocuments: number; // 7 years (IRS recommendation)
    vehicleDocuments: number; // Until sold + 3 years
    receipts: number; // 7 years
    general: number; // User-defined
  };
  
  // Automated Backups
  backups: {
    frequency: 'realtime' | 'hourly' | 'daily';
    retention: number; // days
    crossRegion: boolean;
    versioning: boolean;
  };
  
  // Archival
  archival: {
    enabled: boolean;
    afterDays: number; // Move to cheaper storage class
    storageClass: 'glacier' | 'deep_archive';
  };
}
```

**Storage Optimization**:
```typescript
interface StorageOptimization {
  // Image Compression
  imageCompression: {
    enabled: boolean;
    quality: number; // 1-100
    format: 'original' | 'webp' | 'jpeg';
    maxWidth: number; // pixels
    maxHeight: number;
  };
  
  // PDF Optimization
  pdfOptimization: {
    enabled: boolean;
    compressImages: boolean;
    removeMetadata: boolean;
  };
  
  // Deduplication
  deduplication: {
    enabled: boolean;
    method: 'hash' | 'content';
  };
  
  // Cleanup
  cleanup: {
    deleteTempFiles: boolean;
    deleteTempAfterDays: number;
    deleteTrashAfterDays: number;
  };
}
```

---

### 4.7 Financial Reports & Analytics

#### 4.7.1 Income Statement (Profit & Loss)

**Report Structure**:
```typescript
interface IncomeStatement {
  // Report Period
  period: DateRange;
  generatedDate: Date;
  
  // Revenue Section
  revenue: {
    // Gross Revenue by Platform
    byPlatform: {
      platform: PlatformType;
      grossEarnings: number;
      platformFees: number;
      netEarnings: number;
      trips: number;
      tips: number;
      bonuses: number;
    }[];
    
    totalGrossRevenue: number;
    totalPlatformFees: number;
    totalNetRevenue: number;
    totalTips: number;
    totalBonuses: number;
    
    // Total Revenue
    totalRevenue: number; // Net + tips + bonuses
  };
  
  // Expense Section
  expenses: {
    // By Category
    byCategory: {
      category: string;
      amount: number;
      percentage: number; // Of total expenses
      transactions: number;
    }[];
    
    // Major Categories
    vehicleExpenses: number;
    fuelCosts: number;
    maintenanceRepairs: number;
    insurance: number;
    phoneBills: number;
    supplies: number;
    professionalServices: number;
    other: number;
    
    totalExpenses: number;
  };
  
  // Profit Calculation
  netProfit: number; // Revenue - Expenses
  profitMargin: number; // (Net Profit / Revenue) × 100
  
  // Per-Unit Metrics
  perTrip: {
    revenue: number;
    expenses: number;
    profit: number;
  };
  
  perMile: {
    revenue: number;
    expenses: number;
    profit: number;
  };
  
  perHour: {
    revenue: number;
    expenses: number;
    profit: number;
  };
  
  // Comparison
  comparison?: {
    previousPeriod: {
      revenue: number;
      expenses: number;
      profit: number;
      change: {
        revenue: number; // Percentage
        expenses: number;
        profit: number;
      };
    };
    
    yearOverYear?: {
      revenue: number;
      expenses: number;
      profit: number;
      change: {
        revenue: number;
        expenses: number;
        profit: number;
      };
    };
  };
}
```

**Visualization Options**:
- Summary cards (Revenue, Expenses, Profit)
- Revenue vs. Expenses bar chart
- Profit margin line chart
- Expense breakdown pie chart
- Monthly comparison bar chart
- Trend analysis line chart

#### 4.7.2 Expense Reports
```typescript
interface ExpenseReport {
  period: DateRange;
  generatedDate: Date;
  
  // Summary
  summary: {
    totalExpenses: number;
    taxDeductible: number;
    nonDeductible: number;
    deductiblePercentage: number;
    
    transactionCount: number;
    averageExpense: number;
    largestExpense: {
      description: string;
      amount: number;
      date: Date;
    };
  };
  
  // By Category
  byCategory: {
    category: ExpenseCategory;
    amount: number;
    percentage: number;
    count: number;
    averageAmount: number;
    trend: {
      direction: 'up' | 'down' | 'stable';
      percentage: number;
    };
  }[];
  
  // By Payment Method
  byPaymentMethod: {
    method: PaymentMethod;
    amount: number;
    percentage: number;
    count: number;
  }[];
  
  // By Vehicle
  byVehicle: {
    vehicleId: string;
    vehicleName: string;
    amount: number;
    percentage: number;
    categories: {
      category: string;
      amount: number;
    }[];
  }[];
  
  // By Vendor
  topVendors: {
    vendor: string;
    amount: number;
count: number; averageTransaction: number; category: ExpenseCategory; }[];
// Tax Deduction Analysis taxAnalysis: { fullyDeductible: number; partiallyDeductible: number; nonDeductible: number;
byCategory: {
  category: ExpenseCategory;
  deductibleAmount: number;
  nonDeductibleAmount: number;
}[];

estimatedTaxSavings: {
  federal: number;
  state: number;
  selfEmployment: number;
  total: number;
};
};
// Trends trends: { daily: { date: Date; amount: number }[]; weekly: { week: string; amount: number }[]; monthly: { month: string; amount: number }[]; };
// Missing Receipts missingReceipts: { expenseId: string; description: string; amount: number; date: Date; category: ExpenseCategory; }[];
// Detailed Transactions transactions?: { date: Date; description: string; category: ExpenseCategory; amount: number; paymentMethod: PaymentMethod; vendor: string; isTaxDeductible: boolean; hasReceipt: boolean; }[]; }

#### 4.7.3 Revenue Reports
```typescript
interface RevenueReport {
  period: DateRange;
  generatedDate: Date;
  
  // Summary
  summary: {
    totalRevenue: number;
    grossEarnings: number;
    netEarnings: number;
    platformFees: number;
    tips: number;
    bonuses: number;
    
    totalTrips: number;
    totalHours: number;
    totalMiles: number;
    
    averagePerTrip: number;
    averagePerHour: number;
    averagePerMile: number;
    averagePerDay: number;
  };
  
  // Platform Analysis
  platformAnalysis: {
    platform: PlatformType;
    
    revenue: {
      gross: number;
      net: number;
      fees: number;
      tips: number;
      bonuses: number;
      total: number;
    };
    
    activity: {
      trips: number;
      hours: number;
      miles: number;
    };
    
    averages: {
      perTrip: number;
      perHour: number;
      perMile: number;
    };
    
    percentage: number; // Of total revenue
    rank: number; // 1st, 2nd, 3rd, etc.
  }[];
  
  // Time Analysis
  timeAnalysis: {
    // Best Days
    bestDays: {
      date: Date;
      revenue: number;
      trips: number;
      hours: number;
    }[];
    
    // Day of Week
    byDayOfWeek: {
      day: string; // Monday, Tuesday, etc.
      revenue: number;
      trips: number;
      averageRevenue: number;
    }[];
    
    // Hour of Day
    byHourOfDay: {
      hour: number; // 0-23
      revenue: number;
      trips: number;
      averageRevenue: number;
    }[];
    
    // Peak Hours
    peakHours: {
      startHour: number;
      endHour: number;
      averageRevenue: number;
      description: string; // e.g., "Morning Rush"
    }[];
  };
  
  // Tips Analysis
  tipsAnalysis: {
    totalTips: number;
    tipsPercentageOfRevenue: number;
    averageTipPerTrip: number;
    
    cashTips: number;
    appTips: number;
    
    byPlatform: {
      platform: PlatformType;
      totalTips: number;
      averageTip: number;
      tipsPercentage: number;
    }[];
    
    tipDistribution: {
      range: string; // $0-$5, $5-$10, etc.
      count: number;
      percentage: number;
    }[];
  };
  
  // Bonus & Incentives
  bonusAnalysis: {
    totalBonuses: number;
    bonusPercentageOfRevenue: number;
    
    byType: {
      type: string; // Quest, Surge, Promotion, etc.
      amount: number;
      count: number;
    }[];
    
    byPlatform: {
      platform: PlatformType;
      totalBonuses: number;
      count: number;
    }[];
  };
  
  // Geographic Analysis (Optional)
  geographicAnalysis?: {
    byArea: {
      area: string;
      revenue: number;
      trips: number;
      averagePerTrip: number;
    }[];
  };
  
  // Trends
  trends: {
    daily: { date: Date; revenue: number; trips: number }[];
    weekly: { week: string; revenue: number; trips: number }[];
    monthly: { month: string; revenue: number; trips: number }[];
  };
  
  // Goals
  goals?: {
    targetRevenue: number;
    actualRevenue: number;
    progress: number; // Percentage
    remainingAmount: number;
    onTrack: boolean;
    projectedRevenue: number;
  };
}
```

#### 4.7.4 Tax Reports

**Annual Tax Summary**:
```typescript
interface AnnualTaxSummary {
  taxYear: number;
  generatedDate: Date;
  
  // Income
  income: {
    totalGrossRevenue: number;
    totalPlatformFees: number;
    totalNetRevenue: number;
    
    byPlatform: {
      platform: PlatformType;
      grossRevenue: number;
      form1099Amount?: number; // Expected 1099 amount
      difference?: number; // Revenue vs 1099
    }[];
    
    otherIncome?: number;
    totalIncome: number;
  };
  
  // Expenses
  expenses: {
    totalExpenses: number;
    taxDeductibleExpenses: number;
    
    byCategory: {
      category: string;
      amount: number;
      scheduleC Line: string; // e.g., "Line 9 - Car and Truck"
    }[];
    
    vehicleExpenses: {
      method: 'Standard Mileage' | 'Actual Expense';
      
      standardMileage?: {
        businessMiles: number;
        rate: number;
        deduction: number;
      };
      
      actualExpense?: {
        totalExpenses: number;
        businessUsePercentage: number;
        deduction: number;
      };
    };
    
    depreciation: {
      method: string;
      amount: number;
    };
  };
  
  // Net Profit/Loss
  netProfit: number; // Schedule C Line 31
  
  // Self-Employment Tax
  selfEmploymentTax: {
    netEarnings: number; // Net profit × 92.35%
    socialSecurity: number; // 12.4%
    medicare: number; // 2.9%
    additionalMedicare?: number; // 0.9% if over threshold
    total: number;
    deductibleHalf: number; // Can deduct 50%
  };
  
  // Income Tax Estimate
  incomeTax: {
    adjustedGrossIncome: number;
    standardDeduction: number;
    taxableIncome: number;
    
    federal: {
      taxBracket: string;
      estimatedTax: number;
      effectiveRate: number;
    };
    
    state: {
      stateName: string;
      estimatedTax: number;
      effectiveRate: number;
    };
  };
  
  // Total Tax Liability
  totalTaxLiability: {
    federalIncome: number;
    stateIncome: number;
    selfEmployment: number;
    total: number;
  };
  
  // Payments Made
  paymentsMade: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    total: number;
    
    federalWithholding?: number;
    stateWithholding?: number;
  };
  
  // Balance Due or Refund
  balanceDueOrRefund: {
    federal: number;
    state: number;
    total: number;
    status: 'refund' | 'owed';
  };
  
  // Form Data Ready
  formsReady: {
    scheduleC: boolean;
    scheduleSE: boolean;
    form4562: boolean;
    form1040ES: boolean;
  };
  
  // Documentation Status
  documentation: {
    receiptsComplete: number; // Percentage
    mileageLogComplete: boolean;
    form1099sReceived: {
      expected: number;
      received: number;
      missing: string[];
    };
  };
}
```

**Quarterly Tax Report**:
```typescript
interface QuarterlyTaxReport {
  taxYear: number;
  quarter: 1 | 2 | 3 | 4;
  
  quarterDates: {
    start: Date;
    end: Date;
    dueDate: Date;
  };
  
  // Income This Quarter
  quarterIncome: {
    grossRevenue: number;
    netRevenue: number;
    tips: number;
    bonuses: number;
    total: number;
  };
  
  // Expenses This Quarter
  quarterExpenses: {
    total: number;
    byCategory: { category: string; amount: number }[];
  };
  
  // Net Profit This Quarter
  quarterNetProfit: number;
  
  // Year-to-Date
  ytd: {
    income: number;
    expenses: number;
    netProfit: number;
  };
  
  // Projected Annual
  projected: {
    income: number;
    expenses: number;
    netProfit: number;
    
    projectionBasis: 'ytd_average' | 'quarterly_trend' | 'manual';
  };
  
  // Estimated Tax Calculation
  estimatedTax: {
    annualTaxLiability: number;
    
    quarterlyPayment: number; // Annual / 4
    paymentsMadeYTD: number;
    dueThisQuarter: number;
    
    safeHarbor: {
      method: '90% Current' | '100% Prior' | '110% Prior';
      required: number;
      met: boolean;
    };
  };
  
  // Recommendations
  recommendations: {
    payFullAmount: boolean;
    suggestedPayment: number;
    reason: string;
    
    warnings: string[];
  };
  
  // Payment Options
  paymentMethods: {
    method: string;
    instructions: string;
    link?: string;
  }[];
}
```

**Mileage Log Report**:
```typescript
interface MileageLogReport {
  period: DateRange;
  vehicleId?: string; // Optional: for specific vehicle
  
  // Summary
  summary: {
    totalBusinessMiles: number;
    totalPersonalMiles: number;
    totalCommuteMiles: number;
    totalMiles: number;
    
    businessUsePercentage: number;
    
    tripCount: {
      business: number;
      personal: number;
      commute: number;
      total: number;
    };
  };
  
  // Deduction Calculation
  deduction: {
    method: 'Standard Mileage' | 'Actual Expense';
    
    standardMileage?: {
      businessMiles: number;
      rate: number; // IRS standard rate
      totalDeduction: number;
    };
    
    actualExpense?: {
      totalVehicleExpenses: number;
      businessUsePercentage: number;
      deductibleAmount: number;
    };
    
    recommendation: {
      betterMethod: 'Standard Mileage' | 'Actual Expense';
      savingsDifference: number;
      reason: string;
    };
  };
  
  // Monthly Breakdown
  monthlyBreakdown: {
    month: string;
    businessMiles: number;
    personalMiles: number;
    commuteMiles: number;
    businessPercentage: number;
  }[];
  
  // Detailed Log (IRS-Compliant)
  detailedLog: {
    date: Date;
    odometer: {
      start: number;
      end: number;
    };
    miles: number;
    startLocation: string;
    endLocation: string;
    businessPurpose: string; // Required for business trips
    tripType: 'Business' | 'Personal' | 'Commute';
  }[];
  
  // Compliance Check
  compliance: {
    hasAllRequiredFields: boolean;
    contemporaneousRecords: boolean; // Recorded timely
    adequateEvidence: boolean;
    irsCompliant: boolean;
    
    issues: string[];
  };
  
  // By Vehicle (if multiple)
  byVehicle?: {
    vehicleId: string;
    vehicleName: string;
    businessMiles: number;
    personalMiles: number;
    businessPercentage: number;
  }[];
}
```

#### 4.7.5 Vehicle Cost Analysis Report
```typescript
interface VehicleCostReport {
  vehicleId: string;
  period: DateRange;
  
  // Vehicle Info
  vehicle: {
    make: string;
    model: string;
    year: number;
    vin: string;
  };
  
  // Total Cost of Ownership
  totalCostOfOwnership: {
    // Acquisition
    purchasePrice: number;
    downPayment: number;
    
    // Financing
    loanInterestPaid: number;
    
    // Operating Costs
    fuel: number;
    maintenance: number;
    repairs: number;
    insurance: number;
    registration: number;
    
    // Depreciation
    depreciation: number;
    
    // Total
    totalCost: number;
  };
  
  // Cost Breakdown
  costBreakdown: {
    category: string;
    amount: number;
    percentage: number;
  }[];
  
  // Per-Unit Costs
  perUnitCosts: {
    costPerMile: number;
    costPerDay: number;
    costPerMonth: number;
    costPerTrip: number;
  };
  
  // Operating Efficiency
  efficiency: {
    fuelEfficiency: number; // MPG
    fuelCostPerMile: number;
    maintenanceCostPerMile: number;
    totalCostPerMile: number;
    
    averageDaysInShop: number;
    reliabilityScore: number; // 0-100
  };
  
  // Maintenance History
  maintenanceHistory: {
    oilChanges: { count: number; totalCost: number };
    tireServices: { count: number; totalCost: number };
    repairs: { count: number; totalCost: number };
    other: { count: number; totalCost: number };
    
    totalMaintenanceCost: number;
    averageMaintenanceCost: number; // Per service
  };
  
  // Depreciation Analysis
  depreciationAnalysis: {
    originalValue: number;
    currentValue: number;
    totalDepreciation: number;
    depreciationPercentage: number;
    annualDepreciationRate: number;
    
    projectedValue: {
      oneYear: number;
      twoYears: number;
      threeYears: number;
    };
  };
  
  // Revenue Generation
  revenueGeneration: {
    totalRevenue: number;
    totalTrips: number;
    totalMiles: number;
    
    revenuePerMile: number;
    revenuePerTrip: number;
  };
  
  // Profitability
  profitability: {
    totalRevenue: number;
    totalCosts: number;
    netProfit: number;
    profitMargin: number; // Percentage
    
    roi: number; // Return on Investment %
    breakEvenMiles?: number;
  };
  
  // Comparison to Average
  comparison?: {
    yourCostPerMile: number;
    averageCostPerMile: number; // For vehicle type
    difference: number;
    percentile: number; // Your ranking
  };
  
  // Recommendations
  recommendations: {
    type: 'maintenance' | 'replacement' | 'optimization';
    priority: 'high' | 'medium' | 'low';
    description: string;
    estimatedSavings?: number;
  }[];
}
```

#### 4.7.6 Dashboard Reports

**Main Dashboard**:
```typescript
interface DashboardData {
  period: 'today' | 'week' | 'month' | 'year';
  
  // Key Metrics
  keyMetrics: {
    revenue: {
      current: number;
      previous: number;
      change: number; // Percentage
      trend: 'up' | 'down' | 'stable';
    };
    
    expenses: {
      current: number;
      previous: number;
      change: number;
      trend: 'up' | 'down' | 'stable';
    };
    
    profit: {
      current: number;
      previous: number;
      change: number;
      trend: 'up' | 'down' | 'stable';
    };
    
    profitMargin: {
      current: number; // Percentage
      previous: number;
      change: number;
    };
  };
  
  // Quick Stats
  quickStats: {
    tripsCompleted: number;
    hoursWorked: number;
    milesDriven: number;
    averagePerTrip: number;
    averagePerHour: number;
  };
  
  // Recent Activity
  recentActivity: {
    recentRevenue: {
      date: Date;
      platform: PlatformType;
      amount: number;
    }[];
    
    recentExpenses: {
      date: Date;
      category: ExpenseCategory;
      description: string;
      amount: number;
    }[];
  };
  
  // Alerts & Reminders
  alerts: {
    taxDeadlines: {
      type: string;
      dueDate: Date;
      daysUntil: number;
      priority: 'critical' | 'high' | 'medium';
    }[];
    
    maintenanceDue: {
      vehicleName: string;
      serviceType: string;
      dueDate?: Date;
      dueMileage?: number;
      urgency: 'overdue' | 'due_soon' | 'upcoming';
    }[];
    
    otherAlerts: {
      type: string;
      message: string;
      priority: 'high' | 'medium' | 'low';
    }[];
  };
  
  // Charts
  charts: {
    revenueVsExpenses: {
      labels: string[];
      revenue: number[];
      expenses: number[];
      profit: number[];
    };
    
    expenseBreakdown: {
      categories: string[];
      amounts: number[];
    };
    
    revenueTrends: {
      dates: Date[];
      revenue: number[];
      movingAverage: number[];
    };
  };
  
  // Goals Progress
  goals: {
    goalId: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    progress: number; // Percentage
    daysRemaining: number;
    onTrack: boolean;
  }[];
  
  // Financial Health Score
  healthScore: {
    score: number; // 0-100
    rating: 'Excellent' | 'Good' | 'Fair' | 'Poor';
    factors: {
      profitability: number;
      cashFlow: number;
      expenseControl: number;
      maintenance: number;
      taxCompliance: number;
    };
  };
}
```

**Report Export Options**:
```typescript
interface ReportExport {
  reportType: string;
  format: 'pdf' | 'excel' | 'csv' | 'json';
  
  options: {
    // PDF Options
    pdf?: {
      includeCharts: boolean;
      includeDetails: boolean;
      pageSize: 'letter' | 'a4';
      orientation: 'portrait' | 'landscape';
      includeCompanyLogo: boolean;
    };
    
    // Excel Options
    excel?: {
      includeFormulas: boolean;
      includeCharts: boolean;
      separateSheets: boolean; // One sheet per section
    };
    
    // CSV Options
    csv?: {
      delimiter: ',' | ';' | '\t';
      includeHeaders: boolean;
      dateFormat: string;
    };
  };
  
  // Email Options
  email?: {
    recipients: string[];
    subject: string;
    message: string;
    attachReport: boolean;
  };
  
  // Scheduling (Future Feature)
  schedule?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
    dayOfWeek?: number;
    dayOfMonth?: number;
    time: string; // HH:MM
    recipients: string[];
  };
}
```

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

#### 5.1.1 Web Application
- **Page Load Time**: < 2 seconds (initial), < 1 second (subsequent)
- **API Response Time**: < 300ms (95th percentile)
- **Database Query Time**: < 100ms (average)
- **Report Generation**: < 5 seconds (typical dataset)
- **File Upload**: Process 10MB file in < 10 seconds
- **Real-time Sync**: < 5 seconds for data synchronization

#### 5.1.2 Mobile Application
- **App Launch**: < 2 seconds (cold start)
- **Screen Transition**: < 200ms
- **Animation Frame Rate**: 60fps
- **API Response**: Same as web
- **Offline Mode**: Full functionality without internet
- **Background Sync**: Complete within 30 seconds
- **Battery Usage**: < 5% per hour (active use)

#### 5.1.3 Scalability
- **Concurrent Users**: Support 1,000+ simultaneously
- **Database**: Handle 10M+ records efficiently
- **File Storage**: Scale to petabytes
- **Horizontal Scaling**: Add servers as needed
- **Auto-scaling**: Based on load

### 5.2 Security Requirements

#### 5.2.1 Authentication & Authorization
- **Password Security**: bcrypt hashing (cost factor: 12)
- **JWT Tokens**: 15-minute access, 7-day refresh
- **2FA**: TOTP-based two-factor authentication
- **Biometric**: Face ID, Touch ID, Fingerprint
- **Session Management**: Secure, httpOnly cookies
- **Brute Force Protection**: 5 attempts → 15-min lockout

#### 5.2.2 Data Security
- **Encryption at Rest**: AES-256
- **Encryption in Transit**: TLS 1.3
- **Database Encryption**: Transparent Data Encryption
- **File Storage Encryption**: Server-side encryption
- **Sensitive Data**: Encrypted before storage

#### 5.2.3 Application Security
- **Input Validation**: All user inputs validated
- **SQL Injection**: Parameterized queries only
- **XSS Protection**: Output encoding, CSP headers
- **CSRF Protection**: Tokens for state-changing operations
- **API Security**: Rate limiting, authentication required
- **File Upload Security**: Type validation, virus scanning

#### 5.2.4 Mobile Security
- **Local Storage**: Encrypted (SQLCipher)
- **Keychain/Keystore**: Secure credential storage
- **Certificate Pinning**: Prevent MITM attacks
- **Jailbreak/Root Detection**: Warning to users
- **Screen Capture**: Disabled for sensitive screens

### 5.3 Reliability Requirements

- **Uptime**: 99.5% SLA (monthly)
- **Data Loss**: Zero tolerance for user data
- **Backup Frequency**: Daily automated backups
- **Disaster Recovery**: 4-hour RTO, 15-minute RPO
- **Error Rate**: < 0.5% of all requests
- **Crash Rate**: < 1% (mobile apps)

### 5.4 Usability Requirements

- **Intuitive Design**: New users productive within 10 minutes
- **Accessibility**: WCAG 2.1 Level AA compliance
- **Mobile Responsive**: Works on all screen sizes
- **Error Messages**: Clear, actionable guidance
- **Help Documentation**: Comprehensive, searchable
- **Onboarding**: Interactive tutorial for new users

### 5.5 Compatibility Requirements

#### 5.5.1 Web Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

#### 5.5.2 Mobile Platforms
- iOS 14.0+ (iPhone, iPad)
- Android 8.0+ (API 26+)

#### 5.5.3 Devices
- Desktop (1920×1080 and higher)
- Laptop (1366×768 and higher)
- Tablet (768×1024)
- Mobile (375×667 to 428×926)

### 5.6 Compliance Requirements

- **GDPR**: Full compliance for EU users
- **CCPA**: Full compliance for California users
- **Data Portability**: Export all user data
- **Right to Erasure**: Complete data deletion
- **Privacy Policy**: Clear, comprehensive
- **Terms of Service**: Legally reviewed
- **Tax Compliance**: IRS-compliant reports

---

## 6. Database Schema (PostgreSQL)

### 6.1 Core Tables
```sql
-- Users Table
CREATE TABLE users (
  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone_number VARCHAR(20),
  profile_photo_url VARCHAR(500),
  
  -- Business Information
  business_name VARCHAR(255),
  ein VARCHAR(20),
  business_structure VARCHAR(50),
  tax_state VARCHAR(2),
  filing_status VARCHAR(50),
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  email_verified BOOLEAN DEFAULT false,
  two_factor_enabled BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP,
  
  CONSTRAINT check_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);

-- User Preferences Table
CREATE TABLE user_preferences (
  preference_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  
  -- Notifications
  push_notifications BOOLEAN DEFAULT true,
  email_notifications BOOLEAN DEFAULT true,
  sms_notifications BOOLEAN DEFAULT false,
  
  -- App Settings
  auto_mileage_tracking BOOLEAN DEFAULT false,
  dark_mode_enabled BOOLEAN DEFAULT false,
  default_currency VARCHAR(3) DEFAULT 'USD',
  mileage_unit VARCHAR(20) DEFAULT 'miles',
  first_day_of_week INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(user_id)
);

-- Vehicles Table
CREATE TABLE vehicles (
  vehicle_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  
  -- Basic Info
  make VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  year INTEGER NOT NULL,
  vin VARCHAR(17),
  license_plate VARCHAR(20),
  license_plate_state VARCHAR(2),
  color VARCHAR(50),
  
  -- Acquisition
  acquisition_type VARCHAR(20) NOT NULL, -- cash_purchase, financed, leased
  acquisition_date DATE NOT NULL,
  purchase_price DECIMAL(10, 2) NOT NULL,
  current_value DECIMAL(10, 2),
  
  -- Odometer
  initial_odometer INTEGER NOT NULL,
  current_odometer INTEGER NOT NULL,
  odometer_unit VARCHAR(20) DEFAULT 'miles',
  last_odometer_update TIMESTAMP,
  
  -- Usage
  primary_use VARCHAR(20) DEFAULT 'rideshare',
  business_use_percentage DECIMAL(5, 2),
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  sold_date DATE,
  sold_price DECIMAL(10, 2),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT check_year CHECK (year >= 1900 AND year <= EXTRACT(YEAR FROM CURRENT_DATE) + 1),
  CONSTRAINT check_odometer CHECK (current_odometer >= initial_odometer)
);

CREATE INDEX idx_vehicles_user ON vehicles(user_id);
CREATE INDEX idx_vehicles_active ON vehicles(user_id, is_active);

-- Revenue Table
CREATE TABLE revenue (
  revenue_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  vehicle_id UUID REFERENCES vehicles(vehicle_id) ON DELETE SET NULL,
  
  -- Details
  date DATE NOT NULL,
  time TIME,
  platform VARCHAR(100) NOT NULL,
  
  -- Amounts
  gross_earnings DECIMAL(10, 2) NOT NULL,
  platform_fees DECIMAL(10, 2) DEFAULT 0,
  net_earnings DECIMAL(10, 2) NOT NULL,
  tips DECIMAL(10, 2) DEFAULT 0,
  bonuses DECIMAL(10, 2) DEFAULT 0,
  
  -- Activity
  distance DECIMAL(10, 2),
  hours_worked DECIMAL(5, 2),
  num_trips INTEGER DEFAULT 1,
  
  notes TEXT,
  
  -- Metadata
  created_from VARCHAR(20) DEFAULT 'web',
  sync_status VARCHAR(20) DEFAULT 'synced',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT check_amounts CHECK (
    gross_earnings >= 0 AND
    net_earnings >= 0 AND
    net_earnings <= gross_earnings
  )
);

CREATE INDEX idx_revenue_user_date ON revenue(user_id, date DESC);
CREATE INDEX idx_revenue_platform ON revenue(user_id, platform);
CREATE INDEX idx_revenue_vehicle ON revenue(vehicle_id);

-- Expenses Table
CREATE TABLE expenses (
  expense_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  vehicle_id UUID REFERENCES vehicles(vehicle_id) ON DELETE SET NULL,
  
  -- Details
  date DATE NOT NULL,
  time TIME,
  category VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  
  -- Payment
  payment_method VARCHAR(50),
  vendor_name VARCHAR(255),
  
  -- Tax
  is_tax_deductible BOOLEAN DEFAULT true,
  business_use_percentage INTEGER DEFAULT 100,
Complete Requirements Documentation: GigAssist Rideshare Driver Financial Management System
Document Information
Project Name: GigAssist
Version: 2.0
Last Updated: January 2025
Document Status: Final - Ready for Implementation
Prepared By: Development Team
Table of Contents
1.	Executive Summary
2.	Project Overview
3.	Technology Stack
4.	Functional Requirements
5.	Non-Functional Requirements
 -- Location location_lat DECIMAL(10, 7), location_long DECIMAL(10, 7), location_name VARCHAR(255),
-- Receipt receipt_document_id UUID,
notes TEXT,
-- Metadata created_from VARCHAR(20) DEFAULT 'web', sync_status VARCHAR(20) DEFAULT 'synced', created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT check_amount CHECK (amount >= 0), CONSTRAINT check_business_use CHECK (business_use_percentage >= 0 AND business_use_percentage <= 100) );
CREATE INDEX idx_expenses_user_date ON expenses(user_id, date DESC); CREATE INDEX idx_expenses_category ON expenses(user_id, category); CREATE INDEX idx_expenses_vehicle ON expenses(vehicle_id); CREATE INDEX idx_expenses_deductible ON expenses(user_id, is_tax_deductible);
-- Invoices Table CREATE TABLE invoices ( invoice_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
-- Invoice Info invoice_number VARCHAR(50) NOT NULL, issue_date DATE NOT NULL, due_date DATE NOT NULL,
-- Vendor vendor_name VARCHAR(255) NOT NULL, vendor_email VARCHAR(255), vendor_phone VARCHAR(20), vendor_address TEXT,
-- Amounts subtotal DECIMAL(10, 2) NOT NULL, tax_amount DECIMAL(10, 2) DEFAULT 0, discount_amount DECIMAL(10, 2) DEFAULT 0, total_amount DECIMAL(10, 2) NOT NULL,
-- Payment payment_status VARCHAR(20) DEFAULT 'unpaid', amount_paid DECIMAL(10, 2) DEFAULT 0, payment_method VARCHAR(50), payment_date DATE,
notes TEXT, reminder_sent BOOLEAN DEFAULT false,
-- Timestamps created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UNIQUE(user_id, invoice_number), CONSTRAINT check_amounts CHECK ( total_amount >= 0 AND amount_paid >= 0 AND amount_paid <= total_amount ) );
CREATE INDEX idx_invoices_user ON invoices(user_id); CREATE INDEX idx_invoices_status ON invoices(user_id, payment_status); CREATE INDEX idx_invoices_due_date ON invoices(user_id, due_date);
-- Invoice Line Items Table CREATE TABLE invoice_items ( item_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), invoice_id UUID NOT NULL REFERENCES invoices(invoice_id) ON DELETE CASCADE,
description TEXT NOT NULL, quantity DECIMAL(10, 2) DEFAULT 1, unit_price DECIMAL(10, 2) NOT NULL, subtotal DECIMAL(10, 2) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
CREATE INDEX idx_invoice_items_invoice ON invoice_items(invoice_id);
-- Mileage Log Table CREATE TABLE mileage_log ( log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), vehicle_id UUID NOT NULL REFERENCES vehicles(vehicle_id) ON DELETE CASCADE, user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
-- Trip Details date DATE NOT NULL, start_time TIMESTAMP, end_time TIMESTAMP,
-- Locations start_location VARCHAR(500), end_location VARCHAR(500), start_lat DECIMAL(10, 7), start_long DECIMAL(10, 7), end_lat DECIMAL(10, 7), end_long DECIMAL(10, 7),
-- Odometer odometer_start INTEGER, odometer_end INTEGER,
-- Distance miles DECIMAL(10, 2) NOT NULL,
-- Classification purpose VARCHAR(20) NOT NULL, -- business, personal, commute trip_description TEXT, platform VARCHAR(100),
-- Route route_polyline TEXT,
-- Tracking auto_tracked BOOLEAN DEFAULT false, tracking_accuracy VARCHAR(20),
notes TEXT,
-- Metadata created_from VARCHAR(20) DEFAULT 'web', created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT check_miles CHECK (miles >= 0) );
CREATE INDEX idx_mileage_vehicle ON mileage_log(vehicle_id); CREATE INDEX idx_mileage_user_date ON mileage_log(user_id, date DESC); CREATE INDEX idx_mileage_purpose ON mileage_log(user_id, purpose);
-- Maintenance Records Table CREATE TABLE maintenance_records ( maintenance_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), vehicle_id UUID NOT NULL REFERENCES vehicles(vehicle_id) ON DELETE CASCADE,
-- Service Info maintenance_type VARCHAR(50) NOT NULL, date DATE NOT NULL, odometer INTEGER NOT NULL, service_provider VARCHAR(255), description TEXT NOT NULL,
-- Costs parts_cost DECIMAL(10, 2) DEFAULT 0, labor_cost DECIMAL(10, 2) DEFAULT 0, total_cost DECIMAL(10, 2) NOT NULL,
-- Next Service next_due_date DATE, next_due_mileage INTEGER,
-- Documents receipt_document_id UUID,
warranty_info TEXT, notes TEXT,
-- Reminders reminder_sent BOOLEAN DEFAULT false,
-- Timestamps created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT check_costs CHECK ( total_cost >= 0 AND parts_cost >= 0 AND labor_cost >= 0 ) );
CREATE INDEX idx_maintenance_vehicle ON maintenance_records(vehicle_id); CREATE INDEX idx_maintenance_date ON maintenance_records(vehicle_id, date DESC); CREATE INDEX idx_maintenance_type ON maintenance_records(vehicle_id, maintenance_type); CREATE INDEX idx_maintenance_next_due ON maintenance_records(vehicle_id, next_due_date);
-- Vehicle Finance Table CREATE TABLE vehicle_finance ( finance_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), vehicle_id UUID NOT NULL REFERENCES vehicles(vehicle_id) ON DELETE CASCADE,
-- Lender Info lender_name VARCHAR(255) NOT NULL, account_number VARCHAR(100),
-- Loan Details loan_amount DECIMAL(10, 2) NOT NULL, down_payment DECIMAL(10, 2) DEFAULT 0, interest_rate DECIMAL(5, 3) NOT NULL, term_months INTEGER NOT NULL, monthly_payment DECIMAL(10, 2) NOT NULL,
-- Dates start_date DATE NOT NULL, end_date DATE NOT NULL, first_payment_date DATE, next_payment_date DATE,
-- Balance current_balance DECIMAL(10, 2) NOT NULL, total_interest_paid DECIMAL(10, 2) DEFAULT 0, total_principal_paid DECIMAL(10, 2) DEFAULT 0,
-- Timestamps created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT check_amounts CHECK ( loan_amount > 0 AND monthly_payment > 0 AND current_balance >= 0 ) );
CREATE INDEX idx_finance_vehicle ON vehicle_finance(vehicle_id);
-- Finance Payments Table CREATE TABLE finance_payments ( payment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), finance_id UUID NOT NULL REFERENCES vehicle_finance(finance_id) ON DELETE CASCADE,
payment_date DATE NOT NULL, amount_paid DECIMAL(10, 2) NOT NULL, principal_amount DECIMAL(10, 2) NOT NULL, interest_amount DECIMAL(10, 2) NOT NULL, late_fees DECIMAL(10, 2) DEFAULT 0,
payment_method VARCHAR(50), confirmation_number VARCHAR(100), remaining_balance DECIMAL(10, 2) NOT NULL,
notes TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT check_amounts CHECK ( amount_paid > 0 AND principal_amount >= 0 AND interest_amount >= 0 ) );
CREATE INDEX idx_finance_payments_finance ON finance_payments(finance_id); CREATE INDEX idx_finance_payments_date ON finance_payments(payment_date DESC);
-- Documents Table CREATE TABLE documents ( document_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
-- File Info original_file_name VARCHAR(500) NOT NULL, stored_file_name VARCHAR(500) NOT NULL, file_type VARCHAR(100) NOT NULL, file_extension VARCHAR(10) NOT NULL, file_size BIGINT NOT NULL,
-- Storage storage_path VARCHAR(1000) NOT NULL, storage_provider VARCHAR(50) NOT NULL, thumbnail_path VARCHAR(1000),
-- Metadata category VARCHAR(100) NOT NULL, tags TEXT[], description TEXT,
-- OCR ocr_text TEXT, ocr_confidence INTEGER, ocr_processed BOOLEAN DEFAULT false, ocr_processed_date TIMESTAMP,
-- Access is_available_offline BOOLEAN DEFAULT false, download_count INTEGER DEFAULT 0, last_accessed_date TIMESTAMP,
-- Organization is_favorite BOOLEAN DEFAULT false, is_archived BOOLEAN DEFAULT false,
-- Timestamps upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT check_file_size CHECK (file_size > 0) );
CREATE INDEX idx_documents_user ON documents(user_id); CREATE INDEX idx_documents_category ON documents(user_id, category); CREATE INDEX idx_documents_upload_date ON documents(user_id, upload_date DESC); CREATE INDEX idx_documents_tags ON documents USING GIN (tags); CREATE INDEX idx_documents_ocr_text ON documents USING GIN (to_tsvector('english', COALESCE(ocr_text, '')));
-- Document Links Table (for linking documents to entities) CREATE TABLE document_links ( link_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), document_id UUID NOT NULL REFERENCES documents(document_id) ON DELETE CASCADE,
entity_type VARCHAR(50) NOT NULL, -- expense, invoice, vehicle, etc. entity_id UUID NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UNIQUE(document_id, entity_type, entity_id) );
CREATE INDEX idx_document_links_document ON document_links(document_id); CREATE INDEX idx_document_links_entity ON document_links(entity_type, entity_id);
-- Tax Payments Table CREATE TABLE tax_payments ( payment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
payment_date DATE NOT NULL, tax_type VARCHAR(50) NOT NULL, tax_year INTEGER NOT NULL, tax_quarter INTEGER, amount DECIMAL(10, 2) NOT NULL,
payment_method VARCHAR(50), confirmation_number VARCHAR(100),
notes TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT check_amount CHECK (amount > 0), CONSTRAINT check_quarter CHECK (tax_quarter IS NULL OR (tax_quarter >= 1 AND tax_quarter <= 4)) );
CREATE INDEX idx_tax_payments_user ON tax_payments(user_id); CREATE INDEX idx_tax_payments_year ON tax_payments(user_id, tax_year DESC); CREATE INDEX idx_tax_payments_type ON tax_payments(user_id, tax_type);
-- Tax Alerts Table CREATE TABLE tax_alerts ( alert_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
alert_type VARCHAR(100) NOT NULL, due_date DATE NOT NULL, description TEXT NOT NULL,
is_recurring BOOLEAN DEFAULT false, recurrence_rule VARCHAR(100), reminder_days INTEGER[] DEFAULT ARRAY[30, 14, 7, 3, 1],
is_completed BOOLEAN DEFAULT false, completed_date DATE,
priority VARCHAR(20) DEFAULT 'medium', notification_sent BOOLEAN DEFAULT false,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
CREATE INDEX idx_tax_alerts_user ON tax_alerts(user_id); CREATE INDEX idx_tax_alerts_due_date ON tax_alerts(user_id, due_date); CREATE INDEX idx_tax_alerts_completed ON tax_alerts(user_id, is_completed);
-- User Devices Table (for mobile) CREATE TABLE user_devices ( device_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
device_type VARCHAR(20) NOT NULL, -- ios, android, web device_token VARCHAR(500), device_name VARCHAR(255), device_os_version VARCHAR(50), app_version VARCHAR(20),
last_active_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, is_active BOOLEAN DEFAULT true,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
CREATE INDEX idx_devices_user ON user_devices(user_id); CREATE INDEX idx_devices_active ON user_devices(user_id, is_active);

### 6.2 Audit & Sync Tables
```sql
-- Audit Log Table
CREATE TABLE audit_log (
  audit_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(user_id) ON DELETE SET NULL,
  
  entity_type VARCHAR(50) NOT NULL,
  entity_id UUID NOT NULL,
  action VARCHAR(20) NOT NULL, -- create, update, delete
  
  old_values JSONB,
  new_values JSONB,
  
  ip_address INET,
  user_agent TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_user ON audit_log(user_id);
CREATE INDEX idx_audit_entity ON audit_log(entity_type, entity_id);
CREATE INDEX idx_audit_created ON audit_log(created_at DESC);

-- Sync Log Table (for mobile sync)
CREATE TABLE sync_log (
  sync_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  device_id UUID NOT NULL REFERENCES user_devices(device_id) ON DELETE CASCADE,
  
  entity_type VARCHAR(50) NOT NULL,
  entity_id UUID NOT NULL,
  action VARCHAR(20) NOT NULL,
  
  sync_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  conflict_resolved BOOLEAN DEFAULT false,
  conflict_resolution VARCHAR(50),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sync_user ON sync_log(user_id);
CREATE INDEX idx_sync_device ON sync_log(device_id);
CREATE INDEX idx_sync_timestamp ON sync_log(user_id, sync_timestamp DESC);
```

### 6.3 Summary Tables (for performance)
```sql
-- Daily Summaries Table
CREATE TABLE daily_summaries (
  summary_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  
  date DATE NOT NULL,
  
  total_revenue DECIMAL(10, 2) DEFAULT 0,
  total_expenses DECIMAL(10, 2) DEFAULT 0,
  net_profit DECIMAL(10, 2) DEFAULT 0,
  
  business_miles DECIMAL(10, 2) DEFAULT 0,
  personal_miles DECIMAL(10, 2) DEFAULT 0,
  
  num_trips INTEGER DEFAULT 0,
  hours_worked DECIMAL(5, 2) DEFAULT 0,
  
  calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(user_id, date)
);

CREATE INDEX idx_daily_summaries_user_date ON daily_summaries(user_id, date DESC);

-- Monthly Summaries Table
CREATE TABLE monthly_summaries (
  summary_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  
  year INTEGER NOT NULL,
  month INTEGER NOT NULL,
  
  total_revenue DECIMAL(10, 2) DEFAULT 0,
  total_expenses DECIMAL(10, 2) DEFAULT 0,
  net_profit DECIMAL(10, 2) DEFAULT 0,
  profit_margin DECIMAL(5, 2),
  
  business_miles DECIMAL(10, 2) DEFAULT 0,
  personal_miles DECIMAL(10, 2) DEFAULT 0,
  business_use_percentage DECIMAL(5, 2),
  
  num_trips INTEGER DEFAULT 0,
  hours_worked DECIMAL(5, 2) DEFAULT 0,
  
  calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(user_id, year, month),
  CONSTRAINT check_month CHECK (month >= 1 AND month <= 12)
);

CREATE INDEX idx_monthly_summaries_user ON monthly_summaries(user_id, year DESC, month DESC);
```

### 6.4 Utility Functions & Triggers
```sql
-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables with updated_at column
CREATE TRIGGER update_users_updated_at 
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_preferences_updated_at 
  BEFORE UPDATE ON user_preferences
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_vehicles_updated_at 
  BEFORE UPDATE ON vehicles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_revenue_updated_at 
  BEFORE UPDATE ON revenue
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_expenses_updated_at 
  BEFORE UPDATE ON expenses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_invoices_updated_at 
  BEFORE UPDATE ON invoices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mileage_updated_at 
  BEFORE UPDATE ON mileage_log
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_maintenance_updated_at 
  BEFORE UPDATE ON maintenance_records
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_finance_updated_at 
  BEFORE UPDATE ON vehicle_finance
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_documents_updated_at 
  BEFORE UPDATE ON documents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tax_alerts_updated_at 
  BEFORE UPDATE ON tax_alerts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to calculate net earnings
CREATE OR REPLACE FUNCTION calculate_net_earnings()
RETURNS TRIGGER AS $$
BEGIN
  NEW.net_earnings = NEW.gross_earnings - COALESCE(NEW.platform_fees, 0);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER revenue_calculate_net 
  BEFORE INSERT OR UPDATE ON revenue
  FOR EACH ROW EXECUTE FUNCTION calculate_net_earnings();

-- Function to calculate invoice total
CREATE OR REPLACE FUNCTION calculate_invoice_total()
RETURNS TRIGGER AS $$
BEGIN
  NEW.total_amount = NEW.subtotal + COALESCE(NEW.tax_amount, 0) - COALESCE(NEW.discount_amount, 0);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER invoice_calculate_total 
  BEFORE INSERT OR UPDATE ON invoices
  FOR EACH ROW EXECUTE FUNCTION calculate_invoice_total();

-- Function to calculate maintenance total
CREATE OR REPLACE FUNCTION calculate_maintenance_total()
RETURNS TRIGGER AS $$
BEGIN
  NEW.total_cost = COALESCE(NEW.parts_cost, 0) + COALESCE(NEW.labor_cost, 0);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER maintenance_calculate_total 
  BEFORE INSERT OR UPDATE ON maintenance_records
  FOR EACH ROW EXECUTE FUNCTION calculate_maintenance_total();
```

---

This completes the comprehensive requirements documentation for **GigAssist** - a full-featured financial management system for gig economy workers. The document covers all aspects from project vision to detailed database schema, providing a complete blueprint for development.

**Total Pages**: ~100+ pages when fully formatted
**Status**: Ready for implementation
**Next Steps**: Begin Phase 1 development (Foundation & Core Backend)

7. API Specifications
7.1 API Architecture
7.1.1 RESTful Design Principles
•	Resource-based URLs: /api/v1/resources/{id}
•	HTTP Methods: GET (read), POST (create), PUT (update), DELETE (delete)
•	Status Codes: Proper HTTP status codes
•	JSON Format: All requests and responses in JSON
•	Versioning: URL-based versioning (/api/v1/)
7.1.2 API Base URL
Production: https://api.gigassist.com/v1
Staging: https://api-staging.gigassist.com/v1
Development: http://localhost:3000/api/v1
7.2 Authentication Endpoints
typescript
// POST /api/v1/auth/register
Request:
{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

Response: 201 Created
{
  success: true;
  user: {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  message: "Verification email sent"
}

// POST /api/v1/auth/login
Request:
{
  email: string;
  password: string;
  rememberMe?: boolean;
}

Response: 200 OK
{
  success: true;
  accessToken: string;
  refreshToken: string;
  user: UserProfile;
  expiresIn: number; // seconds
}

// POST /api/v1/auth/refresh-token
Request:
{
  refreshToken: string;
}

Response: 200 OK
{
  success: true;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

// POST /api/v1/auth/logout
Headers: Authorization: Bearer {accessToken}

Response: 200 OK
{
  success: true;
  message: "Logged out successfully"
}

// POST /api/v1/auth/forgot-password
Request:
{
  email: string;
}

Response: 200 OK
{
  success: true;
  message: "Password reset email sent"
}

// POST /api/v1/auth/reset-password
Request:
{
  token: string;
  newPassword: string;
}

Response: 200 OK
{
  success: true;
  message: "Password reset successful"
}
7.3 User Management Endpoints
typescript
// GET /api/v1/user/profile
Headers: Authorization: Bearer {accessToken}

Response: 200 OK
{
  success: true;
  user: UserProfile;
}

// PUT /api/v1/user/profile
Headers: Authorization: Bearer {accessToken}
Request: Partial<UserProfile>

Response: 200 OK
{
  success: true;
  user: UserProfile;
}

// GET /api/v1/user/preferences
// PUT /api/v1/user/preferences
// DELETE /api/v1/user/account
7.4 Revenue Endpoints
typescript
// GET /api/v1/revenue?page=1&limit=50&startDate=2024-01-01&endDate=2024-12-31
Response: 200 OK
{
  success: true;
  data: RevenueEntry[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// POST /api/v1/revenue
Request: RevenueEntry

Response: 201 Created
{
  success: true;
  revenue: RevenueEntry;
}

// PUT /api/v1/revenue/:id
// DELETE /api/v1/revenue/:id

// POST /api/v1/revenue/import
Content-Type: multipart/form-data
Request:
{
  file: File;
  platform: PlatformType;
}

Response: 202 Accepted
{
  success: true;
  jobId: string;
  message: "Import started";
}

// GET /api/v1/revenue/import/:jobId
Response: 200 OK
{
  success: true;
  status: "processing" | "completed" | "failed";
  progress: number;
  result?: ImportResult;
}
7.5 Error Responses
typescript
// Standard Error Format
{
  success: false;
  error: {
    code: string; // "VALIDATION_ERROR", "NOT_FOUND", etc.
    message: string;
    details?: any;
    timestamp: string;
    path: string;
  }
}

// Common Status Codes
200 OK - Success
201 Created - Resource created
204 No Content - Success with no response body
400 Bad Request - Invalid input
401 Unauthorized - Authentication required
403 Forbidden - Permission denied
404 Not Found - Resource not found
409 Conflict - Duplicate or conflict
422 Unprocessable Entity - Validation error
429 Too Many Requests - Rate limit exceeded
500 Internal Server Error - Server error
503 Service Unavailable - Temporary unavailable
7.6 Rate Limiting
typescript
// Rate Limit Headers
X-RateLimit-Limit: 100 // Requests per window
X-RateLimit-Remaining: 95 // Remaining requests
X-RateLimit-Reset: 1640995200 // Reset timestamp

// Rate Limits by User Type
Free Tier: 100 requests/minute
Premium Tier: 500 requests/minute
Enterprise: Custom limits
7.7 Pagination
typescript
// Query Parameters
?page=1 // Page number (1-based)
?limit=50 // Items per page (max 100)
?sortBy=date // Sort field
?sortOrder=desc // asc or desc

// Response Format
{
  success: true;
  data: any[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  }
}
________________________________________
8. User Interface Requirements
8.1 Design System
8.1.1 Color Palette
typescript
// Primary Colors
primary: {
  50: '#EFF6FF',   // Lightest blue
  100: '#DBEAFE',
  200: '#BFDBFE',
  300: '#93C5FD',
  400: '#60A5FA',
  500: '#3B82F6',  // Main blue
  600: '#2563EB',  // Dark blue
  700: '#1D4ED8',
  800: '#1E40AF',
  900: '#1E3A8A',  // Darkest blue
}

// Secondary Colors (Green for success/money)
secondary: {
  50: '#F0FDF4',
  100: '#DCFCE7',
  200: '#BBF7D0',
  300: '#86EFAC',
  400: '#4ADE80',
  500: '#22C55E',  // Main green
  600: '#16A34A',
  700: '#15803D',
  800: '#166534',
  900: '#14532D',
}

// Accent Colors (Orange for alerts)
accent: {
  400: '#FB923C',
  500: '#F59E0B',  // Main orange
  600: '#D97706',
}

// Neutral Colors
neutral: {
  50: '#F9FAFB',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
}

// Semantic Colors
error: '#EF4444',
warning: '#F59E0B',
success: '#10B981',
info: '#3B82F6',
8.1.2 Typography
css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
text-xs: 0.75rem;    /* 12px */
text-sm: 0.875rem;   /* 14px */
text-base: 1rem;     /* 16px */
text-lg: 1.125rem;   /* 18px */
text-xl: 1.25rem;    /* 20px */
text-2xl: 1.5rem;    /* 24px */
text-3xl: 1.875rem;  /* 30px */
text-4xl: 2.25rem;   /* 36px */

/* Font Weights */
font-light: 300;
font-normal: 400;
font-medium: 500;
font-semibold: 600;
font-bold: 700;

/* Line Heights */
leading-tight: 1.25;
leading-snug: 1.375;
leading-normal: 1.5;
leading-relaxed: 1.625;
leading-loose: 2;
8.1.3 Spacing Scale
css
/* Spacing (8px base unit) */
space-0: 0;
space-1: 0.25rem;  /* 4px */
space-2: 0.5rem;   /* 8px */
space-3: 0.75rem;  /* 12px */
space-4: 1rem;     /* 16px */
space-5: 1.25rem;  /* 20px */
space-6: 1.5rem;   /* 24px */
space-8: 2rem;     /* 32px */
space-10: 2.5rem;  /* 40px */
space-12: 3rem;    /* 48px */
space-16: 4rem;    /* 64px */
space-20: 5rem;    /* 80px */
8.1.4 Component Library
typescript
// Button Variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="danger">Danger Action</Button>

// Button Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Input Fields
<Input 
  label="Email"
  type="email"
  placeholder="your@email.com"
  error="Invalid email"
  required
/>

// Cards
<Card>
  <CardHeader>
    <CardTitle>Revenue Summary</CardTitle>
    <CardDescription>Last 30 days</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    {/* Actions */}
  </CardFooter>
</Card>

// Modals
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content</ModalBody>
  <ModalFooter>
    <Button onClick={onClose}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </ModalFooter>
</Modal>

// Toasts/Notifications
toast.success("Expense added successfully");
toast.error("Failed to upload document");
toast.warning("Tax deadline approaching");
toast.info("New feature available");
```

### 8.2 Page Layouts

#### 8.2.1 Dashboard Layout
```
┌─────────────────────────────────────────────────┐
│ Header (Logo, Search, Notifications, Profile)   │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │ Revenue  │  │ Expenses │  │  Profit  │     │
│  │  Card    │  │   Card   │  │   Card   │     │
│  └──────────┘  └──────────┘  └──────────┘     │
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │     Revenue vs Expenses Chart          │    │
│  │                                          │    │
│  └────────────────────────────────────────┘    │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────┐   │
│  │ Recent Activity  │  │ Upcoming Alerts  │   │
│  │                  │  │                  │   │
│  └──────────────────┘  └──────────────────┘   │
│                                                  │
└─────────────────────────────────────────────────┘
```

#### 8.2.2 Mobile Navigation
```
Bottom Tab Bar (iOS/Android):
┌───────┬───────┬───────┬───────┬───────┐
│  🏠   │  🚗   │  💰   │  📊   │  ⋮    │
│ Home  │ Trips │Expense│Report │ More  │
└───────┴───────┴───────┴───────┴───────┘
8.3 Responsive Breakpoints
typescript
// Breakpoints
breakpoints: {
  xs: '0px',      // Mobile portrait
  sm: '640px',    // Mobile landscape
  md: '768px',    // Tablet portrait
  lg: '1024px',   // Tablet landscape / Small desktop
  xl: '1280px',   // Desktop
  '2xl': '1536px' // Large desktop
}

// Usage
// Mobile: < 768px (single column, bottom nav)
// Tablet: 768px - 1024px (2 columns, sidebar)
// Desktop: > 1024px (3 columns, full sidebar)
8.4 Accessibility Features
typescript
// ARIA Labels
<button aria-label="Add expense">
  <PlusIcon />
</button>

// Keyboard Navigation
- Tab: Move focus forward
- Shift+Tab: Move focus backward
- Enter/Space: Activate button
- Escape: Close modal/dialog
- Arrow keys: Navigate lists/menus

// Screen Reader Support
<div role="alert" aria-live="polite">
  Expense added successfully
</div>

// Skip Links
<a href="#main-content" className="skip-link">
  Skip to main content
</a>

// Focus Indicators
:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}
________________________________________
9. Security Requirements (Detailed)
9.1 Authentication Security
9.1.1 Password Policy
typescript
interface PasswordRequirements {
  minLength: 8;
  maxLength: 128;
  requireUppercase: true;
  requireLowercase: true;
  requireNumber: true;
  requireSpecialChar: false; // Recommended but not required
  
  // Blacklist
  commonPasswords: string[]; // Check against common passwords
  personalInfo: boolean; // Don't allow name, email in password
  
  // History
  preventReuse: 5; // Can't reuse last 5 passwords
  
  // Expiration
  expirationDays: null; // No forced expiration (per NIST guidelines)
}
9.1.2 JWT Token Security
typescript
interface JWTConfig {
  // Token Configuration
  accessToken: {
    secret: process.env.JWT_ACCESS_SECRET;
    expiresIn: '15m';
    algorithm: 'HS256';
  };
  
  refreshToken: {
    secret: process.env.JWT_REFRESH_SECRET;
    expiresIn: '7d';
    algorithm: 'HS256';
  };
  
  // Token Storage
  accessTokenStorage: 'memory'; // Not in localStorage
  refreshTokenStorage: 'httpOnly-cookie'; // Secure, httpOnly
  
  // Token Rotation
  rotateRefreshToken: true; // New refresh token on every use
  
  // Token Revocation
  blacklist: 'redis'; // Redis-based token blacklist
}
9.2 Data Protection
9.2.1 Encryption Standards
typescript
// Data at Rest
encryption: {
  database: {
    method: 'AES-256-GCM';
    keyManagement: 'AWS KMS' | 'Azure Key Vault';
    keyRotation: '90 days';
  };
  
  fileStorage: {
    method: 'AES-256';
    serverSideEncryption: true;
    keyManagement: 'Cloud Provider Managed';
  };
  
  sensitiveFields: {
    method: 'AES-256-GCM';
    fields: ['ssn', 'bank_account', 'ein'];
    applicationLevel: true;
  };
}

// Data in Transit
transport: {
  protocol: 'TLS 1.3';
  minimumVersion: 'TLS 1.2';
  cipherSuites: [
    'TLS_AES_256_GCM_SHA384',
    'TLS_AES_128_GCM_SHA256',
    'TLS_CHACHA20_POLY1305_SHA256'
  ];
  certificateProvider: "Let's Encrypt" | 'Commercial CA';
  hsts: {
    enabled: true;
    maxAge: 31536000; // 1 year
    includeSubdomains: true;
    preload: true;
  };
}
9.2.2 PII (Personally Identifiable Information) Handling
typescript
interface PIIHandling {
  // Identification
  piiFields: [
    'email',
    'phone_number',
    'ssn',
    'ein',
    'driver_license',
    'address',
    'vin',
    'license_plate',
    'bank_account'
  ];
  
  // Protection
  encryption: 'required';
  maskingInLogs: true;
  maskingInUI: true; // Show last 4 digits only
  
  // Access Control
  accessLogging: true;
  minimumPrivilege: true;
  
  // Retention
  retentionPolicy: {
    activeUser: 'indefinite';
    inactiveUser: '2 years';
    deletedUser: '30 days soft delete, then permanent';
  };
  
  // Export
  dataExport: 'full export available on request';
  exportFormat: ['JSON', 'CSV', 'PDF'];
}
9.3 Application Security
9.3.1 Input Validation
typescript
// Server-side Validation (NestJS + class-validator)
class CreateExpenseDto {
  @IsDate()
  @Type(() => Date)
  date: Date;
  
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  category: string;
  
  @IsNumber()
  @Min(0.01)
  @Max(999999.99)
  amount: number;
  
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  description: string;
  
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}

// Sanitization
import DOMPurify from 'dompurify';

function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No HTML tags
    ALLOWED_ATTR: []
  });
}
9.3.2 SQL Injection Prevention
typescript
// Using Prisma ORM (parameterized queries)
// GOOD ✅
const expenses = await prisma.expense.findMany({
  where: {
    userId: userId,
    date: {
      gte: startDate,
      lte: endDate
    }
  }
});

// BAD ❌ - Never use raw queries with user input
// const expenses = await prisma.$queryRaw`
//   SELECT * FROM expenses WHERE user_id = ${userId}
// `;
9.3.3 XSS Prevention
typescript
// Content Security Policy (CSP)
helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"], // Avoid unsafe-inline in production
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    imgSrc: ["'self'", "data:", "https:"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    connectSrc: ["'self'", "https://api.gigassist.com"],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: []
  }
});

// React automatically escapes content
// GOOD ✅
<div>{userInput}</div>

// BAD ❌
<div dangerouslySetInnerHTML={{__html: userInput}} />
9.3.4 CSRF Protection
typescript
// CSRF Token for state-changing operations
import csurf from 'csurf';

const csrfProtection = csurf({
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  }
});

// Apply to routes
app.post('/api/v1/expenses', csrfProtection, createExpense);

// Client-side: Include CSRF token in requests
headers: {
  'X-CSRF-Token': csrfToken
}
9.4 API Security
9.4.1 Rate Limiting Strategy
typescript
import rateLimit from 'express-rate-limit';

// General API rate limit
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

// Strict rate limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  skipSuccessfulRequests: true,
});

// File upload rate limit
const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // 20 uploads per hour
});

app.use('/api/v1/', apiLimiter);
app.use('/api/v1/auth/login', authLimiter);
app.use('/api/v1/documents/upload', uploadLimiter);
9.4.2 File Upload Security
typescript
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: '/tmp/uploads',
    filename: (req, file, cb) => {
      // Random filename to prevent overwriting
      const randomName = crypto.randomBytes(16).toString('hex');
      cb(null, `${randomName}${path.extname(file.originalname)}`);
    }
  }),
  
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 20 // Max 20 files per upload
  },
  
  fileFilter: (req, file, cb) => {
    // Whitelist approach
    const allowedTypes = /jpeg|jpg|png|gif|pdf|xlsx|xls|csv|txt|json/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      // Verify magic numbers (file signature)
      // Additional validation here
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// Virus scanning
import ClamScan from 'clamscan';

async function scanFile(filePath: string): Promise<boolean> {
  const clamscan = await new ClamScan().init();
  const {isInfected} = await clamscan.isInfected(filePath);
  return !isInfected;
}
9.5 Infrastructure Security
9.5.1 Environment Variables
bash
# .env.example (never commit actual .env)
NODE_ENV=production
PORT=3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/gigassist
DATABASE_SSL=true

# JWT Secrets (use strong random strings)
JWT_ACCESS_SECRET=your-256-bit-secret-here
JWT_REFRESH_SECRET=different-256-bit-secret-here

# Encryption
ENCRYPTION_KEY=your-encryption-key-here

# AWS/Storage
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_S3_BUCKET=gigassist-documents
AWS_REGION=us-east-1

# Email
SENDGRID_API_KEY=your-sendgrid-key

# External APIs
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-secret
APPLE_CLIENT_ID=your-apple-client-id
9.5.2 Secrets Management
typescript
// Use AWS Secrets Manager / Azure Key Vault
import { SecretsManager } from 'aws-sdk';

const secretsManager = new SecretsManager({
  region: 'us-east-1'
});

async function getSecret(secretName: string): Promise<string> {
  const secret = await secretsManager.getSecretValue({
    SecretId: secretName
  }).promise();
  
  return secret.SecretString;
}

// Rotate secrets every 90 days
// Never hardcode secrets in code
// Use different secrets per environment
________________________________________
10. Deployment Strategy
10.1 Deployment Environments
typescript
interface DeploymentEnvironments {
  // Development
  development: {
    purpose: 'Local development';
    database: 'Local PostgreSQL';
    storage: 'Local filesystem';
    domain: 'localhost:3000';
    debugging: true;
  };
  
  // Staging
  staging: {
    purpose: 'Pre-production testing';
    database: 'Cloud PostgreSQL (separate)';
    storage: 'Cloud storage (separate bucket)';
    domain: 'staging.gigassist.com';
    debugging: true;
    dataMasking: true; // Use anonymized data
  };
  
  // Production
  production: {
    purpose: 'Live application';
    database: 'Cloud PostgreSQL (production)';
    storage: 'Cloud storage (production bucket)';
    domain: 'gigassist.com';
    debugging: false;
    monitoring: 'comprehensive';
    backups: 'automated';
  };
}
10.2 Hosting Recommendations
10.2.1 Budget-Friendly Option (Year 1)
DigitalOcean Setup:
yaml
# docker-compose.yml
version: '3.8'

services:
  # Backend API
  api:
    image: gigassist-api:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
    depends_on:
      - redis
    restart: always
  
  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
    restart: always
  
  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl
    depends_on:
      - api
    restart: always

volumes:
  redis-data:
Cost Estimate (DigitalOcean):
•	App Platform (Backend): $12-50/month
•	Managed PostgreSQL: $15-100/month
•	Spaces (Storage): $5/month (250GB)
•	CDN: $0.01/GB
•	Total: ~$32-155/month
10.2.2 Scalable Option (Year 2+)
AWS Setup:
yaml
Infrastructure:
  # Compute
  - EC2 (t3.medium): $30-50/month
  - Application Load Balancer: $25/month
  - Auto Scaling Group: 2-10 instances
  
  # Database
  - RDS PostgreSQL (db.t3.medium): $50-150/month
  - Multi-AZ: +100%
  - Read Replicas: $50-150/month each
  
  # Storage
  - S3 Standard: $0.023/GB
  - CloudFront CDN: $0.085/GB
  
  # Cache
  - ElastiCache Redis: $20-100/month
  
  # Other
  - Route 53: $0.50/month + queries
  - CloudWatch: $10-30/month
  
Total Estimate: $200-500/month (scalable to millions)
10.3 CI/CD Pipeline
10.3.1 GitHub Actions Workflow
yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Run E2E tests
        run: npm run test:e2e
  
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t gigassist-api:${{ github.sha }} .
      
      - name: Push to registry
        run: |
          docker tag gigassist-api:${{ github.sha }} registry.digitalocean.com/gigassist/api:latest
          docker push registry.digitalocean.com/gigassist/api:latest
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          # Deploy to DigitalOcean App Platform
          # or SSH to server and docker-compose pull && docker-compose up -d
      
      - name: Run database migrations
        run: npm run migrate:prod
      
      - name: Health check
        run: curl -f https://api.gigassist.com/health || exit 1
      
      - name: Notify team
        if: success()
        run: |
          # Send Slack notification
          # Send email notification
10.4 Database Migration Strategy
typescript
// Using Prisma Migrate
// prisma/migrations/

// 1. Create migration
npm run migrate:create --name add_tax_alerts

// 2. Review migration SQL
// prisma/migrations/20240101_add_tax_alerts/migration.sql

// 3. Apply to development
npm run migrate

10.5 Seed Data for Development
typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create test users
  const hashedPassword = await bcrypt.hash('Test123!', 10);
  
  const driver1 = await prisma.user.create({
    data: {
      email: 'driver1@test.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Driver',
      phone: '+1234567890',
      role: 'DRIVER',
      status: 'ACTIVE',
      emailVerified: true,
      driver: {
        create: {
          licenseNumber: 'DL123456',
          licenseExpiry: new Date('2025-12-31'),
          vehicleType: 'SEDAN',
          vehicleMake: 'Toyota',
          vehicleModel: 'Camry',
          vehicleYear: 2022,
          vehicleColor: 'Silver',
          licensePlate: 'ABC123',
          insuranceProvider: 'State Farm',
          insurancePolicyNumber: 'SF123456',
          insuranceExpiry: new Date('2025-12-31'),
          status: 'AVAILABLE',
          rating: 4.8,
          totalTrips: 0,
        },
      },
    },
  });

  const rider1 = await prisma.user.create({
    data: {
      email: 'rider1@test.com',
      password: hashedPassword,
      firstName: 'Jane',
      lastName: 'Rider',
      phone: '+1234567891',
      role: 'RIDER',
      status: 'ACTIVE',
      emailVerified: true,
      rider: {
        create: {
          preferredPaymentMethod: 'CREDIT_CARD',
          rating: 4.9,
          totalTrips: 0,
        },
      },
    },
  });

  // Create payment methods
  await prisma.paymentMethod.create({
    data: {
      userId: rider1.id,
      type: 'CREDIT_CARD',
      provider: 'STRIPE',
      token: 'tok_test_123',
      last4: '4242',
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true,
    },
  });

  // Create sample locations
  const locations = [
    { name: 'Downtown', lat: 40.7128, lng: -74.0060 },
    { name: 'Airport', lat: 40.6413, lng: -73.7781 },
    { name: 'Suburbs', lat: 40.7580, lng: -73.9855 },
  ];

  console.log('Seed data created successfully');
  console.log({ driver1, rider1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
10.6 Database Indexes Strategy
typescript
// prisma/schema.prisma additions for performance

model Trip {
  // ... existing fields
  
  @@index([driverId, status])
  @@index([riderId, status])
  @@index([status, pickupTime])
  @@index([driverId, pickupTime])
  @@index([createdAt])
}

model User {
  // ... existing fields
  
  @@index([email])
  @@index([phone])
  @@index([role, status])
}

model Driver {
  // ... existing fields
  
  @@index([status, currentLat, currentLng]) // For nearby driver search
  @@index([rating])
}

model Payment {
  // ... existing fields
  
  @@index([tripId])
  @@index([userId, status])
  @@index([createdAt])
}
________________________________________
11. Testing Strategy
11.1 Unit Tests
typescript
// src/modules/trip/trip.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { TripService } from './trip.service';
import { PrismaService } from '../../prisma/prisma.service';
import { GeocodingService } from '../geocoding/geocoding.service';
import { PricingService } from '../pricing/pricing.service';
import { BadRequestException } from '@nestjs/common';

describe('TripService', () => {
  let service: TripService;
  let prisma: PrismaService;
  let geocoding: GeocodingService;
  let pricing: PricingService;

  const mockPrisma = {
    trip: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      findMany: jest.fn(),
    },
    driver: {
      findMany: jest.fn(),
      update: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
    },
  };

  const mockGeocoding = {
    geocode: jest.fn(),
    reverseGeocode: jest.fn(),
    calculateDistance: jest.fn(),
  };

  const mockPricing = {
    calculateFare: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TripService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: GeocodingService, useValue: mockGeocoding },
        { provide: PricingService, useValue: mockPricing },
      ],
    }).compile();

    service = module.get<TripService>(TripService);
    prisma = module.get<PrismaService>(PrismaService);
    geocoding = module.get<GeocodingService>(GeocodingService);
    pricing = module.get<PricingService>(PricingService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('requestTrip', () => {
    it('should create a trip request successfully', async () => {
      const requestDto = {
        riderId: 'rider-1',
        pickupAddress: '123 Main St',
        dropoffAddress: '456 Oak Ave',
        pickupLat: 40.7128,
        pickupLng: -74.0060,
        dropoffLat: 40.7580,
        dropoffLng: -73.9855,
        vehicleType: 'SEDAN',
      };

      mockGeocoding.calculateDistance.mockResolvedValue(5.2);
      mockPricing.calculateFare.mockResolvedValue({
        baseFare: 5.0,
        distanceFare: 10.4,
        timeFare: 3.0,
        surgeFare: 0,
        total: 18.4,
      });

      const mockTrip = {
        id: 'trip-1',
        ...requestDto,
        status: 'REQUESTED',
        estimatedFare: 18.4,
        createdAt: new Date(),
      };

      mockPrisma.trip.create.mockResolvedValue(mockTrip);

      const result = await service.requestTrip(requestDto);

      expect(result).toEqual(mockTrip);
      expect(mockGeocoding.calculateDistance).toHaveBeenCalledWith(
        requestDto.pickupLat,
        requestDto.pickupLng,
        requestDto.dropoffLat,
        requestDto.dropoffLng,
      );
      expect(mockPricing.calculateFare).toHaveBeenCalled();
      expect(mockPrisma.trip.create).toHaveBeenCalled();
    });

    it('should throw error if distance calculation fails', async () => {
      const requestDto = {
        riderId: 'rider-1',
        pickupAddress: '123 Main St',
        dropoffAddress: '456 Oak Ave',
        pickupLat: 40.7128,
        pickupLng: -74.0060,
        dropoffLat: 40.7580,
        dropoffLng: -73.9855,
        vehicleType: 'SEDAN',
      };

      mockGeocoding.calculateDistance.mockRejectedValue(
        new Error('Geocoding failed'),
      );

      await expect(service.requestTrip(requestDto)).rejects.toThrow();
    });
  });

  describe('acceptTrip', () => {
    it('should accept trip and assign driver', async () => {
      const tripId = 'trip-1';
      const driverId = 'driver-1';

      const mockTrip = {
        id: tripId,
        status: 'REQUESTED',
        riderId: 'rider-1',
      };

      const mockDriver = {
        id: driverId,
        status: 'AVAILABLE',
      };

      mockPrisma.trip.findUnique.mockResolvedValue(mockTrip);
      mockPrisma.driver.findMany.mockResolvedValue([mockDriver]);
      mockPrisma.trip.update.mockResolvedValue({
        ...mockTrip,
        driverId,
        status: 'ACCEPTED',
      });

      const result = await service.acceptTrip(tripId, driverId);

      expect(result.status).toBe('ACCEPTED');
      expect(result.driverId).toBe(driverId);
      expect(mockPrisma.driver.update).toHaveBeenCalledWith({
        where: { id: driverId },
        data: { status: 'BUSY' },
      });
    });

    it('should throw error if trip not found', async () => {
      mockPrisma.trip.findUnique.mockResolvedValue(null);

      await expect(service.acceptTrip('trip-1', 'driver-1')).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw error if trip already accepted', async () => {
      const mockTrip = {
        id: 'trip-1',
        status: 'ACCEPTED',
        driverId: 'driver-2',
      };

      mockPrisma.trip.findUnique.mockResolvedValue(mockTrip);

      await expect(service.acceptTrip('trip-1', 'driver-1')).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
11.2 Integration Tests
typescript
// test/trip.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('Trip API (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let riderToken: string;
  let driverToken: string;
  let riderId: string;
  let driverId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    prisma = app.get<PrismaService>(PrismaService);

    // Clean database
    await prisma.trip.deleteMany();
    await prisma.driver.deleteMany();
    await prisma.rider.deleteMany();
    await prisma.user.deleteMany();

    // Create test users
    const riderResponse = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: 'rider@test.com',
        password: 'Test123!',
        firstName: 'Test',
        lastName: 'Rider',
        phone: '+1234567890',
        role: 'RIDER',
      });

    riderToken = riderResponse.body.accessToken;
    riderId = riderResponse.body.user.id;

    const driverResponse = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: 'driver@test.com',
        password: 'Test123!',
        firstName: 'Test',
        lastName: 'Driver',
        phone: '+1234567891',
        role: 'DRIVER',
        licenseNumber: 'DL123456',
        vehicleType: 'SEDAN',
        vehicleMake: 'Toyota',
        vehicleModel: 'Camry',
        vehicleYear: 2022,
        licensePlate: 'ABC123',
      });

    driverToken = driverResponse.body.accessToken;
    driverId = driverResponse.body.user.id;
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe('/trips (POST)', () => {
    it('should request a new trip', () => {
      return request(app.getHttpServer())
        .post('/trips')
        .set('Authorization', `Bearer ${riderToken}`)
        .send({
          pickupAddress: '123 Main St, New York, NY',
          dropoffAddress: '456 Oak Ave, New York, NY',
          pickupLat: 40.7128,
          pickupLng: -74.0060,
          dropoffLat: 40.7580,
          dropoffLng: -73.9855,
          vehicleType: 'SEDAN',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body.status).toBe('REQUESTED');
          expect(res.body.riderId).toBe(riderId);
          expect(res.body).toHaveProperty('estimatedFare');
        });
    });

    it('should fail without authentication', () => {
      return request(app.getHttpServer())
        .post('/trips')
        .send({
          pickupAddress: '123 Main St',
          dropoffAddress: '456 Oak Ave',
          vehicleType: 'SEDAN',
        })
        .expect(401);
    });

    it('should fail with invalid data', () => {
      return request(app.getHttpServer())
        .post('/trips')
        .set('Authorization', `Bearer ${riderToken}`)
        .send({
          pickupAddress: '123 Main St',
          // Missing required fields
        })
        .expect(400);
    });
  });

  describe('/trips/:id/accept (POST)', () => {
    let tripId: string;

    beforeEach(async () => {
      const trip = await request(app.getHttpServer())
        .post('/trips')
        .set('Authorization', `Bearer ${riderToken}`)
        .send({
          pickupAddress: '123 Main St, New York, NY',
          dropoffAddress: '456 Oak Ave, New York, NY',
          pickupLat: 40.7128,
          pickupLng: -74.0060,
          dropoffLat: 40.7580,
          dropoffLng: -73.9855,
          vehicleType: 'SEDAN',
        });

      tripId = trip.body.id;
    });

    it('should allow driver to accept trip', () => {
      return request(app.getHttpServer())
        .post(`/trips/${tripId}/accept`)
        .set('Authorization', `Bearer ${driverToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe('ACCEPTED');
          expect(res.body.driverId).toBe(driverId);
        });
    });

    it('should fail if rider tries to accept trip', () => {
      return request(app.getHttpServer())
        .post(`/trips/${tripId}/accept`)
        .set('Authorization', `Bearer ${riderToken}`)
        .expect(403);
    });
  });

  describe('/trips/:id/start (POST)', () => {
    let tripId: string;

    beforeEach(async () => {
      const trip = await request(app.getHttpServer())
        .post('/trips')
        .set('Authorization', `Bearer ${riderToken}`)
        .send({
          pickupAddress: '123 Main St, New York, NY',
          dropoffAddress: '456 Oak Ave, New York, NY',
          pickupLat: 40.7128,
          pickupLng: -74.0060,
          dropoffLat: 40.7580,
          dropoffLng: -73.9855,
          vehicleType: 'SEDAN',
        });

      tripId = trip.body.id;

      await request(app.getHttpServer())
        .post(`/trips/${tripId}/accept`)
        .set('Authorization', `Bearer ${driverToken}`);
    });

    it('should start trip', () => {
      return request(app.getHttpServer())
        .post(`/trips/${tripId}/start`)
        .set('Authorization', `Bearer ${driverToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe('IN_PROGRESS');
          expect(res.body).toHaveProperty('actualPickupTime');
        });
    });
  });

  describe('/trips/:id/complete (POST)', () => {
    let tripId: string;

    beforeEach(async () => {
      const trip = await request(app.getHttpServer())
        .post('/trips')
        .set('Authorization', `Bearer ${riderToken}`)
        .send({
          pickupAddress: '123 Main St, New York, NY',
          dropoffAddress: '456 Oak Ave, New York, NY',
          pickupLat: 40.7128,
          pickupLng: -74.0060,
          dropoffLat: 40.7580,
          dropoffLng: -73.9855,
          vehicleType: 'SEDAN',
        });

      tripId = trip.body.id;

      await request(app.getHttpServer())
        .post(`/trips/${tripId}/accept`)
        .set('Authorization', `Bearer ${driverToken}`);

      await request(app.getHttpServer())
        .post(`/trips/${tripId}/start`)
        .set('Authorization', `Bearer ${driverToken}`);
    });

    it('should complete trip and process payment', () => {
      return request(app.getHttpServer())
        .post(`/trips/${tripId}/complete`)
        .set('Authorization', `Bearer ${driverToken}`)
        .send({
          endLat: 40.7580,
          endLng: -73.9855,
          actualDistance: 5.5,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe('COMPLETED');
          expect(res.body).toHaveProperty('actualDropoffTime');
          expect(res.body).toHaveProperty('finalFare');
        });
    });
  });
});
11.3 Load Testing
typescript
// k6/load-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const failureRate = new Rate('failed_requests');

export const options = {
  stages: [
    { duration: '1m', target: 50 }, // Ramp up to 50 users
    { duration: '3m', target: 50 }, // Stay at 50 users
    { duration: '1m', target: 100 }, // Ramp up to 100 users
    { duration: '3m', target: 100 }, // Stay at 100 users
    { duration: '1m', target: 0 }, // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests under 500ms
    failed_requests: ['rate<0.1'], // Error rate under 10%
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export function setup() {
  // Register test users
  const riders = [];
  const drivers = [];

  for (let i = 0; i < 10; i++) {
    const riderRes = http.post(`${BASE_URL}/auth/register`, JSON.stringify({
      email: `rider${i}@loadtest.com`,
      password: 'Test123!',
      firstName: 'Rider',
      lastName: `${i}`,
      phone: `+1234${i.toString().padStart(6, '0')}`,
      role: 'RIDER',
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (riderRes.status === 201) {
      riders.push(JSON.parse(riderRes.body).accessToken);
    }

    const driverRes = http.post(`${BASE_URL}/auth/register`, JSON.stringify({
      email: `driver${i}@loadtest.com`,
      password: 'Test123!',
      firstName: 'Driver',
      lastName: `${i}`,
      phone: `+1235${i.toString().padStart(6, '0')}`,
      role: 'DRIVER',
      licenseNumber: `DL${i}`,
      vehicleType: 'SEDAN',
    }), {
      headers: { 'Content-Type': 'application/json' },
    });

    if (driverRes.status === 201) {
      drivers.push(JSON.parse(driverRes.body).accessToken);
    }
  }

  return { riders, drivers };
}

export default function (data) {
  const riderToken = data.riders[Math.floor(Math.random() * data.riders.length)];
  const driverToken = data.drivers[Math.floor(Math.random() * data.drivers.length)];

  // Request trip
  const tripRes = http.post(
    `${BASE_URL}/trips`,
    JSON.stringify({
      pickupAddress: '123 Main St, New York, NY',
      dropoffAddress: '456 Oak Ave, New York, NY',
      pickupLat: 40.7128 + Math.random() * 0.1,
      pickupLng: -74.0060 + Math.random() * 0.1,
      dropoffLat: 40.7580 + Math.random() * 0.1,
      dropoffLng: -73.9855 + Math.random() * 0.1,
      vehicleType: 'SEDAN',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${riderToken}`,
      },
    },
  );

  check(tripRes, {
    'trip requested': (r) => r.status === 201,
    'has trip id': (r) => JSON.parse(r.body).id !== undefined,
  }) || failureRate.add(1);

  if (tripRes.status === 201) {
    const tripId = JSON.parse(tripRes.body).id;
    sleep(1);

    // Accept trip
    const acceptRes = http.post(
      `${BASE_URL}/trips/${tripId}/accept`,
      null,
      {
        headers: {
          Authorization: `Bearer ${driverToken}`,
        },
      },
    );

    check(acceptRes, {
      'trip accepted': (r) => r.status === 200,
    }) || failureRate.add(1);
  }

  sleep(2);
}
________________________________________
12. Deployment
12.1 Docker Configuration
dockerfile
# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build application
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

# Install dumb-init
RUN apk add --no-cache dumb-init

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./

# Set user
USER node

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application
CMD ["dumb-init", "node", "dist/main"]
yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - DATABASE_URL=postgresql://postgres:password@postgres:5432/rideshare
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
      - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
    depends_on:
      - postgres
      - redis
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=rideshare
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
    volumes:
      - redis_data:/data
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:
12.2 Kubernetes Deployment
yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rideshare-api
  labels:
    app: rideshare-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: rideshare-api
  template:
    metadata:
      labels:
        app: rideshare-api
    spec:
      containers:
      - name: api
        image: rideshare/api:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: rideshare-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: rideshare-secrets
              key: redis-url
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: rideshare-secrets
              key: jwt-secret
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: rideshare-api-service
spec:
  selector:
    app: rideshare-api
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: rideshare-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: rideshare-api
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
yaml
# k8s/postgres.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15-alpine
        ports:
        - containerPort: 5432
        env:
        - name: POSTGRES_DB
          value: rideshare
        - name: POSTGRES_USER
          valueFrom:
            secretKeyRef:
              name: rideshare-secrets
              key: postgres-user
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: rideshare-secrets
              key: postgres-password
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: postgres-storage
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 20Gi

---
apiVersion: v1
kind: Service
metadata:
  name: postgres
spec:
  selector:
    app: postgres
  ports:
  - port: 5432
  clusterIP: None
12.3 CI/CD Pipeline
yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: rideshare_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Generate Prisma Client
      run: npx prisma generate

    - name: Run database migrations
      run: npx prisma migrate deploy
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/rideshare_test

    - name: Run linting
      run: npm run lint

    - name: Run unit tests
      run: npm run test:cov
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/rideshare_test
        REDIS_URL: redis://localhost:6379

    - name: Run E2E tests
      run: npm run test:e2e
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/rideshare_test
        REDIS_URL: redis://localhost:6379

    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'

    steps:
    - uses: actions/checkout@v3

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2

    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    - name: Build and push
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: |
          gigassist/api:latest
          gigassist/api:${{ github.sha }}
        cache-from: type=registry,ref=gigassist/api:latest
        cache-to: type=inline

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'

    steps:
    - name: Deploy to Production
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.PROD_HOST }}
        username: ${{ secrets.PROD_USERNAME }}
        key: ${{ secrets.PROD_SSH_KEY }}
        script: |
          cd /app/gigassist
          docker-compose pull
          docker-compose up -d
          docker-compose exec -T app npm run migrate:deploy

    - name: Verify deployment
      run: |
        sleep 30
        curl -f https://api.gigassist.com/health || exit 1

    - name: Notify team
      if: always()
      uses: 8398a7/action-slack@v3
      with:
        status: ${{ job.status }}
        text: 'Deployment ${{ job.status }}'
      env:
        SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

---

## 13. Monitoring & Observability

### 13.1 Application Monitoring

#### Logging Strategy
```typescript
// src/common/logger/logger.service.ts
import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class CustomLogger implements LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
      ),
      defaultMeta: {
        service: 'gigassist-api',
        environment: process.env.NODE_ENV
      },
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          )
        }),
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error'
        }),
        new winston.transports.File({
          filename: 'logs/combined.log'
        })
      ]
    });
  }

  log(message: string, context?: string) {
    this.logger.info(message, { context });
  }

  error(message: string, trace?: string, context?: string) {
    this.logger.error(message, { trace, context });
  }

  warn(message: string, context?: string) {
    this.logger.warn(message, { context });
  }

  debug(message: string, context?: string) {
    this.logger.debug(message, { context });
  }
}
```

#### Health Checks
```typescript
// src/health/health.controller.ts
import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, PrismaHealthIndicator, MemoryHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: PrismaHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),
    ]);
  }
}
```

### 13.2 Metrics & Analytics

#### Custom Metrics
```typescript
// Prometheus metrics
import { Injectable } from '@nestjs/common';
import { Counter, Histogram, Registry } from 'prom-client';

@Injectable()
export class MetricsService {
  private registry: Registry;
  
  // Counters
  private httpRequestsTotal: Counter;
  private expensesCreated: Counter;
  private revenueRecorded: Counter;
  
  // Histograms
  private httpRequestDuration: Histogram;
  private databaseQueryDuration: Histogram;

  constructor() {
    this.registry = new Registry();
    
    this.httpRequestsTotal = new Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'status'],
      registers: [this.registry]
    });

    this.httpRequestDuration = new Histogram({
      name: 'http_request_duration_ms',
      help: 'Duration of HTTP requests in ms',
      labelNames: ['method', 'route', 'status'],
      buckets: [10, 50, 100, 200, 500, 1000, 2000, 5000],
      registers: [this.registry]
    });

    this.expensesCreated = new Counter({
      name: 'expenses_created_total',
      help: 'Total number of expenses created',
      registers: [this.registry]
    });

    this.revenueRecorded = new Counter({
      name: 'revenue_recorded_total',
      help: 'Total revenue amount recorded',
      registers: [this.registry]
    });
  }

  incrementHttpRequests(method: string, route: string, status: number) {
    this.httpRequestsTotal.labels(method, route, status.toString()).inc();
  }

  observeHttpDuration(method: string, route: string, status: number, duration: number) {
    this.httpRequestDuration.labels(method, route, status.toString()).observe(duration);
  }

  getMetrics() {
    return this.registry.metrics();
  }
}
```

### 13.3 Error Tracking

#### Sentry Integration
```typescript
// src/common/filters/sentry-exception.filter.ts
import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import * as Sentry from '@sentry/node';

@Catch()
export class SentryExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(exception);
    }
    super.catch(exception, host);
  }
}

// main.ts
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Prisma({ client: prisma }),
  ],
});

app.useGlobalFilters(new SentryExceptionFilter());
```

---

## 14. Documentation & Support

### 14.1 API Documentation

#### Swagger/OpenAPI Setup
```typescript
// main.ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('GigAssist API')
  .setDescription('Financial Management API for Gig Workers')
  .setVersion('2.0')
  .addBearerAuth()
  .addTag('auth', 'Authentication endpoints')
  .addTag('revenue', 'Revenue management')
  .addTag('expenses', 'Expense tracking')
  .addTag('vehicles', 'Vehicle management')
  .addTag('reports', 'Financial reports')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/docs', app, document);
```

### 14.2 User Guides

#### Quick Start Guide
```markdown
# GigAssist Quick Start Guide

## Getting Started

### 1. Create Your Account
- Visit https://gigassist.com/register
- Enter your email and create a password
- Verify your email address

### 2. Add Your First Vehicle
- Navigate to "Vehicles" → "Add Vehicle"
- Enter make, model, year, and VIN
- Add purchase details and current odometer

### 3. Record Your First Trip
**Revenue Entry:**
- Tap "Add Revenue" from dashboard
- Select platform (Uber/Lyft/DoorDash)
- Enter date and earnings
- Save

**Expense Entry:**
- Tap "Add Expense"
- Choose category (Fuel, Maintenance, etc.)
- Enter amount and description
- Optionally scan receipt

### 4. Enable Mileage Tracking (Mobile)
- Open mobile app settings
- Enable "Auto Mileage Tracking"
- Grant location permissions
- Start driving — trips auto-record!

### 5. View Your Reports
- Dashboard shows weekly/monthly summaries
- "Reports" tab has detailed breakdowns
- Export for tax preparation
```

### 14.3 FAQs

```markdown
## Frequently Asked Questions

### General

**Q: How much does GigAssist cost?**
A: We offer a free tier with basic features and premium plans starting at $9.99/month.

**Q: Is my data secure?**
A: Yes! All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We're GDPR and CCPA compliant.

**Q: Can I use GigAssist for multiple vehicles?**
A: Yes! Add unlimited vehicles and track expenses separately for each.

### Tax & Accounting

**Q: Will GigAssist help me file my taxes?**
A: GigAssist provides IRS-compliant reports (Schedule C, Form 4562) and calculates deductions, but we recommend working with a tax professional for actual filing.

**Q: Should I use standard mileage or actual expenses?**
A: GigAssist calculates both methods and recommends the one that saves you more. Standard mileage is simpler but actual expenses may save more if you have high vehicle costs.

**Q: How long should I keep receipts?**
A: The IRS recommends keeping tax records for 7 years. GigAssist stores documents securely for the same period.

### Technical Support

**Q: The app isn't syncing. What should I do?**
A: 
1. Check your internet connection
2. Force close and reopen the app
3. Check Settings → Sync Status
4. Contact support if issues persist

**Q: Can I export my data?**
A: Yes! Go to Settings → Data Export. You can download all data in JSON, CSV, or PDF format.
```

---

## 15. Project Timeline & Phases

### Phase 1: Foundation (Months 1-2)
- ✅ Requirements finalization
- ✅ Technology stack selection
- ✅ Database design
- ✅ API architecture
- Development environment setup
- Authentication & authorization
- User management (CRUD)
- Basic vehicle management

**Deliverables:**
- Working authentication system
- User registration & login (web & mobile)
- Basic dashboard
- Initial database schema
- CI/CD pipeline

### Phase 2: Core Features (Months 3-4)
- Revenue entry & tracking
- Expense management
- Receipt upload & OCR
- Basic mileage logging (manual)
- Document storage
- Simple reports (revenue, expenses)

**Deliverables:**
- Revenue management module
- Expense tracking with receipt scanning
- Basic financial reports
- Mobile app (iOS & Android) MVP
- Document management system

### Phase 3: Advanced Features (Months 5-6)
- GPS-based automatic mileage tracking
- Vehicle finance & lease tracking
- Depreciation calculations
- Tax calculations & estimates
- Invoice management
- Maintenance tracking & reminders
- Advanced reporting (P&L, tax summaries)

**Deliverables:**
- Complete vehicle management
- Auto mileage tracking (mobile)
- Tax preparation support
- Comprehensive reporting suite
- Maintenance scheduler

### Phase 4: Polish & Launch (Months 7-8)
- UI/UX improvements
- Performance optimization
- Security audit
- Load testing
- Beta testing (100 users)
- Bug fixes & refinements
- App store submissions
- Marketing website
- Documentation completion

**Deliverables:**
- Production-ready application
- App Store & Play Store listings
- User documentation
- Marketing materials
- Launch!

### Phase 5: Post-Launch (Months 9-12)
- User feedback implementation
- Feature enhancements
- Accountant portal (read-only access)
- Platform integrations (Uber/Lyft APIs)
- Multi-language support (Spanish)
- Advanced analytics
- Goal tracking
- Subscription tiers

---

## 16. Budget Estimates

### Development Costs (8 months)
| Role | Rate | Hours/Month | Total (8mo) |
|------|------|-------------|-------------|
| Full-Stack Developer (Lead) | $75/hr | 160 hrs | $96,000 |
| Backend Developer | $65/hr | 160 hrs | $83,200 |
| Frontend/Mobile Developer | $65/hr | 160 hrs | $83,200 |
| UI/UX Designer | $60/hr | 80 hrs | $38,400 |
| QA Engineer | $50/hr | 80 hrs | $32,000 |
| **Subtotal** | | | **$332,800** |

### Infrastructure Costs (Year 1)
| Service | Monthly | Annual |
|---------|---------|--------|
| Hosting (DigitalOcean) | $100 | $1,200 |
| Database (Managed PostgreSQL) | $50 | $600 |
| Storage (Spaces/S3) | $20 | $240 |
| CDN | $20 | $240 |
| Email (SendGrid) | $15 | $180 |
| Monitoring (Sentry, etc.) | $50 | $600 |
| SSL Certificates | Free (Let's Encrypt) | $0 |
| Domain Registration | $15/yr | $15 |
| **Subtotal** | | **$3,075** |

### Third-Party Services
| Service | Cost |
|---------|------|
| OCR API (Google Cloud Vision) | $5-50/month |
| Push Notifications (FCM) | Free |
| SMS (Twilio) - Optional | $10-100/month |
| Analytics (Firebase) | Free |
| **Estimated Annual** | **$500-1,000** |

### Legal & Compliance
| Item | Cost |
|------|------|
| Terms of Service | $2,000 |
| Privacy Policy | $1,500 |
| Legal Consultation | $3,000 |
| Insurance (E&O) | $1,500/year |
| **Total** | **$8,000** |

### Marketing (Post-Launch)
| Channel | Budget |
|---------|--------|
| App Store Optimization | $2,000 |
| Social Media Ads | $5,000 |
| Content Marketing | $3,000 |
| Influencer Partnerships | $5,000 |
| **Year 1 Total** | **$15,000** |

### Grand Total (Year 1)
- Development: $332,800
- Infrastructure: $3,075
- Third-Party: $1,000
- Legal: $8,000
- Marketing: $15,000
- **Total: $359,875**

### Budget-Friendly Alternative (Bootstrapped)
- Solo developer or 2-person team: $50,000-100,000
- Cheaper hosting (DigitalOcean): $500/year
- Free/cheap services: $500/year
- Minimal marketing: $2,000
- **Bootstrapped Total: $53,000-103,000**

---

## 17. Risk Management

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Database performance issues | Medium | High | Optimize queries, add indexes, implement caching |
| Third-party API failures | High | Medium | Implement retries, fallbacks, graceful degradation |
| Security breach | Low | Critical | Regular audits, penetration testing, bug bounty |
| Mobile platform changes | Medium | Medium | Stay updated, test early, follow best practices |
| Scalability bottlenecks | Medium | High | Load testing, horizontal scaling, performance monitoring |

### Business Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Low user adoption | High | Critical | User research, MVP testing, marketing strategy |
| Competitor enters market | Medium | High | Unique features, excellent UX, fast iteration |
| Regulatory changes | Low | High | Monitor IRS/tax law changes, consult experts |
| Funding shortfall | Medium | Critical | Bootstrap, seek investors, reduce scope |
| Key developer leaving | Low | High | Documentation, knowledge sharing, backup resources |

### Compliance Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| GDPR/CCPA violations | Low | Critical | Compliance checklist, legal review, data audits |
| Data breach | Low | Critical | Encryption, access controls, incident response plan |
| Tax calculation errors | Medium | High | Third-party validation, CPA review, disclaimers |
| App store rejections | Medium | Medium | Follow guidelines, test thoroughly, appeal process |

---

## 18. Future Enhancements (Roadmap)

### Year 2 Features
- 🔄 **Platform Integrations**: Direct API connections to Uber, Lyft, DoorDash
- 🤝 **Accountant Portal**: Secure read-only access for tax preparers
- 📊 **Advanced Analytics**: Predictive earnings, optimization suggestions
- 🌎 **Multi-Language Support**: Spanish, French, Portuguese
- 💳 **Payment Processing**: Accept subscriptions, process referral bonuses
- 🚗 **Fleet Management**: Multi-driver vehicle tracking
- 📱 **Widgets**: iOS/Android home screen widgets
- 🎯 **Smart Goals**: AI-powered goal recommendations

### Year 3 Features
- 🤖 **AI Assistant**: Chat-based financial advisor
- 🏦 **Banking Integration**: Plaid integration for expense auto-categorization
- 📈 **Investment Tracking**: Track retirement savings (SEP IRA, Solo 401k)
- 🌐 **Web3 Integration**: Cryptocurrency payment tracking
- 🗺️ **Heat Maps**: Identify high-earning areas
- 📞 **Customer Support Chat**: In-app support
- 🎓 **Educational Content**: Tax tips, business advice
- 🌟 **Referral Program**: Earn rewards for referrals

### Enterprise Features
- 🏢 **Multi-User Accounts**: For fleet managers
- 📊 **Custom Reports**: Build your own reports
- 🔗 **API Access**: Third-party integrations
- 🎨 **White-Label**: Rebrand for specific companies
- 📞 **Priority Support**: Dedicated account manager
- 🔐 **SSO/SAML**: Enterprise authentication

---

## 19. Success Metrics

### Key Performance Indicators (KPIs)

#### User Acquisition
- **Downloads**: 10,000 in Year 1
- **Registrations**: 5,000 users
- **Activation Rate**: 60% (completed onboarding)
- **Cost Per Acquisition**: < $50

#### User Engagement
- **Daily Active Users (DAU)**: 40% of registered users
- **Monthly Active Users (MAU)**: 70% of registered users
- **Session Duration**: 5-10 minutes average
- **Sessions per Day**: 2-3
- **Feature Usage**: 80% use expense tracking, 60% use mileage tracking

#### Retention
- **30-Day Retention**: 40%
- **90-Day Retention**: 30%
- **Annual Retention**: 20%
- **Churn Rate**: < 5% monthly

#### Revenue
- **Conversion to Paid**: 20% within 3 months
- **Average Revenue Per User (ARPU)**: $10/month
- **Customer Lifetime Value (CLV)**: $200
- **Monthly Recurring Revenue (MRR)**: $10,000 by Month 12

#### Quality
- **App Store Rating**: 4.5+ stars
- **Bug Reports**: < 1% of sessions
- **Crash Rate**: < 1%
- **API Response Time**: < 300ms (p95)
- **Uptime**: 99.5%

#### Customer Satisfaction
- **Net Promoter Score (NPS)**: > 50
- **Customer Satisfaction (CSAT)**: > 4.5/5
- **Support Response Time**: < 2 hours
- **Resolution Rate**: > 90%

---

## 20. Conclusion

GigAssist represents a comprehensive solution to the financial management challenges faced by gig economy workers. By combining automated expense tracking, intelligent mileage logging, tax preparation support, and insightful analytics, we empower drivers to maximize their earnings and simplify their financial lives.

### Why GigAssist Will Succeed

1. **Market Need**: 5+ million gig workers struggling with fragmented bookkeeping
2. **Unique Value**: Purpose-built for rideshare/delivery drivers, not generic accounting
3. **Technology**: Modern, scalable stack with mobile-first approach
4. **UX Focus**: Simple, intuitive interface designed for on-the-go usage
5. **Cost Advantage**: Fraction of accountant costs, pays for itself in tax savings
6. **Comprehensive**: All-in-one solution vs. juggling multiple tools

### Next Steps

1. **Week 1-2**: Finalize requirements, set up development environment
2. **Month 1-2**: Build foundation (auth, database, core API)
3. **Month 3-4**: Implement core features (revenue, expenses, mileage)
4. **Month 5-6**: Add advanced features (tax, reports, auto-tracking)
5. **Month 7-8**: Polish, test, and launch!

### Contact & Support

- **Project Lead**: [Your Name]
- **Email**: team@gigassist.com
- **Website**: https://gigassist.com
- **GitHub**: https://github.com/gigassist
- **Support**: support@gigassist.com

---

## Appendices

### Appendix A: Technology Glossary

| Term | Definition |
|------|------------|
| **API** | Application Programming Interface - allows apps to communicate |
| **JWT** | JSON Web Token - secure authentication mechanism |
| **OAuth** | Open Authorization - third-party login (Google, Apple) |
| **OCR** | Optical Character Recognition - extract text from images |
| **CRUD** | Create, Read, Update, Delete - basic data operations |
| **REST** | Representational State Transfer - API architecture style |
| **PostgreSQL** | Open-source relational database |
| **Redis** | In-memory data store for caching |
| **Docker** | Containerization platform |
| **CI/CD** | Continuous Integration/Continuous Deployment |

### Appendix B: IRS Resources

- [IRS Schedule C Instructions](https://www.irs.gov/forms-pubs/about-schedule-c-form-1040)
- [Form 4562 (Depreciation)](https://www.irs.gov/forms-pubs/about-form-4562)
- [Standard Mileage Rates](https://www.irs.gov/tax-professionals/standard-mileage-rates)
- [Self-Employment Tax](https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes)
- [Business Use of Vehicles](https://www.irs.gov/publications/p463#en_US_2023_publink1000136406)

### Appendix C: Platform Resources

**Uber**
- [Uber Driver Support](https://help.uber.com/driving-and-delivering)
- [Tax Information](https://www.uber.com/us/en/drive/tax-information/)

**Lyft**
- [Lyft Driver Support](https://help.lyft.com/hc/en-us/categories/115002006647-Driving-with-Lyft)
- [Tax Documents](https://help.lyft.com/hc/en-us/articles/115013080548-Tax-documents)

**DoorDash**
- [Dasher Support](https://help.doordash.com/dashers)
- [Tax Guide](https://help.doordash.com/dashers/s/article/Common-Dasher-Tax-Questions)

---

**Document Version**: 2.0  
**Last Updated**: January 2025  
**Status**: Ready for Implementation  
**Total Pages**: 150+

*This requirements document is a living document and will be updated as the project evolves.*

</details>

