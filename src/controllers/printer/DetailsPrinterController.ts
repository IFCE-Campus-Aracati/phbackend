import { Request, Response } from "express";
import { DetailsPrinterService } from "../../services/printer/DetailsPrinterService";

class DetailsPrinterController {
  async handle(req: Request, res: Response) {
    const { id_printer } = req.params;

    const detailsPrinterService = new DetailsPrinterService();

    const printer = await detailsPrinterService.execute(id_printer);

    return res.json(printer);
  }
}

export { DetailsPrinterController };
