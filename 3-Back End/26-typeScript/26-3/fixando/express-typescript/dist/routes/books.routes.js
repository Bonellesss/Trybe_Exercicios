"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
const booksController = new controllers_1.BooksController();
router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
exports.default = router;
