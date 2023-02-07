const http = require('http');


const port = process.env.PORT || 3000;

const server = http.createServer("/welcome",(req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(`0.0.0.0:${port}`, () => {
  console.log(`Server running `);
});
