import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import Moralis from "moralis";
import { DateTime } from "luxon";

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

// Initialize Moralis
await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

// Polygon Mainnet
const chain = "0x89";

// Function to get wallet age
const getWalletAge = async (walletAddress) => {
  const transactions = await Moralis.EvmApi.transaction.getWalletTransactions({
    address: walletAddress,
    chain,
  });

  const firstTransaction = transactions.raw.result.pop(); // Oldest transaction
  if (!firstTransaction) return { walletAge: 0, walletCreationDate: "Unknown" };

  const timestamp = firstTransaction.block_timestamp;
  const walletCreationDate = DateTime.fromISO(timestamp).toFormat("dd-MM-yyyy");

  // Calculate wallet age in years
  const walletCreationDateTime = DateTime.fromISO(timestamp);
  const now = DateTime.now();
  const walletAge = parseFloat(
    now.diff(walletCreationDateTime, "years").years.toFixed(2)
  );

  return { walletAge, walletCreationDate };
};

// Function to get current native token balance
const getCurrentNativeBalance = async (walletAddress) => {
  const response = await Moralis.EvmApi.balance.getNativeBalance({
    chain,
    address: walletAddress,
  });

  return parseFloat(response.raw.balance) / 10 ** 18; // Convert to MATIC
};

// Function to get historical native balances (last 2 months)
const getLastTwoMonthsNativeBalance = async (walletAddress) => {
  const now = DateTime.now();
  const twoMonthsAgo = now.minus({ months: 2 });

  const transactions = await Moralis.EvmApi.transaction.getWalletTransactions({
    address: walletAddress,
    chain,
  });

  console.log("transactions: ", transactions);

  const filteredTxs = transactions.raw.result.filter((tx) => {
    const txDate = DateTime.fromISO(tx.block_timestamp);
    return txDate >= twoMonthsAgo;
  });

  const sortedTxs = filteredTxs.sort(
    (a, b) => new Date(a.block_timestamp) - new Date(b.block_timestamp)
  );
  console.log("sortedTxs", sortedTxs);

  let balance = 0;
  let historicalBalances = {};

  sortedTxs.forEach((tx) => {
    const txDate = DateTime.fromISO(tx.block_timestamp);
    const monthYear = txDate.toFormat("MM-yyyy");

    const value = parseFloat(tx.value) / 10 ** 18;

    if (tx.from_address.toLowerCase() === walletAddress.toLowerCase()) {
      balance -= value;
    } else if (tx.to_address.toLowerCase() === walletAddress.toLowerCase()) {
      balance += value;
    }

    historicalBalances[monthYear] = balance;
  });

  console.log("historicalBalances: ", historicalBalances);

  return historicalBalances;
};

// Placeholder functions for loan history & liquidations
const getLoanHistory = async (walletAddress) => {
  return 0; // Placeholder, requires DeFi protocol data
};

const getLiquidations = async (walletAddress) => {
  return 0; // Placeholder, requires DeFi protocol data
};

// Main function to fetch wallet data
const getWalletData = async (walletAddress) => {
  const { walletAge, walletCreationDate } = await getWalletAge(walletAddress);
  const currentAssets = await getCurrentNativeBalance(walletAddress);
  const historicalBalances = await getLastTwoMonthsNativeBalance(walletAddress);
  const loanHistory = await getLoanHistory(walletAddress);
  const liquidations = await getLiquidations(walletAddress);

  return {
    walletAge,
    walletCreationDate,
    loanHistory,
    liquidations,
    currentAssets,
    historicalBalances,
  };
};

// Credit Score Calculation Function
const calculateCreditScoreOnchainData = ({
  walletAge,
  loanHistory,
  liquidations,
  currentAssets,
  historicalBalances,
}) => {
  let creditScore = 500; // Default base score

  // Extract past assets from historical balances
  const pastAssetValues = Object.values(historicalBalances);
  const pastAssets =
    pastAssetValues.length > 0
      ? pastAssetValues.reduce((sum, val) => sum + val, 0) /
        pastAssetValues.length // Average past balance
      : 0;

  // Factors
  const assetFactor = Math.log(1 + currentAssets) * 10;
  const pastAssetPenalty = Math.log(1 + pastAssets) * 5;

  // Apply scoring rules
  creditScore += walletAge * 20;
  creditScore += loanHistory * 10;
  creditScore -= liquidations * 50;
  creditScore += assetFactor;
  creditScore -= pastAssetPenalty;

  // Normalize score
  creditScore = 500 + 500 * Math.tanh((creditScore - 500) / 500);
  return Math.max(0, Math.min(1000, Math.round(creditScore)));
};

// Define the POST endpoint
app.post("/calculate-credit-score-onchain-data", async (req, res) => {
  const { wallet_address } = req.body;
  if (!wallet_address) {
    return res.status(400).json({ error: "Missing wallet_address parameter" });
  }

  try {
    const walletData = await getWalletData(wallet_address);
    const creditScore = calculateCreditScoreOnchainData(walletData);
    res.json({
      wallet_address,
      credit_score: creditScore,
      wallet_age: walletData.walletAge,
      wallet_creation_date: walletData.walletCreationDate,
      loan_history: walletData.loanHistory,
      liquidations: walletData.liquidations,
      current_assets: walletData.currentAssets,
      past_assets: walletData.historicalBalances,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch wallet data", details: error.message });
  }
});

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
