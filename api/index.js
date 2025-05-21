// api/index.js
import express from "express";

const app = express();

// JSON body parsing
app.use(express.json());

//
// ——— Your existing routes go here ———
//
// If you previously had any of these in server/index.ts:
//   app.get("/foo", …)
//   app.post("/bar", …)
//   etc.
//
// Copy them in here exactly, **but omit** any static‐serving or catch‐all logic.
// For example:
app.get("/hello", (_req, res) => {
  res.json({ message: "Hello from your Vercel function!" });
});

// ————————————————————————————————

export default app;
