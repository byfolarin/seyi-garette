import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import GarsettiFront from '../../src/assets/images/iFront 1.png'
import GarsettiSide from '../../src/assets/images/Side.png'

export default function SecondSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const frontImageX = useTransform(scrollYProgress, [0, 0.3], ['0%', '-100%'])
  const sideImageX = useTransform(scrollYProgress, [0.3, 0.6], ['100%', '0%'])
  const frontImageOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0])
  const sideImageOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])

  return (
    <div ref={containerRef} className="bg-[#CECECE] h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full w-[300vw] flex">
          <div className="w-screen h-full shrink-0 px-4 md:px-8 lg:px-12 pt-10 relative flex flex-col">
            <div className='flex-grow flex items-center justify-center relative'>
              {/* Background text */}
              <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
                <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center tracking-tighter font-DepartureMono text-[72px] md:text-[140px] lg:text-[180px] text-white opacity-50'>
                  <h1 className="md:-translate-y-16 lg:-translate-y-32 leading-[80%]">GARSE <span className='md:hidden lg:hidden'>TTI1</span></h1>
                  <h1 className="hidden md:block lg:block md:-translate-y-16 lg:-translate-y-32">TTI1</h1> 
                </div>
              </div>
              
              {/* Foreground images */}
              <div className='absolute inset-0 flex justify-center items-center'>
                <motion.div 
                  style={{ x: frontImageX, opacity: frontImageOpacity }}
                  className="absolute z-10 max-w-80 md:max-w-96 lg:max-w-[300px]"
                >
                  <img 
                    src={GarsettiFront} 
                    alt="Garrett with microphone (front view)" 
                    className="object-cover w-full h-auto"
                  />
                </motion.div>

                <motion.div 
                  style={{ x: sideImageX, opacity: sideImageOpacity }}
                  className="absolute z-10 max-w-80 md:max-w-96 lg:max-w-[500px]"
                >
                  <img 
                    src={GarsettiSide} 
                    alt="Garrett with microphone (side view)" 
                    className="object-cover w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>

            <div className='absolute bottom-10 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 font-helvetica-neue-5 flex flex-col md:flex-row lg:flex-row justify-between'>
              <div className='w-full md:w-72 lg:w-80 text-lg leading-tight mb-6 md:mb-0 lg:mb-0'>
                We believe you have a voice worth remembering just like every notable human that walked the earth.
                The mic for a notable voice.
              </div>

              <div className='w-full md:w-72 lg:w-80 flex flex-col gap-6 pt-16 md:pt-0 lg:pt-0'>
                <p className='text-[#555963] text-xs'>Experience not just an engineering marvel but an artistic one as well. The GARSETTI One seeks to further revolutionise audio capturing. </p>
                
                <div className='flex flex-col md:flex-row lg:flex-row gap-3 mb-8 font-helvetica-neue-5'>
                  <button className='py-3 leading-none px-8 bg-[#FF5931] rounded-full text-nowrap text-xs'>Join the Waitlist</button>
                  <button><a href="#" className='border-black border-b-[1px] text-xs text-nowrap py-2'>See what's in the box</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}