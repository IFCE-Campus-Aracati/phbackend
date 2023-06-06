import { Request, Response } from "express";
import { UpdatePrintService } from "../../services/print/UpdatePrintService";

class UpdatePrintController {
  async handle(req: Request, res: Response) {
    const { id, printing_date, printing_duration, status, printer_id } = req.body;

    const updatePrint = new UpdatePrintService();

    const print = await updatePrint.execute({
      id,
      printing_date,
      printing_duration,
      status,
      printer_id,
    });

    return res.json(print);
  }
}

export { UpdatePrintController };
