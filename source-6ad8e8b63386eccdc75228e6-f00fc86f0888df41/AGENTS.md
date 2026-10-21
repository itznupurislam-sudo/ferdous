# Project guide

This is a Next.js App Router portfolio with a client-side content studio and Netlify serverless APIs. The supplied archive was reviewed as a reference; the app uses the required Netlify persistence/auth primitives instead of Supabase.

## Architecture

- `app/page.tsx` renders `components/Portfolio.tsx`. It prerenders approved seed content and fetches current published database content after hydration. A visible notice and retry appear if live content is unavailable.
- `app/admin/page.tsx` renders `components/Admin.tsx`. The client checks sign-in/role for navigation; every private server operation independently checks authenticated admin roles.
- `app/admin/login/page.tsx` owns sign-in, invite acceptance, and recovery. Root auth callback hashes are forwarded here without printing them.
- `lib/content.ts` is the shared domain model, Zod validation, and initial content. Live edits belong in the database. Changing defaults does not update an already seeded site.
- `lib/client.ts` handles JSON requests and uploads; `lib/server.ts` handles authorization, CSRF, and sanitized API errors.
- `db/schema.ts` defines profiles (typed JSONB singleton), individually queryable section items, and messages. `db/index.ts` creates the Netlify Drizzle client within request handlers.
- `netlify/functions/` contains content CRUD/reordering, message inbox/submission, uploads, public media delivery, and public-signup denial.
- `netlify/database/migrations/` contains generated schema and seed migrations. Do not modify applied migrations. Generate schema changes using Drizzle Kit with the beta packages and configured migration directory.
- `scripts/write-seed.mjs` wrote the initial custom seed migration using shared defaults. It is for initial generation only, not an ongoing content sync tool.
- `app/globals.css` contains the white/sky-blue editorial design, responsive layouts, admin styles, and reduced-motion overrides.

## Conventions and decisions

Use TypeScript, reusable React components, Zod at API trust boundaries, and explicit loading/error/empty states. Serverless entry files use `.mts`; shared imports in these files use `.js` extensions that resolve to TypeScript during bundling. Never trust client role checks, user-editable metadata, URLs, MIME headers, or filenames. Admin authorization uses Identity's verified `roles` and request-origin verification for mutations. No signup or role assignment UI is exposed.

Use Netlify Database for structured persistence and Netlify Blobs only for binary files. Do not introduce Supabase, filesystem persistence, or browser localStorage as application storage. Blob objects are immutable UUID-addressed public files; removing references does not delete an object that another record may use. CV files must be PDFs. Public document projects must contain sample data only. Never invent personal credentials, organizations, dates, certificate issuers, or a portrait. The microfinance entry is intentionally unpublished.

Profile and About editor state is kept mounted when switching tabs. Records save individually, and ordering changes are transactional. Contact success means durable inbox storage, not email delivery. Rendering uses React text escaping; do not add raw HTML biography support.

Use `netlify dev --port 8889` when local execution is allowed. This environment's build pipeline performs validation; do not run build/dev/test commands during agent generation when prohibited by platform instructions. Review edited files and generated migrations. No commits or direct deployment are performed by the coding agent.

`lib/images.ts` routes public uploaded images through Netlify Image CDN with URI-encoded local sources. Do not allowlist arbitrary remote image domains.
