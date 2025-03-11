"use client"
// File: components/ContactCTA.js
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div 
          className="bg-gradient-to-r from-teal-800/20  via-cyan-800/20 to-teal-800/20 rounded-2xl overflow-hidden shadow-xl border border-gray-700 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Unlock Credit-Based <br className="hidden md:block" />
                DeFi Lending?
              </h2>
              <p className="text-lg text-gray-300 mb-6 md:max-w-xl">
                Join us in revolutionizing DeFi lending by enabling trust-based, undercollateralized loans through decentralized credit scoring.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Try the Demo
                </button>
                <button className="border border-teal-600 hover:bg-teal-600/10 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
            
            <div className="bg-black-800 p-6 rounded-xl border border-gray-700 md:min-w-80">
              <h3 className="text-xl font-bold mb-4">Get Early Access</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 bg-black-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">I am a...</label>
                  <select className="w-full px-4 py-2 bg-black-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>DeFi Protocol Developer</option>
                    <option>DeFi User</option>
                    <option>Investor</option>
                    <option>Researcher</option>
                  </select>
                </div>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
