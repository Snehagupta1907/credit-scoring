// File: components/Roadmap.js
"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="roadmap" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-teal-400">📅</span> Roadmap to Success
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our journey to building a customizable credit scoring framework
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-600 via-cyan-600 to-teal-600 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {/* Phase 1 */}
            <motion.div 
              className="flex flex-col md:flex-row items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <div className="bg-gradient-to-r from-teal-600 to-teal-600 inline-block px-4 py-2 rounded-lg font-bold mb-4">
                  Current Phase (MVP)
                </div>
                <h3 className="text-2xl font-bold mb-3">Launch MVP</h3>
                <div className="space-y-2 text-gray-300">
                  <p>✅ Build & test basic on-chain credit scoring system</p>
                  <p>✅ Deploy API for DeFi protocol integration</p>
                  <p>✅ Launch a simple frontend dApp for score display</p>
                </div>
              </div>
              <div className="relative flex md:justify-center">
                <div className="h-8 w-8 bg-teal-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="h-3 w-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 md:pt-16"></div>
            </motion.div>
            
            {/* Phase 2 */}
            <motion.div 
              className="flex flex-col md:flex-row items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full md:w-1/2 md:pr-12 md:pt-16"></div>
              <div className="relative flex md:justify-center">
                <div className="h-8 w-8 bg-cyan-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="h-3 w-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 inline-block px-4 py-2 rounded-lg font-bold mb-4">
                  Phase 2 (3 Months)
                </div>
                <h3 className="text-2xl font-bold mb-3">Customization & Expansion</h3>
                <div className="space-y-2 text-gray-300">
                  <p>🔹 Develop customizable scoring models for different DeFi protocols</p>
                  <p>🔹 Expand multi-chain support (Ethereum, Polygon, BNB Chain)</p>
                  <p>🔹 Partner with first DeFi protocol to test credit-based lending</p>
                </div>
              </div>
            </motion.div>
            
            {/* Phase 3 */}
            <motion.div 
              className="flex flex-col md:flex-row items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 inline-block px-4 py-2 rounded-lg font-bold mb-4">
                  Phase 3 (6-12 Months)
                </div>
                <h3 className="text-2xl font-bold mb-3">Credit NFTs & Liquidity</h3>
                <div className="space-y-2 text-gray-300">
                  <p>🔹 Launch on-chain credit NFT that users can carry across platforms</p>
                  <p>🔹 Enable cross-protocol reputation tracking</p>
                  <p>🔹 Build a liquidity-backed undercollateralized lending protocol</p>
                </div>
              </div>
              <div className="relative flex md:justify-center">
                <div className="h-8 w-8 bg-teal-600 rounded-full flex items-center justify-center relative z-10">
                  <div className="h-3 w-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 md:pt-16"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
