const express = require('express');
const cepRoute = require('./cepRoute');

const router = express.Router();

router.get('/ping', (_req, res) => res.status(200).send({ "message": "pong!" }))

router.use('/cep', cepRoute);

module.exports = router;