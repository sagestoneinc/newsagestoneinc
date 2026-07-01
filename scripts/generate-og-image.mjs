import { mkdirSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import sharp from 'sharp';

const source = 'public/assets/og-image.svg';
const output = 'public/assets/og-image.jpg';

mkdirSync(dirname(output), { recursive: true });
await sharp(readFileSync(source)).jpeg({ quality: 92 }).toFile(output);
console.log(`Generated ${output} from ${source}`);
