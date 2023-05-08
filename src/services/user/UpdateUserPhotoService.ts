import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface UpdateUserPhotoRequest {
  user_id: string;
  profile_photo: string;
}

class UpdateUserPhotoService {
  async execute({ user_id, profile_photo }: UpdateUserPhotoRequest) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { id: user_id },
    });

    if (!userAlreadyExists) {
      throw new BadRequestError("Usuário não encontrado!");
    }

    if (!profile_photo) {
      throw new BadRequestError("Erro no envio do arquivo");
    }

    const user = await prismaClient.user.update({
      where: { id: userAlreadyExists.id },
      data: {
        profile_photo: profile_photo,
        updated_at: new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profile_photo: true,
        created_at: true,
        updated_at: true,
      },
    });

    return {
      user,
      message: "Foto de perfil atualizada com sucesso",
    };
  }
}

export { UpdateUserPhotoService };
