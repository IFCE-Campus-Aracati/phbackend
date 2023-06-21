import { Request, Response } from "express";
import { DeletePrintService } from "../../services/print/DeletePrintService";

class DeletePrintController {
  async handle(req: Request, res: Response) {
    const { id_print } = req.params;

    const deletePrintService = new DeletePrintService();

    const print = await deletePrintService.execute(id_print);

    return res.json(print);
  }
}

export { DeletePrintController };
