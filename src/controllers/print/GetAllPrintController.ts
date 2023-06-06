import { Request, Response } from "express";
import { GetAllPrintService } from "../../services/print/GetAllPrintService";

class GetAllPrintController {
  async handle(req: Request, res: Response) {
    const getAllPrintService = new GetAllPrintService();

    const prints = await getAllPrintService.execute();

    return res.json(prints);
  }
}

export { GetAllPrintController };
