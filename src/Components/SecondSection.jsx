import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GarsettiFront from '../../src/assets/images/iFront 1-min.png';

const AnimatedLetter = ({ target, delay, inView }) => {
  const [currentLetter, setCurrentLetter] = useState('A');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  useEffect(() => {
    if (!inView) return;
    
    let currentIndex = 0;
    const targetIndex = alphabet.indexOf(target);
    
    if (targetIndex === -1) {
      setCurrentLetter(target);
      return;
    }
    
    const interval = setInterval(() => {
      if (currentIndex <= targetIndex) {
        setCurrentLetter(alphabet[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [target, inView]);
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.9, delay }}
    >
      {currentLetter}
    </motion.span>
  );
};

export default function SecondSection() {
  const word = "GARSETTI1";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });
  
  return (
    <div className="bg-[#CECECE] min-h-screen sticky top-0 z-[10]" ref={sectionRef}>
      <div className="max-w-[1440px] mx-auto h-screen px-4 md:px-8 lg:px-12 pt-10 relative overflow-hidden flex flex-col">
        <div className='flex-grow flex flex-col md:flex-row lg:flex-row items-center justify-center md:relative lg:relative'>
          {/* Background text */}
          <div className='md:absolute lg:absolute md:inset-0 lg:inset-0 flex justify-center items-center pointer-events-none'>
            <div className='md:flex lg:flex flex-col md:flex-row lg:flex-row justify-center items-center tracking-tighter font-DepartureMono text-[72px] md:text-[140px] lg:text-[180px] hidden text-white opacity-50'>
              <h1 className="md:-translate-y-16 lg:-translate-y-32 leading-[80%]">
                {word.slice(0, 5).split('').map((letter, index) => (
                  <AnimatedLetter key={index} target={letter} delay={index * 0.1} inView={isInView} />
                ))}
                <span className='md:hidden lg:hidden'>
                  {word.slice(5).split('').map((letter, index) => (
                    <AnimatedLetter key={index + 5} target={letter} delay={(index + 5) * 0.1} inView={isInView} />
                  ))}
                </span>
              </h1>
              <h1 className="hidden md:block lg:block md:-translate-y-16 lg:-translate-y-32">
                {word.slice(5).split('').map((letter, index) => (
                  <AnimatedLetter key={index + 5} target={letter} delay={(index + 5) * 0.1} inView={isInView} />
                ))}
              </h1>
            </div>
          </div>
          
          {/* Foreground image */}
          <div className="md:relative lg:relative md:z-10 lg:z-10 max-w-80 md:max-w-96 xl:pt-0 lg:max-w-[30%] md:translate-y-[10%] lg:translate-y-[8%] self-end">
            <img 
              src={GarsettiFront} 
              alt="Garrett with microphone" 
              className="object-contain w-full h-auto"
            />
          </div>

          <div className='md:absolute lg:absolute md:inset-0 lg:inset-0 flex justify-center items-center pointer-events-none'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center tracking-tighter font-DepartureMono text-[72px] md:text-[140px] lg:text-[180px] ml-4 md:ml-0 lg:ml-0 text-[#E8E8E8]'>
              <h1 className="md:-translate-y-16 lg:-translate-y-32 leading-[80%]">
                {word.slice(0, 5).split('').map((letter, index) => (
                  <AnimatedLetter key={index} target={letter} delay={index * 0.1} inView={isInView} />
                ))}
                <span className='sm:flex md:hidden lg:hidden'>
                  {word.slice(5).split('').map((letter, index) => (
                    <AnimatedLetter key={index + 5} target={letter} delay={(index + 5) * 0.1} inView={isInView} />
                  ))}
                </span>
              </h1>
              <h1 className="hidden md:block lg:block md:-translate-y-16 lg:-translate-y-32">
                {word.slice(5).split('').map((letter, index) => (
                  <AnimatedLetter key={index + 5} target={letter} delay={(index + 5) * 0.1} inView={isInView} />
                ))}
              </h1>
            </div>
          </div>
        </div>

        <div className='md:absolute lg:absolute bottom-10 pt-12 md:pt-0 lg:pt-0 md:left-8 md:right-8 lg:left-12 lg:right-12 font-helvetica-neue-5 flex flex-col md:flex-row lg:flex-row justify-between'>
          <div className='w-full md:w-72 lg:w-80 text-lg leading-tight mb-6 md:mb-0 lg:mb-0'>
            We believe you have a voice worth remembering just like every notable human that walked the earth.
            The mic for a notable voice.
          </div>

          <div className='w-full md:w-72 lg:w-80 flex flex-col gap-6 pt-16 md:pt-0 lg:pt-0'>
            <p className='text-[#555963] text-xs'>Experience not just an engineering marvel but an artistic one as well. The GARSETTI One seeks to further revolutionise audio capturing. </p>
            
            <div className='flex flex-col md:flex-row lg:flex-row gap-3 mb-8 font-helvetica-neue-5'>
              <button 
                onClick={() => console.log('clicked button')} 
                className="flex items-center justify-center h-[56px] cursor-pointer leading-[1.5] px-8 lg:px-[40px] bg-[#FF5931] rounded-full text-sm whitespace-nowrap"
              >
                Join the Waitlist
              </button>

              <motion.button 
                className="py-1 sm:py-0 relative group leading-normal"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <a href="#" className="text-sm py-1 hover:text-[#3d3d3d] relative text-nowrap inline-block leading-normal">
                  See what's in the box
                  <motion.span
                    className="absolute bottom-0 left-0 h-[1px] bg-black w-full"
                    variants={{
                      rest: { width: '100%', left: '0%' },
                      hover: { 
                        width: ['100%', '0%', '0%', '100%'],
                        left: ['0%', '100%', '0%', '0%'],
                        transition: { 
                          duration: 0.4,
                          times: [0, 0.4, 0.5, 1]
                        }
                      }
                    }}
                  />
                </a>
              </motion.button>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}