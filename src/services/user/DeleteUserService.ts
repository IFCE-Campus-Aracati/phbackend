import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface DeleteUserRequest {
  id: string;
}

class DeleteUserService {
  async execute({ id }: DeleteUserRequest) {
    if (!id) {
      throw new BadRequestError("ID do usuário não informado");
    }

    const user = await prismaClient.user.delete({
      where: { id: id },
    });

    if (!user) {
      throw new BadRequestError("Usuário não encontrado");
    }

    return {
      message: "Usuário deletado com sucesso",
    };
  }
}

export { DeleteUserService };
