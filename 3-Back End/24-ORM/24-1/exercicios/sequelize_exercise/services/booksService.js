const { Book } = require('../models')

const getAll = async () => {
  try {
    const books = await Book.findAll();

    return { code: 200, result: books };
  } catch (error) {
    return { code: 500, result: { message: error.message } };
  }
};

module.exports = {
  getAll,
};
