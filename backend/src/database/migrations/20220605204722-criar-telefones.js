"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("telefones", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tel_proprietario: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      tel_ddd: {
        type: Sequelize.STRING(5),
      },
      tel_numero: {
        type: Sequelize.STRING(12),
      },
      tel_tipo: {
        type: Sequelize.ENUM("fixo", "celular"),
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
    return queryInterface.dropTable("telefones");
  },
};
