import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

class ViewUserService {
  async execute(id: string) {
    const user = await prismaClient.user.findFirst({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        profile_photo: true,
      },
    });

    if (!user) {
      throw new BadRequestError("Usuário não encontrado");
    }

    return user;
  }
}

export { ViewUserService };
