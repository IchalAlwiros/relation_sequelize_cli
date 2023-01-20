'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('articles', [
      {
        title: 'Article 1',
        rating: 5,
        price: 10000,
        deletedBy: 1,
        updateBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Article 2',
        rating: 3,
        price: 15000,
        deletedBy: 2,
        updateBy: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Article 3',
        rating: 4,
        price: 125000,
        deletedBy: 3,
        updateBy: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
