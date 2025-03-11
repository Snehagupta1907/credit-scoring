// File: pages/index.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import Roadmap from '@/components/Roadmap';
import Business from '@/components/Business';
import ContactCTA from '@/components/ContactCTA';
import Hero from '@/components/Hero';
// import BackgroundAnimation from '../components/BackgroundAnimation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black-900 text-white">
      <Head>
        <title>DeFi Credit Score | First On-Chain Credit Scoring System</title>
        <meta name="description" content="The first decentralized credit scoring framework for DeFi lending" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <BackgroundAnimation /> */}
      
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Roadmap />
        <Business />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
