import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from './trpc';


 

const expressApp = express();

expressApp.get("/", (req, res) => {
  res.send("Hello, UniSmart Backend!");
});

expressApp.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
)

expressApp.listen(3000, () => {
  console.info("Server is running on http://localhost:3000");
});

export default expressApp;
export type { TrpcRouter } from "./trpc";
