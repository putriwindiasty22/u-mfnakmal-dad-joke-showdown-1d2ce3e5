// Dad Joke Showdown — entry program.
// Writes one dad joke (1-200 characters) to /output/entry.txt.
// Runs on Node 22.18+ (the grader runs Node 22.23.4); no dependencies,
// no network, no environment secrets — everything is in this file.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I took my son to the bank to open an account. He asked what interest he'd get. I said, 'With your grades, son — none.'";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200
// characters that is not only whitespace. Fail loudly instead of
// ever writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry is ${JOKE.length} characters, must be 1-200`);
}
if (!JOKE.trim()) {
  throw new Error("entry is blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
