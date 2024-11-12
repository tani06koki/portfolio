import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Career from './pages/Career';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-50">
      <div>
      <Navbar />
      <About />
      <Career />
      <Skill />
      <Contact />
      <Works />
      <Footer />
    </div>
    </div>
  </Router>
  );
}

export default App;

