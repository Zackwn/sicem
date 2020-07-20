import request from "request";
import { Request, Response } from "express";

const from = "green-cloth";
const header = {
  "content-type": "application/json",
  "X-API-TOKEN": "W9i0ukQETFSYU_ZbaF-sy-qdpu1dM_xw7fYq",
};
class ZenviaWhatsApp {
  text(req: Request, res: Response) {
    const { to, message } = req.body;

    const content = {
      from,
      to,
      contents: [{ type: "text", text: message }],
    };
    try {
      request.post(
        {
          headers: header,
          url: "https://api.zenvia.com/v1/channels/whatsapp/messages",
          body: JSON.stringify(content),
        },
        function (error: any, response: any, body: JSON) {
          return res.status(200).json(body);
        }
      );
    } catch (err) {
      return res.status(500).send();
    }
  }
}

export default new ZenviaWhatsApp();
