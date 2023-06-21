import prismaClient from "../../prisma";

class DetailsPrinterService {
  async execute(id_printer: string) {
    const printer = await prismaClient.printer.findFirst({
      where: { id: id_printer },
    });

    return printer;
  }
}

export { DetailsPrinterService };
