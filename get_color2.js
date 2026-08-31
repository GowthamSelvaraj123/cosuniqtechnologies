const jimp = require('d:\\fullstack\\cosuniqtechnologies\\node_modules\\jimp');
const { Jimp } = jimp;

async function getColor() {
    const img1 = await Jimp.read('C:\\Users\\gowth\\.gemini\\antigravity-ide\\brain\\a2867dc6-96ae-4062-bb9d-cc6fdafcdf71\\ecommerce_story_dark_1788182268037.jpg');
    const hex1 = img1.getPixelColor(0, 0);
    const r1 = (hex1 >> 24) & 255;
    const g1 = (hex1 >> 16) & 255;
    const b1 = (hex1 >> 8) & 255;
    
    console.log(`ecommerce_story_dark color: rgb(${r1}, ${g1}, ${b1}) / #${r1.toString(16).padStart(2, '0')}${g1.toString(16).padStart(2, '0')}${b1.toString(16).padStart(2, '0')}`);
}
getColor();
