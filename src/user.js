import users from './mock-data/users.json' assert {type: 'json'};


/**
 * Get all user request handler
 *
 * @param {object} req
 * @param {object} res
 */
const getUsers = (req, res) => {
  res.json(users);
};

/**
 * Get a user by its id
 *
 * @param {object} req
 * @param {object} res
 */
const getUserById = (req, res) => {
  // if user with id exists send it, otherwise send 404
  console.log('getUserById', req.params);
  const user = users.find((element) => element.user_id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    res.json({message: 'User not found.'});
  }
};

/**
 * Add a user
 *
 * @param {object} req
 * @param {object} res
 */
const postUser = (req, res) => {
  console.log('new user posted', req.body);
  const newId = Math.floor(Math.random() * 9000 + 1000);
  if (req.body.username) {
    users.push({
      user_id: newId,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
};

/**
 * Modify user by its ID
 *
 * @param {object} req
 * @param {object} res
 */
const putUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((element) => element.user_id === id);
  if (index !== -1) {
    users[index].username = req.body.username;
    users[index].password = req.body.password;
    console.log(index);
    res.sendStatus(200);
  } else {
    res.status(404);
    res.json({message: 'User not found.'});
  }
};

/**
 * Delete user by its ID
 *
 * @param {object} req
 * @param {object} res
 */
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((element) => element.user_id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.status(404);
    res.json({message: 'User not found.'});
  }
};

export {getUsers, getUserById, postUser, putUser, deleteUser};