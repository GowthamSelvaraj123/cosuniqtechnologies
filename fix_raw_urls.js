const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Update image rendering logic to support raw URLs
const oldImg = /<img\s*src=\{\`https:\/\/cdn\.simpleicons\.org\/\$\{tech\.icon\}\/\$\{tech\.color\}\`\}[\s\S]*?\/>/m;
const newImg = `<img 
                  src={tech.icon.startsWith('http') ? tech.icon : \`https://cdn.simpleicons.org/\${tech.icon}/\${tech.color}\`} 
                  alt={tech.name} 
                  width="50" 
                  height="50" 
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    if (!e.currentTarget.src.includes('ui-avatars')) {
                      e.currentTarget.src = \`https://ui-avatars.com/api/?name=\${encodeURIComponent(tech.name)}&background=f4f4f4&color=\${tech.color}&font-size=0.4&rounded=true\`;
                    }
                  }}
                />`;
content = content.replace(oldImg, newImg);

// Fix specific icons to use raw URLs
content = content.replace(/icon: "css"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"');
content = content.replace(/icon: "csharp"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"');
content = content.replace(/icon: "microsoftsqlserver"/g, 'icon: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"');
content = content.replace(/icon: "powerbi"/g, 'icon: "https://www.google.com/s2/favicons?domain=powerbi.microsoft.com&sz=128"');
content = content.replace(/icon: "azure"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"');
content = content.replace(/icon: "amazonaws"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"');
content = content.replace(/icon: "amazons3"/g, 'icon: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128"');
content = content.replace(/icon: "sendgrid"/g, 'icon: "https://www.google.com/s2/favicons?domain=sendgrid.com&sz=128"');
content = content.replace(/icon: "azuredevops"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"'); // Just use Azure icon for DevOps
content = content.replace(/icon: "microsoft"/g, 'icon: "https://www.google.com/s2/favicons?domain=powerplatform.microsoft.com&sz=128"');
content = content.replace(/icon: "mailchimp"/g, 'icon: "https://www.google.com/s2/favicons?domain=clicksend.com&sz=128"');
content = content.replace(/icon: "swagger"/g, 'icon: "https://www.google.com/s2/favicons?domain=swagger.io&sz=128"');
content = content.replace(/icon: "dotnet"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"');
content = content.replace(/icon: "nopcommerce"/g, 'icon: "https://www.google.com/s2/favicons?domain=nopcommerce.com&sz=128"');
content = content.replace(/icon: "kubernetes"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"');
content = content.replace(/icon: "docker"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"');
content = content.replace(/icon: "python"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"');
content = content.replace(/icon: "php"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"');
content = content.replace(/icon: "mysql"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"');
content = content.replace(/icon: "postgresql"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"');
content = content.replace(/icon: "apple"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"');
content = content.replace(/icon: "android"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"');
content = content.replace(/icon: "flutter"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"');
content = content.replace(/icon: "swift"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"');
content = content.replace(/icon: "kotlin"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"');
content = content.replace(/icon: "firebase"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"');
content = content.replace(/icon: "googlecloud"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"');
content = content.replace(/icon: "figma"/g, 'icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"');


fs.writeFileSync(tsxPath, content);
console.log("Updated to raw URLs for perfect original logos");
