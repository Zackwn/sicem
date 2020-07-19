import { Request, Response } from "express"
import knex from "../database/connection"
import "dotenv/config"

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

class LojaController {
    async login(req: Request, res: Response) {
        const { Email, Senha } = req.body
        try {
            const loja = await knex("loja").where({Email}).first()

            if (!loja) 
                return res.status(401).json({ "Message": "Wrong password" })

            const isPassword = await bcrypt.compare(Senha, loja.Senha)

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
    async create(req: Request, res: Response) {
        const { Nome, Email, Senha } = req.body
        const data = { Nome, Email, Senha, Ativada:false }
        try {
           
            const SenhaHash = await bcrypt.hash(Senha, 10)

            data.Senha = SenhaHash      
           
            const newLojaID = await knex("loja").insert(data)
            return res.send(newLojaID)
            const token = jwt.sign(
                String(newLojaID),
                String(process.env.APP_SECRET),
                {
                    expiresIn: "7d"
                }
            )

            return res.status(200).json({ token })
        } catch (err) {
            return res.status(500).send(err)
        }
    }

    async show(req: Request, res: Response) {
        try {
            const LojaData = await knex("loja")
                .where("ID", req.loja_id)
                .first()

            if (!LojaData)
                return res.status(404).send()

            return res.status(200).json(LojaData)
        } catch (err) {
            return res.status(500).send()
        }
    }

    async update(req: Request, res: Response) {
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
            const UpdatedId = await knex("loja")
                .where("ID", req.loja_id)
                .update(data)

            return res.status(200).json({ UpdatedId })
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new LojaController