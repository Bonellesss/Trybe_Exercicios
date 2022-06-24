const connection = require("./connection");

const getAllBooks = async () => {
  const [books] = await connection.execute(
    "SELECT id, title, author_id FROM model_example.books;"
  );

  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    "SELECT id, title, author_id FROM model_example.books WHERE author_id = ?;",
    [id]
  );

  return books;
};

const getById = async (id) => {
  const [books] = await connection.execute(
    "SELECT id, title, author_id FROM model_example.books WHERE id = ?;",
    [id]
  );

  return books.length === 0 ? null : books;
};

module.exports = { getAllBooks, getByAuthorId, getById };
