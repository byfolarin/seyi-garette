import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isFirstSection, setIsFirstSection] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('section1');
  const navigationRef = useRef(null);

  const sections = [
    { id: 'section1', title: 'Etch your voice' },
    { id: 'section2', title: 'Our belief of your voice' },
    { id: 'section3', title: 'Your words deserve' },
    { id: 'section4', title: 'The GARSETTI Marvel' },
    { id: 'section5', title: "What's in the box?" },
    { id: 'section6', title: "What you've just witnessed" },
    { id: 'section7', title: 'Seventh Section' },
    { id: 'section8', title: 'Eight Section' }
  ];

  // Improved scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsFirstSection(window.scrollY < window.innerHeight * 0.3);
      
      // Find current section using Intersection Observer logic
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = id;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Improved section scrolling with better positioning
  const handleSectionClick = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    const viewportHeight = window.innerHeight;
    const currentScrollY = window.scrollY;
    const targetTop = targetSection.offsetTop;
    const sectionHeight = targetSection.offsetHeight;

    // Calculate the ideal scroll position to center the section
    const idealScrollPosition = targetTop - (viewportHeight - sectionHeight) / 2;

    // Add some buffer for very tall sections
    const maxScroll = document.documentElement.scrollHeight - viewportHeight;
    const finalScrollPosition = Math.max(0, Math.min(idealScrollPosition, maxScroll));

    window.scrollTo({
      top: finalScrollPosition,
      behavior: 'smooth'
    });

    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentSection = sections.find(section => section.id === activeSection);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-[42px] flex justify-center items-center font-helvetica-neue-5">
      <div className="relative" ref={navigationRef}>
        <motion.div 
          className="relative"
          initial={{ width: '340px' }}
          animate={{ width: isFirstSection ? '300px' : '705px' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center py-[12px] pl-[32px] pr-[16px] text-white backdrop-blur-lg rounded-full bg-[#1F1F1F]/50 border border-[#0000001e]">
            <button 
              className="flex gap-2 py-[16px] cursor-pointer items-center whitespace-nowrap focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="section-menu"
            >
              <div className="mix-blend-soft-light">
                Section {(parseInt(activeSection.replace('section', ''), 10)).toString().padStart(2, '0')}:
              </div>
              <div className="flex items-center gap-2">
                <div>{currentSection?.title || 'Select section'}</div>
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
            </button>

            <AnimatePresence mode="wait">
              {!isFirstSection && (
                <motion.button 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="flex gap-2 cursor-pointer items-center overflow-hidden whitespace-nowrap ml-4 focus:outline-none"
                  onClick={handleBackToTop}
                  aria-label="Back to top"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>Back to top</div>          
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!isFirstSection && (
                <motion.button 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="py-[16px] px-[32px] ml-4 rounded-full backdrop-blur-lg border bg-[#1F1F1F]/50 border-[#0000001a] whitespace-nowrap overflow-hidden hover:bg-[#1F1F1F]/70 transition-colors focus:outline-none"
                >
                  Join the Waitlist
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="section-menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-full transform -translate-x-1/2 left-1/2 mb-2 w-[340px] bg-[#1F1F1F]/50 backdrop-blur-lg border border-[#0000001e] text-white rounded-2xl overflow-hidden"
              >
                <div className="py-[16px] px-[24px]">
                  <ul className="flex flex-col gap-4" role="menu">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          className={`w-full text-left transition-colors ${
                            activeSection === section.id 
                              ? 'text-white font-medium' 
                              : 'text-gray-400 hover:text-white'
                          }`}
                          onClick={() => handleSectionClick(section.id)}
                          role="menuitem"
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;