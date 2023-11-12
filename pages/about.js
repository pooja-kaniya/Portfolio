// pages/about.js
import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import '../styles/tailwind.css';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default AboutPage;
