import { BadRequestError } from "../../helpers/api-errors";
import prismaClient from "../../prisma";

interface PrinterRequest {
  title: string;
  material: string;
  type: string;
  description: string
}

class CreatePrinterService {
  async execute({title, material, type, description}:PrinterRequest){
    if(!title) {
      throw new BadRequestError("Título não informado");
    }

    const printerAlreadyExists = await prismaClient.printer.findFirst({
      where: {title},
    })

    if (printerAlreadyExists) {
      throw new BadRequestError("Impressora já cadastrada");
    }
    
    if(!material) {
      throw new BadRequestError("Material da impressora não informado");
    }

    if(!type) {
      throw new BadRequestError("Tipo de impressão não informado");
    }

    const printer = await prismaClient.printer.create({
      data: {
        title,
        material,
        type,
        description
      },
    });

    return {
      id: printer.id,
      title: printer.title,
      material: printer.material,
      type: printer.material,
      status: printer.status,
      description: printer.description
    }
  }
}

export { CreatePrinterService }