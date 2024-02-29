'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Bukus', [{
      judul: 'The Great Gatsby',
      penulis: 'F. Scott Fitzgerald',
      tahunTerbit: 1925,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    /**
     * Add seed commands here.
     * 
     * 
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bukus', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
