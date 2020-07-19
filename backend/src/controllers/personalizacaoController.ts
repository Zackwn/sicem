import { Request, Response } from "express"

class personalizacaoController {
    read(req: Request, res: Response) {
        try {
            let personalizacao;
            // const personalizacao = await knex("personalizacao")
            return res.status(200).json(personalizacao)
        } catch (err) {
            return res.status(500).send()
        }
    }

    update(req: Request, res: Response) {
        try {
            let updatedID;
            // const updatedID = await knex("personalizacao")
            return res.status(200).json(updatedID)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new personalizacaoController
