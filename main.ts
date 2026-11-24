import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "It passed every test. The tests, it turns out, were testing the wrong thing — a fact I discovered in production, live, in front of everyone.";

// The gate allows under 200 characters; refuse to write an over-long text.
if (line.length < 1 || line.length >= 200) {
  throw new Error(`entry text is ${line.length} characters, must be under 200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
