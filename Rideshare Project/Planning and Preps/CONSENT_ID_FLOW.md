Consent & Identity Verification — DriveLedger
=============================================

Purpose
-------
Define the required user consent and identity verification flows for representative filing and filing assistance.

Goals
- Ensure explicit user consent before any third party (partner or DriveLedger) can submit filings on their behalf.
- Capture minimal identity information required for CRA or partner requirements.
- Provide revocable consent and audit trails.

Flow: Authorize a Representative (user -> partner)
-------------------------------------------------
1. User chooses "Authorize a representative" in Settings -> Tax & Filing.
2. Present a clear consent screen that includes:
   - Representative name (partner name)
   - Scope: "Access to tax packet for tax years: 2023, 2024" or specific scopes (view/download, file on my behalf)
   - Duration: e.g., 12 months or until revoked
   - Rights: how to revoke, how data is used
   - Legal acknowledgement checkbox: "I authorize <partner> to access my DriveGo tax packet and submit filings on my behalf."
3. User provides e-signature (typed full name) and clicks Confirm.
4. System stores consent record: user_id, partner_id, scopes, timestamp, IP, signature text, version of consent text.
5. Notify partner via webhook that access granted; partner can now request the user's tax packet.

Revocation
----------
- User can revoke a representative at any time in the same settings area.
- On revocation: record timestamp and notify partner via webhook; partner must stop filing for that user. Maintain audit trail of previous consents.

Identity Verification (KYC)
---------------------------
When required (partner filing or CRA onboarding), perform identity verification for the user and/or representative:
- Level 1 (light): email + phone verification (suitable for pilot)
- Level 2 (strong): government ID scan (driver's license, passport) + selfie (liveness) and automated document verification via providers (Onfido, Veriff)

Suggested implementation
- Use third-party provider (Onfido, Veriff) for Level 2 KYC; store verification status (PASS/FAIL/PENDING) in user record.
- For partners, require company registration docs, CRA preparer number if available, and contact details.

API endpoints (sample)
- `POST /api/v1/users/{id}/consents` — create consent (body: partner_id, scopes, duration)
- `GET /api/v1/users/{id}/consents` — list consents and status
- `POST /api/v1/users/{id}/kyc` — start KYC flow (returns provider URL)
- `GET /api/v1/users/{id}/kyc` — check KYC status

Audit & retention
- Keep all consents and revocations retained for 6+ years to meet CRA audit requirements.
- Log all partner downloads and submissions with timestamps and file checksums.

Privacy & legal
- Provide a clear privacy policy with details on representative access.
- Minimize PII stored: avoid storing SIN unless strictly necessary; encrypt PII at rest.

