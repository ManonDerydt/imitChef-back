'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.addColumn("Deals", "restaurant", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Deals", "adress", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Deals", "city", {
        type: Sequelize.STRING,
        allowNull: true
      });

    } catch (error) {
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.removeColumn("Deals", "restaurant");
      await queryInterface.removeColumn("Deals", "adress");
      await queryInterface.removeColumn("Deals", "city");
    } catch (error) {
      throw error;
    }
  }
};
