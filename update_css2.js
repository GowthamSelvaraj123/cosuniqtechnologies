const fs = require('fs');

const cssPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.module.css';
let content = fs.readFileSync(cssPath, 'utf8');

const oldTabsRegex = /\/\* -- TECH TABS -- \*\/[\s\S]*?(?=\/\* --|\.processStepDesc)/; // Not fully reliable, let's just append or replace
// Better to just remove the previous TECH TABS css by finding it and replacing it
const startIdx = content.indexOf('/* -- TECH TABS -- */');
if(startIdx !== -1) {
  content = content.substring(0, startIdx);
}

const newCss = `
/* -- TECH STACK BENTO -- */
.techStackBentoContainer {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  background: #fdfaf6; /* Very light beige background */
  padding: 4rem;
  border-radius: 16px;
  align-items: flex-start;
}

.techTabsSidebar {
  display: flex;
  flex-direction: column;
  min-width: 180px;
  flex-shrink: 0;
}

.tabBtn, .activeTabBtn {
  background: transparent;
  border: none;
  text-align: left;
  padding: 1rem 1.5rem;
  font-family: var(--font-plus-jakarta), sans-serif;
  font-size: 1.05rem;
  cursor: pointer;
  border-left: 2px solid rgba(0,0,0,0.05);
  color: #111;
  transition: all 0.2s ease;
}
.tabBtn:hover {
  background: rgba(0,0,0,0.02);
}
.activeTabBtn {
  border-left: 3px solid #ffcc00; /* Yellow line */
  font-weight: 700;
  background: transparent;
}

.techCardsGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  flex-grow: 1;
  animation: fadeIn 0.4s ease forwards;
}

.techCard {
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.techCard:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.06);
}

.techCardIcon {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1rem;
  font-size: 2.2rem;
}
.techCardIconText {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111;
}

.techCardFooter {
  background: #f4f4f4;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #555;
  border-top: 1px solid rgba(0,0,0,0.04);
}

@media (max-width: 1024px) {
  .techStackBentoContainer {
    flex-direction: column;
    padding: 2rem;
  }
  .techTabsSidebar {
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 2px solid rgba(0,0,0,0.05);
    padding-bottom: 1rem;
  }
  .tabBtn, .activeTabBtn {
    border-left: none;
    border-bottom: 2px solid transparent;
    padding: 0.5rem 1rem;
    margin-bottom: -1rem;
  }
  .activeTabBtn {
    border-left: none;
    border-bottom: 3px solid #ffcc00;
  }
  .techCardsGrid {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
}

@media (max-width: 768px) {
  .techCardsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .techCardsGrid {
    grid-template-columns: 1fr;
  }
}
`;

content += newCss;
fs.writeFileSync(cssPath, content);
console.log("CSS Updated!");
