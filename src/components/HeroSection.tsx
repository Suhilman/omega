import React from 'react';
import '../assets/HeroSection.scss';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
        <div className="text-container">
        <h3>Solusi Teknologi Terlengkap</h3>
        <h1>Transformasi Digital melalui Sistem yang Terintegrasi</h1>
        <p>"Mulai transformasi digital Anda untuk meningkatkan efektivitas dan efisiensi dalam bisnis yang Anda jalankan."</p>
        </div>
        <div className="graphic">
        <div className="circle"></div>
        <div className="wave"></div>
        </div>
    </section>
  );
};

export default HeroSection;