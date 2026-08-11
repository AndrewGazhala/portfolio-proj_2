import { Router, type Request, type Response } from "express";

const v1Router = Router();

v1Router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Express" });
});

v1Router.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

export default v1Router;
