const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const empresas = require("../api/models/empresasModels");
const cidades = require("../api/models/cidadesModels");
const candidatos = require("../api/models/candidatosModels");
const cursos = require("../api/models/cursosModels");
const produtos = require("../api/models/produtosModels");
const telefones = require("../api/models/telefonesModels");

const conexao = new Sequelize(dbConfig);

try {
  conexao.authenticate();
  console.log("Conexão estabelecida Mysql");
} catch (error) {
  console.log("Falha na conexão Mysql!!!");
}

empresas.init(conexao);
cidades.init(conexao);
candidatos.init(conexao);
cursos.init(conexao);
produtos.init(conexao);
telefones.init(conexao);

module.exports = conexao;
