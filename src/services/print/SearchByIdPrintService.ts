import prismaClient from "../../prisma";

class SearchByIdPrintService {
  async execute(identifier: string) {
    const print = await prismaClient.print.findFirst({
      where: { identifier: identifier },
    });

    return print;
  }
}

export { SearchByIdPrintService };
