"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-full"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DeFi Credit Score</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-gray-300 hover:text-white transition-colors">Problem</Link>
            <Link href="#solution" className="text-gray-300 hover:text-white transition-colors">Solution</Link>
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</Link>
            <Link href="#business" className="text-gray-300 hover:text-white transition-colors">Business</Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors">
              Try Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-black-800 shadow-lg py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="#problem" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Problem</Link>
            <Link href="#solution" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Solution</Link>
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Roadmap</Link>
            <Link href="#business" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Business</Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors w-full">
              Try Demo
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
