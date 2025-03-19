import express from "express";
import { calculateCreditScore, calculateCreditScoreOnchainData } from "../controllers/creditScoreController.js";
import { getWalletData } from "../controllers/walletController.js";
 

const router = express.Router();

// Define the POST endpoint for credit score calculation (onchain data)
router.post("/calculate-credit-score-onchain-data", async (req, res) => {
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
    res.status(500).json({ error: "Failed to fetch wallet data", details: error.message });
  }
});

// Define the POST endpoint for credit score calculation
router.post("/calculate-credit-score", (req, res) => {
  const walletData = req.body;

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
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  const credit_score = calculateCreditScore(walletData);

  res.json({ credit_score });
});

export default router;
