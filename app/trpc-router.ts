import { createTRPCRouter } from "~/lib/trpc/trpc";
import { inquiriesRouter } from "./features/inquiries/trpc";
import { organizationsRouter } from "./features/organizations/trpc";

export const appRouter = createTRPCRouter({
  inquiries: inquiriesRouter,
  organizations: organizationsRouter,
});

export type AppRouter = typeof appRouter;
