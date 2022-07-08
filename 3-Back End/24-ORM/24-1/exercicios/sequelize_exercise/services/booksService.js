const { Book } = require("../models");

const getAll = async () => {
  try {
    const books = await Book.findAll();

    return {
      code: 200,
      result: books.length > 0 ? books : { message: "This table is empty!" },
    };
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
    };

    const book = await Book.create(info);

    return { code: 201, result: book };
  } catch (error) {
    return { code: 500, result: { message: error.message } };
  }
};

const update = async (id, bookInfo) => {
  try {
    const [updatedRows] = await Book.update(bookInfo, { where: { id } });

    if (!updatedRows) {
      return { code: 404, result: { message: "Book not found!" } };
    }

    return { code: 200, result: { message: "Book updated!" } };
  } catch (error) {
    return { code: 500, result: { message: error.message } };
  }
};

const remove = async (id) => {
  try {
    const deletedRow = await Book.destroy({ where: { id } });

    if (!deletedRow) {
      return { code: 404, result: { message: "Book not found!" } };
    }

    return { code: 204, result: { message: "Book Removed!" } };
  } catch (error) {
    return { code: 500, result: { message: error.message } };
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
