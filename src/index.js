import http from 'http';
import {getItems, getItemsById, postItem} from './items.js';
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  console.log('request', req.method, req.url);
  const {method, url} = req;
  const reqParts = url.split('/');
  // TODO: check method, url and generate response accordingly
  // use e.g. if-els
  if (method === 'GET' && url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome to my API</h1>');
    res.end('<p>documentation comes here</p>');
    res.end();
    // eslint-disable-next-line max-len
  } else if (method === 'GET' && reqParts[1] === 'items' && reqParts[2]) {
    console.log('GETting items with id', reqParts[2]);
    getItemsById(res, reqParts[2]);
  } else if (method === 'GET' && reqParts[1] === 'items') {
    console.log('GETting all items');
    getItems(res);
  } else if (method === 'POST' && reqParts[1] === 'items') {
    console.log('POSTing a new item');
    postItem(req, res);
  } else {
    res.writeHead(400, {'Content-Type': 'application/json'});
    res.end('{"message": "404 Resource not found!"}');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// TODO add deleteItem(), putItem() and routing for those in index.js:

export {getItems, getItemsById, postItem};
