<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/deb9c928-f269-48aa-8333-eb4d6fc47ed2

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the Google Business Profile OAuth credentials in [.env.local](.env.local) so the app can read reviews from the official Google API:
   - `GOOGLE_BUSINESS_ACCESS_TOKEN` or `GOOGLE_BUSINESS_REFRESH_TOKEN`
   - `GOOGLE_BUSINESS_CLIENT_ID`
   - `GOOGLE_BUSINESS_CLIENT_SECRET`
   - `GOOGLE_BUSINESS_ACCOUNT_ID` and `GOOGLE_BUSINESS_LOCATION_ID` (optional if the token can discover them automatically)
3. Run the app:
   `npm run dev`

The reviews section uses the official Google Business Profile API and falls back to the built-in sample reviews if the OAuth credentials are not configured yet.

If you need to discover the IDs manually, first call `GET /v1/accounts` with the same OAuth token and then `GET /v1/accounts/{accountId}/locations?readMask=name,title` to locate the correct business entry.
