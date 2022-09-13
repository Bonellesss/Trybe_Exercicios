const express = require('express');

const cepRoute = express.Router();

cepRoute.get('/:cep');

module.exports = cepRoute;
