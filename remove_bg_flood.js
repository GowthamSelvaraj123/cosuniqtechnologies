const jimp = require('d:\\fullstack\\cosuniqtechnologies\\node_modules\\jimp');
const { Jimp } = jimp;
const fs = require('fs');
const path = require('path');

const inputDir = 'd:\\fullstack\\cosuniqtechnologies\\public\\assets\\services';
const outputDir = 'd:\\fullstack\\cosuniqtechnologies\\public\\assets\\services';

const images = [
    { name: 'strategy', file: 'strategy_3d_1788167908842.jpg' },
    { name: 'brand', file: 'brand_3d_1788167932968.jpg' },
    { name: 'design', file: 'design_3d_1788167958456.jpg' },
    { name: 'webdev', file: 'webdev_3d_1788167980224.jpg' },
    { name: 'mobile', file: 'mobile_3d_1788168005101.jpg' },
    { name: 'ecommerce', file: 'ecommerce_3d_1788168030003.jpg' },
    { name: 'software', file: 'software_3d_1788168058498.jpg' },
    { name: 'cloud', file: 'cloud_3d_1788168087374.jpg' }
];

function colorDistance(c1, c2) {
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
        Math.pow(c1.g - c2.g, 2) +
        Math.pow(c1.b - c2.b, 2)
    );
}

async function processImages() {
    for (const img of images) {
        const inputPath = path.join(inputDir, img.file);
        const outputPath = path.join(outputDir, `${img.name}_nobg.png`);
        
        try {
            if (!fs.existsSync(inputPath)) continue;
            console.log(`Processing ${img.file}...`);
            const image = await Jimp.read(inputPath);
            
            // Assuming the background color is at (0,0)
            const bgHex = image.getPixelColor(0, 0);
            const bgR = (bgHex >> 24) & 255;
            const bgG = (bgHex >> 16) & 255;
            const bgB = (bgHex >> 8) & 255;
            
            const w = image.bitmap.width;
            const h = image.bitmap.height;
            
            // Simple flood fill to make background transparent
            const visited = new Uint8Array(w * h);
            const stack = [{x: 0, y: 0}, {x: w-1, y: 0}, {x: 0, y: h-1}, {x: w-1, y: h-1}];
            
            let count = 0;
            while (stack.length > 0) {
                const p = stack.pop();
                const idx = p.y * w + p.x;
                
                if (visited[idx]) continue;
                visited[idx] = 1;
                
                const hex = image.getPixelColor(p.x, p.y);
                const r = (hex >> 24) & 255;
                const g = (hex >> 16) & 255;
                const b = (hex >> 8) & 255;
                
                // For white/light-gray backgrounds, a tolerance of 50 works well
                if (colorDistance({r,g,b}, {r:bgR, g:bgG, b:bgB}) < 60) {
                    image.setPixelColor(0x00000000, p.x, p.y); // set transparent
                    count++;
                    
                    if (p.x > 0) stack.push({x: p.x - 1, y: p.y});
                    if (p.x < w - 1) stack.push({x: p.x + 1, y: p.y});
                    if (p.y > 0) stack.push({x: p.x, y: p.y - 1});
                    if (p.y < h - 1) stack.push({x: p.x, y: p.y + 1});
                }
            }
            
            await image.write(outputPath);
            console.log(`Saved ${outputPath}. Transparent pixels: ${count}`);
        } catch (e) {
            console.error(`Error processing ${img.file}:`, e.message);
        }
    }
}

processImages();
