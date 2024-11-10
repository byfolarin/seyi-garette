import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isFirstSection, setIsFirstSection] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'section1', title: 'Etch your voice' },
    { id: 'section2', title: 'Our belief of your voice' },
    { id: 'section3', title: 'Your words deserve' },
    { id: 'section4', title: 'The GARSETTI Marvel' },
    { id: 'section5', title: "What's in the box?" },
    { id: 'section6', title: "What you've just witnessed" },
    { id: 'section7', title: 'Footer | Closing' }
  ];

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

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-[42px] font-helvetica-neue-5">
      <motion.div 
        className="mx-auto"
        initial={{ width: '340px' }}
        animate={{ 
          width: isFirstSection ? '340px' : '705px',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center py-[12px] pl-[32px] pr-[16px] text-white backdrop-blur-lg rounded-full bg-[#1F1F1F]/50 border border-[#0000001e]">
          <div 
            className="flex gap-2 py-[16px] cursor-pointer items-center whitespace-nowrap"
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
          >
            <div className="mix-blend-soft-light">Section 01:</div>
            <div className="flex items-center gap-2">
              <div>Our belief of your voice</div>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
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
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleBackToTop()}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
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

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-full left-0 mb-2 w-[340px] bg-[#1F1F1F]/50 backdrop-blur-lg border border-[#0000001e] text-white rounded-2xl overflow-hidden"
            >
              <div className="py-[16px] px-[24px]">
                <ul className="flex flex-col gap-4">
                  {sections.map((section) => (
                    <li
                      key={section.id}
                      className="cursor-pointer hover:text-gray-300 transition-colors"
                      onClick={() => handleSectionClick(section.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleSectionClick(section.id)}
                    >
                      {section.title}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Navigation;