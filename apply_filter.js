const fs = require('fs');
const cssPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.module.css';
let content = fs.readFileSync(cssPath, 'utf8');

const oldIconCss = /\.techCardIcon \{\s*flex-grow: 1;\s*display: flex;\s*align-items: center;\s*justify-content: center;\s*padding: 2rem 1rem;\s*\}/;
const newIconCss = `.techCardIcon {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.techCardIcon img {
  /* Converts any logo to Cosuniq Orange (#f26322) */
  filter: brightness(0) saturate(100%) invert(47%) sepia(49%) saturate(3015%) hue-rotate(346deg) brightness(99%) contrast(92%);
  opacity: 0.85;
  transition: all 0.3s ease;
}

.techCard:hover .techCardIcon img {
  /* Restores original color on hover */
  filter: none;
  opacity: 1;
}`;

content = content.replace(oldIconCss, newIconCss);
fs.writeFileSync(cssPath, content);
console.log("Added theme color filter to CSS");
