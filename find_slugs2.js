const simpleIcons = require('simple-icons');

const searchTerms = ['css', 'c#', 'sql server', 'power bi', 'azure', 'amazon', 'devops', 'power platform', 'sendgrid', 'blob', 'data lake'];

searchTerms.forEach(term => {
  const matches = [];
  for (const slug in simpleIcons) {
    if (simpleIcons[slug].title.toLowerCase().includes(term.toLowerCase())) {
      matches.push({ title: simpleIcons[slug].title, slug: simpleIcons[slug].slug });
    }
  }
  console.log(`Search: '${term}' ->`, matches.slice(0, 3));
});
