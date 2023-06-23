import { Request, Response } from "express";
import { CreatePrintAnonimousService } from "../../services/print/CreatePrintAnonimousService";

class CreatePrintAnonimousController {
  async handle(req: Request, res: Response) {
    const { title, description, material } = req.body;
    const { filename: archive } = req.file;

    const createPrintAnonimousService = new CreatePrintAnonimousService();

    const print = await createPrintAnonimousService.execute({
      title,
      description,
      material,
      archive,
    });

    return res.json(print);
  }
}

export { CreatePrintAnonimousController };
