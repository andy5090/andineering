import db from "~/lib/db";
import { inquiries } from "./schema";
import type { TRPCRouterRecord } from "@trpc/server";
import { publicProcedure } from "~/lib/trpc/trpc";
import z from "zod";

interface InquiryInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const submitInquiry = async (inquiry: InquiryInput) => {
  try {
    const newInquiry = await db.insert(inquiries).values(inquiry).returning();

    return newInquiry[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to submit inquiry");
  }
};

export const inquiriesRouter = {
  submitInquiry: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string().optional(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await submitInquiry(input);
    }),
  // user: protectedProcedure.query(async ({ input, ctx }) => {
  //   const user = await ctx.db.user.findFirst({
  //     where: {
  //       id: ctx.user?.id
  //     }
  //   })

  //   return user
  // })
} satisfies TRPCRouterRecord;
