import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import Moralis from "moralis";
import walletRoutes from "./routes/walletRoutes.js";
import creditScoreRoutes from "./routes/creditScoreRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Built-in JSON parser
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Too many requests, please try again later." },
});
app.use(limiter);

// Initialize Moralis
await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

// Use the routes
app.use("/api", walletRoutes);
app.use("/api", creditScoreRoutes);


export default app;