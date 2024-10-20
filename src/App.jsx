import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import HeroSection from "./Components/HeroSection";
import SecondSection from "./Components/SecondSection";
import Frame50 from "./Components/Frame50";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/FourthSection";
import Fifth from "./Components/FifthSection";
import Sixth from "./Components/Sixth";
import SeventhSection from "./Components/SeventhSection";
import EightSection from "./Components/EightSection";




function App() {

    const container = useRef()  
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"]
    });

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
     

      <main ref={container} className="relative h-[200vh] bg-[#B8BBC2]">
        <HeroSection scrollYProgress={scrollYProgress}/>   
        <Frame50 />      
        <SecondSection scrollYProgress={scrollYProgress} />
      </main>
    


      {/* <ThirdSection />
      <FourthSection />
      <Fifth />
      <Sixth />
      <SeventhSection />
      <EightSection /> */}
    </div>
  );
}

export default App;