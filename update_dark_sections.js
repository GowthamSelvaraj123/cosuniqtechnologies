const fs = require('fs');

// 1. Update CSS
const cssPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.module.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/\.bgDarkOrange \{ background: #ff6a00 !important; \}/g, '.bgDarkOrange { background: #fa5b00 !important; }');
fs.writeFileSync(cssPath, cssContent);

// 2. Update TSX
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let tsxContent = fs.readFileSync(tsxPath, 'utf8');
tsxContent = tsxContent.replace(/<img src="\/assets\/services\/design_story\.png"/g, '<img src="/assets/services/design_story.jpg"');
tsxContent = tsxContent.replace(/<img src="\/assets\/services\/ecommerce_story\.png"/g, '<img src="/assets/services/ecommerce_story.jpg"');
fs.writeFileSync(tsxPath, tsxContent);
console.log("Updated CSS and TSX");
