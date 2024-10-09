/*
  Warnings:

  - Added the required column `againstPC` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_loserId_fkey";

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_winnerId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "againstPC" BOOLEAN NOT NULL,
ALTER COLUMN "whatWon" DROP NOT NULL,
ALTER COLUMN "xpGained" DROP NOT NULL,
ALTER COLUMN "xpLost" DROP NOT NULL,
ALTER COLUMN "winnerId" DROP NOT NULL,
ALTER COLUMN "loserId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "totalXP" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_loserId_fkey" FOREIGN KEY ("loserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
