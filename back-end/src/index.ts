/**
 * Application entry point.
 *
 * Starts the HTTP server on `PORT` (default `3000`)
 * and logs the base URL plus Swagger docs location.
 *
 * @module index
 */

import app from "./app.js";

/** Port the HTTP server listens on. */
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
