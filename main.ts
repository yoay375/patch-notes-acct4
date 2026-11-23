// Real-Life Patch Notes: The Comedy Changelog — acct4 entry.
// Writes one patch-note line (1-160 chars) to /output/entry.txt.
// No dependencies, no network, no secrets, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const ENTRY =
  "v4.1.0: fixed a bug where the stomach broadcast a growl at maximum volume during silent moments, ignoring the mute toggle.";

// Validate the gate before writing: 1-160 chars, not whitespace-only.
const len = [...ENTRY].length;
if (len < 1 || len > 160) throw new Error(`entry length ${len} outside 1-160`);
if (!ENTRY.trim()) throw new Error("entry is whitespace-only");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

const hash = createHash("sha256").update(ENTRY, "utf8").digest("hex");
console.log(`length=${[...ENTRY].length} sha256=${hash}`);
console.log(ENTRY);
