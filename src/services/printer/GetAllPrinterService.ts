import prismaClient from "../../prisma";

interface GetAllPrinterRequest {
  page: number;
}
class GetAllPrinterService {
  async execute({ page }: GetAllPrinterRequest) {
    const skip = page <= 1 ? 0 : page * 5 - 5;

    const printers = await prismaClient.printer.findMany({
      skip: skip,
      take: 5,
      select: {
        id: true,
        title: true,
        material: true,
        type: true,
        status: true,
        description: true,
        created_at: true,
        updated_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return printers;
  }
}

export { GetAllPrinterService };
