const routerCards = require('express').Router();
const { cardsValidation } = require('../validationData');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

routerCards.get('/cards', getCards);
routerCards.post('/cards', cardsValidation, createCard);
routerCards.delete('/cards/:cardId', deleteCard);
routerCards.put('/cards/:cardId/likes', likeCard);
routerCards.delete('/cards/:cardId/likes', dislikeCard);

module.exports = routerCards;
