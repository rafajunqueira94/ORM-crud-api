"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      pro_descricao: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      pro_vlrcusto: {
        type: Sequelize.DECIMAL(10, 2),
      },
      pro_vlrvenda: {
        type: Sequelize.DECIMAL(10, 2),
      },
      pro_ativoinativo: {
        type: Sequelize.STRING(1),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("produtos");
  },
};
