const express = require("express");
const routes = express.Router();

const controllers = require("../controllers/indexControllers.js");
const empresasControllers = require("../controllers/empresasControllers.js");
const cidadesControllers = require("../controllers/cidadesControllers.js");
const candidatosControllers = require("../controllers/candidatosControllers");
const cursosControllers = require("../controllers/cursosControllers");
const produtosControllers = require("../controllers/produtosControllers");
const telefonesControllers = require("../controllers/telefonesControllers");

// rota raiz
routes.get("/", controllers.indexRaiz);

// rotas de cidades
routes.get("/cidades", cidadesControllers.index);
routes.post("/cidades", cidadesControllers.create);
routes.put("/cidades/update/:id", cidadesControllers.update);
routes.delete("/cidades/delete/:id", cidadesControllers.delete);
routes.get("/cidades/find/:id", cidadesControllers.findByPk);

// rotas de empresas
routes.get("/empresas", empresasControllers.index);
routes.post("/empresas", empresasControllers.create);
routes.put("/empresas/update/:id", empresasControllers.update);
routes.delete("/empresas/delete/:id", empresasControllers.delete);
routes.get("/empresas/find/:id", empresasControllers.findByPk);

// rotas de candidatos
routes.get("/candidatos", candidatosControllers.index);
routes.post("/candidatos", candidatosControllers.create);
routes.put("/candidatos/update/:id", candidatosControllers.update);
routes.delete("/candidatos/delete/:id", candidatosControllers.delete);
routes.get("/candidatos/find/:id", candidatosControllers.findByPk);

// rotas de cursos
routes.get("/cursos", cursosControllers.index);
routes.post("/cursos", cursosControllers.create);
routes.put("/cursos/update/:id", cursosControllers.update);
routes.delete("/cursos/delete/:id", cursosControllers.delete);
routes.get("/cursos/find/:id", cursosControllers.findByPk);

// rotas de produtos
routes.get("/produtos", produtosControllers.index);
routes.post("/produtos", produtosControllers.create);
routes.put("/produtos/update/:id", produtosControllers.update);
routes.delete("/produtos/delete/:id", produtosControllers.delete);
routes.get("/produtos/find/:id", produtosControllers.findByPk);
// rota produto ATIVO / INATIVO
routes.get("/produtos/ai/:id", produtosControllers.produtosAi);

// rotas de telefones
routes.get("/telefones", telefonesControllers.index);
routes.post("/telefones", telefonesControllers.create);
routes.put("/telefones/update/:id", telefonesControllers.update);
routes.delete("/telefones/delete/:id", telefonesControllers.delete);
routes.get("/telefones/find/:id", telefonesControllers.findByPk);

module.exports = routes;
