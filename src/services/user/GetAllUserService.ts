import prismaClient from "../../prisma";

interface GetAllUserServiceRequest {
  user_id: string;
  page: number;
}

class GetAllUserService {
  async execute({ user_id, page }: GetAllUserServiceRequest) {
    const skip = page <= 1 ? 0 : page * 5 - 5;

    const [users, totalUsers] = await prismaClient.$transaction([
      prismaClient.user.findMany({
        skip: skip,
        take: 5,
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
        orderBy: {
          created_at: "desc",
        },
      }),
      prismaClient.user.count(),
    ]);

    const totalPage = Math.ceil(totalUsers / 5);

    return {
      users,
      totalPage,
    };
  }
}

export { GetAllUserService };
