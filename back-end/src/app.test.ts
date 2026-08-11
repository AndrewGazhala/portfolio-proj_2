/**
 * API integration tests.
 *
 * Exercises the Express app in-process with Supertest
 * (routes, middleware, and JSON responses). No mocks —
 * the real app wiring is used.
 *
 * @module app.test
 */

import request from "supertest";
import app from "./app";

describe("API", () => {
  it("GET / returns available API versions", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: "Portfolio API",
      versions: {
        v1: "/api/v1",
      },
      docs: "/api-docs",
    });
  });

  it("GET /api/v1 returns a greeting", async () => {
    const response = await request(app).get("/api/v1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello from Express" });
  });

  it("GET /api/v1/health returns ok", async () => {
    const response = await request(app).get("/api/v1/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("GET /api-docs/ serves Swagger UI", async () => {
    const response = await request(app).get("/api-docs/");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Swagger UI");
  });
});
