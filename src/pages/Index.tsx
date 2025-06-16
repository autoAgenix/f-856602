
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CostEstimator from '@/components/CostEstimator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <Features />
        <Testimonials />
        <div id="costing">
          <CostEstimator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
