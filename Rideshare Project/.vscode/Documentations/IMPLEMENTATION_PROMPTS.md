# GigAssist Implementation Prompts
**Date**: December 10, 2025  
**Reference**: PERFORMANCE_ANALYSIS_2025.md

This document contains ready-to-use prompts for implementing the recommendations from the performance analysis. Copy and paste these prompts to start each implementation phase.

---

## 🚀 PHASE 1: FOUNDATION (Week 1-2)

### Prompt 1.1: Database Indexes & Query Logging

```
I need to implement database performance improvements for GigAssist:

1. Add critical missing indexes to prisma/schema.prisma:
   - Trip: indexes on [startDate, endDate], [purpose], [vehicleId, startDate]
   - Expense: indexes on [date, category], [taxDeductible, date]
   - Income: indexes on [date, source], [periodStart, periodEnd]
   - LoginAttempt: indexes on [email, createdAt], [successful, createdAt], [ipAddress, createdAt]

2. Update lib/prisma.ts to add query logging:
   - Log all queries in development
   - Warn on queries >100ms
   - Track slow query patterns

3. Create a migration and test the changes

Please implement these changes and verify they don't break any existing functionality.
```

---

### Prompt 1.2: Redis Caching Implementation

```
I need to migrate our in-memory caching to Redis for production scalability:

1. Install ioredis: npm install ioredis @types/ioredis

2. Create lib/redis.ts:
   - Initialize Redis client with fallback to null for dev
   - Export redis instance
   - Add connection error handling

3. Update lib/two-factor.ts:
   - Replace in-memory otpStore with Redis
   - Use redis.setex for OTP with 5-minute TTL
   - Maintain backward compatibility for dev (no Redis)

4. Update lib/rate-limit-enhanced.ts:
   - Replace in-memory stores with Redis
   - Use Redis for request tracking
   - Keep in-memory fallback for development

5. Add Redis health check to the system

Environment variable needed: REDIS_URL

Please implement with proper error handling and fallback mechanisms.
```

---

### Prompt 1.3: Sentry Error Tracking

```
I need to add Sentry error tracking and performance monitoring to GigAssist:

1. Install Sentry: npm install @sentry/nextjs

2. Run setup wizard: npx @sentry/wizard@latest -i nextjs

3. Configure sentry.client.config.ts:
   - DSN from environment variable
   - 10% trace sampling
   - Enable session replay with privacy settings
   - Mask all text and block media

4. Configure sentry.server.config.ts:
   - Same DSN and sampling
   - Add Prisma integration
   - Log SQL queries to Sentry

5. Add error boundaries to critical pages:
   - Dashboard
   - Reports
   - Expense entry

6. Add Web Vitals reporting to app/layout.tsx

Environment variables needed:
- SENTRY_DSN (server)
- NEXT_PUBLIC_SENTRY_DSN (client)

Please implement and test with a sample error to verify it's working.
```

---

### Prompt 1.4: Health Check & Performance Middleware

```
I need to add operational monitoring endpoints:

1. Create app/api/health/route.ts:
   - Check database connection (SELECT 1)
   - Check Redis connection if configured
   - Return 200 with status if healthy
   - Return 503 with error details if unhealthy
   - Include timestamp and service status

2. Create lib/middleware/performance.ts:
   - Wrap API handlers with timing
   - Log requests taking >1000ms
   - Add X-Response-Time header
   - Send slow requests to Sentry in production
   - Include request method and path in logs

3. Apply performance middleware to critical API routes:
   - /api/dashboard/stats
   - /api/reports/*
   - /api/expenses
   - /api/income
   - /api/trips

4. Add a /api/debug/performance route that shows:
   - Average response times
   - Slowest endpoints
   - Request count by endpoint

Please implement with proper error handling.
```

---

### Prompt 1.5: Fix Dashboard N+1 Queries

```
I need to optimize database queries in the dashboard to eliminate N+1 query patterns:

1. Analyze app/api/dashboard/stats/route.ts:
   - Identify all Prisma queries
   - Find implicit N+1 patterns (nested relations)
   - Check for missing select statements

2. Optimize all queries with:
   - Explicit select for only needed fields
   - Proper includes with nested selects
   - Use Promise.all for parallel queries where possible

3. Specific optimizations needed:
   - Trip queries: select only id, distance, startDate, Vehicle (make, model)
   - Expense queries: select only id, amount, category, date
   - Income queries: select only id, grossFares, tips, date
   - Vehicle queries: avoid loading all trips

4. Add query performance logging to measure improvement

5. Test the endpoint and compare response times before/after

Please implement and provide before/after metrics.
```

---

## 🎨 PHASE 2: OPTIMIZATION (Week 3-4)

### Prompt 2.1: Frontend Code Splitting

```
I need to implement code splitting for heavy components in GigAssist:

1. Update app/reports/page.tsx:
   - Dynamic import MileageChart component
   - Dynamic import ExpenseChart component
   - Dynamic import IncomeStatementReport component
   - Dynamic import BalanceSheetReport component
   - Add loading skeletons for each
   - Disable SSR for chart components

2. Update app/vehicles/add-with-asset/page.tsx:
   - Dynamic import OCRScanner component (10MB+ library)
   - Add loading state
   - Only load tesseract.js when user clicks "Scan Receipt"

3. Update app/expenses/page.tsx:
   - Dynamic import receipt image viewer
   - Lazy load when user clicks to view receipt

4. Analyze bundle impact:
   - Install @next/bundle-analyzer
   - Run build with ANALYZE=true
   - Document bundle size before/after

Please implement with proper loading states and error boundaries.
```

---

### Prompt 2.2: React Performance Optimization

```
I need to optimize React components for better rendering performance:

1. Update app/reports/page.tsx:
   - Add useMemo for filtered expenses/income/trips
   - Add useCallback for fetch functions
   - Debounce search input (300ms delay)
   - Memoize expensive calculations (totals, averages)

2. Update app/expenses/page.tsx:
   - Memoize filtered expense list
   - Stabilize callback functions
   - Add useMemo for category totals

3. Update app/income/page.tsx:
   - Memoize income calculations
   - Optimize re-renders on filter changes

4. Update app/dashboard/page.tsx:
   - Memoize chart data transformations
   - Cache metric calculations

5. Add React DevTools Profiler measurements:
   - Identify components with excessive re-renders
   - Document render time improvements

Please implement with detailed comments explaining optimization rationale.
```

---

### Prompt 2.3: Image Optimization

```
I need to implement Next.js image optimization for receipt images:

1. Update next.config.ts:
   - Configure image domains (add your storage domain)
   - Enable AVIF and WebP formats
   - Set appropriate device sizes and image sizes
   - Configure image loader if using custom storage

2. Create components/ImageWithFallback.tsx:
   - Wrapper around Next.js Image component
   - Handle loading states
   - Handle errors gracefully
   - Add blur placeholder support

3. Update components displaying receipts:
   - Replace <img> with <Image> component
   - Add proper width/height
   - Add blur placeholders
   - Optimize thumbnail sizes

4. Add image upload optimization:
   - Compress images client-side before upload
   - Generate thumbnails on upload
   - Store multiple sizes

5. Test image loading performance with Lighthouse

Please implement with proper error handling and accessibility.
```

---

### Prompt 2.4: Bundle Analysis & Optimization

```
I need to analyze and optimize the bundle size:

1. Install bundle analyzer:
   - npm install @next/bundle-analyzer
   - Update next.config.ts to use analyzer
   - Add "analyze" script to package.json

2. Run analysis and identify largest dependencies:
   - recharts usage optimization
   - tesseract.js lazy loading verification
   - Identify duplicate dependencies
   - Check for unused code

3. Implement optimizations:
   - Tree-shake unused exports
   - Replace heavy libraries with lighter alternatives where possible
   - Move development dependencies out of production bundle

4. Configure webpack optimizations in next.config.ts:
   - Enable modern JavaScript for modern browsers
   - Configure splitChunks for better caching
   - Minimize CSS

5. Document findings:
   - Bundle size before/after
   - Lighthouse scores before/after
   - Page load times before/after

Please provide detailed analysis and recommendations.
```

---

## 🤖 PHASE 3: ADVANCED FEATURES (Week 5-8)

### Prompt 3.1: AI Expense Categorization

```
I need to implement AI-powered expense categorization:

1. Install OpenAI: npm install openai

2. Create lib/ai/categorize-expense.ts:
   - Initialize OpenAI client with API key
   - Create categorizeExpense function
   - Use GPT-4o-mini for cost efficiency
   - Return category and confidence score (0-1)
   - Handle API errors gracefully

3. Create lib/ai/suggest-merchant.ts:
   - Suggest merchant name corrections
   - Identify duplicate merchants with typos

4. Update app/api/expenses/route.ts:
   - Add AI suggestion to POST handler
   - Return suggestion with response
   - Auto-apply if confidence >0.8
   - Otherwise show as suggestion to user

5. Create UI component for AI suggestions:
   - Show suggested category with confidence
   - Allow user to accept or reject
   - Learn from user corrections (future enhancement)

6. Add settings to enable/disable AI features

Environment variable: OPENAI_API_KEY

Please implement with rate limiting and cost tracking.
```

---

### Prompt 3.2: Bank Integration with Plaid

```
I need to implement bank account integration using Plaid:

1. Install Plaid: npm install plaid

2. Create lib/plaid/client.ts:
   - Initialize Plaid client
   - Use sandbox environment initially
   - Add error handling

3. Create lib/plaid/link-token.ts:
   - Generate link token for user
   - Configure for Canadian banks
   - Request transactions product

4. Create app/api/plaid/link-token/route.ts:
   - Generate link token endpoint
   - Secure with authentication

5. Create app/api/plaid/exchange-token/route.ts:
   - Exchange public token for access token
   - Store access token securely (encrypted)

6. Create app/api/plaid/sync-transactions/route.ts:
   - Fetch transactions using sync API
   - Transform to expense format
   - Auto-import as expenses
   - Mark as "needs review"

7. Create UI component for bank connection:
   - Plaid Link button
   - Connected accounts list
   - Manual sync button
   - Auto-sync toggle

8. Add database model for connected accounts

Environment variables:
- PLAID_CLIENT_ID
- PLAID_SECRET
- PLAID_ENV (sandbox/development/production)

Please implement with proper security and error handling.
```

---

### Prompt 3.3: Tax Optimization Engine

```
I need to implement a tax optimization recommendation engine:

1. Create lib/tax-optimizer/analyzer.ts:
   - Function to analyze user's tax opportunities
   - Check for unclaimed CCA deductions
   - Identify missing business mileage
   - Find missing expense categories
   - Calculate potential savings

2. Create lib/tax-optimizer/cca-calculator.ts:
   - Calculate available CCA for each asset
   - Identify half-year rule applications
   - Suggest optimal CCA claims

3. Create lib/tax-optimizer/mileage-analyzer.ts:
   - Calculate business use percentage
   - Identify undocumented trips
   - Suggest trip logging improvements

4. Create app/api/tax-opportunities/route.ts:
   - Fetch all user financial data
   - Run tax optimizer
   - Return prioritized recommendations
   - Cache results for 24 hours

5. Create components/TaxOpportunities.tsx:
   - Display recommendations as cards
   - Priority badges (high/medium/low)
   - Estimated savings amounts
   - Action buttons to fix issues

6. Add to dashboard as a widget

7. Send weekly email with top opportunities

Please implement with detailed calculations and explanations.
```

---

### Prompt 3.4: PWA Automatic Trip Tracking

```
I need to implement automatic trip tracking using geolocation:

1. Update public/sw.js:
   - Add geolocation tracking service
   - Store location points in IndexedDB
   - Implement trip inference algorithm
   - Add background sync for trip upload

2. Create lib/trip-inference.ts:
   - Analyze location points to infer trips
   - Detect start/stop based on movement
   - Calculate distance using Haversine formula
   - Identify likely business vs personal

3. Create app/api/trips/batch/route.ts:
   - Endpoint for bulk trip creation
   - Accept inferred trips from PWA
   - Mark as "needs review"
   - Allow user to confirm/edit

4. Update app/layout.tsx:
   - Request location permissions on login
   - Start location tracking service
   - Show tracking status indicator

5. Create settings page for location tracking:
   - Enable/disable tracking
   - Set tracking accuracy
   - View tracking history
   - Privacy controls

6. Create components/TripReview.tsx:
   - Show inferred trips
   - Allow editing start/end/purpose
   - Batch approve trips

7. Add notifications for trip detection

Please implement with privacy-first approach and battery optimization.
```

---

### Prompt 3.5: Multi-Currency Support

```
I need to add multi-currency support for expenses and income:

1. Create lib/currency/converter.ts:
   - Fetch exchange rates from Bank of Canada API
   - Cache rates for each day
   - Convert between currencies
   - Store historical rates

2. Update prisma/schema.prisma:
   - Add currency field to Expense (default CAD)
   - Add amountCAD field (normalized)
   - Add exchangeRate field
   - Add currency field to Income

3. Create app/api/currency/rates/route.ts:
   - Endpoint to fetch current rates
   - Support multiple currencies
   - Cache for 1 hour

4. Update expense/income forms:
   - Add currency selector
   - Show conversion preview
   - Display both original and CAD amounts

5. Update reports:
   - All calculations use CAD amounts
   - Show original currency in details
   - Add currency breakdown chart

6. Create settings for default currency

7. Handle historical rate lookups for old transactions

Please implement with proper error handling for API failures.
```

---

## 🔒 PHASE 4: SECURITY (Week 9-10)

### Prompt 4.1: Enhanced Rate Limiting

```
I need to implement production-ready rate limiting with Redis:

1. Update lib/rate-limit-enhanced.ts:
   - Use Redis for token bucket storage
   - Implement sliding window algorithm
   - Add per-endpoint rate limits
   - Add per-user rate limits (authenticated)

2. Create middleware.ts in root:
   - Apply rate limiting to all /api/* routes
   - 60 requests per minute per IP
   - 300 requests per hour per IP
   - Higher limits for authenticated users

3. Add rate limit headers to responses:
   - X-RateLimit-Limit
   - X-RateLimit-Remaining
   - X-RateLimit-Reset

4. Create app/api/admin/rate-limits/route.ts:
   - View rate limit status for IPs
   - Whitelist/blacklist IPs
   - Adjust limits dynamically

5. Add DDoS protection:
   - Detect sudden traffic spikes
   - Automatically ban suspicious IPs
   - Alert admins via Sentry

Please implement with comprehensive testing.
```

---

### Prompt 4.2: Comprehensive Audit Logging

```
I need to implement audit logging for compliance:

1. Update prisma/schema.prisma:
   - Create AuditLog model
   - Fields: userId, action, targetId, targetType, metadata, ipAddress, timestamp
   - Add indexes for efficient queries

2. Create lib/audit-log.ts:
   - Define AuditAction enum (all sensitive operations)
   - logAudit function
   - Integration with external logging service
   - Privacy-compliant data handling

3. Add audit logging to critical operations:
   - User creation/deletion
   - Role changes
   - Permission grants/revokes
   - Expense modifications
   - Report exports
   - Impersonation start/end
   - Password changes
   - 2FA enable/disable

4. Create app/api/admin/audit-logs/route.ts:
   - Query audit logs with filters
   - Export audit logs
   - Retention policy enforcement

5. Create UI for viewing audit logs:
   - Filterable table
   - Export to CSV
   - Real-time updates

Please implement with data retention policies (90 days).
```

---

### Prompt 4.3: Input Validation Hardening

```
I need to harden input validation across all API endpoints:

1. Create lib/validators/common.ts:
   - searchParamSchema (prevent SQL injection)
   - dateRangeSchema with validation
   - emailSchema with normalization
   - phoneSchema with format validation
   - urlSchema with allowed domains

2. Update all API routes to use schemas:
   - Validate all query parameters
   - Validate all request bodies
   - Return 400 with clear error messages
   - Log validation failures

3. Add sanitization utilities:
   - HTML sanitization for text fields
   - SQL injection prevention
   - XSS prevention
   - Path traversal prevention

4. Create middleware for automatic validation:
   - Apply to all API routes
   - Catch validation errors
   - Return standardized error format

5. Add security tests:
   - Test SQL injection attempts
   - Test XSS attempts
   - Test path traversal attempts

Please implement with comprehensive validation on all inputs.
```

---

### Prompt 4.4: CSP Violation Reporting

```
I need to add Content Security Policy violation reporting:

1. Update next.config.ts:
   - Add report-uri to CSP header
   - Point to /api/csp-report
   - Keep CSP in report-only mode initially

2. Create app/api/csp-report/route.ts:
   - Accept CSP violation reports
   - Parse report format
   - Log to console in development
   - Send to Sentry in production
   - Store in database for analysis

3. Create database model for CSP violations:
   - Store violatedDirective
   - Store blockedURI
   - Store sourceFile
   - Count occurrences

4. Create app/api/admin/csp-violations/route.ts:
   - Query recent violations
   - Group by violation type
   - Show trends over time

5. Create alerts for new violation types:
   - Email admins on new violations
   - Slack integration
   - Sentry alerts

6. Gradually enforce CSP:
   - Start with report-only
   - Fix violations
   - Move to enforcement mode

Please implement with detailed violation tracking.
```

---

## 🎨 PHASE 5: POLISH (Week 11-12)

### Prompt 5.1: Dark Mode Implementation

```
I need to implement dark mode support:

1. Update tailwind.config.js:
   - Enable dark mode with class strategy
   - Define dark mode color palette
   - Ensure all colors have dark variants

2. Create components/theme/ThemeToggle.tsx:
   - Toggle button with sun/moon icon
   - Save preference to localStorage
   - Sync across tabs

3. Update app/layout.tsx:
   - Read theme preference on load
   - Apply dark class to html element
   - Provide theme context

4. Update all pages and components:
   - Add dark: variants to all colors
   - Test readability in both modes
   - Ensure charts work in dark mode

5. Add system preference detection:
   - Respect prefers-color-scheme
   - Allow manual override

6. Add smooth transitions between modes

Please implement with consistent color scheme and accessibility.
```

---

### Prompt 5.2: Keyboard Shortcuts

```
I need to implement keyboard shortcuts for power users:

1. Create lib/keyboard-shortcuts.ts:
   - Define all shortcuts
   - Handle key combinations
   - Prevent conflicts with browser shortcuts

2. Implement command palette (⌘K):
   - Search all actions
   - Navigate to any page
   - Execute commands
   - Show keyboard shortcuts

3. Add shortcuts for common actions:
   - N: New expense
   - T: New trip
   - R: View reports
   - S: Search
   - ?: Show shortcuts help
   - Esc: Close modals

4. Create components/CommandPalette.tsx:
   - Fuzzy search
   - Keyboard navigation
   - Recent actions
   - Customizable shortcuts

5. Add visual indicators:
   - Show shortcuts in tooltips
   - Highlight shortcut keys in UI

Please implement with accessibility considerations.
```

---

### Prompt 5.3: Bulk Operations

```
I need to implement bulk operations for expenses and trips:

1. Update app/expenses/page.tsx:
   - Add checkbox selection
   - Select all/none controls
   - Bulk action menu

2. Implement bulk operations:
   - Delete selected (with confirmation)
   - Change category
   - Mark as tax deductible/not
   - Export selected to CSV
   - Bulk edit common fields

3. Create app/api/expenses/bulk/route.ts:
   - Handle bulk updates
   - Validate permissions
   - Return success/failure for each item
   - Log audit trail

4. Add optimistic UI updates:
   - Show changes immediately
   - Revert on error
   - Show progress indicator

5. Implement for trips page as well

6. Add keyboard shortcuts:
   - Shift+Click for range selection
   - ⌘A for select all

Please implement with proper error handling and undo functionality.
```

---

### Prompt 5.4: Advanced Export Features

```
I need to implement advanced export functionality:

1. Create lib/export/pdf-generator.ts:
   - Generate PDF reports using jsPDF
   - Include charts and tables
   - Branded header/footer
   - Page numbers and date

2. Create lib/export/excel-templates.ts:
   - T2125 tax form template
   - Expense summary template
   - Income summary template
   - Mileage log template

3. Create app/api/export/pdf/route.ts:
   - Generate PDF on demand
   - Include user's financial data
   - Proper date range filtering

4. Update reports page:
   - Add export buttons
   - Format selector (PDF/Excel/CSV)
   - Date range selector
   - Include/exclude filters

5. Add scheduled exports:
   - Weekly expense summary email
   - Monthly income report
   - Quarterly tax packet

6. Create export history:
   - Track all exports
   - Allow re-download
   - Show what was included

Please implement with professional formatting.
```

---

### Prompt 5.5: Dashboard Customization

```
I need to implement customizable dashboard widgets:

1. Create components/dashboard/Widget.tsx:
   - Draggable container
   - Resizable
   - Collapsible
   - Remove button

2. Implement available widgets:
   - Monthly income chart
   - Expense breakdown
   - Tax opportunities
   - Recent trips
   - Quick stats
   - Upcoming tax deadlines

3. Create drag-and-drop layout:
   - Use react-grid-layout
   - Save layout to database
   - Sync across devices

4. Create widget configuration modal:
   - Select which widgets to show
   - Configure widget settings
   - Reset to default layout

5. Add widget library:
   - Browse available widgets
   - Preview before adding
   - Custom widget creation (future)

6. Save preferences per user:
   - Store in UserProfile
   - Load on dashboard mount
   - Share layouts (optional)

Please implement with smooth animations and mobile responsive.
```

---

## 📦 UTILITY PROMPTS

### Prompt: Create Migration Script

```
I need to create a database migration script:

Context: [Describe what schema changes are needed]

Please:
1. Create a new Prisma migration with descriptive name
2. Include both SQL for PostgreSQL
3. Add data migration if needed
4. Include rollback instructions
5. Test migration on development database
6. Document breaking changes if any

Migration name: [your_migration_name]
```

---

### Prompt: Performance Testing

```
I need to performance test a specific feature:

Feature: [describe feature to test]
Location: [file path]

Please:
1. Write performance test using Jest
2. Measure execution time
3. Test with realistic data volume
4. Identify bottlenecks
5. Suggest optimizations
6. Compare before/after metrics

Provide detailed analysis with numbers.
```

---

### Prompt: Error Handling Review

```
I need to review error handling in a module:

Module: [file path or feature name]

Please:
1. Audit all try-catch blocks
2. Check for unhandled promise rejections
3. Verify error messages are user-friendly
4. Ensure errors are logged properly
5. Check Sentry integration
6. Add missing error handling
7. Test error scenarios

Provide a comprehensive error handling report.
```

---

## 🎯 QUICK REFERENCE

### Starting a New Phase
1. Review PERFORMANCE_ANALYSIS_2025.md for context
2. Copy the relevant prompt from this document
3. Paste into your AI assistant
4. Answer any clarifying questions
5. Review generated code before committing
6. Test thoroughly in development
7. Deploy with monitoring

### Best Practices
- Always test in development first
- Check for TypeScript errors
- Run existing tests before deploying
- Monitor Sentry after deployment
- Update documentation as you go
- Commit frequently with clear messages

### Getting Help
- Reference existing code patterns in the codebase
- Check related documentation files
- Ask for clarification before implementing
- Request code reviews for critical changes
- Test with real-world data

---

**Document Version**: 1.0  
**Last Updated**: December 10, 2025  
**Maintained By**: Development Team
