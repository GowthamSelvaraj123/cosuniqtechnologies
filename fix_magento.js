const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Replace Magento
content = content.replace(/icon: "magento"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg"');

// Check if any others don't have http and might fail
const lines = content.split('\n');
for (let line of lines) {
  if (line.includes('icon: "') && !line.includes('http')) {
    console.log(line.trim());
  }
}

fs.writeFileSync(tsxPath, content);
