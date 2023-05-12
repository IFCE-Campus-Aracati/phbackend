import prismaClient from "../../prisma"

class GetAllPrinterService {
  async execute() {
    const printers = await prismaClient.printer.findMany({
      select: {
        id: true,
        title: true,
        material: true,
        type: true,
        status: true,
        description: true,
        created_at: true,
        updated_at: true,
      }
    });

    return printers;
  }
}

export { GetAllPrinterService }