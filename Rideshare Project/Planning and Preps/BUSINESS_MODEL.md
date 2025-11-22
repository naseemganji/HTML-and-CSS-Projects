BUSINESS MODEL TEMPLATE — GigAssist / DriveGo
=========================================================

Purpose
-------
This file captures the business model for the DriveGo product. It includes the core value proposition, revenue streams, pricing strategy, unit economics, a 3-year projection template, KPIs, experiments and next steps. Use this as a living document — replace assumptions with real metrics as they become available.

1. Executive Summary
--------------------
- Product: DriveGo
- Core value: Simple, IRS‑compliant mileage + expense tracking + tax summaries for gig drivers.
- Target customers: Rideshare & delivery drivers (B2C); fleets and accountants (B2B)
- Primary monetization (options): subscriptions (premium features), fleet licenses, lead generation/marketplace, partner referrals, paid add-ons.

2. Assumptions (editable)
-------------------------
- TAM (total drivers in target region): `TAM = 5_000_000` (US)
- SOM (serviceable obtainable market): `SOM_pct = 0.05` (5%) → `SOM = TAM * SOM_pct`
- Free→Paid conversion: `conv_rate = 0.05` (5%)
- Pricing (annual): `price_standard = 59` USD/yr, `price_pro = 119` USD/yr
- ARPU (annual): `ARPU = weighted average based on mix` (calc below)
- CAC (cost to acquire a paid user): `CAC = 50` USD
- Gross margin on subscription revenue: `GM = 0.80` (80%)
- Avg paid user lifetime: `LIFETIME_YEARS = 2`
- One-time development cost (MVP): `DEV_ONE_OFF = 333000` USD
- Annual operating cost (support, infra, ops): `OPS_ANNUAL = 250000` USD

3. Value Proposition
--------------------
- Primary: Save time and increase tax-deductible claim capture via automated mileage and OCR-backed receipts.
- Secondary: Single source of truth (platform earnings + expenses), IRS-ready exports, vehicle health/cost insights.

4. Revenue Streams
------------------
List possible revenue channels with short notes:
- Subscriptions (Standard/Pro): recurring, predictable.
- Fleet / Enterprise licenses: high-ARPU contracts, per-seat pricing.
- Marketplace / Lead generation: sell accountant or repair leads (opt-in).
- Partner referrals / Affiliate: insurance, parts, financing.
- Add-ons: OCR credit packs, one-time tax prep packages.
- Data & analytics (aggregated, anonymized): to cities/insights buyers — use only with explicit consent and legal review.
- White-label / licensing: embed SDK in partner apps.

5. Pricing Strategy & Example Packages
-------------------------------------
- Free: Basic mileage logging (manual), limited reports, CSV export.
- Standard: $59/yr — Auto mileage, unlimited expenses, monthly P&L, limited OCR credits.
- Pro: $119/yr (or $9.99/mo) — Unlimited OCR, advanced tax summaries, multi-vehicle, priority support.
- Fleet: Custom — e.g., $9–25/driver/mo depending on features & support.

6. Unit Economics (formulas)
----------------------------
- ARPU (annual) = (pct_standard * price_standard) + (pct_pro * price_pro)
- LTV = ARPU * GM * LIFETIME_YEARS
- LTV/CAC = LTV / CAC
- CAC Payback (months) = CAC / (monthly_ARPU)  where `monthly_ARPU = ARPU / 12`

Example (baseline mix 30% Standard, 70% Pro):
- ARPU = 0.3*59 + 0.7*119 = 101.8 USD
- LTV = 101.8 * 0.8 * 2 = 162.88 USD
- LTV/CAC (CAC=50) = 162.88 / 50 = 3.26
- CAC Payback = 50 / (101.8/12) ≈ 5.89 months

7. 3-Year Projection Template (table)
-------------------------------------
Replace the example numbers with your assumptions and actual monthly/quarterly results.

| Year | Active Users | Paid % | Paying Users | ARPU (yr) | Revenue | CAC | Acquisition Cost | Dev+Ops Cost | Gross Profit | Net Profit |
|------|--------------:|-------:|-------------:|----------:|--------:|----:|-----------------:|-------------:|-------------:|-----------:|
| 1    | 250,000       | 5%     | 12,500       | $101.80   | $1,272,500 | $50 | $625,000         | $583,000     | $1,018,000   | $(–) ?     |
| 2    | 500,000       | 6%     | 30,000       | $105.00   | $3,150,000 | $45 | $1,350,000       | $300,000     | $2,520,000   | $?         |
| 3    | 750,000       | 7%     | 52,500       | $110.00   | $5,775,000 | $40 | $2,100,000       | $350,000     | $4,620,000   | $?         |

Notes:
- `Revenue = Paying Users * ARPU`
- `Acquisition Cost = Paying Users * CAC`
- `Gross Profit = Revenue * GM`
- `Net Profit = Gross Profit - (Acquisition Cost + Ops Cost + Dev amortization + other overhead)`

8. Customer Acquisition Plan
----------------------------
Channels to test in priority order:
- Partnerships: driver associations, fleet managers, driver hubs (low CAC).  
- Organic SEO / content: tax tips, mileage guides, inbound traffic.  
- Referral program: give users credit for inviting drivers.  
- Paid ads (targeted): Facebook, Instagram, Google — small budget tests to measure CAC.  
- App store optimization and PR for launches.

9. Cost Structure
-----------------
- One-time: MVP dev & legal for trademarks (~`DEV_ONE_OFF`).
- Recurring: hosting, OCR API credits, databases, authentication, monitoring, support, salaries/contractors.
- Sales/MarCom: ad spend, partnerships outreach, marketing content.
- Legal/compliance: privacy policy, tax compliance, trademark filing.

10. Risks & Mitigations
-----------------------
- Risk: High CAC — Mitigate: prioritize partnerships & organic channels.  
- Risk: Competitive imitation — Mitigate: focus on product-market fit, operations, and accountant/fleet features.  
- Risk: Legal/privacy issues with data monetization — Mitigate: explicit opt-in, anonymization, legal review.

11. Key Metrics (dashboard)
---------------------------
- MRR / ARR, ARPU, Paying users, Free users, Conversion %, CAC, LTV, LTV/CAC, Churn (monthly), Payback months, DAU/MAU, Retention (30/90/180 days).

12. Experiments & MVP Validation Plan
-------------------------------------
A. Landing page + email capture
  - Build one-page site explaining key benefits; collect signups; run small paid test ($1–2k) to estimate CPC and conversion.
B. Beta pilot (100–300 drivers)
  - Offer early access + discount; measure retention, feature usage, and conversion.
C. Partner pilot
  - Integrate 1 partner (insurance or tax service) and measure affiliate conversions.
D. Pricing test
  - A/B test $79/yr vs $119/yr and monthly options.

13. Legal & Compliance Pointers
-------------------------------
- Trademark clearance before committing to brand.  
- Privacy-first design for any revenue that uses user data; require explicit consent for lead sharing.  
- Ensure OCR/receipt handling complies with local data laws when storing PII or financial data.

14. Next Steps (short checklist)
-------------------------------
- [ ] Confirm final product name and run trademark searches (US & Canada).  
- [ ] Create launch landing page and signups capture.  
- [ ] Run small paid acquisition test ($1–2k).  
- [ ] Recruit 100–300 beta testers.  
- [ ] Finalize MVP scope and begin development sprints.

Appendix — Useful formulas
--------------------------
- `SOM = TAM * SOM_pct`
- `PayingUsers = ActiveUsers * Paid%`
- `Revenue = PayingUsers * ARPU`
- `AcquisitionCost = PayingUsers * CAC`
- `LTV = ARPU * GM * LIFETIME_YEARS`
- `LTV/CAC = LTV / CAC`

---

If you want I can now:
- Populate the 3-year projection with specific scenarios (conservative/base/optimistic) using numbers from earlier modeling, or
- Create a simple downloadable `.csv` projection file, or
- Add a short landing-page copy and an ad test plan to validate CAC.

Prepared: 17-Nov-2025

**Realistic Scenario Update (17-Nov-2025)**

I ran a "realistic" scenario using lean cost assumptions and reduced CAC to see how the business looks when following the recommended cost cuts and pricing changes. The model file `financial_model_canada_realistic.xlsx` was generated in the repository root. Key assumptions in this run:

- `price_standard = CAD 99/yr`, `price_pro = CAD 199/yr`
- `CAC = CAD 30` (reduced via partnerships / PLG)
- `DEV_ONE_OFF = CAD 100,000` (lean MVP)
- `OPS_ANNUAL = CAD 180,000` (reduced ops)
- `TAM = 400,000`, `SOM = 5%`, product mix `70% Pro / 30% Std`, gross margin `80%`

Key numeric outputs from the workbook (selected):

- ARPU (70/30 mix): CAD ~169 (note: this is higher than earlier because of the price uplift)
- LTV: CAD 270.4
- LTV/CAC: ~9.01 (very attractive if CAC=30 is achievable)

Scenarios (Year 1 and Year 3 highlights):

- Base (Year 1): Paying users = 1,000 → Revenue = CAD 169,000 → Net Profit Year 1 ≈ **-417,800 CAD**
- Base (Year 3): Paying users ≈ 1,690 → Revenue = CAD 285,610 → Net Profit Year 3 ≈ **-270,973 CAD**
- Optimistic (Year 3): Paying users ≈ 8,192 → Revenue = CAD 1,384,448 → Net Profit Year 3 ≈ **+413,038 CAD**

Interpretation

- The realistic cuts materially improve unit economics; LTV/CAC is high which means each paid user is profitable on unit economics. However, fixed and recurring costs still keep Year 1 (and in many cases Year 3 under base growth) negative unless growth is aggressive (Optimistic scenario) or CAC/pricing/DEV are further improved.
- Achieving the optimistic outcome requires strong growth (product-market fit plus low CAC channels) or landing higher-ARPU enterprise/fleet deals.

Recommended actions (short term)

- Prioritize fleet/enterprise pilots that yield higher ARPU and much lower CAC per seat.
- Execute referral and partnership programs immediately to push CAC down toward CAD 10–30 in practice.
- Keep the MVP scope tight to avoid creeping DEV_ONE_OFF beyond CAD 100k.
- Use this workbook to iterate: try hybrid monetization (enterprise + subscription) and add those revenue lines into the model.

Files created by this work

- `financial_model_canada_realistic.xlsx` — updated Excel model (root)
- `scripts/generate_financial_model_realistic.py` — generator used to create the file
- `scripts/inspect_realistic.py` — helper to read results
- `scripts/find_break_even.py` and `..\break_even_results.xlsx` — sweep that tested combinations to identify break-even combos
- `..\break_even_with_chart.xlsx` — charted top sweep results

If you'd like, I can now:
- Add enterprise / B2B revenue lines to the model and show combined financials, or
- Run a constrained sweep for only realistic ranges (e.g., `price_standard <= 119`, `conv <= 0.12`, `CAC >= 20`) and produce a short report, or
- Export a one‑page PDF summarizing Baseline vs Realistic vs Combined scenarios for investor sharing.

