import { Request, Response } from "express";
import { DeletePrintService } from "../../services/print/DeletePrintService";

class DeletePrintController {
  async handle(req: Request, res: Response) {
    const { print_id } = req.body;

    const deletePrintService = new DeletePrintService();

    const print = await deletePrintService.execute({
      print_id,
    });

    return res.json(print);
  }
}

export { DeletePrintController };
