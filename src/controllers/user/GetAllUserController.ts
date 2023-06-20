import { Request, Response } from "express";
import { GetAllUserService } from "../../services/user/GetAllUserService";

class GetAllUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const getAllUserService = new GetAllUserService();

    const users = await getAllUserService.execute(user_id);

    return res.json(users);
  }
}

export { GetAllUserController };
