import { Request, Response } from "express";
import { SearchByIdPrintService } from "../../services/print/SearchByIdPrintService";

class SearchByIdPrintControler {
  async handle(req: Request, res: Response) {
    const { identifier } = req.params;

    const searchByIdPrintService = new SearchByIdPrintService();

    const print = await searchByIdPrintService.execute(identifier);

    return res.json(print);
  }
}

export { SearchByIdPrintControler };
