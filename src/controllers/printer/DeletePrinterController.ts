import { Request, Response } from "express";
import { DeletePrinterService } from "../../services/printer/DeletePrinterService";

class DeletePrinterController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deletePrinterController = new DeletePrinterService();

    const printer = await deletePrinterController.execute({
      id,
    });

    return res.json(printer);
  }
}

export {DeletePrinterController}