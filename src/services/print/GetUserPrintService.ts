import prismaClient from "../../prisma";

interface GetAllPrintRequest {
  user_id: string;
  page: number;
}
class GetUserPrintService {
  async execute({ user_id, page }: GetAllPrintRequest) {
    const skip = page <= 1 ? 0 : page * 5 - 5;

    const [prints, totalPrints] = await prismaClient.$transaction([
      prismaClient.print.findMany({
        skip: skip,
        take: 5,
        where: { owner_id: user_id },
        orderBy: {
          created_at: "desc",
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

export { GetUserPrintService };
