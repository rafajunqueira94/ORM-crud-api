"use strict";

var Produtos = require("../models/produtosModels");

module.exports = {
  index: function index(requisicao, resposta) {
    var produtos;
    return regeneratorRuntime.async(function index$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Produtos.findAll());

          case 2:
            produtos = _context.sent;
            return _context.abrupt("return", resposta.json(produtos));

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
            return regeneratorRuntime.awrap(Produtos.create({
              pro_descricao: req.body.pro_descricao,
              pro_vlrcusto: req.body.pro_vlrcusto,
              pro_vlrvenda: req.body.pro_vlrvenda,
              pro_ativoinativo: req.body.pro_ativoinativo
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
            return regeneratorRuntime.awrap(Produtos.update({
              pro_descricao: req.body.pro_descricao,
              pro_vlrcusto: req.body.pro_vlrcusto,
              pro_vlrvenda: req.body.pro_vlrvenda,
              pro_ativoinativo: req.body.pro_ativoinativo
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
            return regeneratorRuntime.awrap(Produtos.destroy({
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
    Produtos.findByPk(req.params.id).then(function (result) {
      return res.json(result);
    });
  },
  produtosAi: function produtosAi(req, res) {
    var id = req.params.id;
    var flag_ativoInativo = "";
    console.log("Ativar/Inativar Produto " + id);
    Produtos.findByPk(id).then(function (resp) {
      flag_ativoInativo = resp.pro_ativoinativo;

      if (flag_ativoInativo == "A") {
        flag_ativoInativo = "I";
      } else {
        flag_ativoInativo = "A";
      }

      if (resp) {
        Produtos.update({
          pro_ativoinativo: flag_ativoInativo
        }, {
          where: {
            id: id
          }
        });
      }

      if (id) {
        res.json({
          response: "Produto '" + resp.pro_descricao + "' alterado para " + flag_ativoInativo
        });
      } else res.json({
        response: "Erro ao ativar/inativar produto. Verifique o ID "
      });
    });
  }
};