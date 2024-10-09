-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "hasConcluded" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "currentLosingStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "currentWinStreak" INTEGER NOT NULL DEFAULT 0;
