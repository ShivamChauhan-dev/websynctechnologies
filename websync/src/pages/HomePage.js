import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import PortfolioSection from '../components/Home/PortfolioSection';
import ContactSection from '../components/Home/ContactSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <PortfolioSection />
            <ContactSection />
        </div>
    );
};

export default HomePage;
