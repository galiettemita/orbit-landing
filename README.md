# Orbit — professional informational website

Seller-side AI product information for merchants, commerce partners, agent developers and platform reviewers. Built with the existing Next.js 16 / React 19 / TypeScript stack. No new runtime dependencies, account system, database, analytics or contact form.

## Development

```sh
npm ci
npm run dev
npm run verify
```

The local development server uses port 4173. `npm run verify` runs ESLint, TypeScript, Node tests, the production static export and exported-content checks. `npm run build` creates `out/`.

The homepage contains an original orbital illustration, CSS motion, pointer response, a decorative-motion pause button and a two-state fictional product conversation. Motion respects the system's reduced-motion preference. Static content remains available without JavaScript.

## Review and release

Existing infrastructure is retained: GitHub `galiettemita/orbit-landing`, Vercel `orbit-landing`, domains `testing-orbit.com` and `www.testing-orbit.com`. Do not merge this feature branch before owner review: existing main is connected to production.

The default build shows policy-approval notices and never reads unapproved draft bodies. New draft bodies are private inputs in ignored `review-inputs/privacy.md` and `review-inputs/terms.md`; they are not included in public Git source. `npm run build:review` may read them only for an access-protected review export. Missing draft input fails closed to the approval notice.

The static review deployment uploads only `out/`, with no repository Markdown, private sources, internal records or credentials. The current Vercel deployment-protection setting must be checked before each preview upload. `noindex` is defense in depth, not access control.

Legal operator, monitored public/privacy/security contacts, complete policy wording and effective date, and production release approval are still owner inputs. The previous Brevio Markdown files and loader remain as history, but the Orbit website does not load them.

See docs/WEBSITE_REDESIGN.md for scope and docs/WEBSITE_VERIFICATION.md for observed results and limitations.
