const fs = require('fs');
const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// Replace the techCategories array with a completely Fa6-based one
const oldTechCats = /const techCategories = \[[\s\S]*?\];/;
const newTechCats = `const techCategories = [
  {
    title: "CMS & eCommerce",
    techs: [
      { name: "Magento", icon: <FaStore />, color: "#F26322" },
      { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
      { name: "Shopify", icon: <FaShopify />, color: "#7AB55C" },
      { name: "Webflow", icon: <FaCode />, color: "#4353FF" },
      { name: "HubSpot", icon: <FaHubspot />, color: "#FF7A59" },
      { name: "BigCommerce", icon: <FaStore />, color: "#121118" },
      { name: "Drupal", icon: <FaDrupal />, color: "#0678BE" },
      { name: "Joomla!", icon: <FaJoomla />, color: "#5091CD" },
      { name: "WooCommerce", icon: <FaStore />, color: "#96588A" },
      { name: "NopCommerce", icon: <FaStore />, color: "#4AB6E8" }
    ]
  },
  {
    title: "Frontend",
    techs: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Javascript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: ".NET MVC", icon: <FaCode />, color: "#512BD4" }
    ]
  },
  {
    title: "Backend",
    techs: [
      { name: "Microsoft .NET", icon: <FaWindows />, color: "#512BD4" },
      { name: "C#", icon: <FaCode />, color: "#239120" },
      { name: "REST API", icon: <FaServer />, color: "#009688" },
      { name: "Microservices", icon: <FaCubes />, color: "#326CE5" },
      { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
      { name: "Django", icon: <FaCode />, color: "#092E20" }
    ]
  },
  {
    title: "Database",
    techs: [
      { name: "SQL Server", icon: <FaDatabase />, color: "#CC292B" },
      { name: "Power BI", icon: <FaDatabase />, color: "#F2C811" },
      { name: "Azure Data Lake", icon: <FaCloud />, color: "#0078D4" },
      { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
      { name: "PostgreSQL", icon: <FaDatabase />, color: "#4169E1" }
    ]
  },
  {
    title: "Cloud",
    techs: [
      { name: "Blob Storage", icon: <FaCloud />, color: "#0078D4" },
      { name: "Amazon S3", icon: <FaAws />, color: "#569A31" },
      { name: "Amazon SES", icon: <FaAws />, color: "#232F3E" },
      { name: "SendGrid", icon: <FaEnvelope />, color: "#F22F46" },
      { name: "ClickSend", icon: <FaEnvelope />, color: "#2481D7" },
      { name: "Firebase", icon: <FaCloud />, color: "#FFCA28" },
      { name: "Azure", icon: <FaCloud />, color: "#008AD7" },
      { name: "AWS", icon: <FaAws />, color: "#232F3E" },
      { name: "Google Cloud", icon: <FaCloud />, color: "#4285F4" },
      { name: "DevOps", icon: <FaCloud />, color: "#0078D7" },
      { name: "Power Platform", icon: <FaWindows />, color: "#00A4EF" }
    ]
  },
  {
    title: "Mobile",
    techs: [
      { name: "iOS", icon: <FaApple />, color: "#000000" },
      { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
      { name: "Flutter", icon: <FaMobileScreen />, color: "#02569B" },
      { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
      { name: "Swift", icon: <FaCode />, color: "#F05138" },
      { name: "Kotlin", icon: <FaCode />, color: "#7F52FF" }
    ]
  },
  {
    title: "UI / UX",
    techs: [
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Sketch", icon: <FaPenNib />, color: "#F7B500" },
      { name: "Adobe XD", icon: <FaPalette />, color: "#FF61F6" },
      { name: "Miro", icon: <FaPalette />, color: "#050038" },
      { name: "Notion", icon: <FaCode />, color: "#000000" }
    ]
  }
];`;
content = content.replace(oldTechCats, newTechCats);

// Replace imports: completely remove Si imports and add all required Fa6 imports
const siImportRegex = /import\s+\{[^}]*\}\s+from\s+"react-icons\/si";/g;
content = content.replace(siImportRegex, '');

const oldFaImports = /import \{\s*FaAws, FaCubes, FaPalette, FaImage, FaVideo, FaStore, FaEnvelope, FaWindows, FaDatabase\s*\} from "react-icons\/fa6";/;
const newFaImports = `import { FaAws, FaCubes, FaPalette, FaImage, FaVideo, FaStore, FaEnvelope, FaWindows, FaDatabase, FaCloud, FaCode, FaWordpress, FaShopify, FaHubspot, FaDrupal, FaJoomla, FaHtml5, FaCss3Alt, FaJs, FaAngular, FaReact, FaServer, FaDocker, FaPython, FaPhp, FaApple, FaAndroid, FaMobileScreen, FaFigma, FaPenNib } from "react-icons/fa6";`;
content = content.replace(oldFaImports, newFaImports);

fs.writeFileSync(tsxPath, content);
console.log("Rewritten to use stable Fa6 icons");
