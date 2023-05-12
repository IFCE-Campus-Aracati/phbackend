import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface DeletePrinterRequest {
  id: string;
}


class DeletePrinterService {
  async execute({ id }: DeletePrinterRequest) {
    if (!id) {
      throw new BadRequestError("ID da impressora não informado");
    }

    const printer = await prismaClient.printer.delete({
      where: { id: id },
    });

    if (!printer) {
      throw new BadRequestError("Impressora não encontrada");
    }

    return {
      message: "Impressora deletada com sucesso",
    };
  }
}

export { DeletePrinterService }