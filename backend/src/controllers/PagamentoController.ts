import { Request, Response } from "express"

class PagamentoController {
    read(req: Request, res: Response) {
        try {
            let pagamento;
            // const pagamento = await knex("pagamento")
            return res.status(200).json(pagamento)
        } catch (err) {
            return res.status(500).send()
        }
    }

    update(req: Request, res: Response) {
        try {
            let updatedId;
            // const updatedId = await knex("pagamento").update(data)
            return res.status(200).json(updatedId)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new PagamentoController