import Box1 from '../../src/assets/images/In the box 1.png'
import Box2 from '../../src/assets/images/USBC Cable 1.png'




export default function Sixth() {
    return (
      <div className="px-[16px] lg:px-[48px] py-[68px]">
        <div className="flex flex-col lg:flex-col gap-6">


                <div className='w-full lg:w-[70%] flex flex-col lg:flex-row gap-12'>
                    <div className='flex items-start w-full font-helvetica-neue-5 text-[#555963]'>
                     <h4 className='border-l-[3px] pl-6 font-medium border-[#E5E5E5]'>Check out what’s <br /> in the box</h4>   
                    </div>

                    <h2 className="font-helvetica-neue-5 text-2xl leading-tight ">
                    Complete your GARSETTI One microphone setup with our range of high-performance accessories. Each accessory is designed to enhance your sound and make your recording process seamless.
                    </h2>
                </div>
            
        </div>

                    <div className="flex flex-col lg:flex-row gap-4 pt-[64px]">
                                <div className='w-full lg:w-2/3'>
                                    <div className=" h-[528px] overflow-hidden">
                                        <img 
                                        src={Box1} 
                                        alt="Studio microphone" 
                                        className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className='w-full lg:w-1/3'>
                                <div className="h-[528px] overflow-hidden">
                                        <img 
                                        src={Box2} 
                                        alt="Studio microphone" 
                                        className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>                                     
                    </div>


      </div>
    )
  }