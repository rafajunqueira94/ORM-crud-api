"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("candidatos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      can_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      can_apelido: {
        type: Sequelize.DECIMAL(10, 2),
      },
      can_sexo: {
        type: Sequelize.ENUM("masculino", "feminino"),
      },
      can_partido: {
        type: Sequelize.STRING(10),
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
    return queryInterface.dropTable("candidatos");
  },
};
