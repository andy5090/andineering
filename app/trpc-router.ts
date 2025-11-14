import { createTRPCRouter } from "~/lib/trpc/trpc";
import { inquiriesRouter } from "./features/inquiries/api";
import { organizationsRouter } from "./features/organizations/api";

export const appRouter = createTRPCRouter({
  inquiries: inquiriesRouter,
  organizations: organizationsRouter,
});

export type AppRouter = typeof appRouter;
