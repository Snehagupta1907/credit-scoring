// File: components/Solution.js
"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="solution" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-teal-400">💡</span> Our Solution: The First On-Chain Credit Scoring System
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We are building a decentralized credit scoring framework that analyzes users' on-chain activity and assigns them a credit score.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-teal-400">How it works:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-600 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">Analyze Wallet Activity</h4>
                  <p className="text-gray-300">Track borrowing history, liquidation events, repayments, DeFi staking, and transaction frequency.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-600 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">Generate a DeFi Credit Score (DCS)</h4>
                  <p className="text-gray-300">Assign a trustworthiness rating (e.g., 0–1000 score).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-600 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">Plug & Play for DeFi Protocols</h4>
                  <p className="text-gray-300">Lenders can integrate our scoring API to allow credit-based lending.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-3">
              <h3 className="text-xl font-bold text-teal-400">Example Use Cases:</h3>
              
              <div className="flex items-center">
                <span className="text-teal-400 mr-2">✅</span>
                <p className="text-gray-300">Aave, Compound, or JustLend could use our API to offer loans based on trust, reducing collateralization needs.</p>
              </div>
              
              <div className="flex items-center">
                <span className="text-teal-400 mr-2">✅</span>
                <p className="text-gray-300">NFT lending platforms could determine borrower risk and dynamically adjust interest rates.</p>
              </div>
              
              <div className="flex items-center">
                <span className="text-teal-400 mr-2">✅</span>
                <p className="text-gray-300">DAOs & credit unions could create trust networks based on users' DeFi credit scores.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-black rounded-xl overflow-hidden border border-gray-700 shadow-xl">
              <div className="p-1 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                      <span className="text-white font-bold">DCS</span>
                    </div>
                    <h3 className="ml-3 text-xl font-bold">DeFi Credit Score</h3>
                  </div>
                  <div className="bg-teal-600/20 text-teal-400 px-3 py-1 rounded-full text-sm">
                    Live Demo
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Overall Score</span>
                      <span className="text-2xl font-bold text-teal-400">785</span>
                    </div>
                    <div className="w-full bg-black rounded-full h-2">
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full" style={{ width: '78.5%' }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black rounded-lg p-4">
                      <span className="text-gray-400 text-sm">Repayment History</span>
                      <div className="text-xl font-medium mt-1">Excellent</div>
                    </div>
                    <div className="bg-black rounded-lg p-4">
                      <span className="text-gray-400 text-sm">Liquidations</span>
                      <div className="text-xl font-medium mt-1">None</div>
                    </div>
                    <div className="bg-black rounded-lg p-4">
                      <span className="text-gray-400 text-sm">Wallet Age</span>
                      <div className="text-xl font-medium mt-1">2.5 years</div>
                    </div>
                    <div className="bg-black rounded-lg p-4">
                      <span className="text-gray-400 text-sm">Activity Score</span>
                      <div className="text-xl font-medium mt-1">High</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className="w-full bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-lg font-medium transition-colors">
                      Connect Wallet to Check Your Score
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
