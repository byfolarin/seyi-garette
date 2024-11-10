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
    <div className="w-full min-h-screen bg-[#B8BBC2]">
      <Navigation />
      <div className="mx-auto relative">
        {/* Section 1 */}
        <div id="section1">
          <HeroSection />
        </div>

        {/* Section 2 */}
        <div id="section2">
          <SecondSection />
        </div>

        {/* Section 3 */}
        <div id="section3">
          <ThirdSection />
        </div>

        {/* Section 4 */}
        <div id="section4">
          <FourthSection />
        </div>

        {/* Section 5 */}
        <div id="section5">
          <Fifth />
        </div>

        {/* Section 6 */}
        <div id="section6">
          <Sixth />
        </div>

        {/* Section 7 */}
        <div id="section7">
          <SeventhSection />
        </div>

        {/* Section 8 */}
        <div id="section8" className="relative">
          <EightSection />
        </div>
      </div>
    </div>
  );
}

export default App;