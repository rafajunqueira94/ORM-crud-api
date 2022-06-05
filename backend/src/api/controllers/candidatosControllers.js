const Candidatos = require("../models/candidatosModels");

module.exports = {
  async index(requisicao, resposta) {
    const candidatos = await Candidatos.findAll();
    return resposta.json(candidatos);
  },

  async create(req, res) {
    await Candidatos.create({
      can_nome: req.body.can_nome,
      can_apelido: req.body.can_apelido,
      can_sexo: req.body.can_sexo,
      can_partido: req.body.can_partido,
    });
    return res.json({ message: "Registro criado com sucesso!" });
  },

  async update(req, res) {
    await Candidatos.update(
      {
        can_nome: req.body.can_nome,
        can_apelido: req.body.can_apelido,
        can_sexo: req.body.can_sexo,
        can_partido: req.body.can_partido,
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
    await Candidatos.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ message: "Registro removido com sucesso!" });
  },

  findByPk(req, res) {
    Candidatos.findByPk(req.params.id).then((result) => res.json(result));
  },
};
