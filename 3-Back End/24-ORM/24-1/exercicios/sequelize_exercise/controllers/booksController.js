const { booksService } = require("../services");

const getAll = async (_req, res) => {
  const { code, result } = await booksService.getAll();

  return res.status(code).json(result);
};

module.exports = {
  getAll
};
