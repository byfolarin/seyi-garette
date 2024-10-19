import React from 'react';
import GarretImg from '../../src/assets/images/Garsetti mic hero  1.png'
import GarretMobile from '../../src/assets/images/Garsetti-mobile.png'

export default function HeroSection() {
  return (
    <div className="bg-[#B8BBC2] min-h-screen px-4 sm:px-6 lg:px-12 pt-6 lg:pt-[42px] relative overflow-hidden">


      <div className='flex justify-between items-start'>

          <div className="relative z-10 w-full sm:w-[408px] mb-6 lg:mb-0">
                <p className="font-DepartureMono text-[14px]  leading-tight">
                  FOR YEARS, OUR WORLD HAS BEEN TRANSFORMED BY SPEECHES FROM GREAT MEN WHO STOOD UP TO BE COUNTED. 
                  THINK OF WHAT THEY SAID. THINK OF HOW THEY SAID IT. HERE'S YOUR WINDOW TO BEING REMEMBERED
                </p>
              </div>



            <div>
                <ul className='font-DepartureMono text-[14px]'>
                  <li id='stoked'>GARSETTI</li>
                  <li>PRE-ORDER</li>
                  <li>ABOUT GARSETTI ONE</li>
                  <li>CONTENT IN BOX</li>
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



         

        
        <div className="relative z-10 mb-8 lg:mb-12 w-full lg:w-[608px] mt-6 lg:mt-16">

              <h1 className='text-4xl sm:text-5xl leading-tight lg:leading-[128%] font-DepartureMono mb-8 lg:mb-10'>
                ETCH YOUR VOICE <br /> INTO HISTORY 
              </h1>
              
              <div className='flex flex-col sm:flex-row gap-4 mb-8 lg:mb-10 font-helvetica-neue-5'>
                <button className='py-4 px-8 lg:py-[17px] lg:px-[40px] bg-[#FF5931] rounded-full text-sm whitespace-nowrap'>Join the Waitlist</button>
                <button className='py-2 sm:py-0'><a href="#" className='border-black border-b-[1.5px] text-sm py-1'>See what's in the box</a></button>
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
            className="object-cover w-full h-full"/>
        </div>


    </div>
  )
}