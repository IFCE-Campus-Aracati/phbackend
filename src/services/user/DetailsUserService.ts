import prismaClient from "../../prisma";

class DetailsUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: { id: user_id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        profile_photo: true,
      },
    });

    return user;
  }
}

export { DetailsUserService };
