"use strict";

var Sequelize = require("sequelize");

var dbConfig = require("../config/database.js");

var empresas = require("../api/models/empresasModels");

var cidades = require("../api/models/cidadesModels");

var candidatos = require("../api/models/candidatosModels");

var cursos = require("../api/models/cursosModels");

var produtos = require("../api/models/produtosModels");

var telefones = require("../api/models/telefonesModels");

var conexao = new Sequelize(dbConfig);

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