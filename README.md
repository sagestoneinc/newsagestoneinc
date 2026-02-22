
  # Marketing Website for SageStone

  This is a code bundle for Marketing Website for SageStone. The original project is available at https://www.figma.com/design/TW4EN0iE7DutFoyCo1Q492/Marketing-Website-for-SageStone.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Build and Deploy

**Build command:** `npm run build`

**Deploy command:** `npm run deploy`

> Note: When this command runs inside Cloudflare Pages (`CF_PAGES=1`), it only builds and skips `wrangler pages deploy` to avoid recursive/self-deploy failures.

## Cloudflare setup (step-by-step, including contact form)

1. **Create a Cloudflare Pages project**
   - In Cloudflare Dashboard, go to **Workers & Pages** → **Create application** → **Pages**.
   - Connect this GitHub repository.
   - Use:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`

2. **Set required environment variable**
   - In Pages project settings, go to **Settings** → **Environment variables**.
   - Add `FROM_EMAIL` (for example: `contact@yourdomain.com`; SageStone uses `hello@sagestoneinc.com`).
   - This value must be an email address on your verified domain.

3. **Enable Cloudflare Email Routing**
   - In Cloudflare Dashboard, open your domain.
   - Go to **Email** → **Email Routing** and enable it for the domain you will send from.

4. **Add the Pages Function email binding**
   - In your Pages project, go to **Settings** → **Functions** → **Bindings**.
   - Add a **Send email** binding named exactly: `SEND_EMAIL`.
   - Set the allowed sender/recipient rules to permit sends from your `FROM_EMAIL`.

5. **Deploy**
   - Push to the connected branch (or trigger a redeploy from Pages).
   - Cloudflare will build and deploy the site, including the function at `functions/api/contact.ts` (route: `POST /api/contact`).

6. **Verify contact form works**
   - Open the deployed site and submit the Contact form (`/contact`).
   - Confirm:
     - You get a success message in the UI.
     - Your configured inbox receives the notification email (`hello@sagestoneinc.com` by default in this repo).
     - The submitter email receives the confirmation email.
  
