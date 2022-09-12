"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.BookModel = void 0;
const book_model_1 = __importDefault(require("./book.model"));
exports.BookModel = book_model_1.default;
const connection_1 = __importDefault(require("./connection"));
exports.connection = connection_1.default;
