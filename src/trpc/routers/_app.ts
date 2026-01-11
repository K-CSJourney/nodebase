import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { createTRPCRouter, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    console.log({ userId: ctx.auth.user.id });
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),
  createWorkflows: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello-world",
      data: {
        email: "kbws13@163.com",
      },
    });

    return { success: true, message: "Workflow creation triggered." };
  }),
  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });
    return { success: true, message: "Job queued" };
  }),
});

export type AppRouter = typeof appRouter;
