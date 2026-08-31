const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

const oldTechStack = /<div className=\{styles\.techTabsContainer\}>/;
const newTechStack = `<div className={styles.techHeader}>
            <span className={styles.sectionEyebrow}>+ TECH STACK</span>
            <h2 className={styles.techHeadline}>Technologies we master.</h2>
          </div>
          <div className={styles.techTabsContainer}>`;

content = content.replace(oldTechStack, newTechStack);
fs.writeFileSync(tsxPath, content);
console.log("Added eyebrow and title to tech stack section");
