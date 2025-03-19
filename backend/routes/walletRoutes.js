import express from "express";
import  { getWalletData } from "../controllers/walletController.js";

const router = express.Router();

// Define the POST endpoint for getting wallet data
router.post("/get-wallet-data", async (req, res) => {
  const { wallet_address } = req.body;
  if (!wallet_address) {
    return res.status(400).json({ error: "Missing wallet_address parameter" });
  }

  try {
    const walletData = await getWalletData(wallet_address);
    res.json(walletData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch wallet data", details: error.message });
  }
});

export default router;
