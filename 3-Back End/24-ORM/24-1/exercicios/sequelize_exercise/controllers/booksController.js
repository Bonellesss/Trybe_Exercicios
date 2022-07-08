const { booksService } = require("../services");

const getAll = async (_req, res) => {
  const { code, result } = await booksService.getAll();

  return res.status(code).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { code, result } = await booksService.getById(Number(id));

  return res.status(code).json(result);
};

const create = async (req, res) => {
  const bookInfo = req.body;

  const { code, result } = await booksService.create(bookInfo);

  return res.status(code).json(result);
};

module.exports = {
  getAll,
  getById,
  create,
};
