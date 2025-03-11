"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">The First On-Chain</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Credit Scoring System</span>
              <span className="block">for DeFi</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              Enabling trust-based, undercollateralized lending in DeFi through decentralized credit scoring.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Check Your Score
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-full font-medium transition-colors">
                For Developers
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-black-800 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/30 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">852</div>
                    <div className="text-xl text-blue-300">Your DeFi Credit Score</div>
                    <div className="mt-4 text-sm text-gray-400">Connect wallet to view yours</div>
                  </div>
                </div>
                
                {/* Abstract data visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-32 h-32 rounded-full"
                      style={{
                        background: `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 50) + 50}, ${Math.floor(Math.random() * 150) + 100}, 0.1)`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating stats cards */}
              <motion.div 
                className="absolute -bottom-5 -left-5 bg-black-800 p-4 rounded-lg shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              >
                <div className="text-xs text-gray-400">Wallet Age</div>
                <div className="text-lg font-medium">3.2 years</div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 -right-5 bg-black-800 p-4 rounded-lg shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <div className="text-xs text-gray-400">Repayment Rate</div>
                <div className="text-lg font-medium text-green-400">98.7%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust badges */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {['Aave', 'Compound', 'JustLend', 'TrueFi'].map((partner) => (
            <div key={partner} className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-2">
                <span className="text-gray-400 text-xs">{partner[0]}</span>
              </div>
              <span className="ml-3 text-gray-300">{partner}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero