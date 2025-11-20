import type { TRPCRouterRecord } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/lib/trpc/trpc";
import { apiKeys, organizations } from "./schema";
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
          eq(apiKeys.organizationId, organizationId) && eq(apiKeys.name, name)
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
          apiKey: `kg_${organizationId}_${randomUUID()}`,
          organizationId: organizationId,
        })
        .returning();

      return newApiKey[0];
    }),

  revokeApiKey: protectedProcedure
    .input(
      z.object({
        apiKeyId: z.number(),
        organizationId: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const { apiKeyId, organizationId } = input;

      // check user is member of the organization by api key id
      const [apiKey] = await db
        .select()
        .from(apiKeys)
        .where(
          eq(apiKeys.id, apiKeyId) && eq(apiKeys.organizationId, organizationId)
        );

      if (!apiKey) {
        return {
          error: "API key not found",
        };
      }

      await db.delete(apiKeys).where(eq(apiKeys.id, apiKeyId));

      return {
        success: true,
      };
    }),
} satisfies TRPCRouterRecord;
