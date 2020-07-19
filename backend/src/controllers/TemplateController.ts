import { Request, Response } from "express"

class TemplateController {
    indexLoja(req: Request, res: Response) {
        try {
            const Templates = ["query", "..."]
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