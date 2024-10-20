import React from 'react';
import Typewriter from 'typewriter-effect';
import GarretImg from '../../src/assets/images/Garsetti mic hero  1.png';
import Marquee from "react-fast-marquee";
import Registered from '../assets/images/registered.png';
import GarretMobile from '../../src/assets/images/Garsetti-mobile.png';

export default function HeroSection() {
  return (
    <div className="bg-[#B8BBC2] min-h-screen px-4 sm:px-6 lg:px-12 pt-6 lg:pt-[42px] relative overflow-hidden">
      <div className='flex justify-between items-start'>
        <div className="relative font-DepartureMono text-[12px] z-10 w-full sm:w-[408px] mb-6 lg:mb-0 h-[100px]">
          <Typewriter
            options={{
              strings: [
                "FOR YEARS, OUR WORLD HAS BEEN TRANSFORMED BY SPEECHES FROM GREAT MEN WHO STOOD UP TO BE COUNTED.",
                "THINK OF WHAT THEY SAID. THINK OF HOW THEY SAID IT.",
                "HERE'S YOUR WINDOW TO BEING REMEMBERED..."
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 10,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("FOR YEARS, OUR WORLD HAS BEEN TRANSFORMED BY SPEECHES FROM GREAT MEN WHO STOOD UP TO BE COUNTED.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("THINK OF WHAT THEY SAID. THINK OF HOW THEY SAID IT.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("HERE'S YOUR WINDOW TO BEING REMEMBERED...")
                .pauseFor(2000)
                .start();
            }}
          />
        </div>

        <div>
          <ul className='font-DepartureMono text-[12px] text-right'>
            <div className='flex items-center justify-end gap-1 tracking-tighter pb-[4px]'>
              <li id='stoked'>GARSETTI</li>
              <span className='font-helvetica-neue-5 text-[12px]'><p>&#174;</p></span>
            </div>               
            <li className='pb-[4px]'>PRE-ORDER</li>
            <li className='pb-[4px]'>ABOUT GARSETTI ONE</li>
            <li className='pb-[4px]'>CONTENT IN BOX</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col justify-between min-h-screen w-full lg:w-[60%]'>   
        <div>
          {/* <div className="w-full sm:w-[451px] lg:hidden">
            <img 
              src={GarretMobile} 
              alt="Garrett with microphone" 
              className="object-fill w-full "
            />
          </div> */}
        </div>

        <div className="relative z-10 mb-8 lg:mb-32 w-full lg:w-[608px] mt-6 lg:mt-16">
          <div className='flex flex-col'>       

            
            <div className='flex items-center gap-4  mb-[16px]'>

                <div className='w-[14px] h-[14px] bg-[#FC451A] overflow-hidden  rounded-full'></div>

                <div className='flex items-center w-[248px] h-[24px] relative'>
                  <div className='w-[24px] h-full absolute left-0 z-10 bg-gradient-to-r from-[#B8BBC2] to-transparent'></div>
                  <Marquee
                    speed={40}
                    direction='right'
                    gradient={false}
                  >
                    <p className='font-DepartureMono text-[12px] whitespace-nowrap'>
                      I HAVE A DREAM - MARTIN LUTHER
                    </p> 
                    <span className='w-8'></span>
                    {/* <p className='font-DepartureMono text-[12px] whitespace-nowrap'>
                      MAKE AMERICA GREAT AGAIN - MAGA
                    </p> */}
                  </Marquee>
                  <div className='w-[24px] h-full absolute right-0 z-10 bg-gradient-to-l from-[#B8BBC2] to-transparent'></div>
                </div>
            </div>


            <h1 className='text-4xl sm:text-5xl leading-tight lg:leading-[128%] font-DepartureMono mb-4 lg:mb-4'>
              ETCH YOUR VOICE <br /> INTO HISTORY 
            </h1>
            
            <div className='flex flex-col sm:flex-row gap-8 mb-4 lg:mb-10 font-helvetica-neue-5'>
              <button className='py-4 px-8 lg:py-[17px] lg:px-[40px] bg-[#FF5931] rounded-full text-sm whitespace-nowrap'>Join the Waitlist</button>
              <button className='py-1 sm:py-0'><a href="#" className='border-black border-b-[1.5px] text-sm py-1'>See what's in the box</a></button>
            </div>
          </div>

          <p className='text-sm text-[#555963] w-full sm:w-[420px] font-helvetica-neue-5'>
            GARSETTI® brings you its flagship multi-dimensional microphone,
            designed to capture every nuance of your voice with precision.
          </p>
        </div>
      </div>
      
      <div className="hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:w-[80%] lg:h-full lg:overflow-hidden">
        <img 
          src={GarretImg} 
          alt="Garrett with microphone" 
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}