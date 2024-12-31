import { auth } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const getAuthenicatedUser = async (): Promise<User> => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clearkUserId: userId,
    },
  });

  if (!user) {
    throw new Error("user not found");
  }

  return user;
};
