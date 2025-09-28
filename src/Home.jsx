import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import LatestInsights from './components/LatestInsights';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <SuccessStories />
      <LatestInsights />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;