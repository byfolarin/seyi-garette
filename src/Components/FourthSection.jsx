import WomanMic from '../../src/assets/images/womanmic.png'
import StudioMic from '../../src/assets/images/micstudio.png'



export default function FourthSection() {
    return (
      <div className="px-[48px] pt-[42px]">
        <div className="flex justify-between">

          <h2 className="w-[60%] font-helvetica-neue-5 text-[32px] leading-tight">
            Your words deserve to be remembered and voice deserves to be heard clearly. Whether you're podcasting or performing, GARSETTI® One captures your sound with stunning clarity, ensuring every word carries weight.
          </h2>
  
        <div className='flex justify-end align-middle items-start gap-8 mb-10 font-helvetica-neue-5 w-[45%]'>

            <div className="flex items-center gap-8">
            <button className='py-[16px] px-[40px] bg-[#000000] rounded-full text-base text-white whitespace-nowrap'>Join the Waitlist</button>
            <button><a href="#" className='underline'>See what's in the box</a></button>
            </div>
        </div>

        </div>

        <div className="flex gap-4 pt-[72px]">
            <div className="bg-slate-300 h-[807px] w-[50%]">
                <img src={WomanMic} alt="" />
            </div>
            <div className="bg-slate-300 h-[807px] w-[50%]">
                 <img src={StudioMic} alt="" className='object-cover w-full'/>
            </div>
        </div>


      </div>
    )
  }