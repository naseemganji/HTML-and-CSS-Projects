# Stripe Integration Setup Guide

## Overview
DriveGo uses Stripe for subscription payments. Follow these steps to complete the integration.

---

## Step 1: Create Stripe Account

1. Go to https://stripe.com and create an account
2. Verify your email address
3. Complete business information (can use test mode first)

---

## Step 2: Create Products and Prices

### Create Standard Plan Product

1. Go to **Products** in Stripe Dashboard
2. Click **+ Add Product**
3. Enter details:
   - **Name**: DriveGo Standard
   - **Description**: Unlimited mileage tracking, GPS, CSV exports, and tax filing support
   - **Pricing**:
     - Monthly: $12 USD per month
     - Yearly: $99 USD per year
4. Click **Save product**
5. Copy the **Price IDs** for both monthly and yearly

### Create Pro Plan Product

1. Click **+ Add Product** again
2. Enter details:
   - **Name**: DriveGo Pro
   - **Description**: Everything in Standard plus OCR scanning, asset management, and advanced financial reports
   - **Pricing**:
     - Monthly: $20 USD per month
     - Yearly: $199 USD per year
3. Click **Save product**
4. Copy the **Price IDs** for both monthly and yearly

---

## Step 3: Get API Keys

1. Go to **Developers** → **API keys**
2. Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)
4. Keep these secure - never commit to git!

---

## Step 4: Set Up Webhook

1. Go to **Developers** → **Webhooks**
2. Click **+ Add endpoint**
3. Enter your webhook URL:
   - **Development**: `https://yourdomain.com/api/stripe/webhooks`
   - **Local testing**: Use Stripe CLI (see below)
4. Select events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_`)

---

## Step 5: Update Environment Variables

Add these to your `.env` file:

```env
# Stripe API Keys
STRIPE_SECRET_KEY="sk_test_..." # From Step 3
STRIPE_PUBLISHABLE_KEY="pk_test_..." # From Step 3
STRIPE_WEBHOOK_SECRET="whsec_..." # From Step 4

# Stripe Price IDs
STRIPE_PRICE_STANDARD_MONTHLY="price_..." # From Step 2
STRIPE_PRICE_STANDARD_YEARLY="price_..." # From Step 2
STRIPE_PRICE_PRO_MONTHLY="price_..." # From Step 2
STRIPE_PRICE_PRO_YEARLY="price_..." # From Step 2
```

---

## Step 6: Update Prisma Schema (Optional but Recommended)

Add Stripe customer ID to User model for better integration:

```prisma
model User {
  // ... existing fields ...
  stripeCustomerId    String?  @unique
  subscriptionStatus  String?  // active, canceled, past_due
  subscriptionEndsAt  DateTime?
}
```

Then run:
```bash
npx prisma migrate dev --name add_stripe_fields
```

---

## Step 7: Test the Integration

### Local Testing with Stripe CLI

1. Install Stripe CLI:
   ```bash
   # Windows (with Scoop)
   scoop install stripe
   
   # macOS
   brew install stripe/stripe-cli/stripe
   
   # Or download from https://stripe.com/docs/stripe-cli
   ```

2. Login to Stripe:
   ```bash
   stripe login
   ```

3. Forward webhooks to local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhooks
   ```

4. In another terminal, start your dev server:
   ```bash
   npm run dev
   ```

5. Test checkout flow:
   - Go to `http://localhost:3000/pricing`
   - Click "Subscribe Now" on Standard or Pro
   - Use Stripe test card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits

6. Check webhook events in terminal

---

## Step 8: Verify Subscription Works

1. After test payment, check database:
   ```sql
   SELECT email, subscriptionTier FROM "User";
   ```
   - Should show upgraded tier

2. Test feature access:
   - Try adding 11th expense on free tier (should be blocked)
   - Upgrade to Standard
   - Try adding expense again (should work)

3. Test subscription cancellation:
   - Go to `/settings/subscription`
   - Click "Downgrade" to free
   - Verify tier changed in database

---

## Production Deployment

### Before Going Live:

1. **Switch to Live Mode**:
   - Go to Stripe Dashboard
   - Toggle from **Test mode** to **Live mode**
   - Recreate products/prices in live mode
   - Get new live API keys (`sk_live_` and `pk_live_`)

2. **Update production environment variables**:
   - In Vercel/Railway, update all `STRIPE_*` variables with live values

3. **Configure webhook for production**:
   - Use production URL: `https://yourdomain.com/api/stripe/webhooks`
   - Verify webhook is receiving events

4. **Set up billing**:
   - Add payment method to your Stripe account
   - Configure payout schedule

5. **Enable required Stripe features**:
   - Customer Portal (for users to manage subscriptions)
   - Email receipts
   - Invoicing

---

## Testing Checklist

- [ ] Stripe account created and verified
- [ ] Products created (Standard & Pro)
- [ ] Prices created (monthly & yearly for each)
- [ ] API keys copied to `.env`
- [ ] Webhook endpoint configured
- [ ] Local webhook testing with Stripe CLI works
- [ ] Test checkout completes successfully
- [ ] User tier upgrades in database
- [ ] Feature limits enforced correctly
- [ ] Subscription cancellation works
- [ ] Invoice emails sent (configure in Stripe settings)

---

## Common Issues & Solutions

### Issue: Webhook signature verification failed
**Solution**: Make sure `STRIPE_WEBHOOK_SECRET` matches the signing secret from your webhook endpoint.

### Issue: Checkout redirects to 404
**Solution**: Verify `NEXTAUTH_URL` is set correctly in `.env`.

### Issue: User tier doesn't update after payment
**Solution**: Check webhook logs in Stripe Dashboard. Ensure webhook endpoint is receiving events.

### Issue: Free tier limits not enforced
**Solution**: Clear browser cache and test in incognito mode. Check user's `subscriptionTier` field in database.

---

## Resources

- **Stripe Dashboard**: https://dashboard.stripe.com
- **Stripe Documentation**: https://stripe.com/docs
- **Stripe CLI Docs**: https://stripe.com/docs/stripe-cli
- **Test Cards**: https://stripe.com/docs/testing

---

## Need Help?

If you encounter issues:
1. Check Stripe Dashboard → Developers → Logs
2. Check your server logs for errors
3. Use Stripe CLI to test webhooks locally
4. Review Stripe's documentation

---

**Status**: ⚠️ Configuration Required

Once you've completed these steps, update this file to:
**Status**: ✅ Fully Configured

---

*Last Updated: December 1, 2025*
