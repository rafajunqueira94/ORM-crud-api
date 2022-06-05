"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable("telefones", {
              id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              tel_proprietario: {
                type: Sequelize.STRING(60),
                allowNull: false
              },
              tel_ddd: {
                type: Sequelize.STRING(5)
              },
              tel_numero: {
                type: Sequelize.STRING(12)
              },
              tel_tipo: {
                type: Sequelize.ENUM("fixo", "celular")
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
            return _context2.abrupt("return", queryInterface.dropTable("telefones"));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};