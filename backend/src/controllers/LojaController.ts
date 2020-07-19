import { Request, Response } from "express"
import "dotenv/config"

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

class LojaController {
    login(req: Request, res: Response) {
        const { email, senha } = req.body
        try {
            const loja = { Senha: "query where email", ID: 3 }

            const isPassword = bcrypt.compare(senha, loja.Senha)

            if (!isPassword) {
                return res.status(401).json({ "Message": "Wrong password" })
            }

            const token = jwt.sign(
                String(loja.ID),
                String(process.env.APP_SECRET),
                {
                    expiresIn: "7d"
                }
            )

            return res.status(200).json({ token })
        } catch (err) {
            return res.status(500).send()
        }
    }
    create(req: Request, res: Response) {
        const { nome, email, senha } = req.body
        const data = { nome, email, senha }

        try {
            const newLojaID = {} // query

            const token = jwt.sign(
                String(newLojaID),
                String(process.env.APP_SECRET),
                {
                    expiresIn: "7d"
                }
            )

            return res.status(200).json({ token })
        } catch (err) {
            return res.status(500).send()
        }
    }

    show(req: Request, res: Response) {
        try {
            let LojaData;
            // const LojaData = knex("loja").where("ID", req.loja_id)
            return res.status(200).json(LojaData)
        } catch (err) {
            return res.status(500).send()
        }
    }

    update(req: Request, res: Response) {
        const { 
            Nome, 
            Email,
            Telefone,
            Whatsapp,
            Descricao,
            Endereco,
            CNPJ
        } = req.body
        const data = {
            Nome, 
            Email,
            Telefone,
            Whatsapp,
            Descricao,
            Endereco,
            CNPJ
        }
        try {
            let UpdatedId;
            // const UpdatedId = knex("loja").update(data)
            return res.status(200).json({ UpdatedId })
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new LojaController