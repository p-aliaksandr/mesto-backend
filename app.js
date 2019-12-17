require('dotenv').config();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const validationData = require('./validationData');
const { login, createUser } = require('./controllers/users');
const { createCard } = require('./controllers/cards');
const { updateProfile, updateAvatar } = require('./controllers/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use(helmet());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(requestLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', validationData, createUser);
app.post('/signin', validationData, login);
app.post('/cards', validationData, createCard);
app.patch('/users/me', validationData, updateProfile);
app.patch('/users/me/avatar', validationData, updateAvatar);


app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(auth);

app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.use('*', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.status(404).send('{ "message": "Запрашиваемый ресурс не найден" }');
});

app.use(errorLogger);

app.use(errors());

// eslint-disable-next-line
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server has been started on port ${PORT}`);
});
