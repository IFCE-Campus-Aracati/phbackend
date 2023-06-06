import { Request, Response } from "express";
import { CreatePrintService } from "../../services/print/CreatePrintService";

class CreaterPrintController {
  async handle(req: Request, res: Response) {
    const { title, description, material } = req.body;
    const user_id = req.user_id;
    const { filename: archive } = req.file;

    const createPrintService = new CreatePrintService();

    const print = await createPrintService.execute({
      title,
      description,
      material,
      archive,
      owner: user_id,
    });

    return res.json(print);
  }
}

export { CreaterPrintController };
