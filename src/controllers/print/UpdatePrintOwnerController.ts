import { Request, Response } from "express";
import { UpdatePrintOwnerService } from "../../services/print/UpdatePrintOwnerService";

class UpdatePrintOwnerController {
  async handle(req: Request, res: Response) {
    const { id, title, description, material } = req.body;
    const user_id = req.user_id;
    const { filename: archive } = req.file;

    const updatePrintOwnerService = new UpdatePrintOwnerService();

    const print = await updatePrintOwnerService.execute({
      id,
      title,
      description,
      material,
      archive,
      owner: user_id,
    });

    return res.json(print);
  }
}

export { UpdatePrintOwnerController };
