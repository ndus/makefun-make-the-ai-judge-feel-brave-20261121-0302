// Writes the entry for "Make the AI judge feel brave": one short text,
// 200 characters, to /output/entry.txt. No network, no randomness:
// every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "By noon the snow has slipped off half the roof. In the shed, I find the spade where I left it, its wooden handle smooth from other years. The soil gives a little under the blade. I have all afternoon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
