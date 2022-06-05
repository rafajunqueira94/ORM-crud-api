"use strict";

var Cidades = require("../models/cidadesModels");

module.exports = {
  index: function index(requisicao, resposta) {
    var cidades;
    return regeneratorRuntime.async(function index$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Cidades.findAll());

          case 2:
            cidades = _context.sent;
            return _context.abrupt("return", resposta.json(cidades));

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
            return regeneratorRuntime.awrap(Cidades.create({
              cid_descricao: req.body.cid_descricao,
              cid_uf: req.body.cid_uf,
              cid_regiao: req.body.cid_regiao
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
            return regeneratorRuntime.awrap(Cidades.update({
              cid_descricao: req.body.cid_descricao,
              cid_uf: req.body.cid_uf,
              cid_regiao: req.body.cid_regiao
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
            return regeneratorRuntime.awrap(Cidades.destroy({
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
    Cidades.findByPk(req.params.id).then(function (result) {
      return res.json(result);
    });
  }
};