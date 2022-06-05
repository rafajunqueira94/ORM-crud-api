"use strict";

var Empresas = require("../models/empresasModels");

module.exports = {
  index: function index(requisicao, resposta) {
    var empresas;
    return regeneratorRuntime.async(function index$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Empresas.findAll());

          case 2:
            empresas = _context.sent;
            return _context.abrupt("return", resposta.json(empresas));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  create: function create(req, res) {
    return regeneratorRuntime.async(function create$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Empresas.create({
              emp_nome: req.body.emp_nome,
              emp_contato: req.body.emp_contato,
              emp_email: req.body.emp_email
            }));

          case 2:
            return _context2.abrupt("return", res.json({
              message: "Registro criado com sucesso!"
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  update: function update(req, res) {
    return regeneratorRuntime.async(function update$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(Empresas.update({
              emp_nome: req.body.emp_nome,
              emp_contato: req.body.emp_contato,
              emp_email: req.body.emp_email
            }, {
              where: {
                id: req.params.id
              }
            }));

          case 2:
            return _context3.abrupt("return", res.json({
              message: "Registro atualizado com sucesso!"
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  "delete": function _delete(req, res) {
    return regeneratorRuntime.async(function _delete$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(Empresas.destroy({
              where: {
                id: req.params.id
              }
            }));

          case 2:
            return _context4.abrupt("return", res.json({
              message: "Registro removido com sucesso!"
            }));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  findByPk: function findByPk(req, res) {
    Empresas.findByPk(req.params.id).then(function (result) {
      return res.json(result);
    });
  }
};