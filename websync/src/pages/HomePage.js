import React from 'react';
import HeroSection from '../components/Home/HeroSection';
// import FeaturesSection from '../components/Home/FeaturesSection';
// import PortfolioSection from '../components/Home/PortfolioSection';
import ContactSection from '../components/Home/ContactSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import OurServices from '../components/Home/OurServices';
import TechStack from '../components/Home/TechStack';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <WhyChooseUs/>
            <OurServices/>
            {/* <FeaturesSection /> */}
            {/* <PortfolioSection /> */}
            <TechStack/>
            <ContactSection />
        </div>
    );
};

export default HomePage;
