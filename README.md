# DeFi On-Chain Credit Scoring

## 🚀 Overview  

This repository contains:  
- **A frontend landing page** to showcase our vision and attract early adopters.  
- **An example API** for calculating on-chain credit scores based on wallet activity.  

Our goal is to revolutionize DeFi lending by enabling **customizable, data-driven credit scoring models**, reducing reliance on over-collateralization.  

## 🔍 The Problem  

Current DeFi lending relies on **over-collateralization**, limiting capital efficiency. Traditional finance uses **credit scores**, but DeFi lacks an **effective on-chain equivalent**.  

## 🎯 Our Solution  

We provide a **modular, on-chain credit scoring framework** that evaluates users based on wallet history, loan behavior, and asset activity. In the future, DeFi protocols will be able to **define their own credit scoring models** using our system.  

## 🧠 How the Credit Score Algorithm Works  

Our algorithm analyzes key wallet activity metrics with **logarithmic scaling, risk-adjusted penalties, and dynamic normalization** for balanced results:  

1. **Wallet Age & Loan History (+)** → Older wallets and active borrowers gain higher scores.  
2. **Liquidations (-)** → Each liquidation significantly reduces the score (`-50 per event`).  
3. **Asset Holdings (+)** → Current assets increase the score, using `log(1 + assets) * 10` to prevent inflation.  
4. **Past Asset Decline (-)** → Losing assets is penalized with `log(1 + past_assets) * 5`.  
5. **Normalization** → A `tanh` function smooths values, keeping scores **realistically between 0-1000**.  

This ensures **fair and scalable** DeFi credit assessments, rewarding responsible on-chain activity while mitigating risk exposure.  

## 📌 Roadmap  

✅ **MVP (Current)**: Working credit scoring API + landing page.  
🚧 **Next Steps**: Expanding the API to allow **customizable scoring models** for DeFi protocols.  
🌐 **Future Vision**: A standardized **on-chain credit layer** powering undercollateralized lending.  

## 🛠️ Tech Stack  

- **Frontend**: React, Next.js, TailwindCSS  
- **Backend API**: Node.js, Express  
- **Blockchain Data**: Web3.js / Ethers.js  

## 🤝 Get Involved  

We are looking for **partners, investors, and early adopters** to help shape the future of DeFi credit scoring. If you're interested, get in touch!  

---
📩 Contact us: 
