// pages/index.js
import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import '../styles/tailwind.css';

import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
