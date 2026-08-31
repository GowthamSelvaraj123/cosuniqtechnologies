const https = require('https');
const tests = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
];

tests.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url.split('icons/')[1]} - ${res.statusCode}`);
  });
});
