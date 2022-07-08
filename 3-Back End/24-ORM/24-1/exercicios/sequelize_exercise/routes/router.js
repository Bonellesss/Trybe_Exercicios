const express = require('express');
const booksRoute = require('./booksRoute');

const router = express.Router();

router.use('/books', booksRoute);

module.exports = router;
