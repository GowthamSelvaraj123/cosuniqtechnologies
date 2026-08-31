const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

const oldHeader = /<h2 className=\{styles\.techHeadline\}>Technologies we master\.<\/h2>/;
const newHeader = `<h2 className={styles.techHeadline}>Technologies we master<span className={styles.overviewDot}>.</span></h2>`;

content = content.replace(oldHeader, newHeader);
fs.writeFileSync(tsxPath, content);
console.log("Added overviewDot to TechStack title");
