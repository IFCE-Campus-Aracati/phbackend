-- CreateTable
CREATE TABLE "prints" (
    "id" TEXT NOT NULL,
    "indentifier" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "material" TEXT NOT NULL,
    "archive" TEXT NOT NULL,
    "printing_date" TIMESTAMP(3),
    "printing_duration" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "owner_id" TEXT NOT NULL,
    "printer_id" TEXT,

    CONSTRAINT "prints_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "prints" ADD CONSTRAINT "prints_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prints" ADD CONSTRAINT "prints_printer_id_fkey" FOREIGN KEY ("printer_id") REFERENCES "printers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
