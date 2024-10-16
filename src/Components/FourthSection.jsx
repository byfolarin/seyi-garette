import WomanMic from '../../src/assets/images/womanmic.png'
import StudioMic from '../../src/assets/images/micstudio.png'



export default function FourthSection() {
    return (
      <div className="px-[48px] py-[92px]">
        <div className="flex justify-between">

          <h2 className="w-[50%] font-helvetica-neue-5 text-2xl leading-tight">
            Your words deserve to be remembered and voice deserves to be heard clearly. Whether you're podcasting or performing, GARSETTI® One captures your sound with stunning clarity, ensuring every word carries weight.
          </h2>
  
        <div className='flex justify-end align-middle items-start gap-8 mb-10 font-helvetica-neue-5 w-[45%]'>

            <div className="flex items-center gap-8">
            <button  className='py-[16px] leading-none text-white px-[40px] bg-[#000000] rounded-full text-sm '>Join the Waitlist</button>
            <button><a href="#" className=' border-black border-b-[1.5px] text-sm py-[8px]'>See what's in the box</a></button>
            </div>
        </div>

        </div>

            <div className="flex gap-4 pt-[64px]">
                        <div className="w-1/2 h-[807px] overflow-hidden">
                            <img 
                            src={WomanMic} 
                            alt="Woman with microphone" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-1/2 h-[807px] overflow-hidden">
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