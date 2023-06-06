import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface UpdatePrintOwnerRequest {
  id: string;
  title: string;
  description: string;
  material: string;
  archive: string;
  owner: string;
}

class UpdatePrintOwnerService {
  async execute({ id, title, description, material, archive, owner }: UpdatePrintOwnerRequest) {
    const printExists = await prismaClient.print.findFirst({
      where: { id: id, owner_id: owner },
    });

    if (!printExists) {
      throw new BadRequestError("Não foi encontrado nenhuma impressão");
    }

    const print = await prismaClient.print.update({
      where: { id: printExists.id },
      data: {
        title: title,
        description: description,
        material: material,
        archive: archive,
        updated_at: new Date(),
      },
    });

    return print;
  }
}

export { UpdatePrintOwnerService };
