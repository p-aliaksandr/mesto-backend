const routerUsers = require('express').Router();
const { meValidation, avatarValidation } = require('../validationData');

const {
  getUsers,
  getUserId,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

routerUsers.get('/users', getUsers);
routerUsers.get('/users/:userId', getUserId);
routerUsers.patch('/users/me', meValidation, updateProfile);
routerUsers.patch('/users/me/avatar', avatarValidation, updateAvatar);

module.exports = routerUsers;
