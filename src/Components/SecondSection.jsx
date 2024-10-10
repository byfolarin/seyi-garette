import GarsettiFront from '../../src/assets/images/iFront 1.png'

export default function SecondSection() {
  return (
    <div className="bg-[#CECECE] min-h-screen px-[48px] pt-[42px] relative overflow-hidden flex flex-col">
      
      <div className='absolute top-[42px] left-[48px] font-helvetica-neue-5'>
        <div className='underline'>
          Back to top
        </div>
      </div>

      <div className='flex-grow flex items-center justify-center relative'>
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <div className='flex items-center tracking-tighter gap-24 font-DepartureMono text-[185.15px] text-white opacity-50'>
            <h1>GARSE</h1>
            <h1>TTI1</h1> 
            {/* <p className='font-helvetica-neue-5'>&reg;</p> */}
          </div>
        </div>

        <div className="relative z-10 max-w-96">
          <img 
            src={GarsettiFront} 
            alt="Garrett with microphone" 
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className='absolute flex justify-between bottom-[42px] left-[48px] font-helvetica-neue-5'>

            <div className='w-[446px] text-2xl leading-tight'>
            We believe you have a voice worth remembering just like every notable human that walked the earth.
            The mic for a notable voice.
            </div>


            <div className='w-[446px] flex flex-col gap-8'>
                <p>Experience not just an engineering marvel but an artistic one as well. The GARSETTI One seeks to further revolutionise audio capturing. </p>

                
                <div className='flex gap-8 mb-10 font-helvetica-neue-5'>
                    <button  className='py-[16px] px-[40px] bg-[#FF5931] rounded-full text-base '>Join the Waitlist</button>
                    <button><a href="#" className='underline'>See what's in the box</a></button>
                </div>

            </div>

      </div>



    </div>
  )
}