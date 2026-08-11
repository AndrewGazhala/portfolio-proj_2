import express, { type Request, type Response } from "express";
import swaggerUi from "swagger-ui-express";
import { openApiSpec } from "./openapi.js";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Express" });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

export default app;
