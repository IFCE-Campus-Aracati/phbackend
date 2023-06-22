import prismaClient from "../../prisma";

interface GetAllPrintRequest {
  page: number;
}
class GetAllPrintService {
  async execute({ page }: GetAllPrintRequest) {
    const skip = page <= 1 ? 0 : page * 5 - 5;

    const prints = await prismaClient.print.findMany({
      skip: skip,
      take: 5,
      orderBy: {
        created_at: "desc",
      },
    });

    return prints;
  }
}

export { GetAllPrintService };
