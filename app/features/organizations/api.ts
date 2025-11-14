import type { TRPCRouterRecord } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/lib/trpc/trpc";
import { apiKeys } from "./schema";
import db from "~/lib/db";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export const organizationsRouter = {
  generateApiKey: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        organizationId: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const { name, organizationId } = input;

      const apiKeysData = await db
        .select()
        .from(apiKeys)
        .where(
          eq(apiKeys.organization_id, organizationId) && eq(apiKeys.name, name)
        );

      if (apiKeysData.length > 0) {
        return {
          error: "API key already exists",
        };
      }

      const newApiKey = await db
        .insert(apiKeys)
        .values({
          name,
          organization_id: organizationId,
          api_key: `kg_${organizationId}_${randomUUID()}`,
        })
        .returning();

      return newApiKey[0];
    }),
} satisfies TRPCRouterRecord;
