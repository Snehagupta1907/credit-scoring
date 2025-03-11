// File: components/Business.js
"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Business() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="business" className="py-16 md:py-24 bg-black-800/50">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-teal-400">🌍</span> Business Model & Go-To-Market Strategy
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            How we'll capture value in the growing DeFi lending market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Market Opportunity */}
          <motion.div 
            className="bg-black-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-2 bg-gradient-to-r from-teal-500 to-cyan-600"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Market Opportunity</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-600/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300">The DeFi lending market is projected to reach <span className="text-white font-medium">$200B+ in TVL</span> by 2026.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-600/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300"><span className="text-white font-medium">$1 Trillion</span> worth of crypto assets could be unlocked if credit-based lending replaces overcollateralization.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 rounded-lg p-4 mt-6">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-semibold">Did You Know?</span>
                  </div>
                  <p className="text-gray-300">Traditional finance operates on credit scores, but DeFi still lacks this fundamental layer. Our solution bridges this gap.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Monetization Strategy */}
          <motion.div 
            className="bg-black-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-2 bg-gradient-to-r from-cyan-600 to-teal-500"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Monetization Strategy</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-white">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">B2B API Licensing</h4>
                    <p className="text-gray-300">Charge DeFi platforms for using our credit scoring API.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Subscription Model</h4>
                    <p className="text-gray-300">Offer premium analytics for DeFi lenders.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Transaction Fees</h4>
                    <p className="text-gray-300">Earn a small fee on loans issued via credit scores.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-white">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Credit Score NFTs</h4>
                    <p className="text-gray-300">Users can mint their on-chain credit identity for cross-platform use.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Go-To-Market Strategy */}
        <motion.div 
          className="mt-12 bg-black-800 rounded-xl p-6 border border-gray-700"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold mb-6">🚀 B2B Go-To-Market (GTM) Strategy</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Launch MVP as Open Beta",
                description: "Invite users to check their credit scores for free."
              },
              {
                title: "Partner with 1-2 DeFi Protocols",
                description: "Aave, JustLend, Compound for test integrations."
              },
              {
                title: "Web3 Developer Outreach",
                description: "Open-source SDK for DeFi projects."
              },
              {
                title: "DAO & Institutional Partnerships",
                description: "Target DAOs & funds needing trust-based lending."
              },
              {
                title: "DeFi Accelerator / Incubator",
                description: "Secure funding and advisory partnerships for scaling."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-black-700/30 p-4 rounded-lg"
                variants={itemVariants}
              >
                <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-8 bg-gradient-to-r from-teal-900/30 to-cyan-900/30 p-5 rounded-lg"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-3">💡 Why We're the Best Team to Build This</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-teal-400 mr-2">✔</span>
                <p className="text-gray-300">Deep Web3 & DeFi Expertise — Our team has strong experience in smart contracts, blockchain data analytics, and DeFi lending models.</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-2">✔</span>
                <p className="text-gray-300">Strong Technical Roadmap — We are building a scalable and customizable framework that can integrate with multiple protocols.</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-2">✔</span>
                <p className="text-gray-300">First-Mover Advantage — We're solving a key problem DeFi lending protocols have ignored for years.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}