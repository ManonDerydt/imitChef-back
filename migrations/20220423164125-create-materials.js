'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Materials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Deep_fryer: {
        type: Sequelize.STRING
      },
      Blender: {
        type: Sequelize.STRING
      },
      Grill: {
        type: Sequelize.STRING
      },
      Barbecue: {
        type: Sequelize.STRING
      },
      Waffle_iron: {
        type: Sequelize.STRING
      },
      Four: {
        type: Sequelize.STRING
      },
      Microwave: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Materials');
  }
};