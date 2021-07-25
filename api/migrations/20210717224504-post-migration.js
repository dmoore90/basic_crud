'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Posts', { 
            id: {
              type: Sequelize.INTEGER(11),
              primaryKey: true,
              autoIncrement: true,
              allowNull: false,
            },
            name: {
              type: Sequelize.STRING(45),
              allowNull: false
            }
       });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Posts');
  }
};
