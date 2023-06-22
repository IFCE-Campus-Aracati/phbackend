import prismaClient from "../../prisma";

interface GetAllPrintRequest {
  user_id: string;
  page: number;
}
class GetUserPrintService {
  async execute({ user_id, page }: GetAllPrintRequest) {
    const skip = page <= 1 ? 0 : page * 5 - 5;

    const prints = await prismaClient.print.findMany({
      skip: skip,
      take: 5,
      where: { owner_id: user_id },
      orderBy: {
        created_at: "desc",
      },
    });

    return prints;
  }
}

export { GetUserPrintService };
