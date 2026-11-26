import { mkdirSync, writeFileSync } from "node:fs";

// One text message from your future self. 115 characters.
const ENTRY = "Heads up: the 'temporary' fix you're about to ship stays in production for nine years. Name it something dignified.";
const OUTPUT_PATH = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

const chars = [...ENTRY].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, outside ${MIN_CHARS}-${MAX_CHARS}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${OUTPUT_PATH}`);
