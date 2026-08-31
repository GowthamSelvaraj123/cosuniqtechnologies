const fs = require('fs');
const path = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace JPGs with PNGs and remove mixBlendMode
content = content.replace(/<img src="\/assets\/services\/([a-zA-Z0-9_]+)\.jpg" alt="Service Story" style=\{\{ width: '100%', height: 'auto', borderRadius: '16px', mixBlendMode: 'multiply' \}\} \/>/g, 
    `<img src="/assets/services/$1.png" alt="Service Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />`);

fs.writeFileSync(path, content);
console.log("Updated ServicesPage to use PNGs and removed mixBlendMode");
