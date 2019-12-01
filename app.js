const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;

const app = express();

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

app.use('/', auth, bodyParser.json());
app.use('/', auth, bodyParser.urlencoded({ extended: true }));
app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.post('/signin', login);
app.post('/signup', createUser);
app.use('/', auth, createUser);
app.use(helmet());
app.use(limiter);
app.use('*', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.status(404).send('{ "message": "Запрашиваемый ресурс не найден" }');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server has been started on port ${PORT}`);
});
