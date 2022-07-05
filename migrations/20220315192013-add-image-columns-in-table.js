'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.addColumn("Candidates", "image", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Reciepes", "image", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Reciepes", "description", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Reciepes", "titre", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Tv_show", "image", {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.addColumn("Reciepes", "title", {
        type: Sequelize.STRING,
        allowNull: true
      });

      await queryInterface.renameColumn('Reciepes', 'titre', 'title',{
        type: Sequelize.STRING,
        allowNull: true
      });

    } catch (error) {
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.removeColumn("Candidates", "image");
      await queryInterface.removeColumn("Reciepes", "image");
      await queryInterface.removeColumn("Reciepes", "titre");
      await queryInterface.removeColumn("Reciepes", "description");
      await queryInterface.removeColumn("Tv_show", "image");
      await queryInterface.removeColumn("Reciepes", "title");
    } catch (error) {
      throw error;
    }
  }
};
