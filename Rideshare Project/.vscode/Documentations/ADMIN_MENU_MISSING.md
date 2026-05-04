# Admin Menu Disappeared - Quick Fix Guide

## Why Did Admin Menu Disappear?

The Admin menu only shows when **both** conditions are met:
1. Your user account has `role = 'admin'` in the database
2. You're logged in with a session that includes the role field

## Most Likely Cause

You haven't made your user an admin yet, OR you haven't logged out/in after making yourself admin.

## Solution - Follow These Steps:

### Step 1: Check Your Current Session

Open your browser's Developer Console (F12) and run:
```javascript
fetch('/api/auth/session').then(r => r.json()).then(d => console.log(d))
```

Look for the `role` field in the response. If it's missing or not "admin", continue to Step 2.

### Step 2: Make Your User an Admin

Open Command Prompt or Terminal and run:

```bash
cd "c:\Users\nasee\Web and Software Development Course\Rideshare Project\GigAssist"
node scripts/make-admin.js YOUR-EMAIL@example.com
```

Replace `YOUR-EMAIL@example.com` with your actual login email.

You should see:
```
✅ Successfully made your-email@example.com an admin!
👤 User: YourName (your-email@example.com)
📧 Please log out and log back in for changes to take effect.
```

### Step 3: Log Out and Back In

**IMPORTANT:** You MUST log out and log back in!

1. Click the "Logged in as" button (top right)
2. Click "Sign Out"
3. Log back in with your credentials
4. The Admin menu should now appear

### Step 4: Verify Admin Access

After logging back in:
1. Look for the purple "Admin" menu item in the navigation
2. If you don't see it, check your session again (repeat Step 1)
3. The role should now show as "admin"

## Alternative: Check Database Directly

If you have database access, you can check/set the role directly:

```sql
-- Check your role
SELECT email, role FROM "User" WHERE email = 'your-email@example.com';

-- Set role to admin (if not already)
UPDATE "User" SET role = 'admin' WHERE email = 'your-email@example.com';
```

## Troubleshooting

### "User not found" error
- Make sure you're using the exact email you registered with
- Check for typos in the email address

### Admin menu still not showing after following all steps
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh the page (Ctrl+Shift+R)
3. Try in an incognito/private window
4. Check browser console for any errors
5. Verify the session includes role field (Step 1)

### Session doesn't include role field
- Make sure you applied the auth.ts changes (from earlier fix)
- Restart your Next.js dev server
- Delete `.next` folder and restart: `rm -rf .next && npm run dev`

## Navigation Filtering Logic

The admin menu is filtered using this logic in `Navigation.tsx`:

```typescript
const navItems = NAV_ITEMS.filter(item => {
  // Hide Admin menu item if user is not admin
  if (item.key === 'admin' && userRole !== 'admin') {
    return false;
  }
  return true;
});
```

This means:
- If `userRole` is `null` or anything other than `'admin'`, the Admin menu is hidden
- The `userRole` comes from the session API: `/api/auth/session`
- The session gets the role from the JWT token
- The JWT token gets the role from the database on login

## Quick Verification Checklist

- [ ] User role set to 'admin' in database
- [ ] Logged out after setting role
- [ ] Logged back in
- [ ] Session API returns `role: 'admin'`
- [ ] Browser cache cleared
- [ ] Page hard refreshed

If all checkboxes are ticked and Admin menu still doesn't appear, there may be a deeper issue. Please check:
1. Browser console for JavaScript errors
2. Network tab for failed API requests
3. Next.js server logs for errors

## Need More Help?

Visit `/dashboard` and open browser DevTools console, then paste:
```javascript
console.log('User Role:', document.querySelector('[data-user-role]')?.getAttribute('data-user-role'));
fetch('/api/auth/session').then(r => r.json()).then(console.log);
```

This will show your current role and full session data.
