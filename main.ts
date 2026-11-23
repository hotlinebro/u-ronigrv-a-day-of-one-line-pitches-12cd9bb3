// A Day of One-Line Pitches — make.fun entry
// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
//
// The program writes one sentence (at most 240 characters) to
// /output/entry.txt (the artifact the judge reads). Node 22+, stdlib only.
// Run: node main.ts
//
// Draft pitch (v1): speaks to a friend who has never coded, names the
// concrete deal — describe it in plain words, watch a working version
// take shape, keep it only if it feels like yours.
//
// Revision (v2, final): "Describe ... let an AI agent build" instead of
// "Tell an AI agent ... watch it become" — it mirrors the brief's own
// framing (let an agent build your first app idea), puts the friend in
// charge of the idea and the agent in charge of the building, and keeps
// the honest claim (a working version, not a perfect app) plus the
// low-risk close (keep it only if it feels like yours). 160 chars.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PITCH =
  "Describe the app idea you've carried for years in plain words, let an AI agent build a working version while you watch, and keep it only if it feels like yours.";

// The gate: UTF-8 text of 1 to 240 characters, not only white space.
// Fail loudly instead of writing an invalid entry.
if (PITCH.length < 1 || PITCH.length > 240) {
  throw new Error(`expected 1-240 characters, got ${PITCH.length}`);
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch must not be only white space");
}

function main(): void {
  const out = process.argv[2] ?? "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, PITCH, "utf8");
  console.log(PITCH);
  console.log(`(${PITCH.length} characters)`);
}

main();
