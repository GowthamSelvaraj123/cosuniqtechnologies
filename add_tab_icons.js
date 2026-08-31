const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Ensure react-icons are imported
if (!content.includes('FiMonitor')) {
  const importStatement = `import { FiShoppingCart, FiMonitor, FiServer, FiDatabase, FiCloud, FiSmartphone, FiPenTool } from "react-icons/fi";\n`;
  content = content.replace('import { useState } from "react";', `import { useState } from "react";\n${importStatement}`);
}

// Create a mapping function for tab icons
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
  content = content.replace('const [activeTechCategory, setActiveTechCategory] = useState("CMS & eCommerce");', `const [activeTechCategory, setActiveTechCategory] = useState("CMS & eCommerce");\n${iconMapping}`);
}

// Update the button rendering to include the icon
const oldBtn = /<button\s*key=\{cat\.title\}\s*className=\{\`\$\{styles\.techTabBtn\} \$\{activeTechCategory === cat\.title \? styles\.techTabBtnActive : ""\}\`\}\s*onClick=\{\(\) => setActiveTechCategory\(cat\.title\)\}\s*>\s*\{cat\.title\}\s*<\/button>/;

const newBtn = `<button
                key={cat.title}
                className={\`\${styles.techTabBtn} \${activeTechCategory === cat.title ? styles.techTabBtnActive : ""}\`}
                onClick={() => setActiveTechCategory(cat.title)}
              >
                {getTabIcon(cat.title)}
                <span>{cat.title}</span>
              </button>`;

content = content.replace(oldBtn, newBtn);

fs.writeFileSync(tsxPath, content);
console.log("Added icons to tabs in ServicesPage.tsx");
