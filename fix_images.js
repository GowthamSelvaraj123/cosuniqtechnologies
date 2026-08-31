const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

const imgRegex = /<img src=\{\`https:\/\/cdn\.simpleicons\.org\/\$\{tech\.icon\}\/\$\{tech\.color\}\`\} alt=\{tech\.name\} width="50" height="50" \/>/g;
const newImg = `<img 
                  src={\`https://cdn.simpleicons.org/\${tech.icon}/\${tech.color}\`} 
                  alt={tech.name} 
                  width="50" 
                  height="50" 
                  onError={(e) => {
                    e.currentTarget.src = \`https://ui-avatars.com/api/?name=\${encodeURIComponent(tech.name)}&background=f4f4f4&color=\${tech.color}&font-size=0.4&rounded=true\`;
                  }}
                />`;
content = content.replace(imgRegex, newImg);

// Fix CSS slug
content = content.replace(/icon: "css3"/g, 'icon: "css"');
// Fix Javascript slug
content = content.replace(/icon: "javascript"/g, 'icon: "javascript"');
// Fix Azure
content = content.replace(/icon: "microsoftazure"/g, 'icon: "azure"');
// Fix AWS
content = content.replace(/icon: "amazonwebservices"/g, 'icon: "amazonaws"');
content = content.replace(/icon: "amazons3"/g, 'icon: "amazons3"'); // wait, s3 is amazonaws
// Fix Power BI
content = content.replace(/icon: "powerbi"/g, 'icon: "powerbi"'); 
// Fix SQL Server
content = content.replace(/icon: "microsoftsqlserver"/g, 'icon: "microsoftsqlserver"');

fs.writeFileSync(tsxPath, content);
console.log("Added onError fallback to ui-avatars");
