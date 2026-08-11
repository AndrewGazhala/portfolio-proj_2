import express, { type Request, type Response } from "express";
import swaggerUi from "swagger-ui-express";
import { openApiSpec } from "./openapi.js";
import v1Router from "./routes/v1/index.js";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));
app.use("/api/v1", v1Router);

app.get("/", (_req: Request, res: Response) => {
  res.json({
    name: "Portfolio API",
    versions: {
      v1: "/api/v1",
    },
    docs: "/api-docs",
  });
});

export default app;
