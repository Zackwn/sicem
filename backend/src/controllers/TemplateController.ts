import { Request, Response } from "express"
import knex from "../database/connection"

class TemplateController {
    indexLoja(req: Request, res: Response) {
        try {
            const Templates = knex.raw(`
            
            SELECT template.ID, template.Nome, template.Capa
            FROM template
            INNER JOIN loja ON template.ID = loja.Template_ID
            WHERE loja.ID = ${req.loja_id};
            
            `).toSQL().toNative();                

            console.log(Templates);
            
            if (!Templates)
                return res.status(404).send()

            return res.json({ Templates })
        } catch (err) {
            return res.status(500).send()
        }
    }

    update(req: Request, res: Response) {
        const { template_id } = req.body
        try {
            const UpdatedId = "query..."
            return res.status(200).json({ UpdatedId })
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new TemplateController