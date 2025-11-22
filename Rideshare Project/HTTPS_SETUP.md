# Install ngrok if you don't have it
# Download from: https://ngrok.com/download

# Step 1: Start your Next.js dev server (if not running)
# cd drivego
# npm run dev

# Step 2: In a new terminal, create HTTPS tunnel
ngrok http 3000

# Step 3: Use the HTTPS URL ngrok provides (e.g., https://abc123.ngrok.io)
# Open this URL on your phone to test GPS with HTTPS

# Note: Free ngrok URLs change each time. For permanent URL, upgrade to paid plan.
