import fs from "fs";
import path from "path";

// Today's publish date, in YYYY-MM-DD as required for the "Last updated" line.
export const PUBLISH_DATE = "2026-06-08";

/**
 * Read a legal markdown source file and prepare it for publication WITHOUT
 * editing the source file body on disk. We:
 *   - strip the top operator-only blockquote (first `>` through the first `---`),
 *   - strip the bottom operator footer (everything from `### Operator footer`),
 *   - strip any inline operator-note blockquote marked "strip before paste",
 *   - set the "Last updated" line to today's date.
 *
 * The Terms §11 governing-law clause (New York) is now filled directly in the
 * source markdown, so no placeholder substitution is needed here.
 */
export function loadLegalMarkdown(fileName: string): string {
  const raw = fs.readFileSync(
    path.join(process.cwd(), fileName),
    "utf8"
  );
  let lines = raw.split("\n");

  // 1. Strip the bottom operator footer (everything from the heading onward).
  const footerIdx = lines.findIndex((l) =>
    l.trim().startsWith("### Operator footer")
  );
  if (footerIdx !== -1) {
    lines = lines.slice(0, footerIdx);
  }

  // 2. Strip the top operator blockquote: from the first `>` line up to and
  //    including the first `---` separator. Keep the H1 title above it.
  const firstHrIdx = lines.findIndex((l) => l.trim() === "---");
  const firstBqIdx = lines.findIndex((l) => l.trim().startsWith(">"));
  if (firstBqIdx !== -1 && firstHrIdx !== -1 && firstBqIdx < firstHrIdx) {
    lines = [...lines.slice(0, firstBqIdx), ...lines.slice(firstHrIdx + 1)];
  }

  // 3. Strip any remaining inline operator-note blockquote (e.g. Terms §11).
  lines = lines.filter((l) => !l.trim().toLowerCase().includes("strip before paste"));

  // 4. Trim trailing blank lines / dangling separators left by the footer cut.
  while (lines.length > 0) {
    const last = lines[lines.length - 1].trim();
    if (last === "" || last === "---") {
      lines.pop();
    } else {
      break;
    }
  }

  let text = lines.join("\n");

  // 5. Set the publish date.
  text = text.replace(/_<publish date>_/g, PUBLISH_DATE);

  return text;
}
