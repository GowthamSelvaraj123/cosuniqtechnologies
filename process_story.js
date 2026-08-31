const Jimp = require('d:\\fullstack\\cosuniqtechnologies\\node_modules\\jimp');
const fs = require('fs');
const path = require('path');

async function processImage() {
    const inputPath = 'C:\\Users\\gowth\\.gemini\\antigravity-ide\\brain\\a2867dc6-96ae-4062-bb9d-cc6fdafcdf71\\strategy_story_1788181460087.jpg';
    const outputPath = 'd:\\fullstack\\cosuniqtechnologies\\public\\assets\\services\\strategy_story.png';
    
    const image = await Jimp.read(inputPath);
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // Flood fill from (0,0) assuming it's pure white
    const bgHex = image.getPixelColor(0, 0);
    const bgR = (bgHex >> 24) & 255;
    const bgG = (bgHex >> 16) & 255;
    const bgB = (bgHex >> 8) & 255;
    
    const visited = new Uint8Array(w * h);
    const stack = [{x: 0, y: 0}];
    
    function colorDistance(c1, c2) {
        return Math.sqrt(
            Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2)
        );
    }
    
    while (stack.length > 0) {
        const p = stack.pop();
        const idx = p.y * w + p.x;
        
        if (visited[idx]) continue;
        visited[idx] = 1;
        
        const hex = image.getPixelColor(p.x, p.y);
        const r = (hex >> 24) & 255;
        const g = (hex >> 16) & 255;
        const b = (hex >> 8) & 255;
        
        if (colorDistance({r,g,b}, {r:bgR, g:bgG, b:bgB}) < 30) {
            image.setPixelColor(0x00000000, p.x, p.y);
            if (p.x > 0) stack.push({x: p.x - 1, y: p.y});
            if (p.x < w - 1) stack.push({x: p.x + 1, y: p.y});
            if (p.y > 0) stack.push({x: p.x, y: p.y - 1});
            if (p.y < h - 1) stack.push({x: p.x, y: p.y + 1});
        }
    }
    await image.writeAsync(outputPath);
    console.log("Processed single story image");
}
processImage();
