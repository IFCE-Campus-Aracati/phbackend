import { Request, Response } from "express";
import { ViewUserService } from "../../services/user/ViewUserService";

class ViewUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const viewUserService = new ViewUserService();

    const user = await viewUserService.execute(id);

    return res.json(user);
  }
}

export { ViewUserController };
