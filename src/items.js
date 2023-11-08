// mock items data
const items = [
  {id: 5, name: 'porkkana'},
  {id: 6, name: 'omena'},
  {id: 19, name: 'appelsiini'},
];

/**
 * Get all items request handler
 * Amount of  objects in response can be limited by using 'limit' query parameter
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
 * Get item by id
 * @param {Object}} req 
 * @param {Object}} res 
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

/**
 * Add a new item
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const postItem = (req, res) => {
  console.log('new item posted', req.body);
  if (req.body.name) {
    const id = items.length + 1; // Generate a new id
    items.push({id, name: req.body.name});
    res.status(201).json({id, name: req.body.name});
  } else {
    res.status(400).json({message: "Bad request."});
  }
};


// Modify item
/**
 * Modify item by its :ID
 * 
 * @param {object} req - http request 
 * @param {object} res - http response
 */
const putItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const index = items.findIndex(item => item.id === id);

  if (index !== -1) {
    items[index] = { id, name };
    res.status(200).json({ message: `Item with id ${id} updated.` });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

// Remove existing item
/**
 * Delete item by its :ID
 * 
 * @param {object} req - http request 
 * @param {object} res - http response
 */
const deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === id);

  if (index !== -1) {
    items.splice(index, 1);
    res.status(200).json({ message: `Item with id ${id} deleted.` });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

// TODO: add deleteItem(), putItem() and routing for those in index.js
export {getItems, getItemsById, postItem, deleteItem, putItem};