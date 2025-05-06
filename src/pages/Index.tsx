
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import BestProductsSection from '@/components/BestProductsSection';
import StorySection from '@/components/StorySection';
import GiftSetSection from '@/components/GiftSetSection';
import TestimonialSection from '@/components/TestimonialSection';
import SubscribeSection from '@/components/SubscribeSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <BestProductsSection />
        <StorySection />
        <GiftSetSection />
        <TestimonialSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
