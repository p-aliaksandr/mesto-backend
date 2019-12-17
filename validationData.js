const { celebrate, Joi } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    avatar: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

module.exports = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

module.exports = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required(),
    owner: Joi.string().required(),
  }),
});

module.exports = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

module.exports = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }),
});
