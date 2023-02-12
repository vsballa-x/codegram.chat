import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().min(1) }))
    .query(({ input }) => `Hello, ${input.text}!`)
});

export type AppRouter = typeof appRouter;
