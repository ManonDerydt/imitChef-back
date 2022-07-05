'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      id: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      cutlery: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.STRING
      },
      tip: {
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
    await queryInterface.dropTable('order');
  }
};