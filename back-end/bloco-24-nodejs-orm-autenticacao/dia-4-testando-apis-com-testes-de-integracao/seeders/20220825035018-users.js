module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        username: "Saul Reixas",
        password: "tocasaul"
      },
      {
        id: 2,
        username: "Kássia Lemmer",
        password: "kelimmar"
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
