# Mobile Responsiveness Testing Checklist

## Pages to Test

### Authentication Pages
- [ ] `/login` - Login form
- [ ] `/register` - Registration form

### Dashboard & Home
- [ ] `/dashboard` - Main dashboard with stats cards
- [ ] `/` - Landing page

### Core Features
- [ ] `/trips` - Trip list and filters
- [ ] `/trips/track` - GPS tracking interface
- [ ] `/expenses` - Expense list and management
- [ ] `/income` - Income tracking
- [ ] `/vehicles` - Vehicle management

### Accounting
- [ ] `/accounts` - Chart of accounts
- [ ] `/ledger` - General ledger
- [ ] `/depreciation` - Asset depreciation

### Reports & Exports
- [ ] `/reports` - Multi-tab reports (Mileage, Expenses, Income, Balance Sheet, Income Statement)
- [ ] `/tax-export` - Tax export page

### Settings & Subscription
- [ ] `/settings/subscription` - Subscription management
- [ ] `/pricing` - Pricing page
- [ ] `/admin` - Admin dashboard (admins only)

## Mobile Viewport Sizes to Test
- iPhone SE: 375x667
- iPhone 12/13/14: 390x844
- iPhone 14 Pro Max: 430x932
- Android (small): 360x640
- Android (medium): 412x915
- Tablet: 768x1024

## Testing Criteria

### Layout
- [ ] No horizontal scrolling
- [ ] Content fits within viewport
- [ ] Tables are scrollable or responsive
- [ ] Cards stack vertically on mobile
- [ ] Proper spacing and padding

### Navigation
- [ ] Hamburger menu on mobile
- [ ] Easy to tap navigation items
- [ ] User menu accessible
- [ ] Back navigation works

### Forms
- [ ] Input fields are full width on mobile
- [ ] Labels are readable
- [ ] Date pickers work on touch devices
- [ ] Number inputs use proper keyboard
- [ ] Submit buttons are easily tappable

### Touch Interactions
- [ ] Buttons are at least 44x44px (Apple guideline)
- [ ] No hover-only interactions
- [ ] Touch targets have adequate spacing
- [ ] Swipe gestures work where applicable

### Typography
- [ ] Font sizes are readable (minimum 16px)
- [ ] Line height is appropriate
- [ ] Text doesn't overflow containers

### Performance
- [ ] Page loads quickly on mobile
- [ ] Images are optimized
- [ ] No layout shifts
