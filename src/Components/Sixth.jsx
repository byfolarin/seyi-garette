import Box1 from '../../src/assets/images/In the box 1.png'
import Box2 from '../../src/assets/images/USBC Cable 1.png'




export default function Sixth() {
    return (
      <div className="px-[48px] py-[42px]">
        <div className="flex gap-6">


                <div className='w-[70%] flex gap-12'>
                    <div className='flex items-start w-full gap-8 mb-10 font-helvetica-neue-5 text-[#555963]'>
                        Check out what’s <br /> in the box
                    </div>

                    <h2 className="font-helvetica-neue-5 text-[32px] leading-tight ">
                    Complete your GARSETTI One microphone setup with our range of high-performance accessories. Each accessory is designed to enhance your sound and make your recording process seamless.
                    </h2>
                </div>
            

        </div>

            <div className="flex gap-4 pt-[64px]">

                         <div className='w-2/3'>
                            <div className=" h-[528px] overflow-hidden">
                                <img 
                                src={Box1} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className='w-1/3'>
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