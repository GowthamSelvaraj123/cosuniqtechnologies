const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Replace remaining SimpleIcons with exact Devicon / Favicon URLs to match original logos
content = content.replace(/icon: "wordpress"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"');
content = content.replace(/icon: "shopify"/g, 'icon: "https://www.google.com/s2/favicons?domain=shopify.com&sz=128"');
content = content.replace(/icon: "webflow"/g, 'icon: "https://www.google.com/s2/favicons?domain=webflow.com&sz=128"');
content = content.replace(/icon: "hubspot"/g, 'icon: "https://www.google.com/s2/favicons?domain=hubspot.com&sz=128"');
content = content.replace(/icon: "bigcommerce"/g, 'icon: "https://www.google.com/s2/favicons?domain=bigcommerce.com&sz=128"');
content = content.replace(/icon: "drupal"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg"');
content = content.replace(/icon: "joomla"/g, 'icon: "https://www.google.com/s2/favicons?domain=joomla.org&sz=128"');
content = content.replace(/icon: "woocommerce"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg"');
content = content.replace(/icon: "html5"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"');
content = content.replace(/icon: "javascript"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"');
content = content.replace(/icon: "angular"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"');
content = content.replace(/icon: "react"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"');
content = content.replace(/icon: "django"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"');
content = content.replace(/icon: "sketch"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg"');
content = content.replace(/icon: "adobexd"/g, 'icon: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128"');
content = content.replace(/icon: "miro"/g, 'icon: "https://www.google.com/s2/favicons?domain=miro.com&sz=128"');
content = content.replace(/icon: "notion"/g, 'icon: "https://www.google.com/s2/favicons?domain=notion.so&sz=128"');

fs.writeFileSync(tsxPath, content);
console.log("Replaced all remaining SimpleIcons with original logos");
