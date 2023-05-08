import prismaClient from "../../prisma";

class GetAllUserService {
  async execute() {
    const users = prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        profile_photo: true,
        created_at: true,
        updated_at: true,
      },
    });

    return users;
  }
}

export { GetAllUserService };
