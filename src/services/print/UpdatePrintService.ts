import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface UpdatePrintRequest {
  id: string;
  printing_date: string;
  printing_duration: string;
  status: string;
  printer_id: string;
}

class UpdatePrintService {
  async execute({ id, printing_date, printing_duration, status, printer_id }: UpdatePrintRequest) {
    const printExists = await prismaClient.print.findFirst({
      where: { id: id },
    });

    if (!printExists) {
      throw new BadRequestError("Não foi encontrado nenhuma impressão");
    }

    const printer = await prismaClient.printer.findFirst({
      where: { id: printer_id },
    });

    if (!printer) {
      throw new BadRequestError("Impressora não foi informada corretamente");
    }

    const print = await prismaClient.print.update({
      where: { id: printExists.id },
      data: {
        printing_date: printing_date,
        printing_duration: printing_duration,
        status: status,
        printer: {
          connect: {
            id: printer.id,
          },
        },
        updated_at: new Date(),
      },
    });

    return print;
  }
}

export { UpdatePrintService };
