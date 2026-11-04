import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(rootDir, 'src');
const problems = [];

const htmlFiles = fs.readdirSync(srcDir).filter((name) => name.endsWith('.html'));

for (const file of htmlFiles) {
    const filePath = path.join(srcDir, file);
    const html = fs.readFileSync(filePath, 'utf8');

    // Element ids must be unique so labels and aria references stay correct.
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    for (const id of new Set(duplicates)) {
        problems.push(`${file}: duplicate id "${id}"`);
    }

    // Local assets referenced by the page must exist.
    const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
    for (const reference of references) {
        if (/^(https?:|data:|mailto:|#)/.test(reference)) {
            continue;
        }

        const assetPath = path.join(srcDir, reference.split('?')[0]);
        if (!fs.existsSync(assetPath)) {
            problems.push(`${file}: missing asset "${reference}"`);
        }
    }

    // aria-describedby and aria-labelledby must point at an id on the page.
    const ariaRefs = [...html.matchAll(/aria-(?:describedby|labelledby)="([^"]+)"/g)]
        .flatMap((match) => match[1].split(/\s+/));
    for (const ref of ariaRefs) {
        if (!ids.includes(ref)) {
            problems.push(`${file}: aria reference "${ref}" has no matching element`);
        }
    }
}

if (problems.length > 0) {
    console.error('Lint failed:');
    for (const problem of problems) {
        console.error(`  - ${problem}`);
    }
    process.exit(1);
}

console.log(`Lint passed: checked ${htmlFiles.length} HTML file(s).`);
