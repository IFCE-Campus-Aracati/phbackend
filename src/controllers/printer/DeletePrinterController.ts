import { Request, Response } from "express";
import { DeletePrinterService } from "../../services/printer/DeletePrinterService";

class DeletePrinterController {
  async handle(req: Request, res: Response) {
    const { id_printer } = req.params;

    const deletePrinterController = new DeletePrinterService();

    const printer = await deletePrinterController.execute(id_printer);

    return res.json(printer);
  }
}

export { DeletePrinterController };
