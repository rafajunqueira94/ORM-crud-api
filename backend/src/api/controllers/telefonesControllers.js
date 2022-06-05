const Telefones = require("../models/telefonesModels");

module.exports = {
  async index(requisicao, resposta) {
    const telefones = await Telefones.findAll();
    return resposta.json(telefones);
  },

  async create(req, res) {
    await Telefones.create({
      tel_proprietario: req.body.tel_proprietario,
      tel_ddd: req.body.tel_ddd,
      tel_tipo: req.body.tel_tipo,
    });
    return res.json({ message: "Registro criado com sucesso!" });
  },

  async update(req, res) {
    await Telefones.update(
      {
        tel_proprietario: req.body.tel_proprietario,
        tel_ddd: req.body.tel_ddd,
        tel_tipo: req.body.tel_tipo,
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
    await Telefones.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ message: "Registro removido com sucesso!" });
  },

  findByPk(req, res) {
    Telefones.findByPk(req.params.id).then((result) => res.json(result));
  },
};
