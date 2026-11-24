import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Laugh: one funny line, at most 200 characters.
// Picked from 8 candidates scored against the judge brief (in order:
// funny first, then a real surprise at the end, an everyday truth people
// recognise, economy of words, fresh wording). The winner: a bank app
// calls takeaway "dining out" — the fancy label collapses at the end
// into one kebab shop, fourteen times. The number is the concrete
// detail; the collapse is the surprise; the category lie is the
// everyday truth everyone with a banking app recognises.
// Runner-up was the photo-folders line ("misc" and "misc (2)") at 42/50:
// just as relatable, but its punchline lands softer and a beat later,
// and it is 19 characters longer — a tie-break the kebab line wins too.
const line =
  "My bank app calls it 'dining out', but it's just the same kebab shop fourteen times.";

// The gate allows 1 to 200 characters: fail loudly instead of
// submitting a line the judge would never see.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line is ${line.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
