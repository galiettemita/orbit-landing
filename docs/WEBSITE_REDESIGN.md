# Orbit informational website redesign

Goal: replace the existing Brevio presentation with a seven-page Orbit seller-side AI information website on a review branch. Keep the current Next.js/React/TypeScript toolchain and Vercel project. No production release, domain/DNS change, backend work, new service or additional runtime library is authorized.

Design: near-black/navy canvas, oversized white typography, violet atmospheric light and an original layered orbital sculpture. Lightweight CSS animates light, satellites, connecting paths and entrances. A small client enhancement controls scroll reveals, pointer response and a persistent pause-motion control. Native reduced-motion preference overrides decorative animation. Fictional agent conversation is selectable/replayable and remains readable without animation. One shared navigation/footer and content primitives serve all seven pages.

Implementation:

1. Add focused tests for motion pause/reduced-motion behavior and fail-closed legal review loading. Observe failures before implementation.
2. Build shared components and seven routes; preserve old Markdown sources as history without loading them. Put new legal draft bodies in ignored review-inputs/, never public Git source. Default builds show approval-pending notices; protected review builds may load local draft files with ORBIT_REVIEW_MODE=1.
3. Run existing lint, TypeScript, focused tests and Next production/static export builds. Test rendered navigation, keyboard, motion settings, no-JS fallback, browser errors and responsive frames. Verify exported production content excludes private draft text.
4. Obtain one independent review, fix material findings and recheck. Commit/push only feature branch and open draft PR. Do not merge: existing main is production-connected.
5. Build an allowlisted static export for the protected review deployment in existing orbit-landing. Check Vercel protection and unauthenticated denial, retain production deployment/domain bindings and compare them after deployment.

Rollback: leave PR unmerged and remove/revert this feature branch if rejected. No migration or DNS rollback is needed. Existing unpublished local work is in another worktree and is preserved.

Public launch requires confirmed legal operator, monitored contact routes, approved policies/effective date and explicit release approval. Existing contact text in old Brevio code does not establish a monitored Orbit contact.
