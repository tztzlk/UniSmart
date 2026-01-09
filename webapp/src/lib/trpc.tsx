import { createTRPCReact } from "@trpc/react-query";
import type { TrpcRouter } from "@unismart/backend/src/index.ts";

export const trpc = createTRPCReact<TrpcRouter>();
