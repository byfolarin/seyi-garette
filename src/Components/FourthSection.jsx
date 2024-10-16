import WomanMic from '../../src/assets/images/womanmic.png'
import StudioMic from '../../src/assets/images/micstudio.png'



export default function FourthSection() {
    return (
      <div className="px-[16px] lg:px-[48px] py-[92px]">


        <div className="flex flex-col gap-6 lg:flex-row md:flex-row justify-between">

                <h2 className="w-full md:w-[50%] lg:w-[50%] font-helvetica-neue-5 md:text-2xl text-xl lg:text-2xl leading-tight">
                  Your words deserve to be remembered and voice deserves to be heard clearly. Whether you're podcasting or
                   performing, GARSETTI® One captures your sound with stunning clarity, ensuring every word carries weight.
                </h2>
        
              <div className='flex flex-col lg:flex-row md:flex-row lg:justify-end align-middle lg:items-start gap-8 mb-10 font-helvetica-neue-5 w-full lg:w-[45%]'>

                  <div className="flex flex-col lg:flex-row   md:flex-row   md:items-center lg:items-center gap-8">
                      <button  className='py-[17px] leading-none text-white px-[40px] bg-[#000000] text-nowrap rounded-full text-sm '>Join the Waitlist</button>
                      <button><a href="#" className=' border-black border-b-[1.5px] text-sm py-[8px]'>See what's in the box</a></button>
                  </div>
              </div>

        </div>

            <div className="flex flex-col lg:flex-row md:flex-row gap-4 pt-[64px]">
                        <div className="w-full md:w-1/2 lg:w-1/2 h-[807px] overflow-hidden">
                            <img 
                            src={WomanMic} 
                            alt="Woman with microphone" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/2 h-[807px] overflow-hidden">
                            <img 
                            src={StudioMic} 
                            alt="Studio microphone" 
                            className="w-full h-full object-cover"
                            />
                        </div>
            </div>


      </div>
    )
  }