import { Request, Response } from "express";
import { CreatePrinterService } from "../../services/printer/CreatePrinterService";


class CreatePrinterController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, material, type, description } = req.body;

    const createUserService = new CreatePrinterService()

    const printer = await createUserService.execute({
      title, 
      material, 
      type, 
      description
    });

    return res.json(printer)
  }
}

export { CreatePrinterController }