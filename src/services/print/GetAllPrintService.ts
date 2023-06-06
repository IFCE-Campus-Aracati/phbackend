import prismaClient from "../../prisma";

class GetAllPrintService {
  async execute() {
    const prints = await prismaClient.print.findMany();

    return prints;
  }
}

export { GetAllPrintService };
