import React, { useRef } from "react";
import "@mantine/core/styles.css";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import OfficeSection from "./components/OfficeSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { MantineProvider } from "@mantine/core";

function App() {
  // Create refs for each section
  const examplesRef = useRef(null);
  const learnMoreRef = useRef(null);
  const pricingRef = useRef(null);
  const footerRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MantineProvider>
      <div className="min-h-screen flex flex-col">
        {/* Pass scroll function & refs to Navbar */}
        <Navbar scrollToSection={scrollToSection} refs={{ examplesRef, learnMoreRef, pricingRef, footerRef }} />
        <Hero />
        <main className="flex-grow">
          <WorkSection ref={examplesRef} />
          <OfficeSection ref={learnMoreRef} />
          <HeroSection ref={pricingRef} />
        </main>
        <Footer ref={footerRef} />
      </div>
    </MantineProvider>
  );
}

export default App;
