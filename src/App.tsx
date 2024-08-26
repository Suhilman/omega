import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import LoginModal from './components/LoginModal';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <LoginModal />
    </Router>
  );
};

export default App;