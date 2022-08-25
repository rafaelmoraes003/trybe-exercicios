const Users = require('./Users.json');

const mockFindByPk = (instance, id) => {
  const userById = instance.find((user) => user.id === Number(id));
  if (!userById) return null;
  return userById;
};

const mockFindOne = (instance, where) => {
  if (!where) {
    return instance[0];
  }

  const { username } = where;

  const user = instance.find(item => item.username === username);

  if (!user) return null;
  return user;
}

const User = {
  findByPk: async (userId) => mockFindByPk(Users, userId),
  findOne: async ({where}) => mockFindOne(Users, where),
};

module.exports = {
  User,
};