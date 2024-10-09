import prisma from "src/db/prismaClient";

const BASE_WIN_XP = 100;
const BASE_LOSS_XP = 50;

const WIN_STREAK_MULTIPLIER = 0.1; // 10%
const LOSS_STREAK_PENALTY = 0.15; // 15%

const calculateWin = async (userId: number) => {
  const currentWinStreak = await getCurrentWinStreak(userId);
  if (!currentWinStreak) return BASE_WIN_XP;

  const bonusXP = BASE_WIN_XP * (currentWinStreak * WIN_STREAK_MULTIPLIER);
  const totalXP = Math.round(BASE_WIN_XP + bonusXP);

  await prisma.user.update({
    where: { id: userId },
    data: {
      currentWinStreak: currentWinStreak + 1,
      currentLosingStreak: 0,
      totalXP: { increment: totalXP },
    },
  });

  return totalXP;
};

const calculateLoss = async (userId: number) => {
  const currentLosingStreak = await getCurrentLosingStreak(userId);
  if (!currentLosingStreak) return BASE_LOSS_XP;

  const penaltyXP = BASE_LOSS_XP * (currentLosingStreak * LOSS_STREAK_PENALTY);
  const totalXP = Math.round(Math.max(BASE_LOSS_XP - penaltyXP, 10));

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      currentWinStreak: 0,
      currentLosingStreak: currentLosingStreak + 1,
      totalXP: { decrement: totalXP },
    },
  });

  return totalXP;
};

const getCurrentWinStreak = async (userId: number): Promise<number | null> => {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      currentWinStreak: true,
    },
  });

  return data?.currentWinStreak ?? null;
};

const getCurrentLosingStreak = async (
  userId: number
): Promise<number | null> => {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      currentLosingStreak: true,
    },
  });

  return data?.currentLosingStreak ?? null;
};

export {
  calculateLoss,
  calculateWin,
  getCurrentWinStreak,
  getCurrentLosingStreak,
};
