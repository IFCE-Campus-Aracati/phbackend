import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface ChangeUserRoleRequest {
  id: string;
  role: string;
}

class ChangeUserRoleService {
  async execute({ id, role }: ChangeUserRoleRequest) {
    const userExists = await prismaClient.user.findFirst({
      where: { id: id },
    });

    if (!userExists) {
      throw new BadRequestError("Usuário não encontrado");
    }

    if (!role) {
      throw new BadRequestError("Cargo de usuário não informado");
    }

    const user = await prismaClient.user.update({
      where: { id: userExists.id },
      data: {
        role: role,
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
      message: "Cargo atualizado com sucesso",
    };
  }
}

export { ChangeUserRoleService };
