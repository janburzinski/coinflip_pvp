-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "miau" BOOLEAN NOT NULL DEFAULT false,
    "miaumiau" TEXT,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
