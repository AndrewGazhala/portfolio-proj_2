/**
 * Express application setup.
 *
 * Configures JSON parsing, Swagger UI at `/api-docs`,
 * mounts the versioned API under `/api/v1`, and exposes
 * a root discovery endpoint.
 *
 * @module app
 */

import express, { type Request, type Response } from "express";
import swaggerUi from "swagger-ui-express";
import { openApiSpec } from "./openapi.js";
import v1Router from "./routes/v1/index.js";

/** Configured Express application instance. */
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));
app.use("/api/v1", v1Router);

/**
 * API discovery endpoint.
 *
 * @route GET /
 * @returns {object} API name, available versions, and docs path
 */
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
