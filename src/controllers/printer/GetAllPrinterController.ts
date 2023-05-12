import { Request, Response } from "express";
import { GetAllPrinterService } from "../../services/printer/GetAllPrinterService";

class GetAllPrinterController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllPrinterService = new GetAllPrinterService()

    const printers = await getAllPrinterService.execute();

    return res.json(printers);
  }
}

export {GetAllPrinterController}