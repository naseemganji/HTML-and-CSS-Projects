# Partner API Documentation

## Overview
The GigAssist Partner API allows authorized partners to access user data (with consent) for tax preparation, accounting, and integration purposes.

## Authentication

### OAuth 2.0 Client Credentials Flow

**Endpoint:** `POST /api/partners/token`

**Request:**
```json
{
  "grant_type": "client_credentials",
  "client_id": "your_client_id",
  "client_secret": "your_client_secret"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

**Usage:**
Include the access token in all API requests:
```
Authorization: Bearer {access_token}
```

## Rate Limiting
- **Rate Limit:** 100 requests per minute per client
- **Headers Returned:**
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Requests remaining
  - `X-RateLimit-Reset`: Timestamp when limit resets

## Endpoints

### 1. Get User Tax Packet

Retrieve comprehensive tax data for a user.

**Endpoint:** `GET /api/partners/users/{userId}/tax-packet`

**Query Parameters:**
- `year` (optional): Tax year (default: current year)

**Response:**
```json
{
  "user": {
    "id": 1,
    "email": "driver@example.com",
    "name": "John Doe"
  },
  "tax_year": 2025,
  "summary": {
    "total_mileage": 15420.5,
    "total_income": 45250.00,
    "total_expenses": 8420.75,
    "total_deductible_expenses": 7890.50,
    "mileage_deduction": 10331.74,
    "mileage_rate": 0.67
  },
  "trips": [...],
  "expenses": [...],
  "incomes": [...],
  "generated_at": "2025-12-01T10:30:00Z"
}
```

### 2. Register Webhook

Subscribe to events for real-time notifications.

**Endpoint:** `POST /api/partners/webhooks`

**Request:**
```json
{
  "url": "https://your-domain.com/webhooks/GigAssist",
  "events": ["trip.completed", "expense.created", "tax_packet.ready"]
}
```

**Available Events:**
- `trip.completed`: New trip logged
- `expense.created`: New expense added
- `income.created`: New income recorded
- `tax_packet.ready`: Tax packet generated

**Response:**
```json
{
  "id": "webhook_123",
  "url": "https://your-domain.com/webhooks/GigAssist",
  "events": ["trip.completed", "expense.created"],
  "active": true,
  "created_at": "2025-12-01T10:30:00Z"
}
```

### 3. List Webhooks

Get all registered webhooks.

**Endpoint:** `GET /api/partners/webhooks`

**Response:**
```json
{
  "webhooks": [
    {
      "id": "webhook_123",
      "url": "https://your-domain.com/webhooks/GigAssist",
      "events": ["trip.completed"],
      "active": true,
      "created_at": "2025-12-01T10:30:00Z"
    }
  ]
}
```

### 4. Delete Webhook

Remove a webhook subscription.

**Endpoint:** `DELETE /api/partners/webhooks/{webhookId}`

**Response:**
```json
{
  "message": "Webhook deleted successfully"
}
```

## Error Responses

All errors follow this format:

```json
{
  "error": "error_code",
  "message": "Human readable error message"
}
```

**Common Error Codes:**
- `unauthorized` (401): Invalid or missing access token
- `forbidden` (403): Insufficient permissions
- `not_found` (404): Resource not found
- `invalid_request` (400): Malformed request
- `rate_limit_exceeded` (429): Too many requests
- `server_error` (500): Internal server error

## Webhook Payload Format

When an event occurs, GigAssist sends a POST request to your registered webhook URL:

```json
{
  "event": "trip.completed",
  "timestamp": "2025-12-01T10:30:00Z",
  "user_id": 123,
  "data": {
    "trip_id": 456,
    "distance": 25.5,
    "start_location": "Home",
    "end_location": "Airport"
  }
}
```

**Webhook Security:**
- Each webhook includes an `X-GigAssist-Signature` header
- Verify the signature using your webhook secret
- Respond with 200 OK within 5 seconds

## Example Usage

### Python Example

```python
import requests

# Get access token
token_response = requests.post('https://api.GigAssist.com/api/partners/token', json={
    'grant_type': 'client_credentials',
    'client_id': 'your_client_id',
    'client_secret': 'your_client_secret'
})
access_token = token_response.json()['access_token']

# Get user tax packet
headers = {'Authorization': f'Bearer {access_token}'}
tax_data = requests.get(
    'https://api.GigAssist.com/api/partners/users/123/tax-packet?year=2025',
    headers=headers
)

print(tax_data.json())
```

### Node.js Example

```javascript
const axios = require('axios');

async function getTaxPacket(userId, year) {
  // Get access token
  const tokenRes = await axios.post('https://api.GigAssist.com/api/partners/token', {
    grant_type: 'client_credentials',
    client_id: 'your_client_id',
    client_secret: 'your_client_secret'
  });
  
  const accessToken = tokenRes.data.access_token;
  
  // Get tax packet
  const taxData = await axios.get(
    `https://api.GigAssist.com/api/partners/users/${userId}/tax-packet?year=${year}`,
    { headers: { Authorization: `Bearer ${accessToken}` }}
  );
  
  return taxData.data;
}
```

## Support

For partner API support:
- Email: partners@GigAssist.com
- Documentation: https://docs.GigAssist.com/partner-api
- Status: https://status.GigAssist.com
