import { Request, Response } from "express";
import { GetAllPrinterService } from "../../services/printer/GetAllPrinterService";

class GetAllPrinterController {
  async handle(req: Request, res: Response) {
    const { page } = req.params;

    const getAllPrinterService = new GetAllPrinterService();

    const printers = await getAllPrinterService.execute({
      page: Number(page),
    });

    return res.json(printers);
  }
}

export { GetAllPrinterController };
