import type { TRPCRouterRecord } from "@trpc/server";
import z from "zod";
import { protectedProcedure } from "~/lib/trpc/trpc";
import { apiKeys, apiUseLogs } from "./schema";
import db from "~/lib/db";
import { eq, and, desc, gte, lte } from "drizzle-orm";
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
          and(
            eq(apiKeys.organizationId, organizationId),
            eq(apiKeys.name, name)
          )
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
          and(
            eq(apiKeys.id, apiKeyId),
            eq(apiKeys.organizationId, organizationId)
          )
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

  getApiUsageByAgent: protectedProcedure
    .input(
      z.object({
        agentId: z.number(),
        organizationId: z.number().optional(),
        startDate: z.coerce.date().optional(),
        endDate: z.coerce.date().optional(),
      })
    )
    .query(async ({ input }) => {
      const { agentId, organizationId, startDate, endDate } = input;

      const conditions = [eq(apiUseLogs.agentId, agentId)];

      if (organizationId) {
        conditions.push(eq(apiUseLogs.organizationId, organizationId));
      }

      if (startDate) {
        conditions.push(gte(apiUseLogs.loggedAt, startDate));
      }

      if (endDate) {
        // Add one day to endDate to include the entire end date
        const endDateInclusive = new Date(endDate);
        endDateInclusive.setHours(23, 59, 59, 999);
        conditions.push(lte(apiUseLogs.loggedAt, endDateInclusive));
      }

      const usageLogs = await db
        .select()
        .from(apiUseLogs)
        .where(and(...conditions))
        .orderBy(desc(apiUseLogs.loggedAt));

      return usageLogs;
    }),

  getApiUsageByOrganization: protectedProcedure
    .input(
      z.object({
        organizationId: z.number(),
        startDate: z.coerce.date().optional(),
        endDate: z.coerce.date().optional(),
      })
    )
    .query(async ({ input }) => {
      const { organizationId, startDate, endDate } = input;

      const conditions = [eq(apiUseLogs.organizationId, organizationId)];

      if (startDate) {
        conditions.push(gte(apiUseLogs.loggedAt, startDate));
      }

      if (endDate) {
        // Add one day to endDate to include the entire end date
        const endDateInclusive = new Date(endDate);
        endDateInclusive.setHours(23, 59, 59, 999);
        conditions.push(lte(apiUseLogs.loggedAt, endDateInclusive));
      }

      const usageLogs = await db
        .select()
        .from(apiUseLogs)
        .where(and(...conditions))
        .orderBy(desc(apiUseLogs.loggedAt));

      return usageLogs;
    }),
} satisfies TRPCRouterRecord;
