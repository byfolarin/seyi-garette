import React, { useEffect, useRef } from 'react';
import Lenis from "@studio-freight/lenis";
import HeroSection from "./Components/HeroSection";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/FourthSection";
import Fifth from "./Components/FifthSection";
import Sixth from "./Components/Sixth";
import SeventhSection from "./Components/SeventhSection";
import EightSection from "./Components/EightSection";
import Navigation from './Components/Navigation';

function App() {
  // Refs for each section to track their positions
  const heroRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);
  const seventhRef = useRef(null);
  const eighthRef = useRef(null);

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    // RAF for smooth scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#B8BBC2] relative">
      <Navigation />
      
      {/* Main content container */}
      <div className="relative">
        {/* Hero Section - Sticky until second section */}
        <section 
          id="section1" 
          ref={heroRef}
          className="relative min-h-screen sticky top-0 z-10"
        >
          <HeroSection />
        </section>

        {/* Spacer for scroll distance */}
        <div className="h-screen" />

        {/* Second Section - Sticky until third section */}
        <section 
          id="section2" 
          ref={secondRef}
          className="relative min-h-screen sticky top-0 z-20"
        >
          <SecondSection />
        </section>

        {/* Third Section - Comes on top of second section */}
        <section 
          id="section3" 
          ref={thirdRef}
          className="relative min-h-screen z-30"
        >
          <ThirdSection />
        </section>

        {/* Fourth Section */}
        <section 
          id="section4" 
          ref={fourthRef}
          className="relative min-h-screen z-30"
        >
          <FourthSection />
        </section>

        {/* Fifth Section */}
        <section 
          id="section5" 
          ref={fifthRef}
          className="relative min-h-screen z-30"
        >
          <Fifth />
        </section>

        {/* Sixth Section */}
        <section 
          id="section6" 
          ref={sixthRef}
          className="relative min-h-screen z-30"
        >
          <Sixth />
        </section>

        {/* Seventh Section */}
        <section 
          id="section7" 
          ref={seventhRef}
          className="relative min-h-screen z-30"
        >
          <SeventhSection />
        </section>

        {/* Eighth Section */}
        <section 
          id="section8" 
          ref={eighthRef}
          className="relative min-h-screen z-30"
        >
          <EightSection />
        </section>
      </div>
    </div>
  );
}

export default App;