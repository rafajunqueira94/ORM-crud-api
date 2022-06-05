const Empresas = require("../models/empresasModels");

module.exports = {
  async index(requisicao, resposta) {
    const empresas = await Empresas.findAll();
    return resposta.json(empresas);
  },

  async create(req, res) {
    await Empresas.create({
      emp_nome: req.body.emp_nome,
      emp_contato: req.body.emp_contato,
      emp_email: req.body.emp_email,
    });
    return res.json({ message: "Registro criado com sucesso!" });
  },

  async update(req, res) {
    await Empresas.update(
      {
        emp_nome: req.body.emp_nome,
        emp_contato: req.body.emp_contato,
        emp_email: req.body.emp_email,
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
    await Empresas.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ message: "Registro removido com sucesso!" });
  },

  findByPk(req, res) {
    Empresas.findByPk(req.params.id).then((result) => res.json(result));
  },
};
