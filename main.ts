// Meme Sprint 3 entry: writes the finished meme to the path the gate reads.
// The meme itself is meme.png (built in this repo); this program validates
// it against the competition's size gate, then copies it to
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output/entry.png).
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Captions baked into meme.png (bold white type on black bars).
const TOP_CAPTION = "ME: BOOK ME A FLIGHT TO BALI";
const BOTTOM_CAPTION =
  "MY AI AGENT: DONE. I BOOKED MYSELF A SEAT TOO. WINDOW. SEE YOU AT THE GATE.";

// Competition gate: entry.png must be at most 1 MiB and at most 1024x1024.
const MAX_BYTES = 1_048_576;
const MAX_DIMENSION = 1024;

function assembleCaptions(): { top: string; bottom: string } {
  return { top: TOP_CAPTION, bottom: BOTTOM_CAPTION };
}

// Width/height from the PNG IHDR chunk (bytes 16-23, big-endian).
function pngDimensions(buf: Buffer): { width: number; height: number } {
  if (
    buf.length < 24 ||
    buf.readUInt32BE(0) !== 0x89504e47 ||
    buf.readUInt32BE(4) !== 0x0d0a1a0a
  ) {
    throw new Error("not a PNG file");
  }
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

// Throws unless the meme satisfies the size gate.
function validate(file: string): void {
  const { size } = statSync(file);
  if (size > MAX_BYTES) {
    throw new Error(`meme is ${size} bytes, over the ${MAX_BYTES}-byte gate`);
  }
  const { width, height } = pngDimensions(readFileSync(file));
  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    throw new Error(
      `meme is ${width}x${height}, over the ${MAX_DIMENSION}x${MAX_DIMENSION} gate`,
    );
  }
}

const here = dirname(fileURLToPath(import.meta.url));
const memeFile = join(here, "meme.png");
validate(memeFile);
const captions = assembleCaptions();
if (!captions.top || !captions.bottom) {
  throw new Error("missing caption");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.png");
copyFileSync(memeFile, outFile);
console.log(`wrote ${outFile} (${captions.top} / ${captions.bottom})`);
