'use client';

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { LogoutButton } from "./logout";

const Page = () => {
  const trpc = useTRPC();
  const create = useMutation(
    trpc.createWorkflows.mutationOptions({
      onSuccess: () => {
        toast.success("Workflow created successfully");
      },
    })
  );

  const testAi = useMutation(trpc.testAi.mutationOptions({
    onSuccess: () => {
      toast.success("AI job queued successfully");
    }
  }));

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      protected server component
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test AI
      </Button>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Wokflow
      </Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
