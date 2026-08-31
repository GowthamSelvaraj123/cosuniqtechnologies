const fs = require('fs');
const path = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(path, 'utf8');

const images = [
    'strategy_nobg.png',
    'brand_nobg.png',
    'design_nobg.png',
    'webdev_nobg.png',
    'mobile_nobg.png',
    'ecommerce_nobg.png',
    'software_nobg.png',
    'cloud_nobg.png'
];

let index = 0;
// We previously left the wrappers as empty or with mixBlendMode
content = content.replace(/<div className=\{styles\.serviceVisual\}>(.*?)<\/div>/g, () => {
    if (index < images.length) {
        const img = images[index++];
        return `<div className={styles.serviceVisual}><img src="/assets/services/${img}" alt="Service Visual" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} /></div>`;
    }
    return `<div className={styles.serviceVisual}></div>`;
});

fs.writeFileSync(path, content);
console.log("Updated to use true transparent PNGs!");
