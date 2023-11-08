// mock items data
const items = [
  {id: 5, name: 'porkkana'},
  {id: 6, name: 'omena'},
  {id: 19, name: 'appelsiini'},
];

/**
 * Get all items request handler
 * Amount of  objects in response can be limited by using 'limit' query param
 * 
 * @param {object} req - http request 
 * @param {object} res - http response
 */
const getItems = (req, res) => {
  const limit = req.query.limit;
  // TODO: check that the param value is int before using
  if (limit) {
    res.json(items.slice(0, limit));
  } else {
    res.json(items);
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItemsById = (req, res) => {
  // if item with id exists send it, otherwise send 404
  console.log('getItemsById', req.params);
  const item = items.find((element) => element.id == req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404);
    res.json({message: "Item not found."});
  }
};

const postItem = (req, res) => {
  console.log('new item posted', req.body);
  // TODO: check last weeks example for generating an id
  if (req.body.name) {
    items.push({id: 0, name: req.body.name});
    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
};

// TODO: add deleteItem(), putItem() and routing for those in index.js
export {getItems, getItemsById, postItem};