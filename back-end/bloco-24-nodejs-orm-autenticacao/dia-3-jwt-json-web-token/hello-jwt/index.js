require('dotenv').config();
const express = require('express');
const { auth } = require('./middlewares/auth');
const controllers = require('./controllers');
const middlewares = require('./middlewares');
const { admin } = require('./middlewares/admin');

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.post('/login', middlewares.login);

app.use(auth);

app.get('/ping', controllers.ping);
app.get('/users/me', middlewares.userMe);
app.get('/top-secret', admin, middlewares.topSecret);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
