const MoviesService = require('../services/movieService');

const getById = async (req, res) => {
  const { id } = req.params;
  const { error, code, data } = await MoviesService.getById(id);

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(code).json(data);
};

module.exports = {
  getById,
};