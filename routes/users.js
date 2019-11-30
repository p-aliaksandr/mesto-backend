const routerUsers = require('express').Router();

const {
  getUsers,
  getUserId,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

routerUsers.get('/users', getUsers);
routerUsers.get('/users/:userId', getUserId);
routerUsers.patch('/users/me', updateProfile);
routerUsers.patch('/users/me/avatar', updateAvatar);

module.exports = routerUsers;
