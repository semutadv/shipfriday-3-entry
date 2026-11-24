// Ship It Friday — batch3 entry (shipfriday)
// Committed at 16:58. The author was never seen again.
// Writes the commit line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COMMIT_LINE =
  "fix: minor refactor (rewrote the payment service, deleted two 'unused' tables, renamed prod to prod-final-FINAL — deploy before anyone reads this)";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), COMMIT_LINE, "utf8");
}

main();
