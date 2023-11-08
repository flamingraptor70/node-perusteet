import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { getItems, getItemsById, postItem } from "./items.js";
import { getUsers } from "./user.js";
import { getMedia } from "./media.js";

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




// example generic items api

// get all items
app.get("/api/items", getItems);
// get items by id
app.get("/api/items/:id", getItemsById);
// modify
app.put("/api/items");
// add new item
app.post("/api/items", postItem);
// remove existing item
app.delete("/api/items");

// media endpoints
app.get("/api/media", getMedia);

// user endpoints
app.get("/api/user", getUsers);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); // start the server listening to port 3000
