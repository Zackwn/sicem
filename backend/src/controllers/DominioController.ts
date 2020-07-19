import { Request, Response } from "express"

class DominioController {
    read(req: Request, res: Response) {
        try {
            let Dominio;
            // const Dominio = await knex("Dominio")
            return res.status(200).json(Dominio)
        } catch (err) {
            return res.status(500).send()
        }
    }

    update(req: Request, res: Response) {
        try {
            let updatedID;
            // const updatedID = await knex("Dominio")
            return res.status(200).json(updatedID)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new DominioController
