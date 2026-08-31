const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Forcefully update Magento icon
content = content.replace('{ name: "Magento", icon: "magento", color: "F26322" }', '{ name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg", color: "F26322" }');

fs.writeFileSync(tsxPath, content);
console.log("Updated Magento logo forcefully!");
