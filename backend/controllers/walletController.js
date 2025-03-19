import Moralis from "moralis";
import { DateTime } from "luxon";

const chain = "0x89"; // Polygon Mainnet

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

  const walletCreationDateTime = DateTime.fromISO(timestamp);
  const now = DateTime.now();
  const walletAge = parseFloat(now.diff(walletCreationDateTime, "years").years.toFixed(2));

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

  const filteredTxs = transactions.raw.result.filter((tx) => {
    const txDate = DateTime.fromISO(tx.block_timestamp);
    return txDate >= twoMonthsAgo;
  });

  const sortedTxs = filteredTxs.sort(
    (a, b) => new Date(a.block_timestamp) - new Date(b.block_timestamp)
  );

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
export const getWalletData = async (walletAddress) => {
  const { walletAge, walletCreationDate } = await getWalletAge(walletAddress);
  const currentAssets = await getCurrentNativeBalance(walletAddress);
  const historicalBalances = await getLastTwoMonthsNativeBalance(walletAddress);
  const loanHistory = await getLoanHistory(walletAddress);
  const liquidations = await getLiquidations(walletAddress);

  return {
    walletAge,
    walletCreationDate,
    currentAssets,
    historicalBalances,
    loanHistory,
    liquidations,
  };
};

 
