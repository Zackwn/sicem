import { Request, Response } from "express"

class ProdutoController {
    index(req: Request, res: Response) {
        try {
            let list;
            // const list = awair knex("produtos")
            return res.status(200).json(list)
        } catch (err) {
            return res.status(500).send()
        }
    }

    update(req: Request, res: Response) {
        const {
            ProdutoID,
            Preco,
            Promocao,
            ValorPromocional
        } = req.body
        const data = {
            ProdutoID,
            Preco,
            Promocao,
            ValorPromocional
        }
        try {
            let UpdatedId;
            // const list = await knex("produtos").create(data)
            return res.status(200).json(UpdatedId)
        } catch (err) {
            return res.status(500).send()
        }
    }

    search(req: Request, res: Response) {
        try {
            let Produtosfound;
            // const Produtosfound = awair knex("produtos").where("condição")
            return res.status(200).json(Produtosfound)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new ProdutoController