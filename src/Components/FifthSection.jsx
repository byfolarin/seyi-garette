import React, { useState, useEffect, useRef } from 'react';
import Mid1 from '../../src/assets/images/mid1.jpg'
import Mid2 from '../../src/assets/images/mid2.jpg'
import Mid3 from '../../src/assets/images/mid3.jpg'
import { motion, useInView } from 'framer-motion'
import { LazyImage } from './LazyLoadImg';

const AnimatedLetter = ({ target, delay, inView }) => {
    const [currentLetter, setCurrentLetter] = useState('A');  // Fixed this line
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    
    useEffect(() => {
        if (!inView) return;
        
        let currentIndex = 0;
        const targetIndex = target === ' ' ? alphabet.length - 1 : alphabet.indexOf(target.toUpperCase());
        
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

export default function Fifth() {
    const titleRef = useRef(null);
    const isInView = useInView(titleRef, { once: true, amount: 0.4 });
    const line1 = "THE GARSETTI";
    const line2 = "ARTISTIC MARVEL";

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 60
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <div className="relative z-[22] px-[16px] md:px[32px] lg:px-[48px] py-[68px] bg-white">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col items-start lg:flex-row gap-4 lg:gap-10">
                    <div>              
                        <div className='flex items-start pr-[48px] font-helvetica-neue-5 text-sm text-[#555963]'>
                            <h4 className='border-l-[3px] border-[#E5E5E5] pt-[8px] pl-6 font-medium'>
                                Why choose <br /> GARSETTI One?
                            </h4>  
                        </div>
                    </div>

                    <div ref={titleRef}>
                        <h2 className="font-DepartureMono text-[32px] lg:text-[48px] leading-tight">
                            {line1.split('').map((letter, index) => (
                                <AnimatedLetter 
                                    key={`line1-${index}`}
                                    target={letter} 
                                    delay={index * 0.1} 
                                    inView={isInView}
                                />
                            ))}
                        </h2>

                        <h2 className="font-DepartureMono text-[32px] lg:text-[48px] leading-tight">
                            {line2.split('').map((letter, index) => (
                                <AnimatedLetter 
                                    key={`line2-${index}`}
                                    target={letter} 
                                    delay={(index + line1.length) * 0.1} 
                                    inView={isInView}
                                />
                            ))}
                        </h2>
                    </div>
                </div>

                <motion.div 
                    className="flex flex-col lg:flex-row gap-[40px] lg:gap-4 pt-[51px] lg:pt-[64px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className='w-full lg:w-1/3'
                        variants={itemVariants}
                    >
                        <div className="h-[361px] lg:h-[528px] overflow-hidden">
                            <LazyImage
                                src={Mid1} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                            />
                            {/* <img 
                                src={Mid1} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                            /> */}
                        </div>
                        <div className='pt-4 lg:pt-8 font-helvetica-neue-5 flex flex-col gap-2'>
                            <h5 className='font-bold text-[20px] tracking-tight'>Crisp Audio Capture</h5>
                            <p className='font-helvetica-neue-5 text-base w-full lg:w-[80%]'>
                                Experience not just an engineering marvel but an artistic one as well. The GARSETTI One seeks to further revolutionise audio capturing.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='w-full lg:w-1/3'
                        variants={itemVariants}
                    >
                        <div className="h-[361px] lg:h-[528px] overflow-hidden">
                            <LazyImage
                                src={Mid2} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                            />
                            {/* <img 
                                src={Mid2} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                            /> */}
                        </div>
                        <div className='pt-8 font-helvetica-neue-5 flex flex-col gap-2'>
                            <h5 className='font-bold text-[20px] text-nowrap tracking-tight'>Universal Compatibility</h5>
                            <p className='font-helvetica-neue-5 text-base w-full lg:w-[80%]'>
                                Adapt to any recording environment with ease. Our universal port supports a wide range of setups, ensuring you're always ready to create, no matter the device or platform.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='w-full lg:w-1/3'
                        variants={itemVariants}
                    >
                        <div className="h-[361px] lg:h-[528px] overflow-hidden">
                            <LazyImage
                                src={Mid3} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                            />
                            {/* <img 
                                src={Mid3} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                            /> */}
                        </div>
                        <div className='pt-8 font-helvetica-neue-5 flex flex-col gap-2'>
                            <h5 className='font-bold text-[20px] tracking-tight'>Port Compatibility</h5>
                            <p className='font-helvetica-neue-5 text-base w-full lg:w-[80%]'>
                                Adapt to any recording environment with ease. Our universal port supports a wide range of setups, ensuring you're always ready to create, no matter the device or platform.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}