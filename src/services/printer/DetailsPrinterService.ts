import prismaClient from "../../prisma"


class DetailsPrinterService{
  async execute(id: string){
    const printer = await prismaClient.printer.findFirst({
      where: {id: id}
    });

    return printer
  }
}

export {DetailsPrinterService}