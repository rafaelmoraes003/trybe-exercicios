'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('books', [
    {
      id: 1,
      title: 'Título #01',
      author: 'Autor #01',
      pageQuantity: 10,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 2,
      title: 'Título #02',
      author: 'Autor #02',
      pageQuantity: 15,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
   ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
