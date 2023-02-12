import { createPrismaClient } from "@/server/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(createPrismaClient()),
  providers: []
};

export default NextAuth(authOptions);
