const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  const valid = [title, directedBy, releaseYear]
    .every((item) => typeof item === 'string' || typeof item === 'number');

  return valid;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
};