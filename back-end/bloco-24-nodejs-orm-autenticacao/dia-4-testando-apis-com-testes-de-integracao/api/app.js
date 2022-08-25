const express = require('express');
const routes = require('./routes');
const { auth } = require('../middlewares/auth');

const app = express();

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.post('/api/login', routes.login);
apiRoutes.get('/api/users/:id', auth, routes.getUserById);

app.use(apiRoutes);

module.exports = app;