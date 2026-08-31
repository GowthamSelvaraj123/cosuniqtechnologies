const fs = require('fs');
const cssPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.module.css';
let content = fs.readFileSync(cssPath, 'utf8');

const updates = [
  // 1. Add background gradient to techStack
  {
    old: /\.techStack \{ padding: 8rem 0; background: #ffffff !important; \}/,
    new: `.techStack { padding: 8rem 0; background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%) !important; position: relative; overflow: hidden; }`
  },
  // 2. Enhance techCard with hover lift and premium shadow
  {
    old: /\.techCard \{\s*background: #ffffff;\s*border-radius: 12px;\s*display: flex;\s*flex-direction: column;\s*overflow: hidden;\s*box-shadow: 0 4px 15px rgba\(0,0,0,0\.03\);\s*border: 1px solid rgba\(0,0,0,0\.04\);\s*\}/,
    new: `.techCard {
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.04);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: default;
}
.techCard:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(255,106,0,0.08);
  border-color: rgba(255,106,0,0.15);
}`
  },
  // 3. Add premium image bounce on hover
  {
    old: /\.techCardIcon img \{\s*\/\* Converts any logo to Cosuniq Orange \(#f26322\) \*\/\s*filter: brightness\(0\) saturate\(100%\) invert\(47%\) sepia\(49%\) saturate\(3015%\) hue-rotate\(346deg\) brightness\(99%\) contrast\(92%\);\s*opacity: 0\.85;\s*transition: all 0\.3s ease;\s*\}/,
    new: `.techCardIcon img {
  filter: brightness(0) saturate(100%) invert(47%) sepia(49%) saturate(3015%) hue-rotate(346deg) brightness(99%) contrast(92%);
  opacity: 0.85;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform, filter;
}`
  },
  {
    old: /\.techCard:hover \.techCardIcon img \{\s*\/\* Restores original color on hover \*\/\s*filter: none;\s*opacity: 1;\s*\}/,
    new: `.techCard:hover .techCardIcon img {
  filter: none;
  opacity: 1;
  transform: scale(1.15);
}`
  },
  // 4. Improve card footer layout
  {
    old: /\.techCardFooter \{\s*background: #f4f4f4;\s*padding: 0\.5rem;\s*font-size: 0\.75rem;\s*font-weight: 600;\s*text-align: center;\s*color: #333;\s*\}/,
    new: `.techCardFooter {
  background: #f9f9f9;
  padding: 0.75rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  color: #555;
  border-top: 1px solid rgba(0,0,0,0.03);
  transition: all 0.3s ease;
}
.techCard:hover .techCardFooter {
  background: #fff5ec;
  color: #ff6a00;
}`
  },
  // 5. Enhance Tabs
  {
    old: /\.techTabsHeader \{\s*display: flex;\s*flex-wrap: wrap;\s*gap: 1rem;\s*margin-bottom: 3rem;\s*border-bottom: 1px solid #f0e2d6;\s*\}/,
    new: `.techTabsHeader {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}`
  },
  {
    old: /\.techTabBtnActive \{\s*color: #111;\s*\}/,
    new: `.techTabBtnActive { color: #ff6a00; }`
  },
  {
    old: /\.techTabBtnActive::after \{\s*content: "";\s*position: absolute;\s*bottom: -1px;\s*left: 0;\s*width: 100%;\s*height: 3px;\s*background: #ff6a00;\s*\}/,
    new: `.techTabBtnActive::after {
  content: ""; position: absolute; bottom: -1px; left: 0; width: 100%; height: 3px; background: #ff6a00;
  border-top-left-radius: 4px; border-top-right-radius: 4px;
}`
  },
  // 6. Make grid responsive
  {
    old: /\.techCategories \{\s*display: grid;\s*grid-template-columns: repeat\(5,1fr\);\s*gap: 2rem;\s*\}/,
    new: `.techCategories { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 2rem; }`
  }
];

updates.forEach(update => {
  content = content.replace(update.old, update.new);
});

fs.writeFileSync(cssPath, content);
console.log("Applied premium aesthetic upgrades to Tech Stack section");
