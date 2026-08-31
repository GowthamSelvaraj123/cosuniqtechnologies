const fs = require('fs');
const path = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace all instances of the 3D images with the single strategy_story image
content = content.replace(/<img src="\/assets\/services\/[a-zA-Z0-9_]+_nobg\.png" alt="Service Visual" style=\{\{ width: '100%', height: 'auto', borderRadius: '16px' \}\} \/>/g, 
    `<img src="/assets/services/strategy_story.jpg" alt="Service Story" style={{ width: '100%', height: 'auto', borderRadius: '16px', mixBlendMode: 'multiply' }} />`);

fs.writeFileSync(path, content);
