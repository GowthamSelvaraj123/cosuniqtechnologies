const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

content = content.replace(/nopcommerce/g, 'dotnet');
content = content.replace(/twilio/g, 'sendgrid');
content = content.replace(/messagebird/g, 'mailchimp');
content = content.replace(/fastapi/g, 'swagger');
content = content.replace(/amazonwebservices/g, 'amazonaws');
content = content.replace(/microsoftsqlserver/g, 'microsoftsqlserver'); // already correct

fs.writeFileSync(tsxPath, content);
console.log("Fixed slugs");
