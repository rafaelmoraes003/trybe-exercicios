const { application } = require('express');
const express = require('express');
const route = express.Router();

const { validateName } = require('./middlewares/validateName');
const { validateInfos } = require('./middlewares/validateInfos');
const { validateSaleDate } = require('./middlewares/validateSaleDate');
const { validateWarranty } = require('./middlewares/validateWarranty');
const { validateSignUp } = require('./middlewares/validateSignup');
const { auth } = require('./middlewares/auth');

route.post('/', auth, validateName, validateInfos, validateSaleDate, validateWarranty, (_req, res) => {
    res.status(200).json({ message: "Produto cadastrado com sucesso!" });
});

route.post('/signup', validateSignUp);

module.exports = route;