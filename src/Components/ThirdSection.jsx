import GarsettiSide from '../../src/assets/images/Side-min.png'

export default function SecondSection() {
  return (
    <div className="bg-[#CECECE] min-h-screen sticky top-0 z-[10]">
      <div className="h-screen px-4 md:px-8 lg:px-12 pt-10 relative overflow-hidden flex flex-col">
        <div className='flex-grow flex flex-col md:flex-row lg:flex-row items-center justify-center md:relative lg:relative'>
          {/* Background text */}
          <div className='md:absolute lg:absolute md:inset-0 lg:inset-0 flex justify-center items-center pointer-events-none'>
            <div className='md:flex lg:flex flex-col md:flex-row lg:flex-row justify-center items-center tracking-tighter font-DepartureMono text-[72px] md:text-[140px] lg:text-[180px] hidden text-white opacity-50'>
              <h1 className="md:-translate-y-16 lg:-translate-y-32 leading-[80%]">GARSE <span className='md:hidden lg:hidden'>TTI1</span></h1>
              <h1 className="hidden md:block lg:block md:-translate-y-16 lg:-translate-y-32">TTI1</h1> 
            </div>
          </div>
          
          {/* Foreground image */}
          <div className="md:relative lg:relative md:z-10 lg:z-10 max-w-80 md:max-w-96 lg:max-w-[500px]">
            <img 
              src={GarsettiSide} 
              alt="Garrett with microphone" 
              className="object-cover w-full h-auto"
            />
          </div>

          

          <div className='md:absolute lg:absolute md:inset-0 lg:inset-0 flex justify-center items-center pointer-events-none'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center tracking-tighter font-DepartureMono text-[72px] md:text-[140px] lg:text-[180px] ml-4 md:ml-0 lg:ml-0 text-[#ffffff]'>
              <h1 className="md:-translate-y-16 lg:-translate-y-32 leading-[80%]">GARSE <span className='sm:flex md:hidden lg:hidden'>TTI1</span></h1>
              <h1 className="hidden md:block lg:block md:-translate-y-16 lg:-translate-y-32">TTI1</h1> 
            </div>
          </div>
        </div>

        <div className='md:absolute lg:absolute bottom-10 pt-12 md:pt-0 lg:pt-0 md:left-8 md:right-8 lg:left-12 lg:right-12 font-helvetica-neue-5 flex flex-col md:flex-row lg:flex-row justify-between'>
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
  )
}