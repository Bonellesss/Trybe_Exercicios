const express = require('express');
const { booksController } = require('../controllers');

const router = express.Router();

router.get('/', booksController.getAll);

router.get('/:id', booksController.getById);

router.post('/', booksController.create);

module.exports = router;
