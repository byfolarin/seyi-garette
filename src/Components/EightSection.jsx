import React from 'react';
import { motion } from 'framer-motion';
import FooterImg from '../assets/images/Garsetti front  1.jpg';

export default function EightSection() {
  return (
    <div className='relative font-helvetica-neue-5 w-full'>
      {/* Full width container */}
      <div className="relative w-full">
        {/* Background image - full width */}
        <div className='relative z-10 w-full'>
          <img src={FooterImg} alt="" className='w-full h-[693px] lg:h-[1734px] object-cover' />
        </div>

        {/* Orange overlay - full width */}
        <div className='absolute top-0 left-0 right-0 bg-[#FF5931] rounded-b-[24px] lg:rounded-b-[80px] z-20 w-full'>
          {/* Content container with max-width */}
          <div className="max-w-[1440px] mx-auto px-4 lg:px-12 xl:px-[49px]">
            <div className="flex gap-6 lg:items-start py-12 lg:py-[110px] w-full mx-auto justify-between">
              <h3 className="w-full font-medium lg:w-[60%] text-lg lg:text-5xl font-helvetica-neue-5 tracking-tighter leading-[98%] text-left">
                You haven't just seen an <br /> ordinary mic. You've just <br /> witnessed the GARSETTI ® One
              </h3>
              <div className="flex flex-col sm:flex-row lg:items-center gap-4 lg:gap-8 pt-[24px]">
                <button 
                  onClick={() => console.log('clicked button')}
                  className='py-4 cursor-pointer px-8 lg:py-[17px] lg:px-[40px] text-white bg-[#000000] 
                  rounded-full text-sm whitespace-nowrap'>
                  Join the Waitlist
                </button>
                <motion.button 
                  className='py-1 sm:py-0 relative group'
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <a href="#" className='text-sm py-1 hover:text-[#3d3d3d] relative inline-block'>
                    Contact the designer
                    <motion.span
                      className='absolute bottom-0 left-0 h-[1px] bg-black w-full'
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
            <div className='font-DepartureMono text-[28px] py-[105px]'>
              <p id='bottom-g' className='tracking-tighter'>GARSETTI <span className='font-helvetica-neue-5'>®</span></p>
            </div>
          </div>
        </div>



        {/* Footer - full width */}
        <div className='absolute bottom-0 z-30 left-0 right-0 overflow-hidden w-full'>
          {/* Content container with max-width */}
          <div className="max-w-[1440px]  mx-auto">
            <div >
              <div className='flex justify-between font-helvetica-neue-5 text-xm tracking-tight text-[#717682]'>

                <div className='flex gap-4 '>
                  <p>Product Design | Visual Design | Website Design</p>
                  <p className='font-bold'>Seyi Oniyitan</p>
                </div>

                <div className='flex gap-4 '>
                  <p>©2024 SEYIONIYITAN</p>
                  <p>all rights reserved</p>
                </div>       

              </div>

              <div className='flex flex-col justify-center items-center 
                tracking-tighter font-DepartureMono text-7xl sm:text-[16vw] lg:text-[285px] text-[#FF5931]'>            
                <h1 className='h1-stroke'>GARSETTI1</h1>
              </div>

            </div>
          </div>
        </div>




        
      </div>
    </div>
  );
}