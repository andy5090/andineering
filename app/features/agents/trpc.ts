import db from "~/lib/db";
import { agents } from "./schema";
import type { TRPCRouterRecord } from "@trpc/server";
import { publicProcedure } from "~/lib/trpc/trpc";

export const agentsRouter = {
  list: publicProcedure.query(async () => {
    return await db.select().from(agents);
  }),
} satisfies TRPCRouterRecord;
