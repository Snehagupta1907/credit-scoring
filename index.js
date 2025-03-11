import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Built-in JSON parser
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: "Too many requests, please try again later." },
});
app.use(limiter);

// Middleware to parse JSON request bodies
//app.use(bodyParser.json());

// Credit Score Calculation Function
const calculateCreditScore = (data) => {
  const {
    old_credit_score,
    wallet_age,
    loan_history,
    liquidations,
    current_assets,
    past_assets,
  } = data;

  let credit_score = old_credit_score;

  // Normalize asset contribution using logarithmic scaling
  const asset_factor = Math.log(1 + current_assets) * 10;
  const past_asset_penalty = Math.log(1 + past_assets) * 5;

  // Age and loan history weighted more
  credit_score += wallet_age * 20;
  credit_score += loan_history * 10;

  // Stronger liquidation penalty
  credit_score -= liquidations * 50;

  // Assets impact with logarithm (prevents extreme values)
  credit_score += asset_factor;
  credit_score -= past_asset_penalty;

  // Normalize using a sigmoid-like function to keep scores within a reasonable range
  credit_score = 500 + 500 * Math.tanh((credit_score - 500) / 500);

  return Math.max(0, Math.min(1000, Math.round(credit_score))); // Keep between 0-1000
};

// Define the POST endpoint for credit score calculation
app.post("/calculate-credit-score", (req, res) => {
  const walletData = req.body;

  // Ensure the required fields are in the request
  const requiredFields = [
    "wallet_address",
    "old_credit_score",
    "wallet_age",
    "loan_history",
    "liquidations",
    "current_assets",
    "past_assets",
  ];

  for (let field of requiredFields) {
    if (!walletData.hasOwnProperty(field)) {
      return res
        .status(400)
        .json({ error: `Missing required field: ${field}` });
    }
  }

  // Calculate the credit score based on the data
  const credit_score = calculateCreditScore(walletData);

  // Return the calculated credit score
  res.json({ credit_score });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port :${port}`);
});
