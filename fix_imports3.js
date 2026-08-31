const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Strip out missing Si imports
content = content.replace(/SiMagento,/g, '');
content = content.replace(/SiMessagebird,/g, '');
content = content.replace(/SiMicrosoft,/g, '');

// Ensure Fa6 imports exist
const oldFaImports = /import \{\s*FaAws, FaCubes, FaPalette, FaImage, FaVideo\s*\} from "react-icons\/fa6";/;
const newFaImports = `import { FaAws, FaCubes, FaPalette, FaImage, FaVideo, FaStore, FaEnvelope, FaWindows, FaDatabase } from "react-icons/fa6";`;
content = content.replace(oldFaImports, newFaImports);

// Replace usages
content = content.replace(/<SiMagento \/>/g, '<FaStore />');
content = content.replace(/<SiMessagebird \/>/g, '<FaEnvelope />');
content = content.replace(/<SiMicrosoft \/>/g, '<FaWindows />');

fs.writeFileSync(tsxPath, content);
console.log("Fixed more missing imports");
