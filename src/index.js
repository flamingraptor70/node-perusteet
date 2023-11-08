import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { getItems, getItemsById, postItem, deleteItem, putItem } from "./items.js";
import { getUsers, getUserById, postUser, deleteUser, putUser } from "./user.js";
import { getMedia, getMediaById, postMedia, putMedia, deleteMedia } from "./media.js";

const hostname = "127.0.0.1";
const app = express(); // create express app
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set pug as the template engine
app.set("view engine", "pug");
app.set("views", "src/views");

// dynamic content rendering of PUG
app.get("/", (req, res) => {
  res.render("index", {
    title: "This title was rendered with JS PUG/Express",
    message: "This message was rendered with JS PUG/Express",
  });
});

// dummy routing example
app.get('/kukkuu', (request, response) => {
  const myResponse = {message: 'No moro!'};
  //response.json(myResponse);
  response.sendStatus(200);
});

// other dummy pug example
app.get('/:message', (req, res) => {
  const values = {title: 'Dummy REST API docs', message: req.params.message};
  res.render('home', values);
});


// server static file from public folder
app.use(express.json()) // for parsing application/json
app.use('/static', express.static(path.join(__dirname, 'public')));


// API items endpoints
// get all items
app.get("/api/items", getItems);
// get items by id
app.get("/api/items/:id", getItemsById);
// modify
app.put("/api/items", putItem);
// add new item
app.post("/api/items", postItem);
// remove existing item
app.delete("/api/items", deleteItem);


// media endpoints
// get all media
app.get("/api/media", getMedia);
// get media by id
app.get('/api/media/:id', getMediaById);
// add new media
app.post('/api/media', postMedia);
// put media
app.put('/api/media/:id', putMedia);
// delete media
app.delete('/api/media/:id', deleteMedia);


// user endpoints
//get all users
app.get("/api/user", getUsers);
// get user by id
app.get('/api/user/:id' , getUserById);
// add new user
app.post('/api/user', postUser);
// put user
app.put('/api/user/:id', putUser);
// delete user
app.delete('/api/user/:id', deleteUser);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); // start the server listening to port 3000
