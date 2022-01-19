'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
};
