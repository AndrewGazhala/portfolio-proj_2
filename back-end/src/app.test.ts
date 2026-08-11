import request from "supertest";
import app from "./app";

describe("API", () => {
  it("GET / returns a greeting", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello from Express" });
  });

  it("GET /health returns ok", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("GET /api-docs/ serves Swagger UI", async () => {
    const response = await request(app).get("/api-docs/");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Swagger UI");
  });
});
