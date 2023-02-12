import { PrismaClient } from "@prisma/client";

let client: PrismaClient | undefined = undefined;

export function createPrismaClient() {
  if (!client) {
    client = new PrismaClient({
      log:
        process.env.NODE_ENV === "development"
          ? ["query", "error", "warn"]
          : ["error"]
    });
  }
  return client;
}
