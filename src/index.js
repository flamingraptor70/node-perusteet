// index.js
import http from 'http';
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('request', req.method, req.url);
  // TODO: check method, url and generate response accordingly
  // use e.g. if-else
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h3>Welcome to my REST API!</h3>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
