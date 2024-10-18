import FooterImg from '../assets/images/Garsetti front  1.jpg'

export default function EightSection() {
  return (
    <div className='relative font-helvetica-neue-5'>

      <div className='relative z-10'>
        <img src={FooterImg} alt="" className='w-full h-[693px] lg:h-[1734px] object-cover' />
      </div>

      <div className='absolute top-0 left-0 right-0 bg-[#FF5931] rounded-b-[24px] lg:rounded-b-[80px] z-20 w-full font-helvetica-neue-5 px-4 lg:px-12 xl:px-[49px]'>
        
        <div className="flex flex-col gap-6 lg:items-center py-12 lg:py-[110px] w-full mx-auto justify-center">

          <h3 className="w-full lg:w-[70%] text-lg lg:text-2xl text-center">
            Choose more than just a tool – choose to create something timeless. <br className="hidden lg:block" /> Choose GARSETTI One
          </h3>

          <div className="flex flex-col sm:flex-row lg:items-center gap-4 lg:gap-8">
            <button className='w-full sm:w-auto py-3 lg:py-[17px] px-6 lg:px-[40px] text-white bg-[#000000] rounded-full text-sm'>
              Join the Waitlist
            </button>
            <button className='w-full sm:w-auto lg:text-center sm:text-left'>
              <a href="#" className='border-black text-black border-b-[1.5px] text-sm py-2 lg:py-[8px]'>
                Contact the Designer
              </a>
            </button>
          </div>
          
        </div>
      </div>

      <div className='absolute bottom-0 z-50 left-0 right-0 overflow-hidden'>
        <div className='flex justify-center items-center tracking-tighter font-DepartureMono text-[71px] sm:text-[16vw] lg:text-[220px] text-[#FF5931]'>
          <h1 className='h1-stroke'>GARSETTI1</h1>
        </div>
      </div>
    </div>
  )
}