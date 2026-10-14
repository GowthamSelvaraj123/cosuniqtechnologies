const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY_WEBP = 82;

// Gather all images
function getAllImages(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllImages(full, list);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      list.push(full);
    }
  }
  return list;
}

async function convertToWebP(imgPath) {
  const webpPath = imgPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  if (fs.existsSync(webpPath)) {
    console.log(`  skip (webp exists): ${path.basename(webpPath)}`);
    return;
  }
  const statBefore = fs.statSync(imgPath).size;
  await sharp(imgPath).webp({ quality: QUALITY_WEBP }).toFile(webpPath);
  const statAfter = fs.statSync(webpPath).size;
  const saved = ((statBefore - statAfter) / statBefore * 100).toFixed(1);
  console.log(`  ${path.basename(imgPath)} → ${path.basename(webpPath)} | ${(statBefore/1024).toFixed(0)}KB → ${(statAfter/1024).toFixed(0)}KB (${saved}% saved)`);
}

(async () => {
  const images = getAllImages(PUBLIC_DIR);
  console.log(`\nConverting ${images.length} images to WebP...\n`);
  for (const img of images) {
    try {
      await convertToWebP(img);
    } catch (e) {
      console.error(`  ERROR: ${img}: ${e.message}`);
    }
  }
  console.log('\nDone!');
})();
