import React, { useEffect } from 'react';
import Lenis from "@studio-freight/lenis";
import HeroSection from "./Components/HeroSection";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/FourthSection";
import Fifth from "./Components/FifthSection";
import Sixth from "./Components/Sixth";
import SeventhSection from "./Components/SeventhSection";
import EightSection from "./Components/EightSection";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => t,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <div style={{ marginTop: '200vh' }}> {/* Reduced margin to allow SecondSection to start earlier */}   </div>
     
          <SecondSection />
     
        <ThirdSection />
        <FourthSection />
        <Fifth />
        <Sixth />
        <SeventhSection />

        <div className='relative'>
            <EightSection />
        </div>
       
      </div>
  
  );
}

export default App;