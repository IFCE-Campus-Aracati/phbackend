import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";
class DeletePrinterService {
  async execute(id_printer: string) {
    if (!id_printer) {
      throw new BadRequestError("ID da impressora não informado");
    }

    const printer = await prismaClient.printer.delete({
      where: { id: id_printer },
    });

    if (!printer) {
      throw new BadRequestError("Impressora não encontrada");
    }

    return {
      message: "Impressora deletada com sucesso",
    };
  }
}

export { DeletePrinterService };
