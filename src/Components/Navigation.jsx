import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isFirstSection, setIsFirstSection] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('section1');
  const navigationRef = useRef(null);
  const lastScrollTime = useRef(Date.now());

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

  const checkVisibleSection = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Check if we're in first section
    setIsFirstSection(scrollPosition < windowHeight / 2);

    // Find which section is most visible in the viewport
    let maxIntersection = 0;
    let currentSection = activeSection;

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const intersectionRatio = visibleHeight / elementHeight;

        if (intersectionRatio > maxIntersection && visibleHeight > 0) {
          maxIntersection = intersectionRatio;
          currentSection = id;
        }
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  // Set up Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Handle scroll events (throttled)
  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current > 100) {
        lastScrollTime.current = now;
        checkVisibleSection();
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
    checkVisibleSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - window.innerHeight / 4;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

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
                    {sections.map((section) => (
                      <li
                        key={section.id}
                        className={`cursor-pointer transition-colors ${
                          activeSection === section.id 
                            ? 'text-white font-medium' 
                            : 'text-gray-400 hover:text-white'
                        }`}
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
    </div>
  );
};

export default Navigation;