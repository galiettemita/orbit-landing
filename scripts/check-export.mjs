import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
const paths = [
  "",
  "merchants",
  "developers",
  "security",
  "contact",
  "privacy",
  "terms",
];
let links = 0;
for (const path of paths) {
  const html = readFileSync(join("out", path, "index.html"), "utf8");
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: one h1`);
  assert.match(html, /<main id="content"/);
  assert.doesNotMatch(html, /Brevio|mailto:|REPLACE_WITH/);
  for (const [, href] of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    if (!href.startsWith("/")) continue;
    const local = decodeURI(href.split(/[?#]/)[0]);
    const file = join("out", local);
    assert.ok(
      existsSync(file) || existsSync(join(file, "index.html")),
      `${path}: missing ${href}`,
    );
    links++;
  }
  if (["privacy", "terms"].includes(path)) {
    assert.match(html, /Approval pending/);
    assert.doesNotMatch(
      html,
      /Scope of this review draft|Status and proposed scope|Required owner decisions/,
    );
  }
}
console.log(
  `Export verified: 7 routes, ${links} local link/asset references, no private draft text in default build.`,
);

function checkFiles(directory) {
  for (const entry of readdirSync(directory, {withFileTypes:true})) {
    const file=join(directory,entry.name);
    if(entry.isDirectory()) {checkFiles(file);continue;}
    assert.ok(/\.(?:html|txt|js|json|css|svg|ico|png|woff2)$/.test(entry.name),`Unexpected exported file: ${file}`);
    if(/\.(?:html|txt|js|json|css)$/.test(entry.name)) {
      assert.doesNotMatch(readFileSync(file,'utf8'),/Scope of this review draft|Status and proposed scope|Required owner decisions|REPLACE_WITH/);
    }
  }
}
checkFiles('out');
