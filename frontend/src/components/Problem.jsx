"use client"
// File: components/Problem.js
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="problem" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-500">🚨</span> The Problem: Why DeFi Lending Is Broken
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Despite the explosive growth of DeFi lending platforms, the system remains fundamentally flawed.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            {
              title: "Overcollateralization Requirement",
              description: "Borrowers must deposit more collateral than they borrow, locking up liquidity and limiting capital efficiency."
            },
            {
              title: "Lack of On-Chain Credit Scoring",
              description: "DeFi lenders do not assess creditworthiness; they only rely on collateral-based lending."
            },
            {
              title: "Barriers for Mass Adoption",
              description: "Traditional users are used to credit-based loans. DeFi fails to replicate this model."
            },
            {
              title: "Fragmented Identity & Reputation",
              description: "No unified system tracks a user's on-chain financial behavior across multiple DeFi protocols."
            },
            {
              title: "High Liquidation Risks",
              description: "Users without credit scores face sudden liquidations when markets drop, leading to cascading sell-offs."
            },
            {
              title: "Current Gap in the Market",
              description: "No plug-and-play solution exists that DeFi protocols can integrate to enable trust-based lending."
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-black p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-600/50 transition-colors"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-teal-300 font-medium">
            🔹 There is a massive gap for a fully decentralized, customizable, and interoperable on-chain credit scoring solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}