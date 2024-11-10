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
import Navigation from './Components/Navigation';
import NavCom from './Components/NavCompo';

function App() {

  
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 0.9,
  //     easing: (t) => t,
  //     smooth: true,
  //     smoothTouch: false,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    // Outer div for full-width background effects if needed

    
    <div className="w-full min-h-screen bg-[#B8BBC2]">
      <NavCom />
       <Navigation />
      <img src="" alt="" />
      {/* Inner container for max-width constraint */}
      <div className=" mx-auto relative">
        <HeroSection />
       
        <div style={{ marginTop: '200vh' }} />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Fifth />
        <Sixth />
        <SeventhSection />
        <div className="relative">
          <EightSection />
        </div>
      </div>
    </div>
  );
}

export default App;