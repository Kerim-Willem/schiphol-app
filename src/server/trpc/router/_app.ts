// src/server/router/_app.ts
import { router } from "../trpc";

import { schipholRouter } from "./schiphol";

export const appRouter = router({
  api: schipholRouter,
});

export type AppRouter = typeof appRouter;
