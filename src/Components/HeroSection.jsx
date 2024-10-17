import React from 'react';
import GarretImg from '../../src/assets/images/Garsetti mic hero  1.png'
import GarretMobile from '../../src/assets/images/Garsetti-mobile.png'



export default function HeroSection() {
  return (
    <div className="bg-[#B8BBC2] min-h-screen px-[16px] lg:px-[48px] pt-[42px] relative overflow-hidden">

      <div className='flex flex-col justify-between h-screen w-[40%]'>

        <div className="relative z-10 w-[408px]">
          <p className="font-DepartureMono absolute text-sm leading-tight text-[16px] lg:text-[12px]">
            FOR YEARS, OUR WORLD HAS BEEN TRANSFORMED BY SPEECHES FROM GREAT MEN WHO STOOD UP TO BE COUNTED. 
            THINK OF WHAT THEY SAID. THINK OF HOW THEY SAID IT. HERE'S YOUR WINDOW TO BEING REMEMBERED
          </p>
        </div>


        <div className="w-[451px] absolute md:hidden border border-red-600 lg:hidden">
        <img 
          src={GarretMobile} 
          alt="Garrett with microphone" 
          className="object-cover w-full h-full"
        />
      </div>
        
        <div className="relative z-10 mb-[48px]  lg:w-[608px]  mt-[64px]">

            <h1 className='  text-5xl border border-red-700 leading-[128%] font-DepartureMono mb-10'>
              ETCH YOUR VOICE INTO HISTORY 
            </h1>


            
        <div className='flex gap-4 mb-10 font-helvetica-neue-5'>
          <button  className='py-[17px] leading-none px-[40px] bg-[#FF5931]  rounded-full text-sm '>Join the Waitlist</button>
              <button><a href="#" className=' border-black border-b-[1.5px] text-sm py-[4px]'>See what's in the box</a></button>
            </div>

            <p className='text-sm text-[#555963] w-[420px]  font-helvetica-neue-5'>
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