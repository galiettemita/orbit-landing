/** Central rule used by browser enhancements and deterministic tests. */
export function motionAllowed({ reduced, paused, hidden }) {
  return !reduced && !paused && !hidden;
}
