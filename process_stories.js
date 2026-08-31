const jimp = require('d:\\fullstack\\cosuniqtechnologies\\node_modules\\jimp');
const { Jimp } = jimp;
const fs = require('fs');
const path = require('path');

const inputDir = 'd:\\fullstack\\cosuniqtechnologies\\public\\assets\\services';

const images = [
    'strategy_story.jpg',
    'brand_story.jpg',
    'design_story.jpg',
    'webdev_story.jpg',
    'mobile_story.jpg',
    'ecommerce_story.jpg',
    'software_story.jpg',
    'cloud_story.jpg'
];

function colorDistance(c1, c2) {
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2)
    );
}

async function processImages() {
    for (const imgName of images) {
        const inputPath = path.join(inputDir, imgName);
        const outputPath = path.join(inputDir, imgName.replace('.jpg', '.png'));
        
        try {
            if (!fs.existsSync(inputPath)) continue;
            const image = await Jimp.read(inputPath);
            
            const w = image.bitmap.width;
            const h = image.bitmap.height;
            
            const bgHex = image.getPixelColor(0, 0);
            const bgR = (bgHex >> 24) & 255;
            const bgG = (bgHex >> 16) & 255;
            const bgB = (bgHex >> 8) & 255;
            
            const visited = new Uint8Array(w * h);
            const stack = [{x: 0, y: 0}, {x: w-1, y: 0}, {x: 0, y: h-1}, {x: w-1, y: h-1}];
            
            while (stack.length > 0) {
                const p = stack.pop();
                const idx = p.y * w + p.x;
                
                if (visited[idx]) continue;
                visited[idx] = 1;
                
                const hex = image.getPixelColor(p.x, p.y);
                const r = (hex >> 24) & 255;
                const g = (hex >> 16) & 255;
                const b = (hex >> 8) & 255;
                
                if (colorDistance({r,g,b}, {r:bgR, g:bgG, b:bgB}) < 25) { // Strict tolerance for pure white
                    image.setPixelColor(0x00000000, p.x, p.y);
                    if (p.x > 0) stack.push({x: p.x - 1, y: p.y});
                    if (p.x < w - 1) stack.push({x: p.x + 1, y: p.y});
                    if (p.y > 0) stack.push({x: p.x, y: p.y - 1});
                    if (p.y < h - 1) stack.push({x: p.x, y: p.y + 1});
                }
            }
            await image.write(outputPath);
            console.log(`Saved ${outputPath}`);
        } catch (e) {
            console.error(`Error processing ${imgName}:`, e.message);
        }
    }
}
processImages();
