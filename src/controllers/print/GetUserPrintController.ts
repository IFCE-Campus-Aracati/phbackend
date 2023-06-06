import { Request, Response } from "express";
import { GetUserPrintService } from "../../services/print/GetUserPrintService";

class GetUserPrintController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const getUserPrintService = new GetUserPrintService();

    const prints = await getUserPrintService.execute(user_id);

    return res.json(prints);
  }
}

export { GetUserPrintController };
