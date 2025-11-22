Partner Integration Spec — DriveLedger
======================================

Purpose
-------
Provide a simple partner integration specification so accounting/tax partners can import DriveLedger user data and file on behalf of users.

Integration options
-------------------
1) SFTP batch import (recommended for fast integration)
   - Partners receive a daily/weekly ZIP drop containing per-user folders with CSVs and attachments.
   - File naming convention: `user_<id>_<year>/T2125_<id>_<year>.csv`, `GST_HST_<id>_<year>.csv`, `receipts/*`.
   - Delivery: Secure SFTP server with per-partner SSH key or per-partner credentials.

2) Partner API (REST) with OAuth2 (recommended for real-time integrations)
   - Authentication: OAuth2 Client Credentials for server-to-server access.
   - Endpoints (sample):
     - `POST /partners/token` — OAuth2 token endpoint (standard).
     - `GET /partners/users/{user_id}/tax-packet?year=YYYY` — Download current tax packet metadata and signed download URL.
     - `GET /partners/users/{user_id}/tax-packet/{file}` — Download specific file (CSV/PDF/ZIP).
     - `POST /partners/notifications` — Partners can POST acknowledgement after filing.

3) Webhooks
   - `POST /webhooks/partner/{partner_id}` — Notify partner of new tax-packet ready. Payload: user_id, tax_year, packet_url, checksum.

Data formats
------------
- CSV field mapping: provide `T2125` and `GST/HST` CSV columns. (See `mapping/` folder for a reference mapping table.)
- Attachments: image or PDF receipts, named `receipt_<id>_<date>.png|pdf`.

Sample SFTP upload script (partner side)
---------------------------------------
```python
import paramiko

host = 'sftp.dr iveledger.example.com'
port = 22
username = 'partner_abc'
private_key_path = '/path/to/key'

key = paramiko.RSAKey.from_private_key_file(private_key_path)
transport = paramiko.Transport((host, port))
transport.connect(username=username, pkey=key)
sftp = paramiko.SFTPClient.from_transport(transport)

local_zip = 'drivego_batch_2024.zip'
remote_path = f'/incoming/{username}/{local_zip}'
sftp.put(local_zip, remote_path)
sftp.close()
transport.close()
```

Security & Consent
------------------
- Each user must explicitly authorize the partner to access their tax packet. Use the "Authorize a representative" UI to record consent (store signed consent and timestamp).
- Use per-partner keys, enforce IP allow-lists, and require signed manifests (SHA256) for each upload.

Support & SLA
-------------
- Partners must acknowledge receipt of any batch within 24 hours via API/webhook.
- DriveLedger provides mapping samples and test SFTP endpoints for partner integration testing.

Contact & Onboarding
--------------------
- To onboard, email integrations@driveledger.example with partner name, SFTP public key, and test contact.

