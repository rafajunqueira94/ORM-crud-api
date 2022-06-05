const Cidades = require("../models/cidadesModels");

module.exports = {
  async index(requisicao, resposta) {
    const cidades = await Cidades.findAll();
    return resposta.json(cidades);
  },

  async create(req, res) {
    await Cidades.create({
      cid_descricao: req.body.cid_descricao,
      cid_uf: req.body.cid_uf,
      cid_regiao: req.body.cid_regiao,
    });
    return res.json({ message: "Registro criado com sucesso!" });
  },

  async update(req, res) {
    await Cidades.update(
      {
        cid_descricao: req.body.cid_descricao,
        cid_uf: req.body.cid_uf,
        cid_regiao: req.body.cid_regiao,
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
    await Cidades.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ message: "Registro removido com sucesso!" });
  },

  findByPk(req, res) {
    Cidades.findByPk(req.params.id).then((result) => res.json(result));
  },
};
