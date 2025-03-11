// File: components/Features.js
"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Features() {
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
    <section id="features" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-teal-400">🛠</span> MVP Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our Minimum Viable Product will be developed in a 1-Week to 10-Day Build Sprint
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
              number: "1️⃣",
              title: "User Wallet Analysis",
              description: "Fetch wallet transaction history using The Graph / Covalent API."
            },
            {
              number: "2️⃣",
              title: "Basic Scoring Algorithm",
              description: "Calculate credit scores based on wallet age, repayment history, liquidations, and DeFi activity."
            },
            {
              number: "3️⃣",
              title: "API for Integration",
              description: "A REST API that DeFi protocols can query for a wallet's credit score."
            },
            {
              number: "4️⃣",
              title: "Simple Dashboard",
              description: "A dApp where users connect their wallet and see their credit score."
            },
            {
              number: "5️⃣",
              title: "Wallet Reputation Storage",
              description: "Store and update scores in a MongoDB / PostgreSQL database."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-black rounded-xl shadow-lg border border-gray-700 hover:border-teal-600/50 transition-colors overflow-hidden"
              variants={itemVariants}
            >
              <div className="h-2 bg-gradient-to-r from-teal-500 to-cyan-600"></div>
              <div className="p-6">
                <div className="text-2xl mb-3">{feature.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}