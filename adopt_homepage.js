const fs = require('fs');
const cssPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.module.css';
let content = fs.readFileSync(cssPath, 'utf8');

const updates = [
  {
    old: /\.techStack \{ padding: 8rem 0; background: linear-gradient\(180deg, #ffffff 0%, #fafbfc 100%\) !important; position: relative; overflow: hidden; \}/,
    new: `.techStack { padding: 8rem 0; background-color: #FFF3E8 !important; position: relative; overflow: hidden; }`
  },
  {
    old: /\.techCard \{\s*background: #ffffff;\s*border-radius: 16px;\s*display: flex;\s*flex-direction: column;\s*overflow: hidden;\s*box-shadow: 0 4px 20px rgba\(0,0,0,0\.03\);\s*border: 1px solid rgba\(0,0,0,0\.04\);\s*transition: all 0\.4s cubic-bezier\(0\.165, 0\.84, 0\.44, 1\);\s*cursor: default;\s*\}/,
    new: `.techCard {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 24px -4px rgba(255, 107, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(255, 107, 0, 0.15);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}`
  },
  {
    old: /\.techCard:hover \{\s*transform: translateY\(-8px\);\s*box-shadow: 0 20px 40px rgba\(255,106,0,0\.08\);\s*border-color: rgba\(255,106,0,0\.15\);\s*\}/,
    new: `.techCard:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 107, 0, 0.5);
  box-shadow: 0 20px 50px -10px rgba(255, 107, 0, 0.2), 0 4px 16px rgba(255, 107, 0, 0.1);
}`
  },
  {
    old: /\.techCardFooter \{\s*background: #f9f9f9;\s*padding: 0\.75rem 0\.5rem;\s*font-size: 0\.8rem;\s*font-weight: 700;\s*text-align: center;\s*color: #555;\s*border-top: 1px solid rgba\(0,0,0,0\.03\);\s*transition: all 0\.3s ease;\s*\}/,
    new: `.techCardFooter {
  background: transparent;
  padding: 0.75rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a1a;
  border-top: 1px solid rgba(255, 107, 0, 0.1);
  transition: all 0.5s ease;
}`
  },
  {
    old: /\.techCard:hover \.techCardFooter \{\s*background: #fff5ec;\s*color: #ff6a00;\s*\}/,
    new: `.techCard:hover .techCardFooter {
  background: rgba(255, 107, 0, 0.05);
  color: #ff6a00;
}`
  },
  {
    old: /\.techCategories \{ display: grid; grid-template-columns: repeat\(auto-fill, minmax\(180px, 1fr\)\); gap: 2rem; \}/,
    new: `.techCategories { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem; }`
  }
];

updates.forEach(update => {
  content = content.replace(update.old, update.new);
});

fs.writeFileSync(cssPath, content);
console.log("Applied home page aesthetics to Tech Stack section");
