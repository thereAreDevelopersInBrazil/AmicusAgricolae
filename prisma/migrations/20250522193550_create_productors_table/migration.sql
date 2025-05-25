-- CreateEnum
CREATE TYPE "LegalEntityType" AS ENUM ('FISICA', 'JURIDICA');

-- CreateTable
CREATE TABLE "Productors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "type" "LegalEntityType" NOT NULL,

    CONSTRAINT "Productors_pkey" PRIMARY KEY ("id")
);
