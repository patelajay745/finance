"use server";

import { asyncHandler } from "@/lib/asyncHandler";
import { getAuthenicatedUser } from "@/lib/authenticateUser";
import { db } from "@/lib/prisma";
import { serializeTransaction } from "@/lib/utils";
import { CreateAccountData } from "@/types/formDataType";
import { auth } from "@clerk/nextjs/server";
import { Account } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createAccount = asyncHandler(async (data: CreateAccountData) => {
  const user = await getAuthenicatedUser();

  const balanceFloat = parseFloat(data.balance);
  if (isNaN(balanceFloat)) throw new Error("Invalid balance amount");

  const exisitingAccounts = await db.account.findMany({
    where: {
      userId: user.id,
    },
  });

  const shouldDefault = exisitingAccounts.length === 0 ? true : data.isDefault;

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
});

export const getUserAccounts = asyncHandler(
  async (): Promise<SerializedAccount[] | void> => {
    const user = await getAuthenicatedUser();
    const accounts = await db.account.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            transactions: true,
          },
        },
      },
    });

    const serializedAccount = accounts.map((account) =>
      serializeTransaction(account)
    );

    return serializedAccount;
  }
);
