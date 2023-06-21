import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface CreatePrintRequest {
  title: string;
  description: string;
  material: string;
  archive: string;
  owner: string;
}

class CreatePrintService {
  async execute({ title, description, material, archive, owner }: CreatePrintRequest) {
    const user = prismaClient.user.findFirst({
      where: { id: owner },
    });

    if (!user) {
      throw new BadRequestError("Usuário não encontrado");
    }

    if (!title) {
      throw new BadRequestError("Título não informado");
    }

    if (!description) {
      throw new BadRequestError("Descrição não informada");
    }

    if (!material) {
      throw new BadRequestError("Material não informado");
    }

    if (!archive) {
      throw new BadRequestError("Arquivo não encontrado");
    }

    const print = await prismaClient.print.create({
      data: {
        title: title,
        description: description,
        material: material,
        archive: archive,
        owner_id: owner,
      },
    });

    return print;
  }
}

export { CreatePrintService };
