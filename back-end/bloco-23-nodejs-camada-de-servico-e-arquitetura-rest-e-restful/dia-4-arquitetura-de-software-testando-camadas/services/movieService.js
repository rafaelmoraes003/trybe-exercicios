const MoviesModel = require('../models/movieModel');

const getById = async (id) => {
  const response = await MoviesModel.getById(id);

  if(!response) {
    return { error: { code: 404, message: 'Filme não encontrado' } };
  }

  return { code: 200, data: response };
}

module.exports = {
  getById,
};