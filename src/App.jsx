import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import EnrollModal from './components/EnrollModal';
import './App.css';
import CoreValues from './components/CoreValues';

function App() {
   const [showModal, setShowModal] = useState(true); 

  useEffect(() => {
    setShowModal(true); 
  }, []);

  return (
    <div className="app-background">
       {showModal && <EnrollModal onClose={() => setShowModal(false)} />}
      <Navbar />
      <Hero />
      <Gallery />
      <CoreValues/>
      <Facilities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
