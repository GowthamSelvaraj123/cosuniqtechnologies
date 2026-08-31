const fs = require('fs');
const path = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(path, 'utf8');

const images = [
    'strategy_story.jpg',
    'brand_story.jpg',
    'design_story.jpg',
    'webdev_story.jpg',
    'mobile_story.jpg',
    'ecommerce_story.jpg',
    'software_story.jpg',
    'cloud_story.jpg'
];

let index = 0;
// We previously set them all to strategy_story.jpg
content = content.replace(/<div className=\{styles\.serviceVisual\}><img src="\/assets\/services\/strategy_story\.jpg" alt="Service Story" style=\{\{ width: '100%', height: 'auto', borderRadius: '16px', mixBlendMode: 'multiply' \}\} \/><\/div>/g, () => {
    if (index < images.length) {
        const img = images[index++];
        return `<div className={styles.serviceVisual}><img src="/assets/services/${img}" alt="Service Story" style={{ width: '100%', height: 'auto', borderRadius: '16px', mixBlendMode: 'multiply' }} /></div>`;
    }
    return `<div className={styles.serviceVisual}></div>`;
});

fs.writeFileSync(path, content);
console.log("Updated all 8 sections to use unique story images!");
