import { createTRPCRouter } from "~/lib/trpc/trpc";
import { inquiriesRouter } from "./features/inquiries/api";

export const appRouter = createTRPCRouter({
  inquiries: inquiriesRouter,
});

export type AppRouter = typeof appRouter;
