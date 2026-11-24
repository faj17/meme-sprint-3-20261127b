// Meme Sprint 3 entry: writes the finished meme to the path the gate reads.
// The meme itself is meme.png (built in this repo); this program just copies
// it to $MAKEFUN_OUTPUT_DIR/entry.png (default /output/entry.png).
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.png");
copyFileSync(join(here, "meme.png"), outFile);
console.log(`wrote ${outFile}`);
