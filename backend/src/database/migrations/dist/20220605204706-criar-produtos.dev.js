"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable("produtos", {
              id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              pro_descricao: {
                type: Sequelize.STRING(60),
                allowNull: false
              },
              pro_vlrcusto: {
                type: Sequelize.DECIMAL(10, 2)
              },
              pro_vlrvenda: {
                type: Sequelize.DECIMAL(10, 2)
              },
              pro_ativoinativo: {
                type: Sequelize.STRING(1)
              },
              created_at: {
                type: Sequelize.DATE,
                allowNull: false
              },
              updated_at: {
                type: Sequelize.DATE,
                allowNull: false
              }
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", queryInterface.dropTable("produtos"));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};