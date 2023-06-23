import prismaClient from "../../prisma";
import { BadRequestError } from "../../helpers/api-errors";

interface CreatePrintAnonimousRequest {
  title: string;
  description: string;
  material: string;
  archive: string;
}

class CreatePrintAnonimousService {
  async execute({ title, description, material, archive }: CreatePrintAnonimousRequest) {
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
      },
    });

    return print;
  }
}

export { CreatePrintAnonimousService };
