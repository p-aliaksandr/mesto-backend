const routerUsers = require('express').Router();

const {
  getUsers,
  getUserId,
  createUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

routerUsers.get('/users', getUsers);
routerUsers.get('/users/:userId', getUserId);
routerUsers.post('/users', createUser);
routerUsers.patch('/users/me', updateProfile);
routerUsers.patch('/users/me/avatar', updateAvatar);

module.exports = routerUsers;
