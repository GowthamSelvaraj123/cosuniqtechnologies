const fs = require('fs');

const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let content = fs.readFileSync(tsxPath, 'utf8');

// 1. Update imports
const oldImports = /import \{\s*SiMiro[\s\S]*?\} from "react-icons\/si";/;
const newImports = `import { 
  SiMagento, SiWordpress, SiShopify, SiWebflow, SiHubspot, SiBigcommerce, SiDrupal, 
  SiJoomla, SiWoocommerce, SiCodeigniter, SiHtml5, SiCss3, SiJavascript, SiAngular, 
  SiReact, SiDotnet, SiCsharp, SiFastapi, SiKubernetes, SiDocker, SiPython, SiPhp, 
  SiDjango, SiMicrosoftsqlserver, SiPowerbi, SiMicrosoftazure, SiMysql, SiPostgresql, 
  SiAmazons3, SiAmazonwebservices, SiTwilio, SiMessagebird, SiFirebase, SiGooglecloud, 
  SiAzuredevops, SiMicrosoft, SiApple, SiAndroid, SiFlutter, SiSwift, SiKotlin, 
  SiFigma, SiSketch, SiAdobexd, SiMiro, SiNotion 
} from "react-icons/si";`;
content = content.replace(oldImports, newImports);

// 2. Replace techCategories
const oldTechCats = /const techCategories = \[[\s\S]*?\];/;
const newTechCats = `const techCategories = [
  {
    title: "CMS & eCommerce",
    techs: [
      { name: "Magento", icon: <SiMagento />, color: "#F26322" },
      { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
      { name: "Shopify", icon: <SiShopify />, color: "#7AB55C" },
      { name: "Webflow", icon: <SiWebflow />, color: "#4353FF" },
      { name: "HubSpot", icon: <SiHubspot />, color: "#FF7A59" },
      { name: "BigCommerce", icon: <SiBigcommerce />, color: "#121118" },
      { name: "Drupal", icon: <SiDrupal />, color: "#0678BE" },
      { name: "Joomla!", icon: <SiJoomla />, color: "#5091CD" },
      { name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A" },
      { name: "NopCommerce", icon: <SiCodeigniter />, color: "#4AB6E8" }
    ]
  },
  {
    title: "Frontend",
    techs: [
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
      { name: "Javascript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: ".NET MVC", icon: <SiDotnet />, color: "#512BD4" }
    ]
  },
  {
    title: "Backend",
    techs: [
      { name: "Microsoft .NET", icon: <SiDotnet />, color: "#512BD4" },
      { name: "C#", icon: <SiCsharp />, color: "#239120" },
      { name: "REST API", icon: <SiFastapi />, color: "#009688" },
      { name: "Microservices", icon: <SiKubernetes />, color: "#326CE5" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
      { name: "Django", icon: <SiDjango />, color: "#092E20" }
    ]
  },
  {
    title: "Database",
    techs: [
      { name: "SQL Server", icon: <SiMicrosoftsqlserver />, color: "#CC292B" },
      { name: "Power BI", icon: <SiPowerbi />, color: "#F2C811" },
      { name: "Azure Data Lake", icon: <SiMicrosoftazure />, color: "#0078D4" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" }
    ]
  },
  {
    title: "Cloud",
    techs: [
      { name: "Blob Storage", icon: <SiMicrosoftazure />, color: "#0078D4" },
      { name: "Amazon S3", icon: <SiAmazons3 />, color: "#569A31" },
      { name: "Amazon SES", icon: <SiAmazonwebservices />, color: "#232F3E" },
      { name: "SendGrid", icon: <SiTwilio />, color: "#F22F46" },
      { name: "ClickSend", icon: <SiMessagebird />, color: "#2481D7" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "Azure", icon: <SiMicrosoftazure />, color: "#008AD7" },
      { name: "AWS", icon: <SiAmazonwebservices />, color: "#232F3E" },
      { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
      { name: "DevOps", icon: <SiAzuredevops />, color: "#0078D7" },
      { name: "Power Platform", icon: <SiMicrosoft />, color: "#00A4EF" }
    ]
  },
  {
    title: "Mobile",
    techs: [
      { name: "iOS", icon: <SiApple />, color: "#000000" },
      { name: "Android", icon: <SiAndroid />, color: "#3DDC84" },
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
      { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
      { name: "Swift", icon: <SiSwift />, color: "#F05138" },
      { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" }
    ]
  },
  {
    title: "UI / UX",
    techs: [
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Sketch", icon: <SiSketch />, color: "#F7B500" },
      { name: "Adobe XD", icon: <SiAdobexd />, color: "#FF61F6" },
      { name: "Miro", icon: <SiMiro />, color: "#050038" },
      { name: "Notion", icon: <SiNotion />, color: "#000000" }
    ]
  }
];`;
content = content.replace(oldTechCats, newTechCats);

// 3. Replace TechStackSection
const oldTechStack = /function TechStackSection\(\) \{[\s\S]*?(?=function WhyUsSection|function WorkSection|function FaqSection|function ServicesPage)/;
const newTechStack = `function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.techStack} id="tech">
      <div className={styles.container}>
        <div className={styles.techStackBentoContainer}>
          
          <div className={styles.techTabsSidebar}>
            {techCategories.map((cat, idx) => (
              <button 
                key={cat.title} 
                className={activeTab === idx ? styles.activeTabBtn : styles.tabBtn}
                onClick={() => setActiveTab(idx)}
              >
                {cat.title}
              </button>
            ))}
          </div>
          
          <div className={styles.techCardsGrid}>
            {techCategories[activeTab].techs.map(tech => (
              <div key={tech.name} className={styles.techCard}>
                <div className={styles.techCardIcon} style={{ color: tech.color }}>
                  {tech.icon}
                  <span className={styles.techCardIconText}>{tech.name}</span>
                </div>
                <div className={styles.techCardFooter}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
`;
content = content.replace(oldTechStack, newTechStack);

fs.writeFileSync(tsxPath, content);
console.log("Updated TSX successfully.");
