import express from "express"
import Auth from "./middlewares/Auth"

// Controllers
import LojaController from "./controllers/LojaController"

const routes = express.Router()

// Normal routes
routes.post("/loja-login", LojaController.login)
routes.post("/loja-create", LojaController.login) // create

// Auth routes
routes.use(Auth)


export default routes