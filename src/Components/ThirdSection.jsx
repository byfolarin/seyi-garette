import GarsettiSide from '../../src/assets/images/Side.png'

export default function ThirdSection() {
  return (
    <div className="bg-[#CECECE] min-h-screen px-[48px] pt-[42px] relative overflow-hidden flex flex-col">
      
      {/* <div className='absolute top-[42px] left-[48px] font-helvetica-neue-5'>
        <div className='underline'>
          Back to top
        </div>
      </div> */}

      <div className='flex-grow flex items-center justify-center relative'>
        {/* Background text */}
        <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
          <div className='flex justify-center items-center tracking-tighter font-DepartureMono text-[220px] text-white opacity-50'>

            <h1 className="-translate-y-40">GARSE</h1>
                 {/* <span className="w-[128px]"></span> */}
            <h1 className="-translate-y-40">TTI1 </h1> 
          </div>
        </div>

        {/* Foreground image */}
        <div className="relative z-10 w-[600px]">
          <img 
            src={GarsettiSide} 
            alt="Garrett with microphone" 
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className='absolute bottom-[42px] left-[48px] right-[48px] font-helvetica-neue-5 flex justify-between'>
        <div className='w-[346px] text-xl leading-tight'>
          We believe you have a voice worth remembering just like every notable human that walked the earth.
          The mic for a notable voice.
        </div>

        <div className='w-[346px]  flex flex-col gap-8 '>
          <p className='text-[#555963] text-sm'>Experience not just an engineering marvel but an artistic one as well. The GARSETTI One seeks to further revolutionise audio capturing. </p>
          
          <div className='flex gap-4 mb-10 font-helvetica-neue-5'>
            <button  className='py-[17px] leading-none px-[40px] bg-[#FF5931] rounded-full text-sm '>Join the Waitlist</button>
            <button><a href="#" className=' border-black border-b-[1.5px] text-sm py-[8px]'>See what's in the box</a></button>
          </div>
        </div>
      </div>

    </div>
  )
}