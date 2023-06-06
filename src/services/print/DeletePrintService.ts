import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface DeletePrintRequest {
  print_id: string;
}

class DeletePrintService {
  async execute({ print_id }: DeletePrintRequest) {
    const printExists = await prismaClient.print.findFirst({
      where: { id: print_id },
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
