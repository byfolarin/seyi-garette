import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { span } from 'framer-motion/client';

const Navigation = () => {
  const [isFirstSection, setIsFirstSection] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('section1');
  const navigationRef = useRef(null);
  const [digit, setDigit] = useState(1)
  const [nav, setNav] = useState(null)

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const viewportMiddle = scrollPosition + (windowHeight / 2);
      
      // Check if we're in first section
      setIsFirstSection(scrollPosition < windowHeight / 2);

      // Find active section
      let activeFound = false;
      for (let section of sections) {
        const element = document.getElementById(section.id);
        // console.log(section.id);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = scrollPosition + rect.top;
          const absoluteBottom = absoluteTop + rect.height;

          if (viewportMiddle >= absoluteTop && viewportMiddle < absoluteBottom) {
            setActiveSection(section.id);
            // console.log(section.id)
            activeFound = true;
            break;
          }
        }
      }



      // If no section is active (for edge cases), find the closest one
      if (!activeFound) {
        let closestSection = sections[0].id;
        let minDistance = Infinity;

        sections.forEach(section => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const absoluteTop = scrollPosition + rect.top;
            const distance = Math.abs(viewportMiddle - absoluteTop);
            
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section.id;
            }
          }
        });

        setActiveSection(closestSection);
      }
    };

    const handleClickOutside = (event) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sections, activeSection]);

  

   const [activePart, setActivePart] = useState("");

  const sectionIndicator = () => {
    const blocks = document.querySelectorAll(".section");
    blocks.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActivePart(section.id);
        // setActiveSection(section.id)
        setNav(sections.find(x => x.id === activePart))
        console.log(section.id);
        console.log(nav);
        
        
      }
    });

    
  };

  
  console.log(nav);
  

  useEffect(() => {
    window.addEventListener("scroll", sectionIndicator);
    return () => window.removeEventListener("scroll", sectionIndicator);
  }, []);


  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setDigit(1)
    // setNav('Etch your voice')
  };

  const handleSectionClick = (sectionId, i) => {
    setDigit(i + 1)
    setNav(sections[i].title)
    const element = document.getElementById(sectionId);
    if (element) {
      // Get element's position relative to the document
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = scrollTop + rect.top;

      // Scroll to the element with offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
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
          animate={{ 
            width: isFirstSection ? '300px' : '705px',
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
              <div className="mix-blend-soft-light">
                Section 0{
                  sections.map((x, i) => (
                    <span key={i} className={`${nav && x.id === nav.id ? '' : 'hidden'}`}>{nav ? (i + 1) : 1}</span>
                  ))
                }:
                {/* {(parseInt(activeSection.replace('section', ''), 10)).toString().padStart(2, '0')}  */}
              </div>
              <div className="flex items-center gap-2">
                <div>
                  {/* {currentSection?.title || 'Select section'} */}
                  {nav ? nav.title : 'Etch your voice'}
                </div>
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
                  className="py-[16px] px-[32px] ml-4 rounded-full backdrop-blur-lg border bg-[#1F1F1F]/50 border-[#0000001a] whitespace-nowrap overflow-hidden hover:bg-[#1F1F1F]/70 transition-colors"
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
                className="absolute bottom-full transform -translate-x-1/2 mb-2 w-[340px] bg-[#1F1F1F]/50 backdrop-blur-lg border border-[#0000001e] text-white rounded-2xl overflow-hidden"
              >
                <div className="py-[16px] px-[24px]">
                  <ul className="flex flex-col gap-4">
                    {sections.map((section, i) => (
                      <li
                        key={section.id}
                        className={`cursor-pointer transition-colors ${
                          activePart === section.id 
                            ? 'text-white font-medium' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => handleSectionClick(section.id, i)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleSectionClick(section.id, i)}
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
    </div>
  );
};

export default Navigation;
