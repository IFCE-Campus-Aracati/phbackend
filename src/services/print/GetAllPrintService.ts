import prismaClient from "../../prisma";

interface GetAllPrintRequest {
  page: number;
}
class GetAllPrintService {
  async execute({ page }: GetAllPrintRequest) {
    const skip = page <= 1 ? 0 : page * 5 - 5;

    const [prints, totalPrints] = await prismaClient.$transaction([
      prismaClient.print.findMany({
        skip: skip,
        take: 5,
        orderBy: {
          created_at: "desc",
        },
        include: {
          owner: {
            select: {
              name: true,
            },
          },
        },
      }),
      prismaClient.print.count(),
    ]);

    const totalPage = Math.ceil(totalPrints / 5);

    return {
      prints,
      totalPage,
    };
  }
}

export { GetAllPrintService };
