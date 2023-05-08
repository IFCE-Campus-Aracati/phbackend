import { Request, Response } from "express";
import { ChangeUserRoleService } from "../../services/user/ChangeUserRoleService";

class ChangeUserRoleController {
  async handle(req: Request, res: Response) {
    const { id, role } = req.body;

    const changeUserRoleService = new ChangeUserRoleService();

    const user = await changeUserRoleService.execute({
      id,
      role,
    });

    return res.json(user);
  }
}

export { ChangeUserRoleController };
