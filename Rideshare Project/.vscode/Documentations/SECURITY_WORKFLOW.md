# Security & Vulnerability Assessment Workflow

**Project**: GigAssist - Rideshare Expense Tracking  
**Version**: 1.0.0  
**Last Updated**: December 8, 2025  
**Status**: 🔒 Active Security Program

---

## Table of Contents

1. [Overview](#overview)
2. [Security Implementation Status](#security-implementation-status)
3. [Daily Security Checklist](#daily-security-checklist)
4. [Weekly Security Tasks](#weekly-security-tasks)
5. [Monthly Security Review](#monthly-security-review)
6. [Vulnerability Response Procedure](#vulnerability-response-procedure)
7. [Security Testing Procedures](#security-testing-procedures)
8. [Compliance Requirements](#compliance-requirements)
9. [Security Monitoring](#security-monitoring)
10. [Incident Response Plan](#incident-response-plan)

---

## Overview

This document outlines the comprehensive security workflow for the GigAssist application. It provides guidelines for ongoing security maintenance, vulnerability assessment, and incident response.

### Security Goals
- ✅ **Zero Critical Vulnerabilities** in production
- ✅ **PCI DSS Compliance** for payment processing
- ✅ **GDPR/PIPEDA Compliance** for user data
- ✅ **OWASP Top 10 Protection** against common attacks
- ✅ **99.9% Uptime** with secure infrastructure

### Security Responsibilities

| Role | Responsibilities |
|------|------------------|
| **Development Team** | Code security, dependency updates, security testing |
| **DevOps Team** | Infrastructure security, monitoring, incident response |
| **Security Officer** | Policy enforcement, audits, compliance |

---

## Security Implementation Status

### ✅ Implemented Security Measures

#### 1. **Security Headers** (Completed: Dec 8, 2025)
**Location**: `next.config.ts`

Implemented headers:
- ✅ `X-Frame-Options: DENY` - Prevents clickjacking
- ✅ `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `X-XSS-Protection: 1; mode=block`
- ✅ `Permissions-Policy` - Restricts camera, geolocation, microphone
- ✅ `Strict-Transport-Security` - Forces HTTPS (1 year)
- ✅ `Content-Security-Policy` - Prevents XSS, restricts sources

**Verification**:
```bash
# Test security headers
curl -I https://GigAssist.app | grep -i "x-frame-options\|strict-transport\|content-security"
```

#### 2. **Input Validation** (Completed: Dec 8, 2025)
**Location**: `lib/validations.ts`

Implemented schemas:
- ✅ User registration with password complexity
- ✅ Login validation
- ✅ Expense validation (amount, category, date)
- ✅ Income validation (amount, source, date)
- ✅ Trip validation (distance, purpose, location)
- ✅ Vehicle validation (VIN, year, make/model)
- ✅ Asset/depreciation validation
- ✅ File upload validation (type, size limits)

**Usage Example**:
```typescript
import { validateRequest, expenseSchema } from '@/lib/validations'

const validatedData = validateRequest(expenseSchema, requestBody)
```

#### 3. **Rate Limiting & Account Lockout** (Completed: Dec 8, 2025)
**Location**: `lib/rate-limit-enhanced.ts`

Implemented features:
- ✅ General API rate limiting (100 req/min)
- ✅ Authentication rate limiting (5 attempts/15min)
- ✅ Registration rate limiting (3 attempts/hour)
- ✅ Account lockout after 5 failed logins (30-min lockout)
- ✅ Export/report rate limiting (10-20 req/hour)

**Usage Example**:
```typescript
import { rateLimit, checkAccountLockout } from '@/lib/rate-limit-enhanced'

const { allowed, remaining } = rateLimit(clientIp, 'auth')
if (!allowed) {
  return createRateLimitResponse(resetTime)
}
```

#### 4. **Authentication & Session Security**
**Location**: `lib/auth.ts`

Security features:
- ✅ bcrypt password hashing (12 rounds)
- ✅ NextAuth.js credential provider
- ✅ httpOnly cookies (prevents XSS theft)
- ✅ JWT session tokens
- ✅ Session expiration configured
- ✅ CSRF protection (NextAuth built-in)

#### 5. **Authorization & Access Control**
**Location**: `lib/rbac.ts`, Phase 9.4-9.6

Security features:
- ✅ Role-based access control (RBAC)
- ✅ Multi-tenant isolation
- ✅ Resource ownership verification
- ✅ Admin privilege separation
- ✅ Sub-user read-only restrictions

#### 6. **Database Security**
**Location**: `lib/prisma.ts`, `prisma/schema.prisma`

Security features:
- ✅ Prisma ORM (parameterized queries)
- ✅ SQL injection prevention
- ✅ Type-safe database operations
- ✅ Connection pooling
- ✅ Environment variable credentials

#### 7. **Payment Security (Stripe)**
**Location**: `lib/stripe.ts`, `app/api/stripe/webhooks/route.ts`

Security features:
- ✅ No credit card storage (PCI DSS compliant)
- ✅ Stripe hosted checkout
- ✅ Webhook signature verification
- ✅ Separate test/production keys
- ✅ Environment variable storage

### ⚠️ Pending Security Enhancements

#### 1. **IDOR Vulnerability Testing** (Priority: HIGH)
- [ ] Test all API endpoints for unauthorized access
- [ ] Verify ownership checks on expenses, income, trips
- [ ] Test cross-tenant data access prevention

#### 2. **Session Management Enhancements** (Priority: MEDIUM)
- [ ] Implement session invalidation on password change
- [ ] Add "Remember Me" functionality
- [ ] Track active sessions per user
- [ ] Implement concurrent session limits

#### 3. **Password Security** (Priority: MEDIUM)
- [ ] Implement password reset flow
- [ ] Add password change functionality
- [ ] Enforce password expiration (90 days)
- [ ] Check against common password lists

#### 4. **Two-Factor Authentication** (Priority: LOW)
- [ ] Implement TOTP-based 2FA
- [ ] Add backup codes
- [ ] QR code generation for authenticator apps

#### 5. **Audit Logging** (Priority: MEDIUM)
- [ ] Log all authentication events
- [ ] Log sensitive operations (exports, deletions)
- [ ] Log admin actions
- [ ] Implement log retention policy

#### 6. **Cloud Receipt Storage** (Priority: LOW)
- [ ] Migrate from Base64 to S3/R2
- [ ] Generate signed URLs
- [ ] Implement virus scanning
- [ ] Add image optimization

---

## Daily Security Checklist

### For Development Team (5 minutes/day)

```bash
# 1. Check for new security advisories
npm audit

# 2. Review recent commits for security issues
git log --oneline -10

# 3. Check error logs for suspicious activity
tail -f logs/error.log | grep -i "unauthorized\|forbidden\|injection"

# 4. Verify security headers are active (production)
curl -I https://GigAssist.app | grep -i "x-frame-options"
```

### Automated Daily Checks (Cron Job)

```bash
#!/bin/bash
# Run daily at 2 AM
0 2 * * * /app/scripts/daily-security-check.sh

# Contents of daily-security-check.sh:
npm audit --production --audit-level=moderate
npx tsc --noEmit
grep -r "TODO.*SECURITY" --exclude-dir=node_modules .
grep -r "console.log" --exclude-dir=node_modules app/ lib/
```

---

## Weekly Security Tasks

### Monday: Dependency Updates (30 minutes)

```bash
# 1. Check for outdated packages
npm outdated

# 2. Update dependencies (test first!)
npm update

# 3. Run tests after updates
npm test

# 4. Check for breaking changes
npm audit
npx tsc --noEmit

# 5. Commit updates
git add package.json package-lock.json
git commit -m "chore: update dependencies (security)"
git push origin main
```

### Wednesday: Code Security Review (1 hour)

Review checklist:
- [ ] New API routes have authentication checks
- [ ] All user inputs are validated with Zod
- [ ] Database queries use Prisma (no raw SQL)
- [ ] No sensitive data in logs
- [ ] No hardcoded secrets
- [ ] Rate limiting applied to new endpoints
- [ ] Error messages don't leak info

```bash
# Search for common security issues
grep -r "eval\|dangerouslySetInnerHTML" --exclude-dir=node_modules .
grep -r "password.*=.*['\"]" --exclude-dir=node_modules .
grep -r "api[_-]?key.*=.*['\"]" --exclude-dir=node_modules .
```

### Friday: Security Monitoring Review (30 minutes)

Review metrics:
- [ ] Failed login attempts (check for brute force)
- [ ] Rate limit violations (check for abuse)
- [ ] 4xx/5xx error rates (check for attacks)
- [ ] Database query performance (check for injection attempts)
- [ ] Unusual traffic patterns

```sql
-- Check failed login attempts (last 7 days)
SELECT 
  email, 
  COUNT(*) as failed_attempts,
  MAX(created_at) as last_attempt
FROM audit_logs
WHERE event_type = 'login_failed'
  AND created_at > NOW() - INTERVAL '7 days'
GROUP BY email
HAVING COUNT(*) > 5
ORDER BY failed_attempts DESC;
```

---

## Monthly Security Review

### Week 1: Comprehensive Audit (4 hours)

#### 1. Run Full Security Scan
```bash
# npm audit with all severity levels
npm audit --audit-level=low

# TypeScript strict mode check
npx tsc --noEmit --strict

# Check for exposed secrets
npm install -g trufflehog
trufflehog --regex --entropy=False .

# Scan for vulnerabilities
npx snyk test
```

#### 2. Review Authentication & Authorization
- [ ] Test all API endpoints for auth requirements
- [ ] Verify RBAC permissions are correct
- [ ] Test multi-tenant isolation
- [ ] Review session expiration settings
- [ ] Check password complexity enforcement

#### 3. Review Third-Party Integrations
- [ ] Stripe API key rotation (if needed)
- [ ] Verify webhook signatures
- [ ] Review API rate limits
- [ ] Check for deprecated APIs

### Week 2: Penetration Testing (4 hours)

#### Test Scenarios:

**1. Authentication Bypass**
```bash
# Try to access protected routes without auth
curl http://localhost:3000/api/expenses
# Expected: 401 Unauthorized

# Try default credentials
curl -X POST http://localhost:3000/api/auth/signin \
  -d '{"email":"admin@GigAssist.app","password":"admin123"}'
# Expected: Invalid credentials
```

**2. SQL Injection**
```bash
# Try injection in login
curl -X POST http://localhost:3000/api/auth/signin \
  -d '{"email":"admin@GigAssist.app' OR '1'='1","password":"password"}'
# Expected: Validation error or failed login

# Try injection in expense search
curl "http://localhost:3000/api/expenses?search=' OR '1'='1"
# Expected: No results or error
```

**3. XSS Attack**
```bash
# Create expense with XSS payload
curl -X POST http://localhost:3000/api/expenses \
  -H "Cookie: session_token=..." \
  -d '{"description":"<script>alert('XSS')</script>","amount":100}'

# View expense in browser
# Expected: Script tag escaped, no alert shown
```

**4. IDOR (Insecure Direct Object Reference)**
```bash
# User A creates expense (note ID: 123)
# User B tries to access:
curl http://localhost:3000/api/expenses/123 \
  -H "Cookie: session_token_user_b=..."
# Expected: 403 Forbidden or 404 Not Found
```

**5. CSRF Attack**
```html
<!-- Attacker creates malicious page -->
<form action="https://GigAssist.app/api/expenses" method="POST">
  <input name="amount" value="9999" />
  <input name="description" value="Hacked!" />
</form>
<script>document.forms[0].submit()</script>
<!-- Expected: CSRF token missing, request rejected -->
```

**6. Rate Limit Bypass**
```bash
# Try to brute force login
for i in {1..20}; do
  curl -X POST http://localhost:3000/api/auth/signin \
    -d '{"email":"user@example.com","password":"wrong'$i'"}'
done
# Expected: Account locked after 5 attempts
```

### Week 3: Documentation Update (2 hours)
- [ ] Update security policies
- [ ] Document new vulnerabilities found
- [ ] Update incident response plan
- [ ] Review access control lists
- [ ] Update security training materials

### Week 4: Security Training (1 hour)
- [ ] Review OWASP Top 10 with team
- [ ] Discuss recent security incidents (industry-wide)
- [ ] Share security best practices
- [ ] Quiz team on security knowledge

---

## Vulnerability Response Procedure

### Severity Levels

| Severity | Description | Response Time | Examples |
|----------|-------------|---------------|----------|
| **🔴 Critical** | System compromised, data breach, payment fraud | **< 1 hour** | SQL injection, authentication bypass, RCE |
| **🟠 High** | Potential data exposure, privilege escalation | **< 24 hours** | IDOR, XSS, CSRF, insecure deserialization |
| **🟡 Medium** | Denial of service, information disclosure | **< 7 days** | Rate limit bypass, verbose errors, session fixation |
| **🟢 Low** | Minor security improvements | **< 30 days** | Missing headers, weak password policy, outdated libraries |

### Response Workflow

#### 1. Detection (Automated or Manual)
```bash
# Automated: npm audit alerts
# Manual: Security researcher report
# Monitoring: Error spike in logs
```

#### 2. Triage (Within 1 hour for Critical)
- [ ] Confirm vulnerability exists
- [ ] Assess severity level
- [ ] Identify affected systems
- [ ] Determine if actively exploited
- [ ] Assign owner

#### 3. Containment (Immediate for Critical)
- [ ] Disable affected feature (if needed)
- [ ] Revoke compromised credentials
- [ ] Block malicious IPs
- [ ] Enable additional logging
- [ ] Notify stakeholders

#### 4. Investigation (1-4 hours)
- [ ] Review audit logs
- [ ] Check for data exfiltration
- [ ] Identify root cause
- [ ] Document timeline
- [ ] Assess impact (users, data, financial)

#### 5. Remediation (Per severity SLA)
- [ ] Develop fix
- [ ] Test fix in staging
- [ ] Deploy to production
- [ ] Verify fix works
- [ ] Update dependencies

#### 6. Post-Incident (Within 48 hours)
- [ ] Write incident report
- [ ] Notify affected users (if required)
- [ ] Update security policies
- [ ] Implement preventive measures
- [ ] Conduct lessons learned meeting

### Example Incident Report Template

```markdown
# Security Incident Report

**Incident ID**: SEC-2025-001
**Date Detected**: 2025-12-08 14:30 UTC
**Severity**: High
**Status**: Resolved

## Summary
Brief description of the incident.

## Timeline
- 14:30 - Vulnerability detected via npm audit
- 14:45 - Triage completed, severity confirmed as HIGH
- 15:00 - Containment: Disabled affected API endpoint
- 15:30 - Fix developed and tested
- 16:00 - Fix deployed to production
- 16:15 - Verification completed

## Impact
- Users affected: 0 (caught before exploitation)
- Data compromised: None
- Financial impact: $0

## Root Cause
Outdated dependency (package-name@1.2.3) with known vulnerability.

## Resolution
- Updated package to patched version (1.2.4)
- Added automated dependency scanning to CI/CD
- Implemented stricter version pinning

## Preventive Measures
- Weekly dependency update schedule
- Automated npm audit in GitHub Actions
- Security advisory subscriptions

## Lessons Learned
- Need faster detection of new advisories
- Should have automated update process
```

---

## Security Testing Procedures

### Automated Testing (CI/CD Pipeline)

```yaml
# .github/workflows/security.yml
name: Security Scan

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run npm audit
        run: npm audit --audit-level=moderate
      
      - name: Run TypeScript check
        run: npx tsc --noEmit
      
      - name: Scan for secrets
        uses: trufflesecurity/trufflehog@main
        with:
          path: ./
      
      - name: Run Snyk security scan
        run: npx snyk test
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

### Manual Testing Checklist

#### Authentication Testing
- [ ] Try to access protected routes without login
- [ ] Test password complexity requirements
- [ ] Verify account lockout after failed attempts
- [ ] Test session expiration
- [ ] Verify logout clears session
- [ ] Test "Remember Me" functionality (if implemented)

#### Authorization Testing
- [ ] User A cannot access User B's data (IDOR)
- [ ] Sub-users cannot access admin functions
- [ ] Read-only users cannot modify data
- [ ] Verify tenant isolation (cross-tenant access)

#### Input Validation Testing
- [ ] Submit invalid dates (e.g., "2025-13-45")
- [ ] Submit negative amounts
- [ ] Submit extremely large amounts (> 1 million)
- [ ] Submit long strings (> max length)
- [ ] Submit special characters in all fields
- [ ] Upload invalid file types
- [ ] Upload files > 5MB

#### Injection Testing
- [ ] SQL injection in all input fields
- [ ] XSS payloads in text fields
- [ ] Command injection in file uploads
- [ ] NoSQL injection (if using MongoDB)

#### Rate Limiting Testing
- [ ] Submit 100+ API requests in 1 minute
- [ ] Attempt 10+ failed logins
- [ ] Try to register 5+ accounts in 1 hour
- [ ] Export data 20+ times in 1 hour

---

## Compliance Requirements

### PCI DSS (Payment Card Industry)

**Stripe handles all card data**, so GigAssist is PCI DSS compliant by:
- ✅ Never storing credit card numbers
- ✅ Using Stripe hosted checkout
- ✅ HTTPS for all communications
- ✅ Webhook signature verification
- ✅ Secure API key storage

**Required:**
- [ ] Annual PCI compliance questionnaire (SAQ A)
- [ ] Maintain SSL certificate
- [ ] Regular security scans

### GDPR/PIPEDA (Data Privacy)

**User data handling:**
- ✅ Collect only necessary data
- ✅ Store data securely (encrypted at rest)
- ✅ Allow user data export
- ✅ Implement data deletion

**Required:**
- [ ] Privacy policy (clear, concise)
- [ ] Terms of service
- [ ] Cookie consent banner
- [ ] Data processing agreement (DPA)
- [ ] User consent for data collection
- [ ] Right to be forgotten (data deletion)

### Canadian Tax Regulations

**Record retention:**
- ✅ Store expense records
- ✅ Store receipt images
- ✅ Generate tax reports

**Required:**
- [ ] Keep records for 6 years (CRA requirement)
- [ ] Provide audit trail
- [ ] Support data export for CRA audits

---

## Security Monitoring

### Metrics to Track

#### 1. Authentication Metrics
- Failed login attempts per day
- Account lockouts per day
- Password reset requests per day
- New user registrations per day

#### 2. API Metrics
- Rate limit violations per hour
- 4xx error rate (%)
- 5xx error rate (%)
- Average response time (ms)

#### 3. Security Metrics
- npm audit vulnerabilities
- Open security issues
- Time to patch vulnerabilities
- Security incidents per month

### Monitoring Tools

```bash
# Install monitoring stack
npm install @sentry/nextjs
npm install prom-client  # Prometheus metrics
npm install winston      # Logging
```

**Sentry Integration** (Error Tracking):
```typescript
// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  beforeSend(event, hint) {
    // Filter sensitive data
    if (event.request) {
      delete event.request.cookies
      delete event.request.headers['authorization']
    }
    return event
  }
})
```

### Alerting Rules

**Critical Alerts (PagerDuty/Slack)**:
- 🚨 npm audit finds critical vulnerability
- 🚨 5xx error rate > 5%
- 🚨 Database connection failures
- 🚨 Payment processing failures
- 🚨 Unusual spike in failed logins (> 100/min)

**Warning Alerts (Email)**:
- ⚠️ npm audit finds high severity vulnerability
- ⚠️ 5xx error rate > 1%
- ⚠️ Rate limit violations > 50/hour
- ⚠️ Disk space > 80%
- ⚠️ Memory usage > 80%

---

## Incident Response Plan

### Team Contacts

| Role | Name | Email | Phone | Backup |
|------|------|-------|-------|--------|
| **Security Lead** | TBD | security@GigAssist.app | +1-XXX-XXX-XXXX | TBD |
| **DevOps Lead** | TBD | devops@GigAssist.app | +1-XXX-XXX-XXXX | TBD |
| **CEO/CTO** | TBD | cto@GigAssist.app | +1-XXX-XXX-XXXX | N/A |

### Incident Response Steps

#### Phase 1: Detection & Triage (< 1 hour)
1. **Receive alert** (automated or manual report)
2. **Acknowledge incident** (log in incident tracker)
3. **Assess severity** (Critical/High/Medium/Low)
4. **Notify team** (Slack channel #security-incidents)
5. **Begin investigation** (gather logs, reproduce issue)

#### Phase 2: Containment (< 2 hours for Critical)
1. **Isolate affected systems** (disable features if needed)
2. **Revoke compromised credentials**
3. **Block malicious traffic** (IP bans, rate limits)
4. **Enable enhanced logging**
5. **Preserve evidence** (save logs, database snapshots)

#### Phase 3: Eradication (< 24 hours)
1. **Develop fix** (patch vulnerability)
2. **Test fix** (staging environment)
3. **Review code** (security team approval)
4. **Scan for persistence** (backdoors, compromised accounts)

#### Phase 4: Recovery (< 48 hours)
1. **Deploy fix to production**
2. **Verify fix works** (penetration test)
3. **Monitor for recurrence** (enhanced logging)
4. **Restore normal operations**
5. **Notify users** (if data breach occurred)

#### Phase 5: Post-Incident (< 7 days)
1. **Write incident report**
2. **Conduct lessons learned** (team meeting)
3. **Update security policies**
4. **Implement preventive measures**
5. **Train team** (share knowledge)

### Data Breach Notification

**Legal requirements** (GDPR/PIPEDA):
- Notify authorities within **72 hours** of discovery
- Notify affected users without undue delay
- Document breach (what, when, how, impact)

**Notification template**:
```
Subject: Important Security Notice - GigAssist Account

Dear [Name],

We are writing to inform you of a security incident that may have
affected your GigAssist account.

What happened: [Brief description]
When: [Date range]
What data: [Types of data affected]
What we're doing: [Remediation steps]
What you should do: [User actions]

We take security seriously and sincerely apologize for any concern
this may cause.

For questions, contact: security@GigAssist.app

Sincerely,
GigAssist Security Team
```

---

## Summary & Next Steps

### Current Security Posture: ✅ STRONG

**Implemented (Dec 8, 2025)**:
- ✅ Security headers
- ✅ Input validation (Zod schemas)
- ✅ Rate limiting & account lockout
- ✅ Authentication (bcrypt, NextAuth)
- ✅ Authorization (RBAC, multi-tenant)
- ✅ Database security (Prisma)
- ✅ Payment security (Stripe)

### Immediate Action Items (This Week)

1. **Apply rate limiting to API routes** (2 hours)
   - Update login endpoint
   - Update register endpoint
   - Add to existing routes

2. **Test for IDOR vulnerabilities** (4 hours)
   - Test all expense/income/trip endpoints
   - Verify ownership checks
   - Document findings

3. **Deploy security headers** (1 hour)
   - Verify in production
   - Test with SecurityHeaders.com
   - Fix any CSP issues

### Short-term Goals (This Month)

4. **Implement session management enhancements** (1 day)
5. **Add audit logging** (2 days)
6. **Conduct penetration testing** (1 week)
7. **Set up monitoring** (Sentry, alerts) (2 days)

### Long-term Goals (Next Quarter)

8. **Implement 2FA** (1 week)
9. **Migrate receipts to cloud storage** (2 weeks)
10. **Achieve SOC 2 compliance** (3 months)

---

**Document Owner**: Security Team  
**Review Schedule**: Monthly  
**Next Review**: January 8, 2026

---

*For security concerns or to report vulnerabilities, contact: security@GigAssist.app*
