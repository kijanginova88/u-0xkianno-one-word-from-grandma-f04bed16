// One Word From Grandma — the single word Grandma would text about AI.
// Grandma, asked what she thinks of this AI business, texts back one word:
// she has decided the whole thing is witchcraft.
// rev2: keep the word exactly as chosen; output is one word plus newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "witchcraft";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
