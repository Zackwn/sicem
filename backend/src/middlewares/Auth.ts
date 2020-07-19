import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"

declare module "express-serve-static-core" {
    interface Request {
        loja_id: number
    }
}

export default async function Auth(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization

    if (!auth) 
        return res.status(401).send()

    try {
        const [_, token] = auth.split(" ")

        const payload: any = jwt.verify(token, String(process.env.APP_SECRET))
    
        if (!payload)
            return res.status(401).send()

        req.loja_id = payload.user_id
        next()
    } catch (err) {
        return res.status(401).send()
    }
}   