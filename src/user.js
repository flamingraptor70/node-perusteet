import users from './mock-data/users.json' assert {type: 'json'};

const getUsers = (req, res) => {
  res.json(users);
};


export {getUsers};