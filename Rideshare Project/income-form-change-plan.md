# Income Form & Database Change Plan

_Last updated: 2025-11-21_

## Goals
- Extend the income entry form with new fields without wiping user-entered data mid-session.
- Introduce any required Prisma schema/database changes with zero downtime for the running app and no schema/client drift.
- Preserve backwards compatibility for existing income records, API payloads, and dashboard calculations.
- Capture granular gross-income and deduction elements common to Uber, Lyft, and future rideshare statements so OCR uploads remain accurate and CRA filings stay auditable.

## Terminology & Field Inventory
Source: `docs/uber lyft earning.csv`

### Gross Income Components
- **Base/Gross Fares:** “Gross Uber rides fares¹” / “Gross fares … based on time and distance.” Core revenue line.
- **Tips:** “100% of all the tips you earned.” Needed separately for income-tax vs. GST treatment.
- **Bonuses & Promotions:** Referrals, quests, “Amounts paid … by Lyft to you.” Often labelled “Promotions.”
- **Tolls:** Pass-through toll reimbursements.
- **Miscellaneous Income:** Booking fee add-ons, regulatory recovery fees, airport fees, green surcharge, split fare top-ups, Uber Eats fares, etc. Some reports list these as positives in the gross section; others omit them entirely, so we need optional labeled sublines.
- **GST/HST Collected:** Split between riders/passengers and platform/bonuses in both reports.
- **Mileage Metrics:** Uber lists “On Trip Mileage” vs. “Online Mileage”; Lyft lists “Ride Kilometres.” Must store raw number + unit.

### Deductions & Adjustments
- **Service / Platform Fee:** Uber “Service Fee,” Lyft “Lyft & 3rd party fees.” Always treated as deductions.
- **Other Fees:** Uber summarizes “Other amounts (Booking, Regulatory, Airport, Green and Split Fare Fees).” We must individually track each fee category so totals reconcile.
- **Fee Discount / Adjustments:** Uber shows “Fee Discount” as positive for calculation; store as signed value to avoid confusion.
- **GST/HST Paid:** “GST/HST you paid to Uber” / “GST/HST paid on Lyft and 3rd party fees.” Required for ITC claims.
- **Total Deductions & Net Income:** Provided in reports but should be derived to keep calculations transparent.

### Generic Requirements for Other Platforms
1. **Extensible line items:** Support arbitrary labeled amounts (category, description, amount, sign) so DoorDash, Skip, etc., can map their unique terms without schema churn.
2. **Unit metadata:** Store measurement unit for distance/hours (km vs. mi) plus raw decimal value.
3. **Currency normalization:** Importers must strip `CA$`, commas, and OCR artifacts; values stored as numeric CAD.
4. **Period metadata:** Start/end dates (weekly, quarterly, annual) to associate uploads with tax periods.
5. **Document provenance:** Persist platform name, reporting period label (e.g., “Annual 2022”), and file type to aid audits.

## Constraints & Safeguards
1. **Single Source of Truth:** `.env` and `.env.development.local` must point to the exact same database before migrating to avoid client/DB mismatches (this caused the previous outage when `pricePerLiter` landed).
2. **Controlled Dev Server:** Stop `npm run dev:https` before executing `prisma migrate dev` or `prisma generate`. Restart immediately afterward so every worker reloads the new Prisma client.
3. **Backups:** Capture a `pg_dump` (or managed snapshot) right before applying each migration. Keep the dump path in the deployment log for fast rollback.
4. **Nullable First:** New columns/tables enter as nullable with defaults so existing reads/writes keep functioning while UI/APIs catch up.
5. **Feature-flag UI Work:** Ship schema/API support before exposing new inputs. Use local flags or conditional rendering so partially built UI never reaches users.

## Step-by-Step Plan

### Phase 1 – Requirements & UX Spec
- Finalize the list of new income fields, their validation rules, and whether they impact summaries (`/income`, `/dashboard`).
- Document OCR expectations (e.g., which tokens map to the new fields) so parsing helpers can be updated once.

### Phase 2 – Database Preparation
1. Update `prisma/schema.prisma` with the new nullable columns (or tables) plus defaults that wont break existing logic.
2. Run:
   ```powershell
   cd "C:\Users\nasee\Web and Software Development Course\Rideshare Project\drivego"
   # ensure dev server is stopped first
   npx prisma migrate dev --name add_income_fields
   npx prisma generate
   ```
3. If production uses `prisma migrate deploy`, create the migration locally (`--create-only`) and run deploy on the server after confirming backups.
4. Restart the dev server (`npm run dev:https`) only after the new Prisma client is generated.

### Phase 3 – API Compatibility Layer
- Update `app/api/income/route.ts` to accept the new payload shape while defaulting missing values (for older clients).
- Guard all aggregations to treat `null` as `0` so summaries keep working during rollouts.
- Optionally add a schema validator (Zod/Yup) to reject malformed requests early with clear errors.

### Phase 4 – UI & OCR Updates
- Extend the `formData` state, validation, and `handleSubmit` payload inside `app/income/add/page.tsx`.
- Update OCR helpers so imported reports populate the new fields; add fixtures/tests if possible.
- Gate the new inputs with a local feature flag until QA confirms end-to-end flows.

### Phase 5 – Verification & Rollout
- Use `npx prisma studio` or SQL queries to verify the new columns store data correctly.
- Run `npm run lint` (and any available tests) before committing.
- Perform manual E2E checks in both simple and detailed modes, ensuring `/income` and dashboard summaries remain stable.
- When deploying, apply the DB migration first, confirm logs stay clean, then enable the UI flag.

## Prompt for Implementers
> **Prompt:** “Follow `docs/income-form-change-plan.md` to add the new income fields. Do not start coding until youve confirmed the target database URL, created a fresh backup, and scheduled Prisma migrations while the dev server is offline. Treat the UI changes as feature-flagged until schema + API updates are deployed. Document every step (backup path, migration name, verification results) in the PR description.”

Include this exact prompt in any ticket/PR so contributors know the required sequence.
