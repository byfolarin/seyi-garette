import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrowdown from '../assets/arrowline.svg';
import ArrowGroup from '../assets/Group.svg';

const Navigation = () => {
  const [isFirstSection, setIsFirstSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const firstSectionHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsFirstSection(scrollPosition <= firstSectionHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-[42px] font-helvetica-neue-5">
      <motion.div 
        className="mx-auto"
        initial={{ width: '300px' }}
        animate={{ 
          width: isFirstSection ? '340px' : '705px',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center py-[16px] pl-[32px] pr-[16px] text-white backdrop-blur-lg rounded-full bg-[#1F1F1F]/50 border border-[#0000001e]">
          <div className="flex gap-2 py-[16px] cursor-pointer items-center whitespace-nowrap">
            <div className="mix-blend-soft-light">Section 01:</div>
            <div className="flex items-center gap-2 ">
              <div>Our belief of your voice</div>
              <img src={Arrowdown} alt="" />
            </div>
          </div>
      
          <AnimatePresence mode="wait">
            {!isFirstSection && (
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="flex gap-2 cursor-pointer items-center overflow-hidden whitespace-nowrap ml-4"
                onClick={handleBackToTop}
              >
                <img src={ArrowGroup} alt="" />
                <div>Back to top</div>          
              </motion.div>
            )}
          </AnimatePresence>
        
          <AnimatePresence mode="wait">
            {!isFirstSection && (
              <motion.button 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="py-[16px] px-[32px] ml-4 rounded-full backdrop-blur-lg border bg-[#1F1F1F]/50 border-[#0000001a] whitespace-nowrap overflow-hidden"
              >
                Join the Waitlist
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Navigation;