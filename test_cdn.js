const https = require('https');
const options = {
  hostname: 'cdn.simpleicons.org',
  path: '/css3',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log(`css3 statusCode: ${res.statusCode}`);
});
req.end();

const req2 = https.request({hostname: 'cdn.simpleicons.org', path: '/css'}, (res) => {
  console.log(`css statusCode: ${res.statusCode}`);
});
req2.end();

const req3 = https.request({hostname: 'cdn.simpleicons.org', path: '/csharp'}, (res) => {
  console.log(`csharp statusCode: ${res.statusCode}`);
});
req3.end();

const req4 = https.request({hostname: 'cdn.simpleicons.org', path: '/microsoftsqlserver'}, (res) => {
  console.log(`microsoftsqlserver statusCode: ${res.statusCode}`);
});
req4.end();
