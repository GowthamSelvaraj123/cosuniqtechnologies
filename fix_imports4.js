const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Strip out missing Si imports
content = content.replace(/SiAzuredevops,/g, '');
content = content.replace(/SiCsharp,/g, '');
content = content.replace(/SiCss3,/g, '');

// Ensure Fa6 imports exist
const oldFaImports = /import \{\s*FaAws, FaCubes, FaPalette, FaImage, FaVideo, FaStore, FaEnvelope, FaWindows, FaDatabase\s*\} from "react-icons\/fa6";/;
const newFaImports = `import { FaAws, FaCubes, FaPalette, FaImage, FaVideo, FaStore, FaEnvelope, FaWindows, FaDatabase, FaCloud, FaCode } from "react-icons/fa6";`;
content = content.replace(oldFaImports, newFaImports);

// Replace usages
content = content.replace(/<SiAzuredevops \/>/g, '<FaCloud />');
content = content.replace(/<SiCsharp \/>/g, '<FaCode />');
content = content.replace(/<SiCss3 \/>/g, '<FaCode />');

fs.writeFileSync(tsxPath, content);
console.log("Fixed more missing imports 4");
