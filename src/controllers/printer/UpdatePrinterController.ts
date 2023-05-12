import { Request, Response } from "express";
import { UpdatePrinterService } from "../../services/printer/UpdatePrinterService";

class UpdatePrinterController {
  async handle(req: Request, res: Response) {
    const { 
      id,
      title,
      material,
      type,
      status,
      description
    } = req.body;

    const updatePrinterService = new UpdatePrinterService();

    const printer = await updatePrinterService.execute({
      id,
      title,
      material,
      type,
      status,
      description
    });

    return res.json(printer);
  }
}

export {UpdatePrinterController}