const express = require('express');
const { getCep, createCep } = require('../controllers/cep');

const cep = express.Router();

cep.get('/:cep', getCep);

cep.post('/', createCep);

module.exports = { cep };