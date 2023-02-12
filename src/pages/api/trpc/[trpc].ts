import createContext from "@/server/context";
import { appRouter } from "@/server/routers";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
  router: appRouter,
  createContext,
  ...(process.env.NODE_ENV === "development"
    ? {
        onError: ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      }
    : {})
});
