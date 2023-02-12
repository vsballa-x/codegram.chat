import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { createPrismaClient } from "@/server/prisma";
import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerSession } from "next-auth";

// NOTE: When using SSG helpers or implementing integration tests, better to
// seperate inner and outer contexts as explained here: https://trpc.io/docs/context

export default async function createContext(opts: CreateNextContextOptions) {
  const session = await getServerSession(opts.req, opts.res, authOptions);
  return {
    session,
    prisma: createPrismaClient(),
    req: opts.req,
    res: opts.res
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
