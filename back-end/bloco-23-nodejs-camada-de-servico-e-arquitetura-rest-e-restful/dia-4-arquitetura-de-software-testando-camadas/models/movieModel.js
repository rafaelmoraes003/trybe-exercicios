const connection = require('./connection');

const getById = async (id) => {
  const [[result]] = await connection.execute(`SELECT * FROM model_example.movies
  WHERE id = ?`, [id]);

  return result;
}

module.exports = {
  getById,
};