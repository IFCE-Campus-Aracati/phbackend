import { Request, Response } from "express";
import { UpdateUserPhotoService } from "../../services/user/UpdateUserPhotoService";

class UpdateUserPhotoController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const { filename: profile_photo } = req.file;

    const updateUserPhotoService = new UpdateUserPhotoService();

    const user = await updateUserPhotoService.execute({
      user_id,
      profile_photo,
    });

    return res.json(user);
  }
}

export { UpdateUserPhotoController };
