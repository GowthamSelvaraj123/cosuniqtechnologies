const fs = require('fs');
const cssPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.module.css';
let content = fs.readFileSync(cssPath, 'utf8');

const updates = [
  // 1. Revert background to white
  {
    old: /\.techStack \{ padding: 8rem 0; background-color: #FFF3E8 !important; position: relative; overflow: hidden; \}/,
    new: `.techStack { padding: 8rem 0; background-color: #ffffff !important; position: relative; overflow: hidden; }`
  },
  // 2. Adjust Card Style for white background
  {
    old: /\.techCard \{\s*background: rgba\(255, 255, 255, 0\.7\);\s*backdrop-filter: blur\(20px\);\s*-webkit-backdrop-filter: blur\(20px\);\s*border-radius: 18px;\s*display: flex;\s*flex-direction: column;\s*overflow: hidden;\s*box-shadow: 0 4px 24px -4px rgba\(255, 107, 0, 0\.1\), 0 1px 4px rgba\(0, 0, 0, 0\.06\);\s*border: 1px solid rgba\(255, 107, 0, 0\.15\);\s*transition: all 0\.5s cubic-bezier\(0\.16, 1, 0\.3, 1\);\s*cursor: pointer;\s*\}/,
    new: `.techCard {
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.06);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}`
  },
  {
    old: /\.techCard:hover \{\s*transform: translateY\(-8px\);\s*background: rgba\(255, 255, 255, 0\.9\);\s*border-color: rgba\(255, 107, 0, 0\.5\);\s*box-shadow: 0 20px 50px -10px rgba\(255, 107, 0, 0\.2\), 0 4px 16px rgba\(255, 107, 0, 0\.1\);\s*\}/,
    new: `.techCard:hover {
  transform: translateY(-8px);
  background: #ffffff;
  border-color: rgba(255, 107, 0, 0.3);
  box-shadow: 0 20px 40px rgba(255, 107, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);
}`
  },
  // 3. Better Tab Design (Pill shape)
  {
    old: /\.techTabsHeader \{\s*display: flex;\s*flex-wrap: wrap;\s*gap: 2rem;\s*margin-bottom: 4rem;\s*border-bottom: 1px solid rgba\(0,0,0,0\.08\);\s*\}/,
    new: `.techTabsHeader {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 4rem;
  border-bottom: none;
}`
  },
  {
    old: /\.techTabBtn \{\s*background: none; border: none; font-size: 1\.05rem; font-weight: 600; color: #777;\s*padding: 0\.5rem 1rem 1rem; cursor: pointer; transition: all 0\.3s ease;\s*position: relative;\s*\}/,
    new: `.techTabBtn {
  background: #f4f4f4;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #555;
  padding: 0.6rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}`
  },
  {
    old: /\.techTabBtn:hover \{ color: #111; \}/,
    new: `.techTabBtn:hover { background: #fff5ec; color: #ff6a00; }`
  },
  {
    old: /\.techTabBtnActive \{ color: #ff6a00; \}/,
    new: `.techTabBtnActive { background: #111111; color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.techTabBtnActive:hover { background: #111111; color: #ffffff; }`
  },
  {
    old: /\.techTabBtnActive::after \{\s*content: ""; position: absolute; bottom: -1px; left: 0; width: 100%; height: 3px; background: #ff6a00;\s*border-top-left-radius: 4px; border-top-right-radius: 4px;\s*\}/,
    new: `/* No underline for pill tabs */`
  }
];

updates.forEach(update => {
  content = content.replace(update.old, update.new);
});

fs.writeFileSync(cssPath, content);
console.log("Reverted background to white, applied pill tabs, kept cursor pointer.");
