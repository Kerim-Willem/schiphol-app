/* eslint-disable @typescript-eslint/no-unused-vars */
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

type CreateContextOptions = Record<string, never>;

export const createContextInner = async (opts: CreateContextOptions) => {
  return {};
};

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  return await createContextInner({});
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
