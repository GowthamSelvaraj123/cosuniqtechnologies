const fs = require('fs');
const cssPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.module.css';
let content = fs.readFileSync(cssPath, 'utf8');

// Remove techStackBentoContainer and related styles
const startIdx = content.indexOf('/* -- TECH STACK BENTO -- */');
if(startIdx !== -1) {
  content = content.substring(0, startIdx);
}

const newCss = `
/* -- TECH TABS -- */
.techTabsContainer {
  margin-top: 4rem;
}
.techTabsHeader {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid #f0e2d6;
  padding-bottom: 1rem;
}
.techTabBtn {
  background: none;
  border: none;
  font-family: var(--font-plus-jakarta), sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #a0a0a0;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
}
.techTabBtn:hover {
  color: #ff6a00;
}
.techTabBtnActive {
  color: #111111;
}
.techTabBtnActive::after {
  content: '';
  position: absolute;
  bottom: -17px;
  left: 0;
  right: 0;
  height: 3px;
  background: #ff6a00;
  border-radius: 3px 3px 0 0;
}
.techTabContent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
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
  padding: 2rem 1rem;
}

.techCardFooter {
  background: #f4f4f4;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #555;
  border-top: 1px solid rgba(0,0,0,0.04);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

content += newCss;
fs.writeFileSync(cssPath, content);
console.log("Restored CSS for top tabs");
