'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.addColumn("Deals", "adress", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Deals", "city", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Deals", "number", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Deals", "email", {
        type: Sequelize.STRING,
        allowNull: true
      });

    } catch (error) {
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.removeColumn("Deals", "adress");
      await queryInterface.removeColumn("Deals", "city");
      await queryInterface.removeColumn("Deals", "number");
      await queryInterface.removeColumn("Deals", "email");
    } catch (error) {
      throw error;
    }
  }
};