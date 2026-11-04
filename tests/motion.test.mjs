import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
test("motion preference is static for reduced motion, user pause, or hidden page", async () => {
  assert.ok(existsSync("app/lib/motion.mjs"), "motion controller is missing");
  const { motionAllowed } = await import(
    pathToFileURL(process.cwd() + "/app/lib/motion.mjs")
  );
  assert.equal(
    motionAllowed({ reduced: false, paused: false, hidden: false }),
    true,
  );
  for (const flag of ["reduced", "paused", "hidden"])
    assert.equal(
      motionAllowed({
        reduced: false,
        paused: false,
        hidden: false,
        [flag]: true,
      }),
      false,
    );
});
test("unapproved legal text is excluded by default and only loaded from private review inputs", async () => {
  assert.ok(
    existsSync("app/lib/review-policy.mjs"),
    "review policy loader is missing",
  );
  const { readReviewPolicy } = await import(
    pathToFileURL(process.cwd() + "/app/lib/review-policy.mjs")
  );
  let reads = 0;
  const read = () => {
    reads++;
    return "PRIVATE_REVIEW_ONLY";
  };
  assert.equal(readReviewPolicy("privacy", { review: false, read }), null);
  assert.equal(reads, 0);
  assert.equal(
    readReviewPolicy("privacy", { review: true, read }),
    "PRIVATE_REVIEW_ONLY",
  );
  assert.equal(reads, 1);
  assert.equal(
    readReviewPolicy("terms", {
      review: true,
      read: () => {
        throw new Error("missing");
      },
    }),
    null,
  );
  assert.throws(() => readReviewPolicy("../secrets", { review: true, read }));
});
test("motion and policy controls are shipped with accessible fallbacks", () => {
  assert.ok(
    existsSync("app/components/Motion.tsx"),
    "motion enhancement is missing",
  );
  const source = readFileSync("app/components/Motion.tsx", "utf8");
  assert.match(source, /prefers-reduced-motion/);
  assert.match(source, /aria-pressed/);
  assert.match(source, /disconnect/);
  const css = readFileSync("app/globals.css", "utf8");
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /animation-play-state: paused/);
});
