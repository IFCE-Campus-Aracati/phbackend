import prismaClient from "../../prisma";

class GetAllUserService {
  async execute(user_id: string) {
    const users = await prismaClient.user.findMany({
      where: { NOT: { id: user_id } },
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
