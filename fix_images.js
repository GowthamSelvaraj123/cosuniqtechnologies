const fs = require('fs');
const path = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// A function to replace the visual block within a specific section id
function updateSectionImage(id, imageName) {
    const regex = new RegExp(`(<section[^>]+id="${id}"[^>]*>[\\s\\S]*?<div className=\\{styles\\.serviceVisual\\}>)(<img[^>]+>)(<\\/div>)`);
    content = content.replace(regex, `$1<img src="/assets/services/${imageName}" alt="${id} Story" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />$3`);
}

updateSectionImage('strategy', 'strategy_story.png');
updateSectionImage('brand', 'brand_story.png');
updateSectionImage('web-dev', 'webdev_story.png');
updateSectionImage('design', 'design_story.jpg');
updateSectionImage('ecommerce', 'ecommerce_story.jpg');
updateSectionImage('software', 'software_story.png');
updateSectionImage('mobile', 'mobile_story.png');
updateSectionImage('cloud', 'cloud_story.png');

fs.writeFileSync(path, content);
console.log("Updated images perfectly mapped to their sections!");
