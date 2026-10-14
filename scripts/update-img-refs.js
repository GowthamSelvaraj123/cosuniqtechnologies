const fs = require('fs');
const path = require('path');

// Files to update (exclude metadata/OG/favicon references)
const files = [
  'components/WorkSlider.tsx',
  'components/ServicesPage.tsx',
  'components/ResultsShowcase.tsx',
  'components/OurDifference.tsx',
  'components/HeroSlider.tsx',
  'components/Header.tsx',
  'app/portfolio/page.tsx',
  'app/academy/AcademyClient.tsx',
  'app/about/AboutContent.tsx',
  'app/contact/ContactClient.tsx',
  'app/academy/AcademyHero.module.css',
];

// Patterns: jpg/png → webp, but SKIP favicon, og-image, cosuniq-technologies logo (used as mask), og-image
const SKIP_PATTERNS = [
  /favicon/,
  /og-image/,
  /cosuniq-technologies\.png/,
  /cosuniq-academy\.png/,
  /logo-mark\.png/,
];

function shouldSkip(line) {
  return SKIP_PATTERNS.some(p => p.test(line));
}

function processFile(relPath) {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`  SKIP (not found): ${relPath}`);
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  let changed = 0;

  const newLines = lines.map(line => {
    if (shouldSkip(line)) return line;
    // Replace .jpg → .webp and .png → .webp in asset paths
    const updated = line
      .replace(/\/assets\/([^"'`\s)]+)\.jpg/g, '/assets/$1.webp')
      .replace(/\/assets\/([^"'`\s)]+)\.png/g, '/assets/$1.webp')
      .replace(/\/assets\/([^"'`\s)]+)\.jpeg/g, '/assets/$1.webp');
    if (updated !== line) changed++;
    return updated;
  });

  if (changed > 0) {
    fs.writeFileSync(fullPath, newLines.join('\n'), 'utf8');
    console.log(`  ✓ ${relPath} — ${changed} line(s) updated`);
  } else {
    console.log(`  – ${relPath} — no changes`);
  }
}

console.log('\nUpdating image src references to .webp...\n');
for (const file of files) {
  processFile(file);
}
console.log('\nDone!');
