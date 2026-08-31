const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Replace SiMicrosoftsqlserver and SiMicrosoftazure in imports
content = content.replace(/SiMicrosoftsqlserver,/g, '');
content = content.replace(/SiMicrosoftazure,/g, '');

// Replace in the code where it is used
content = content.replace(/<SiMicrosoftsqlserver \/>/g, '<SiMicrosoft />');
content = content.replace(/<SiMicrosoftazure \/>/g, '<SiMicrosoft />');

fs.writeFileSync(tsxPath, content);
console.log("Fixed missing imports again");
