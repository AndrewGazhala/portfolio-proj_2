/**
 * API version 1 routes.
 *
 * Mounted by the app at `/api/v1`.
 *
 * @module routes/v1
 */

import { Router, type Request, type Response } from "express";

/** Express router for all v1 endpoints. */
const v1Router = Router();

/**
 * Greeting endpoint for API v1.
 *
 * @route GET /api/v1
 * @returns {{ message: string }} Greeting payload
 */
v1Router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Express" });
});

/**
 * Liveness/health check for API v1.
 *
 * @route GET /api/v1/health
 * @returns {{ status: string }} Health status payload
 */
v1Router.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

export default v1Router;
