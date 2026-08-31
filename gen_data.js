const fs = require('fs');

const data = [
  {
    title: "CMS & eCommerce",
    techs: [
      { name: "Magento", icon: "SiMagento", color: "#F26322" },
      { name: "WordPress", icon: "SiWordpress", color: "#21759B" },
      { name: "Shopify", icon: "SiShopify", color: "#7AB55C" },
      { name: "Webflow", icon: "SiWebflow", color: "#4353FF" },
      { name: "HubSpot", icon: "SiHubspot", color: "#FF7A59" },
      { name: "BigCommerce", icon: "SiBigcommerce", color: "#121118" },
      { name: "Drupal", icon: "SiDrupal", color: "#0678BE" },
      { name: "Joomla", icon: "SiJoomla", color: "#5091CD" },
      { name: "WooCommerce", icon: "SiWoocommerce", color: "#96588A" },
      { name: "NopCommerce", icon: "SiCodeigniter", color: "#4AB6E8" } // Placeholder
    ]
  },
  {
    title: "Frontend",
    techs: [
      { name: "HTML", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS", icon: "SiCss3", color: "#1572B6" },
      { name: "Javascript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "Angular", icon: "SiAngular", color: "#DD0031" },
      { name: "React", icon: "SiReact", color: "#61DAFB" },
      { name: ".NET MVC", icon: "SiDotnet", color: "#512BD4" }
    ]
  },
  {
    title: "Backend",
    techs: [
      { name: "Microsoft .NET", icon: "SiDotnet", color: "#512BD4" },
      { name: "C#", icon: "SiCsharp", color: "#239120" },
      { name: "REST API", icon: "SiFastapi", color: "#009688" }, // Placeholder
      { name: "Microservices", icon: "SiKubernetes", color: "#326CE5" }, // Placeholder
      { name: "Docker", icon: "SiDocker", color: "#2496ED" },
      { name: "Python", icon: "SiPython", color: "#3776AB" },
      { name: "PHP", icon: "SiPhp", color: "#777BB4" },
      { name: "Django", icon: "SiDjango", color: "#092E20" }
    ]
  },
  {
    title: "Database",
    techs: [
      { name: "SQL Server", icon: "SiMicrosoftsqlserver", color: "#CC292B" },
      { name: "Power BI", icon: "SiPowerbi", color: "#F2C811" },
      { name: "Azure Data Lake", icon: "SiMicrosoftazure", color: "#0078D4" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" }
    ]
  },
  {
    title: "Cloud",
    techs: [
      { name: "Blob Storage", icon: "SiMicrosoftazure", color: "#0078D4" },
      { name: "Amazon S3", icon: "SiAmazons3", color: "#569A31" },
      { name: "Amazon SES", icon: "SiAmazonwebservices", color: "#232F3E" },
      { name: "SendGrid", icon: "SiTwilio", color: "#F22F46" }, // close enough
      { name: "ClickSend", icon: "SiMessagebird", color: "#2481D7" },
      { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
      { name: "Azure", icon: "SiMicrosoftazure", color: "#008AD7" },
      { name: "AWS", icon: "SiAmazonwebservices", color: "#232F3E" },
      { name: "Google Cloud", icon: "SiGooglecloud", color: "#4285F4" },
      { name: "DevOps", icon: "SiAzuredevops", color: "#0078D7" },
      { name: "Power Platform", icon: "SiMicrosoft", color: "#00A4EF" }
    ]
  },
  {
    title: "Mobile",
    techs: [
      { name: "iOS", icon: "SiApple", color: "#000000" },
      { name: "Android", icon: "SiAndroid", color: "#3DDC84" },
      { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
      { name: "React Native", icon: "SiReact", color: "#61DAFB" },
      { name: "Swift", icon: "SiSwift", color: "#F05138" },
      { name: "Kotlin", icon: "SiKotlin", color: "#7F52FF" }
    ]
  },
  {
    title: "UI / UX",
    techs: [
      { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
      { name: "Sketch", icon: "SiSketch", color: "#F7B500" },
      { name: "Adobe XD", icon: "SiAdobexd", color: "#FF61F6" },
      { name: "Miro", icon: "SiMiro", color: "#050038" },
      { name: "Notion", icon: "SiNotion", color: "#000000" }
    ]
  }
];

// Generate imports
const uniqueIcons = new Set();
data.forEach(cat => {
  cat.techs.forEach(t => uniqueIcons.add(t.icon));
});
const imports = Array.from(uniqueIcons).join(", ");
console.log(`import { ${imports} } from "react-icons/si";`);

fs.writeFileSync('d:\\fullstack\\cosuniqtechnologies\\techdata.json', JSON.stringify(data, null, 2));
