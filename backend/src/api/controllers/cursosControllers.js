const Cursos = require("../models/cursosModels");

module.exports = {
  async index(requisicao, resposta) {
    const cursos = await Cursos.findAll();
    return resposta.json(cursos);
  },

  async create(req, res) {
    await Cursos.create({
      cur_descricao: req.body.cur_descricao,
      cur_area: req.body.cur_area,
    });
    return res.json({ message: "Registro criado com sucesso!" });
  },

  async update(req, res) {
    await Cursos.update(
      {
        cur_descricao: req.body.cur_descricao,
        cur_area: req.body.cur_area,
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
    await Cursos.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ message: "Registro removido com sucesso!" });
  },

  findByPk(req, res) {
    Cursos.findByPk(req.params.id).then((result) => res.json(result));
  },
};
