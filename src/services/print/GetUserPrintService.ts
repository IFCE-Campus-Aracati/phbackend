import prismaClient from "../../prisma";

class GetUserPrintService {
  async execute(user_id: string) {
    const prints = await prismaClient.print.findMany({
      where: { owner_id: user_id },
    });

    return prints;
  }
}

export { GetUserPrintService };
