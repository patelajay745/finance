"use server";

import { db } from "@/lib/prisma";
import { CreateAccountData } from "@/types/formDataType";
import { auth } from "@clerk/nextjs/server";
import { Account } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createAccount = async (data: CreateAccountData) => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("unauthorized");

    const user = await db.user.findUnique({
      where: { clearkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const balanceFloat = parseFloat(data.balance);
    if (isNaN(balanceFloat)) throw new Error("Invalid balance amount");

    const exisitingAccounts = await db.account.findMany({
      where: {
        userId: user.id,
      },
    });

    const shouldDefault =
      exisitingAccounts.length === 0 ? true : data.isDefault;

    if (shouldDefault) {
      await db.account.updateMany({
        where: {
          userId: user.id,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        userId: user.id,
        isDefault: shouldDefault,
      },
    });

    const serializedAccount = serializeTransaction(account);

    revalidatePath("/dashboard");
    return { success: true, data: serializedAccount };
  } catch (error) {
    const errorMessage = (error as Error).message;
    throw new Error(errorMessage);
  }
};

const serializeTransaction = (obj: any) => {
  const serialized = { ...obj };

  if (obj.balance) {
    serialized.balance = obj.balance.toNumber();
  }
};
