'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      rarity: {
        type: Sequelize.ENUM(['C', 'U', 'R', 'SR', 'UR', 'P'])
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM(['support', 'character', 'event'])
      },
      cost: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.ENUM(['red', 'yellow', 'green', 'blue', 'purple'])
      },
      characteristic: {
        type: Sequelize.STRING
      },
      ap: {
        type: Sequelize.STRING
      },
      dp: {
        type: Sequelize.STRING
      },
      parallel: {
        type: Sequelize.BOOLEAN
      },
      text: {
        type: Sequelize.STRING
      },
      flavor: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      release: {
        type: Sequelize.STRING
      },
      num: {
        type: Sequelize.STRING
      },
      fullId: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cards');
  }
};