const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Update button rendering in TechStackSection
const oldBtn = /<button \s*key=\{cat\.title\} \s*className=\{\`\$\{styles\.techTabBtn\} \$\{activeTab === idx \? styles\.techTabBtnActive : ''\}\`\}\s*onClick=\{\(\) => setActiveTab\(idx\)\}\s*>\s*\{cat\.title\}\s*<\/button>/;

const newBtn = `<button 
                key={cat.title} 
                className={\`\${styles.techTabBtn} \${activeTab === idx ? styles.techTabBtnActive : ''}\`}
                onClick={() => setActiveTab(idx)}
              >
                {getTabIcon(cat.title)}
                <span>{cat.title}</span>
              </button>`;

content = content.replace(oldBtn, newBtn);
fs.writeFileSync(tsxPath, content);
console.log("Fixed tab button mapping");
