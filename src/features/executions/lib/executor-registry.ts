import { googleFormTriggerExecutor } from "@/features/trigger/components/google-form-trigger/executors";
import { manualTriggerExecutor } from "@/features/trigger/components/manual-trigger/executors";
import { stripeTriggerExecutor } from "@/features/trigger/components/stripe-trigger/executors";
import { NodeType } from "@/generated/prisma/enums";
import { httpRequestExecutor } from "../components/http-request/executors";
import { NodeExecutor } from "../type";
import { geminiExecutor } from "../components/gemini/executors";

export const executorRegistry: Record<NodeType, NodeExecutor> = {
  [NodeType.INITIAL]: manualTriggerExecutor,
  [NodeType.MANUAL_TRIGGER]: manualTriggerExecutor,
  [NodeType.HTTP_REQUEST]: httpRequestExecutor,
  [NodeType.GOOGLE_FORM_TRIGGER]: googleFormTriggerExecutor,
  [NodeType.STRIPE_TRIGGER]: stripeTriggerExecutor,
  [NodeType.GEMINI]: geminiExecutor,
  [NodeType.OPENAI]: geminiExecutor,
  [NodeType.ANTHROPIC]: geminiExecutor,
};

export const getExecutor = (type: NodeType): NodeExecutor => {
  const executor = executorRegistry[type];
  if (!executor) {
    throw new Error(`No executor found for node type: ${type}`);
  }
  return executor;
};
