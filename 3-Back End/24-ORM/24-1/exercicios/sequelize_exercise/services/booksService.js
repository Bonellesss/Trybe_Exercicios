const { Book } = require("../models");

const getAll = async () => {
  try {
    const books = await Book.findAll();

    return { code: 200, result: books };
  } catch (error) {
    return { code: 500, result: { message: error.message } };
  }
};

const getById = async (id) => {
  try {
    const book = await Book.findByPk(id);

    if (!book) return { code: 404, result: { message: "Book not found" } };

    return { code: 200, result: book };
  } catch (error) {
    return { code: 500, result: { message: error.message } };
  }
};

const create = async ({ title, author, pageQuantity }) => {
  try {
    if (!title || !author) {
      return {
        code: 400,
        result: { message: '"title" or "author" can\'t be undefined' },
      };
    }

    const info = {
      title,
      author,
      pageQuantity: pageQuantity || null,
    }

    const book = await Book.create(info)

    return { code: 201, result: book };
  } catch (error) {
    return { code: 500, result: { message: error.message } };
  }
};

module.exports = {
  getAll,
  getById,
  create,
};
