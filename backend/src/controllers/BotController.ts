import { Request, Response } from "express"

class PagamentoController {
    read(req: Request, res: Response) {
        try {
            let bot;
            return res.status(200).json(bot)
        } catch (err) {
            return res.status(500).send()
        }
    }

    update(req: Request, res: Response) {
        try {
            let updatedBot;
            return res.status(200).json(updatedBot)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new PagamentoController
