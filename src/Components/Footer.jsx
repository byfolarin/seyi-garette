import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react'
import FooterImg from '../assets/images/Garsetti front  1.jpg';
import { LazyImage } from './LazyLoadImg';

const AnimatedLetter = ({ target, delay, inView }) => {
  const [currentLetter, setCurrentLetter] = useState('A');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  useEffect(() => {
    if (!inView) return;
    
    let currentIndex = 0;
    const targetIndex = alphabet.indexOf(target.toUpperCase());
    
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

export default function Footer() {
    const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.4 });
  const word = "GARSETTI1";
  return (
    <footer>
        {/* Background image - full width */}
                <div className='fixed bottom-0 z-0  w-full'>
                  {/* <LazyImage src={FooterImg} alt="" className='w-full h-[793px] lg:h-[1734px] object-cover'/> */}
                  <img src={'https://res.cloudinary.com/dinfffgcg/image/upload/v1739646342/Garsetti_front_1_gvhq5u.jpg'} alt="" className='w-full h-[793px] lg:h-[1734px] object-cover' />
                </div>

        {/* Footer - full width */}
        <div className='fixed bottom-0 z-[1] left-0 right-0 overflow-hidden w-full' ref={footerRef}>
          {/* Content container with max-width */}
          <div className="max-w-[1440px] mx-auto">
            <div>
              <div className='flex flex-col lg:flex-row justify-between font-helvetica-neue-5 text-xm tracking-tight text-[#717682]'>
                <div className='flex gap-4'>
                  <p>Product Design | Visual Design | Website Design</p>
                  <p className='font-bold'>Seyi Oniyitan</p>
                </div>

                <div className='flex flex-col lg:flex-row gap-4'>
                  <p>©2024 SEYIONIYITAN</p>
                  <p>all rights reserved</p>
                </div>       
              </div>

              <div className='flex flex-col justify-center items-center tracking-tighter font-DepartureMono text-7xl sm:text-[16vw] lg:text-[250px] text-[#FF5931]'>            
                <h1 className='h1-stroke'>
                  {word.split('').map((letter, index) => (
                    <AnimatedLetter 
                      key={index} 
                      target={letter} 
                      delay={index * 0.1} 
                      inView={isInView} 
                    />
                  ))}
                </h1>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

