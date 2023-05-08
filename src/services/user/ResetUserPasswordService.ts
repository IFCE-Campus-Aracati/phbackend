import { compare, hash } from "bcryptjs";
import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface ResetUserPasswordRequest {
  user_id: string;
  oldPassword: string;
  password: string;
}

class ResetUserPasswordService {
  async execute({ user_id, oldPassword, password }: ResetUserPasswordRequest) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { id: user_id },
    });

    if (!userAlreadyExists) {
      throw new BadRequestError("Usuário não encontrado!");
    }

    if (!oldPassword) {
      throw new BadRequestError("Senha atual não informada");
    }

    if (!password) {
      throw new BadRequestError("Nova senha não informada");
    }

    if (oldPassword === password) {
      throw new BadRequestError("A nova senha não pode ser igual a anterior");
    }

    if (oldPassword && !(await compare(oldPassword, userAlreadyExists.password))) {
      throw new BadRequestError("A senha informada é inválida");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.update({
      where: { id: userAlreadyExists.id },
      data: {
        password: passwordHash,
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
      message: "Senha alterada com sucesso!",
    };
  }
}

export { ResetUserPasswordService };
