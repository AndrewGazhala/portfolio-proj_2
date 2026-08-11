export const openApiSpec = {
  openapi: "3.0.3",
  info: {
    title: "Portfolio API",
    version: "1.0.0",
    description: "Express back-end API documentation",
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "API v1",
    },
  ],
  paths: {
    "/": {
      get: {
        summary: "Root greeting",
        description: "Returns a simple greeting message",
        tags: ["General"],
        responses: {
          "200": {
            description: "Greeting response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Hello from Express",
                    },
                  },
                  required: ["message"],
                },
              },
            },
          },
        },
      },
    },
    "/health": {
      get: {
        summary: "Health check",
        description: "Returns the API health status",
        tags: ["General"],
        responses: {
          "200": {
            description: "Service is healthy",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "ok",
                    },
                  },
                  required: ["status"],
                },
              },
            },
          },
        },
      },
    },
  },
};
