import prismaClient from "../../prisma"

interface UpdatePrinterRequest {
  id: string,
  title?: string,
  material?: string,
  type?: string,
  status?: string,
  description?: string
}


class UpdatePrinterService {
  async execute({
    id,
    title,
    material,
    type,
    status,
    description
  }: UpdatePrinterRequest) {
    const printerExists = await prismaClient.printer.findFirst({
      where: { id: id },
    })

    const printer = await prismaClient.printer.update({
      where: { id: printerExists.id },
      data: {
        title,
        material,
        type,
        status,
        description
      }
    });

    return {
      printer,
      message: "Impressora atualizada com sucesso!"
    }
  }
}

export { UpdatePrinterService }