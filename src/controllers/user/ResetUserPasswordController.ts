import { Request, Response, json } from "express";
import { ResetUserPasswordService } from "../../services/user/ResetUserPasswordService";

class ResetUserPasswordController {
  async handle(req: Request, res: Response) {
    const { oldPassword, password } = req.body;
    const user_id = req.user_id;

    const resetUserPasswordService = new ResetUserPasswordService();

    const userUpdated = await resetUserPasswordService.execute({
      user_id,
      oldPassword,
      password,
    });

    return res.json(userUpdated);
  }
}

export { ResetUserPasswordController };
