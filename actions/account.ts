"use server";

import { asyncHandler } from "@/lib/asyncHandler";
import { getAuthenicatedUser } from "@/lib/authenticateUser";
import { db } from "@/lib/prisma";
import { serializeTransaction } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export const updateDefaultAccount = asyncHandler(async (accountId) => {
  const user = await getAuthenicatedUser();

  await db.account.updateMany({
    where: { userId: user.id, isDefault: true },
    data: {
      isDefault: false,
    },
  });

  const account = await db.account.update({
    where: {
      id: accountId,
      userId: user.id,
    },
    data: {
      isDefault: true,
    },
  });

  revalidatePath("/dashboard");

  return { success: true, data: serializeTransaction(account) };
});

export const getAccountTransactions = asyncHandler(async (accountId) => {
  const user = await getAuthenicatedUser();

  const account = await db.account.findUnique({
    where: {
      id: accountId,
      userId: user.id,
    },

    include: {
      transactions: {
        orderBy: { date: "desc" },
      },
      _count: {
        select: { transactions: true },
      },
    },
  });

  if (!account) return null;

  return {
    ...serializeTransaction(account),
    transactions: account.transactions.map((transaction) =>
      serializeTransaction(transaction)
    ),
  };
});