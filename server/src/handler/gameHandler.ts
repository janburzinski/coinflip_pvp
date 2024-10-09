import prisma from "src/db/prismaClient";
import { calculateLoss, calculateWin } from "src/utils/xpCalculator";

const createGame = async (
  againstPC: boolean,
  player1?: number,
  player2?: number
) => {
  const game = await prisma.game.create({
    data: {
      againstPC: againstPC,
      winner: { connect: { id: player1 } },
      loser: { connect: { id: player2 } },
    },
  });

  return game;
};

const updateGame = async (
  gameId: number,
  winner: number,
  loser: number,
  whatWon: string
) => {
  // is this even necessary?
  const hasConcluded = await hasGameConcluded(gameId);
  if (hasConcluded) return;

  // calculate xp and update users
  const xpWon = await calculateWin(winner);
  const xpLost = await calculateLoss(loser);

  // update game
  const game = await prisma.game.update({
    where: {
      id: gameId,
    },
    data: {
      winner: { connect: { id: winner } },
      loser: { connect: { id: loser } },
      xpGained: xpWon,
      xpLost: xpLost,
      whatWon: whatWon,
      hasConcluded: true,
    },
  });

  return game;
};

const hasGameConcluded = async (gameId: number) => {
  const data = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    select: {
      hasConcluded: true,
    },
  });

  return data?.hasConcluded;
};
