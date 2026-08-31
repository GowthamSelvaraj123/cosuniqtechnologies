const simpleIcons = require('simple-icons');
const fs = require('fs');

const allSlugs = [];
for (const key in simpleIcons) {
  if (simpleIcons[key].title) {
    allSlugs.push(simpleIcons[key].title + ' | ' + simpleIcons[key].slug);
  }
}
fs.writeFileSync('d:\\fullstack\\cosuniqtechnologies\\all_slugs.txt', allSlugs.join('\n'));
