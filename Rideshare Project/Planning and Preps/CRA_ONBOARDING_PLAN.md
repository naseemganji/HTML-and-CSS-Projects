CRA Onboarding & Direct-Filing Roadmap
=====================================

Purpose
-------
This document is a practical, phased plan to evolve DriveGo into a direct‑filing tax product in Canada (TurboTax / Wealthsimple style). It covers MVP options, partner strategies, CRA electronic filing programs, technical architecture, compliance steps, and a recommended timeline and task list.

Phase Summary
-------------
- Phase A — Exports & Partner Integrations (fast, low risk)
- Phase B — Partner Pilots, Consent & Identity (medium-term)
- Phase C — CRA Direct Electronic Filing (longer-term, high automation)

Phase A — Export Templates & Partner Integration (4–8 weeks)
-----------------------------------------------------------
Goal: Deliver immediate value and enable filing via accountants/partners without CRA certification.

Deliverables
- T2125 export: CSV mapping + prefilled PDF per tax year.
- GST/HST export: per‑period CSV worksheet and reconciliation PDF.
- ZIP package option: CSV + receipts (images/PDF) for accountants.
- Partner API + SFTP exporter: OAuth2 client credentials, JSON/CSV schema, sample SFTP drop script.
- "Authorize a representative" UI for user consent (signed consent + audit log).

Technical tasks
- Map internal transaction model → T2125 and GST/HST fields (document mapping table).
- Implement CSV generator and PDF tax packet renderer.
- Build SFTP batch exporter and a simple OAuth2 server for partner access.
- Add webhook notifications for partners.

Risks & notes
- Low compliance burden; partners perform actual filing.
- Fastest to ship; good for pilots and revenue.

Phase B — Partner Pilots, Consent, and Identity (2–4 months)
------------------------------------------------------------
Goal: Onboard accountants and tax firms to automate filing on behalf of users and validate product-market fit for direct filing.

Deliverables
- Partner onboarding kit and integration spec (SFTP + API examples).
- Account-level consent & revocation flows.
- KYC / identity verification (optional at this stage for representative access).
- SLA and partner agreements.

Technical tasks
- Harden SFTP/API (rate limits, logging, quotas, per-partner keys).
- Implement consent tokens and audit logs (who filed what, when).
- Pilot with 1–3 accounting partners; iterate mapping and file formats.

Phase C — CRA Direct Electronic Filing (3–9+ months)
---------------------------------------------------
Goal: Become an authorized electronic filer and submit returns directly to CRA (EFILE/NETFILE/GST/EDI) for end users.

High-level steps
1. Regulatory research & pre-qualification
   - Identify which CRA programs you need: EFILE (for tax preparers), NETFILE (if consumer-level), GST/HST electronic filing options.
   - Contact CRA or review developer/program documentation for registration requirements.

2. Legal & organizational prep
   - Prepare company identity docs, responsible officer identification, and legal agreements.
   - Draft T&Cs for filing services and liability disclaimers; consult a lawyer.

3. Security & controls
   - Full security program: TLS, encryption at rest, logging, role-based access control, key management.
   - Pen tests, vulnerability remediation, PIPEDA/privacy impact assessment.

4. Implementation
   - Implement required file formats (CRA XML/EDI specs) or partner‑approved XML.
   - Build signed/encrypted transmission pipeline (SFTP/HTTPS as required by CRA).
   - Implement submission tracking and response handling.

5. Sandbox & certification
   - Obtain CRA sandbox/test credentials and run certified test transmissions.
   - Iterate until CRA certification is granted.

6. Production roll out
   - Plan phased launch (pilot users, limited geographies, enterprise first), monitoring and support.

Practical considerations & timeline
- CRA approvals and testing commonly take weeks-to-months and require iterative fixes.
- Expect significant legal, security, and operational overhead; plan budget for audits and pen tests.
- Liability: you will need clear legal frameworks — who is responsible for filing accuracy? Consider insurance.

Technical Architecture (recommended)
------------------------------------
- Frontend: Guided filing UI, tax questionnaire, document upload, representative consent screens.
- Backend: Data model → Tax form entities, export engine (CSV/PDF/XML), partner API, transmission queue.
- Services: OAuth2 provider for partners, SFTP/FTPS client for batch exchange, document storage with retention (6+ years).
- Security: Vault-managed secrets, encryption in transit & at rest, audit logging, role-based access control.
- Testing: Unit tests for mapping, integration tests with sandbox, CI/CD gating for deployments.

Data mapping & outputs (critical)
---------------------------------
- T2125 mapping: gross receipts, vehicle mileage totals by vehicle and by business use, vehicle expenses, CCA, supplies, other expenses.
- GST/HST mapping: taxable sales (by rate), ITCs by category, adjustments, reporting period identifiers.
- Attachments: keep receipts and supporting documents linked and downloadable; include checksums in export manifests.

Compliance & Legal Checklist
----------------------------
- Privacy: PIPEDA compliance, documented data retention policy, user consent storage.
- Security: Pen tests, vulnerability management, encryption, access controls.
- Records: retention plan (CRA typically requires 6 years), secure backups and archival.
- Contracts: Partner agreements, liability clauses, service-level expectations.
- Insurance: cyber and professional indemnity as needed.

Pilot & Go-to-Market Recommendations
------------------------------------
- Focus initial pilots on B2B enterprise/fleet customers: higher ARPU, easier CAC, and fewer unique individual filing issues.
- Sign 1–3 accounting partners for pilot; use their CRA EFILE credentials to file on users’ behalf during pilot.
- Offer a paid ‘file for me’ option via partner-assisted filing while you prepare direct CRA integration.

Estimated Resources & Budget
----------------------------
- Phase A (exports + partner API): 2–3 devs, 4–8 weeks, cost ~CAD 20k–60k (depending on staffing model).
- Phase B (partner pilots & consent): additional 1–2 months; bizdev cost for partner outreach.
- Phase C (CRA integration): 3–9+ months, add security/compliance budget (pen tests, legal), total project cost could reach CAD 80k–250k depending on scope.

Immediate next steps (pick one)
-------------------------------
- A: Implement T2125 + GST/HST export templates and sample PDF tax packet (fast MVP).  
- B: Scaffold Partner API (OAuth2) + SFTP exporter and partner integration spec.  
- C: Produce CRA onboarding checklist & application plan with contact points and required documentation.  
- D: Draft representative consent & identity verification UI text and flows.

If you want I can start on any of these now — tell me which option (A/B/C/D) to begin with and provide any specifics (tax year(s), whether to include receipts in ZIP batch, target partner names for B, or whether you want a detailed CRA checklist for C). 

