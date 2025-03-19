export const calculateCreditScoreOnchainData = ({
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
  
 export  const calculateCreditScore = (data) => {
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
  

  