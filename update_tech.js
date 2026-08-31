const fs = require('fs');

const tsxPath = 'd:\\fullstack\\cosuniqtechnologies\\components\\ServicesPage.tsx';
let tsxContent = fs.readFileSync(tsxPath, 'utf8');

const newTechStack = `
function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.techStack} id="tech">
      <div className={styles.container}>
        <div className={styles.overviewHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              <span className={styles.sectionEyebrowDot} />
              THE TECHNOLOGY BEHIND THE WORK
            </span>
            <h2 className={styles.overviewHeadline}>
              The right technology for the right problem<span className={styles.overviewDot}>.</span>
            </h2>
          </div>
        </div>
        
        <div className={styles.techTabsContainer}>
          <div className={styles.techTabsHeader}>
            {techCategories.map((cat, idx) => (
              <button 
                key={cat.title} 
                className={`${styles.techTabBtn} ${activeTab === idx ? styles.techTabBtnActive : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {cat.title}
              </button>
            ))}
          </div>
          
          <div className={styles.techTabContent}>
            <div className={styles.techPillsGrid}>
              {techCategories[activeTab].pills.map(p => (
                <div key={p} className={styles.techTabPill}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

const regex = /function TechStackSection\(\) \{[\s\S]*?(?=function WhyUsSection|function WorkSection|function FaqSection|function ServicesPage)/;
tsxContent = tsxContent.replace(regex, newTechStack.trim() + '\n\n');

fs.writeFileSync(tsxPath, tsxContent);
console.log("Updated TechStackSection in TSX");
