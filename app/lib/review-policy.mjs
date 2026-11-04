import { readFileSync } from "node:fs";
import { join } from "node:path";
/** Review text never enters a default or production build. Missing input fails closed. */
export function readReviewPolicy(
  kind,
  { review = process.env.ORBIT_REVIEW_MODE === "1", read = readFileSync } = {},
) {
  if (!["privacy", "terms"].includes(kind)) throw new Error("Unknown policy");
  if (!review) return null;
  try {
    return read(join(process.cwd(), "review-inputs", `${kind}.md`), "utf8");
  } catch {
    return null;
  }
}
