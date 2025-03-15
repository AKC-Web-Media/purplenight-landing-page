import React from 'react';
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import OfficeSection from './components/OfficeSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow"> 
      <HeroSection />
      <WorkSection />
      <OfficeSection />
  </main>
      <Footer />
      
    </div>
  );
}

export default App;
