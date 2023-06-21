import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";
class DeletePrintService {
  async execute(id_print: string) {
    const printExists = await prismaClient.print.findFirst({
      where: { id: id_print },
    });

    if (!printExists) {
      throw new BadRequestError("Não foi encontrado nenhuma impressão");
    }

    if (printExists.status === "approved") {
      throw new BadRequestError("Não foi possível deletar a impressão");
    }

    const print = await prismaClient.print.delete({
      where: { id: printExists.id },
    });

    return {
      message: "Impressão deletada com sucesso",
    };
  }
}

export { DeletePrintService };
