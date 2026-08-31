const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Ensure react-icons are imported
if (!content.includes('FiShoppingCart')) {
  const importStatement = `import { FiShoppingCart, FiMonitor, FiServer, FiDatabase, FiCloud, FiSmartphone, FiPenTool } from "react-icons/fi";\n`;
  content = content.replace('import { useState } from "react";', `import { useState } from "react";\n${importStatement}`);
}

const iconMapping = `
const getTabIcon = (title: string) => {
  switch(title) {
    case "CMS & eCommerce": return <FiShoppingCart style={{ fontSize: '1.1rem' }} />;
    case "Frontend": return <FiMonitor style={{ fontSize: '1.1rem' }} />;
    case "Backend": return <FiServer style={{ fontSize: '1.1rem' }} />;
    case "Database": return <FiDatabase style={{ fontSize: '1.1rem' }} />;
    case "Cloud": return <FiCloud style={{ fontSize: '1.1rem' }} />;
    case "Mobile": return <FiSmartphone style={{ fontSize: '1.1rem' }} />;
    case "UI / UX": return <FiPenTool style={{ fontSize: '1.1rem' }} />;
    default: return null;
  }
};
`;

if (!content.includes('getTabIcon')) {
  content = content.replace('function TechStackSection() {', `${iconMapping}\nfunction TechStackSection() {`);
}

fs.writeFileSync(tsxPath, content);
console.log("Injected getTabIcon mapping");
