"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable("empresas", {
              id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              emp_nome: {
                type: Sequelize.STRING(60),
                allowNull: false
              },
              emp_contato: {
                type: Sequelize.STRING(30),
                allowNull: false
              },
              emp_email: {
                type: Sequelize.STRING(60),
                allowNull: false
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
            return _context2.abrupt("return", queryInterface.dropTable("empresas"));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};