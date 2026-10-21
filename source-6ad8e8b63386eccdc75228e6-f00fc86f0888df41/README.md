# Ferdous Mahmud — Personal Portfolio

A complete Next.js App Router portfolio and private content studio for Ferdous Mahmud. The public site presents his business experience, approved biography, skills, BD Clean journey, education, languages, sample document workflows, and contact form. Admins manage content, upload profile/community/certificate images, attach education documents, publish drafts, reorder entries, manage a PDF CV, and read visitor messages without editing code.

## Technologies

Next.js 15, React 19, TypeScript, Tailwind CSS 4, custom responsive CSS, Framer Motion, Lucide, React Hook Form, and Zod. PostgreSQL persistence uses Netlify Database with Drizzle ORM. Authentication uses Netlify Identity; binary uploads use Netlify Blobs. These platform services replace the Supabase services in the original request to fit this hosting environment. There is no Supabase configuration to supply.

## Local development

Requires Node.js 22+, npm, a Netlify account, and the Netlify CLI.

```bash
npm install
netlify login
netlify link
netlify dev --port 8889
```

Select this site's project when linking. Open http://localhost:8889. Use Netlify Dev rather than Next.js alone: the public API, database, file storage, and authentication depend on Netlify's runtime. `npm run dev` starts only the Next.js frontend on port 3000. No private credentials belong in browser environment variables. `.env.example` explains the automatic platform configuration.

The schema is defined in `db/schema.ts`. Generated migrations live in `netlify/database/migrations/`, including the schema and an initial content migration. Netlify applies them during deployment. To generate a future schema change:

```bash
npx drizzle-kit generate --name add_descriptive_change
```

Do not edit an applied migration or re-run the seed writer against an existing deployment. Update live content through the dashboard. The seed contains the complete approved biography, supplied education and language details, a hidden microfinance draft, an issuer-free certification placeholder, and illustrative document workflows. It contains no real identity documents or invented certificate issuers.

## First administrator

Identity activation is included. After deployment:

1. Open the project's Netlify dashboard, go to Identity, and set registration to **Invite only**.
2. Invite the owner's email address through **Invite users**. No shared/default admin password is included.
3. Follow the invitation link. Root invitation/recovery callbacks route to `/admin/login`, where the password can be set.
4. In the Netlify Identity user details, assign the **admin** role and save. Sign out and sign in again to refresh roles.
5. Open `/admin` to manage the portfolio.

The first admin role must be assigned through the Netlify UI. Browser-supplied user metadata cannot grant admin access. A server-side Identity validation handler also denies public self-registration. The login screen supports invitation acceptance and password recovery. Accounts without the server-managed admin role cannot read private content, upload files, change content, or access messages.

## Content workflow

**Profile, About & CV** edits the name, title, tagline, location, contact email, About heading, lead-in, side note, full biography, section headings/intros, profile image, and CV. The biography field preserves paragraph breaks. Click **Save all profile changes** after editing or uploading.

Every content collection supports create, edit, delete, published/draft visibility, and up/down ordering. Save edits before reordering. New entries start as unpublished drafts. Confirm the microfinance organization, role, dates, and duties before publishing it. Social links remain hidden until a valid HTTPS address is saved.

Uploads accept JPEG, PNG, WebP, and (for documents/CV) PDF, up to 4 MB. The server checks file signatures; SVG and HTML uploads are rejected. Uploading returns a URL; saving the entry attaches it. Removing a link unpublishes its reference when saved. Uploaded objects remain retained in storage, so replacing a link does not break other entries using the same asset. Upload only files intended for public access. Use illustrative samples for portfolio projects; never upload private identity records.

Without an uploaded portrait, the site uses an original typographic monogram. Without an uploaded PDF, Download CV explains availability and directs visitors to email instead of serving a fake file.

The contact form validates input, includes a honeypot, and saves submissions into the private dashboard inbox. Its success message explicitly states that this is inbox storage, not email delivery. Admins can mark messages as read, delete them, or reply in their email application. Function-level rate limiting restricts repeated requests by IP. The inbox displays the latest 200 messages.

## Deployment

1. Connect this repository to the target Netlify project.
2. Keep the configuration in `netlify.toml`: build command `npm run build`, publish directory `.next`, and functions directory `netlify/functions`. Netlify detects and supplies its Next.js runtime integration.
3. Deploy. Netlify provisions Database and Blobs and applies the committed migrations. The Identity activation marker is included.
4. Complete the administrator invitation/role setup above.
5. Open the public site, sign into `/admin`, upload an actual portrait/CV, and verify a saved content change and contact submission.

No build or local runtime tests were executed during generation; this environment delegates validation to the deployment pipeline. Files, generated SQL, installed API types, and configuration were reviewed directly. Deployment and the first administrator setup are required before authentication, persistent writes, or uploads can be exercised end to end.

The page supports mobile navigation, project filtering and accessible detail dialogs, keyboard focus, reduced-motion preferences, and restrained scroll reveals. Head metadata describes Ferdous's portfolio and leaves social preview image generation to the platform. Fonts use Google Fonts with local sans-serif fallbacks.

Uploaded images on the public page are resized and served as WebP through Netlify Image CDN. External HTTPS image URLs are rendered directly; arbitrary remote CDN source domains are not allowlisted.
