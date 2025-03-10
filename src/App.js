import React from 'react';
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import OfficeSection from './components/OfficeSection';
import Footer from './components/Footer';

function App() {  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <OfficeSection />
      <Footer />
    </div>
  );
}

export default App;
