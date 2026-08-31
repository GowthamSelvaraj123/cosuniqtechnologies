const fs = require('fs');
const cssPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.module.css';
let content = fs.readFileSync(cssPath, 'utf8');

const updates = [
  {
    old: /\.techTabBtn \{\s*background: #f4f4f4;\s*border: 1px solid transparent;\s*border-radius: 999px;\s*font-size: 0\.95rem;\s*font-weight: 700;\s*color: #555;\s*padding: 0\.6rem 1\.5rem;\s*cursor: pointer;\s*transition: all 0\.3s ease;\s*position: relative;\s*\}/,
    new: `.techTabBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: #f4f4f4;
  border: none;
  border-radius: 9999px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #555;
  padding: 0.75rem 1.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}`
  },
  {
    old: /\.techTabBtn:hover \{ background: #fff5ec; color: #ff6a00; \}/,
    new: `.techTabBtn:hover { background: #e8e8e8; color: #111; }`
  },
  {
    old: /\.techTabBtnActive \{ background: #111111; color: #ffffff; box-shadow: 0 4px 12px rgba\(0,0,0,0\.1\); \}/,
    new: `.techTabBtnActive { background: #ff6a00; color: #ffffff; box-shadow: 0 4px 12px rgba(255,106,0,0.3); border: none; }`
  },
  {
    old: /\.techTabBtnActive:hover \{ background: #111111; color: #ffffff; \}/,
    new: `.techTabBtnActive:hover { background: #ff6a00; color: #ffffff; }`
  }
];

updates.forEach(update => {
  content = content.replace(update.old, update.new);
});

fs.writeFileSync(cssPath, content);
console.log("Updated Tab CSS for icons and pill design");
