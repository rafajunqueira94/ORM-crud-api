const Produtos = require("../models/produtosModels");

module.exports = {
  async index(requisicao, resposta) {
    const produtos = await Produtos.findAll();
    return resposta.json(produtos);
  },

  async create(req, res) {
    await Produtos.create({
      pro_descricao: req.body.pro_descricao,
      pro_vlrcusto: req.body.pro_vlrcusto,
      pro_vlrvenda: req.body.pro_vlrvenda,
      pro_ativoinativo: req.body.pro_ativoinativo,
    });
    return res.json({ message: "Registro criado com sucesso!" });
  },

  async update(req, res) {
    await Produtos.update(
      {
        pro_descricao: req.body.pro_descricao,
        pro_vlrcusto: req.body.pro_vlrcusto,
        pro_vlrvenda: req.body.pro_vlrvenda,
        pro_ativoinativo: req.body.pro_ativoinativo,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.json({ message: "Registro atualizado com sucesso!" });
  },

  async delete(req, res) {
    await Produtos.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ message: "Registro removido com sucesso!" });
  },

  findByPk(req, res) {
    Produtos.findByPk(req.params.id).then((result) => res.json(result));
  },

  produtosAi(req, res) {
    let id = req.params.id;
    let flag_ativoInativo = "";

    console.log("Ativar/Inativar Produto " + id);
    Produtos.findByPk(id).then((resp) => {
      flag_ativoInativo = resp.pro_ativoinativo;

      if (flag_ativoInativo == "A") {
        flag_ativoInativo = "I";
      } else {
        flag_ativoInativo = "A";
      }

      if (resp) {
        Produtos.update(
          {
            pro_ativoinativo: flag_ativoInativo,
          },
          {
            where: {
              id: id,
            },
          }
        );
      }
      if (id) {
        res.json({
          response:
            "Produto '" +
            resp.pro_descricao +
            "' alterado para " +
            flag_ativoInativo,
        });
      } else
        res.json({
          response: "Erro ao ativar/inativar produto. Verifique o ID ",
        });
    });
  },
};
