const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Replace TechStackSection render to use top tabs instead of sidebar
const oldTechStack = /<div className=\{styles\.techStackBentoContainer\}>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newTechStack = `<div className={styles.techTabsContainer}>
          <div className={styles.techTabsHeader}>
            {techCategories.map((cat, idx) => (
              <button 
                key={cat.title} 
                className={\`\${styles.techTabBtn} \${activeTab === idx ? styles.techTabBtnActive : ''}\`}
                onClick={() => setActiveTab(idx)}
              >
                {cat.title}
              </button>
            ))}
          </div>
          
          <div className={styles.techTabContent}>
            {techCategories[activeTab].techs.map(tech => (
              <div key={tech.name} className={styles.techCard}>
                <div className={styles.techCardIcon}>
                  <img src={\`https://cdn.simpleicons.org/\${tech.icon}/\${tech.color}\`} alt={tech.name} width="50" height="50" />
                </div>
                <div className={styles.techCardFooter}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>`;
content = content.replace(oldTechStack, newTechStack);
fs.writeFileSync(tsxPath, content);
console.log("Updated TSX for top tabs");
