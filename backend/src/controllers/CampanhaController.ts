import { Request, Response } from "express"

class CampanhaController {
    index(req: Request, res: Response) {
        try {
            let list;
            // const list = await knex("campanha")
            return res.status(200).json(list)
        } catch (err) {
            return res.status(500).send()
        }
    }
    
    update(req: Request, res: Response) {
        try {
            let UpdatedId;
            // const UpdatedId = await knex("campanha")
            return res.status(200).json(UpdatedId)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new CampanhaController