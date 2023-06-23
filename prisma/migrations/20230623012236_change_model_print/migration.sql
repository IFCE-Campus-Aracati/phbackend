/*
  Warnings:

  - You are about to drop the column `indentifier` on the `prints` table. All the data in the column will be lost.
  - The required column `identifier` was added to the `prints` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "prints" DROP CONSTRAINT "prints_owner_id_fkey";

-- AlterTable
ALTER TABLE "printers" ALTER COLUMN "status" SET DEFAULT 'available';

-- AlterTable
ALTER TABLE "prints" DROP COLUMN "indentifier",
ADD COLUMN     "identifier" TEXT NOT NULL,
ALTER COLUMN "printing_duration" SET DATA TYPE TEXT,
ALTER COLUMN "owner_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "prints" ADD CONSTRAINT "prints_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
