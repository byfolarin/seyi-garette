
import { div } from 'framer-motion/client'
import GarsettiSide from '../../src/assets/images/Side.png'

export default function SecondSection() {
  return (
    <div className=''>
    <div className="bg-[#CECECE] min-h-screen px-[16px] md:px-[32px] lg:px-[48px] pt-[42px] relative overflow-hidden flex flex-col">
      
      {/* <div className='absolute top-[42px] left-[48px] font-helvetica-neue-5'>
        <div className='underline'>
          Back to top
        </div>
      </div> */}

      <div className='flex-grow flex flex-col md:flex-row lg:flex-row items-center justify-center md:relative lg:relative'>
        {/* Background text */}
        <div className='md:absolute lg:absolute md:inset-0 lg:inset-0 flex justify-center items-center pointer-events-none'>
          <div className='md:flex lg:flex flex-col md:flex-row lg:flex-row justify-center items-center tracking-tighter font-DepartureMono text-[92px] md:text-[180px] lg:text-[220px] hidden text-white opacity-50'>
            <h1 className="md:-translate-y-20 lg:-translate-y-40 leading-[80%]">GARSE <span className='md:hidden lg:hidden'>TTI1</span></h1>
            <h1 className="hidden md:block lg:block md:-translate-y-20 lg:-translate-y-40">TTI1</h1> 
          </div>
        </div>
        
        {/* Foreground image */}
        <div className="w-[426px]  md:relative lg:relative md:z-10 lg:z-10 max-w-96 md:max-w-[450px] lg:max-w-[w-[600px]]">
          <img 
            src={GarsettiSide} 
            alt="Garrett with microphone" 
            className="object-cover w-full h-auto"
          />
        </div>


        <div className='md:absolute lg:absolute md:inset-0 lg:inset-0 flex justify-center items-center pointer-events-none'>
          <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center tracking-tighter font-DepartureMono text-[92px] md:text-[180px] lg:text-[220px] ml-6 md:ml-0 lg:ml-0 text-white opacity-50'>
            <h1 className="md:-translate-y-20 lg:-translate-y-40 leading-[80%]">GARSE <span className='sm:flex md:hidden lg:hidden'>TTI1</span></h1>
            <h1 className="hidden md:block lg:block md:-translate-y-20 lg:-translate-y-40">TTI1</h1> 
          </div>
        </div>
      </div>


      <div className='md:absolute lg:absolute bottom-[42px] pt-[52px] md:pt-0 lg:pt-0 md:left-[32px] md:right-[32px] lg:left-[48px] lg:right-[48px] font-helvetica-neue-5 flex flex-col md:flex-row lg:flex-row justify-between'>


        <div className='w-full md:w-[300px] lg:w-[346px] text-xl leading-tight mb-8 md:mb-0 lg:mb-0'>
          We believe you have a voice worth remembering just like every notable human that walked the earth.
          The mic for a notable voice.
        </div>


        <div className='w-full md:w-[300px] lg:w-[346px] flex flex-col gap-8 pt-[72px] md:pt-0 lg:pt-0'>
          <p className='text-[#555963] text-sm'>Experience not just an engineering marvel but an artistic one as well. The GARSETTI One seeks to further revolutionise audio capturing. </p>

          
          <div className='flex flex-col md:flex-row lg:flex-row gap-4 mb-10 font-helvetica-neue-5'>
            <button className='py-[17px] leading-none px-[40px] bg-[#FF5931] text-nowrap rounded-full text-sm'>Join the Waitlist</button>
            <button><a href="#" className='border-black border-b-[1.5px] text-nowrap text-sm py-[8px]'>See what's in the box</a></button>
          </div>
          
        </div>

      </div>



    </div>
    </div>
  )
}