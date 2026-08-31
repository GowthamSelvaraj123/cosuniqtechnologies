const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Replace SiPowerbi and SiTwilio with SiMicrosoft in imports
content = content.replace(/SiPowerbi,/g, '');
content = content.replace(/SiTwilio,/g, '');
// Replace in the code where it is used
content = content.replace(/<SiPowerbi \/>/g, '<SiMicrosoft />');
content = content.replace(/<SiTwilio \/>/g, '<SiMessagebird />');

fs.writeFileSync(tsxPath, content);
console.log("Fixed missing imports");
