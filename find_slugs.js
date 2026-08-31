async function run() {
  const res = await fetch("https://raw.githubusercontent.com/simple-icons/simple-icons/master/_data/simple-icons.json");
  const data = await res.json();
  const icons = data.icons;
  const searchFor = ['css', 'c sharp', 'sql', 'power', 'azure', 'amazon', 's3', 'aws', 'devops', 'power platform', 'sendgrid', 'blob', 'data lake'];
  
  searchFor.forEach(term => {
    const found = icons.filter(i => i.title.toLowerCase().includes(term) || i.slug.toLowerCase().includes(term));
    console.log(`Search '${term}':`, found.map(i => i.slug).slice(0, 3));
  });
}
run();
