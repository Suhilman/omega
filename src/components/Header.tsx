// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.scss';

const Header: React.FC = () => {
    return (
      <header className="header">
        <div className="logo">
          <h1>ALTECH</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#pricing">PRICING</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="login-button">
        <li><a href="#login">LOGIN</a></li>
        </div>
      </header>
    );
  };

export default Header;
