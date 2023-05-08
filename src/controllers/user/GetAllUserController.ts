import { Request, Response } from "express";
import { GetAllUserService } from "../../services/user/GetAllUserService";

class GetAllUserController {
  async handle(req: Request, res: Response) {
    const getAllUserService = new GetAllUserService();

    const users = await getAllUserService.execute();

    return res.json(users);
  }
}

export { GetAllUserController };
