const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// 1. Restore original working imports
const importsRegex = /import \{\s*FaAws[\s\S]*?from "react-icons\/fa6";/g;
const originalImports = `import { 
  SiMiro, SiNotion, SiFigma, SiReact, SiNextdotjs, SiNodedotjs, 
  SiPhp, SiLaravel, SiFramer, SiSketch, SiShopify, SiStripe, SiGraphql, 
  SiDocker, SiPostgresql, SiTypescript, SiFlutter, SiFirebase, SiSwift, 
  SiGithubactions, SiLinux 
} from "react-icons/si";
import { FaAws, FaCubes, FaPalette, FaImage, FaVideo } from "react-icons/fa6";`;
content = content.replace(importsRegex, originalImports);

// 2. Re-write techCategories to use simpleicons CDN
const oldTechCats = /const techCategories = \[[\s\S]*?\];/;
const newTechCats = `const techCategories = [
  {
    title: "CMS & eCommerce",
    techs: [
      { name: "Magento", icon: "magento", color: "F26322" },
      { name: "WordPress", icon: "wordpress", color: "21759B" },
      { name: "Shopify", icon: "shopify", color: "7AB55C" },
      { name: "Webflow", icon: "webflow", color: "4353FF" },
      { name: "HubSpot", icon: "hubspot", color: "FF7A59" },
      { name: "BigCommerce", icon: "bigcommerce", color: "121118" },
      { name: "Drupal", icon: "drupal", color: "0678BE" },
      { name: "Joomla!", icon: "joomla", color: "5091CD" },
      { name: "WooCommerce", icon: "woocommerce", color: "96588A" },
      { name: "NopCommerce", icon: "nopcommerce", color: "4AB6E8" }
    ]
  },
  {
    title: "Frontend",
    techs: [
      { name: "HTML", icon: "html5", color: "E34F26" },
      { name: "CSS", icon: "css3", color: "1572B6" },
      { name: "Javascript", icon: "javascript", color: "F7DF1E" },
      { name: "Angular", icon: "angular", color: "DD0031" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: ".NET MVC", icon: "dotnet", color: "512BD4" }
    ]
  },
  {
    title: "Backend",
    techs: [
      { name: "Microsoft .NET", icon: "dotnet", color: "512BD4" },
      { name: "C#", icon: "csharp", color: "239120" },
      { name: "REST API", icon: "fastapi", color: "009688" },
      { name: "Microservices", icon: "kubernetes", color: "326CE5" },
      { name: "Docker", icon: "docker", color: "2496ED" },
      { name: "Python", icon: "python", color: "3776AB" },
      { name: "PHP", icon: "php", color: "777BB4" },
      { name: "Django", icon: "django", color: "092E20" }
    ]
  },
  {
    title: "Database",
    techs: [
      { name: "SQL Server", icon: "microsoftsqlserver", color: "CC292B" },
      { name: "Power BI", icon: "powerbi", color: "F2C811" },
      { name: "Azure Data Lake", icon: "microsoftazure", color: "0078D4" },
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "PostgreSQL", icon: "postgresql", color: "4169E1" }
    ]
  },
  {
    title: "Cloud",
    techs: [
      { name: "Blob Storage", icon: "microsoftazure", color: "0078D4" },
      { name: "Amazon S3", icon: "amazons3", color: "569A31" },
      { name: "Amazon SES", icon: "amazonwebservices", color: "232F3E" },
      { name: "SendGrid", icon: "twilio", color: "F22F46" },
      { name: "ClickSend", icon: "messagebird", color: "2481D7" },
      { name: "Firebase", icon: "firebase", color: "FFCA28" },
      { name: "Azure", icon: "microsoftazure", color: "008AD7" },
      { name: "AWS", icon: "amazonwebservices", color: "232F3E" },
      { name: "Google Cloud", icon: "googlecloud", color: "4285F4" },
      { name: "DevOps", icon: "azuredevops", color: "0078D7" },
      { name: "Power Platform", icon: "microsoft", color: "00A4EF" }
    ]
  },
  {
    title: "Mobile",
    techs: [
      { name: "iOS", icon: "apple", color: "000000" },
      { name: "Android", icon: "android", color: "3DDC84" },
      { name: "Flutter", icon: "flutter", color: "02569B" },
      { name: "React Native", icon: "react", color: "61DAFB" },
      { name: "Swift", icon: "swift", color: "F05138" },
      { name: "Kotlin", icon: "kotlin", color: "7F52FF" }
    ]
  },
  {
    title: "UI / UX",
    techs: [
      { name: "Figma", icon: "figma", color: "F24E1E" },
      { name: "Sketch", icon: "sketch", color: "F7B500" },
      { name: "Adobe XD", icon: "adobexd", color: "FF61F6" },
      { name: "Miro", icon: "miro", color: "050038" },
      { name: "Notion", icon: "notion", color: "000000" }
    ]
  }
];`;
content = content.replace(oldTechCats, newTechCats);

// 3. Update TechStackSection render method
const techStackRegex = /<div className=\{styles\.techCardIcon\} style=\{\{ color: tech\.color \}\}>[\s\S]*?<\/div>/;
content = content.replace(techStackRegex, `<div className={styles.techCardIcon}>
                  <img src={\`https://cdn.simpleicons.org/\${tech.icon}/\${tech.color}\`} alt={tech.name} width="50" height="50" />
                </div>`);

fs.writeFileSync(tsxPath, content);
console.log("Fixed all imports and switched to SimpleIcons CDN");
