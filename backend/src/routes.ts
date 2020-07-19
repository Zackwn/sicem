import express from "express"
import Auth from "./middlewares/Auth"

// Controllers
import LojaController from "./controllers/LojaController"
import TemplateController from "./controllers/TemplateController"
import ProdutoController from "./controllers/ProdutoController"
import CampanhaController from "./controllers/CampanhaController"
import PagamentoController from "./controllers/PagamentoController"
import BotController from "./controllers/BotController"
import DominioController from "./controllers/DominioController"
import personalizacaoController from "./controllers/personalizacaoController"

const routes = express.Router()

// Normal routes
routes.post("/loja-login", LojaController.login)
routes.post("/loja-create", LojaController.create)

// Auth routes
routes.use(Auth)

routes.get("/template-read", TemplateController.indexLoja)
routes.put("/template-update", TemplateController.update)

routes.get("/loja-read", LojaController.show)
routes.put("/loja-update", LojaController.update)

routes.get("/produto-list", ProdutoController.index)
routes.put("/produto-update", ProdutoController.update)
routes.get("/produto-search", ProdutoController.search)

routes.get("/campanha-list", CampanhaController.index)
routes.put("/campanha-update", CampanhaController.update)

routes.get("/pagamento-read", PagamentoController.read)
routes.put("/pagamento-update", PagamentoController.update)

routes.get("/bot-read", BotController.read)
routes.put("/bot-update", BotController.update)

routes.get("/dominio-read", DominioController.read)
routes.put("/dominio-update", DominioController.update)

routes.get("/personalizacao-read", personalizacaoController.read)
routes.put("/personalizacao-update", personalizacaoController.update)

export default routes