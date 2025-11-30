import { createTRPCRouter } from "~/lib/trpc/trpc";
import { agentsRouter } from "./features/agents/trpc";
import { inquiriesRouter } from "./features/inquiries/trpc";
import { organizationsRouter } from "./features/organizations/trpc";
import { usersRouter } from "./features/users/trpc";

export const appRouter = createTRPCRouter({
  users: usersRouter,
  inquiries: inquiriesRouter,
  organizations: organizationsRouter,
  agents: agentsRouter,
});

export type AppRouter = typeof appRouter;
