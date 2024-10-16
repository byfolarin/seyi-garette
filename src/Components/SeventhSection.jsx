import mockup from '../assets/images/iPhone 14 Pro.png'

export default function SeventhSection() {
  return (
    <div className='bg-[#FF5931]  font-helvetica-neue-5 px-[49px]'>


    <div className='pb-[60px]'>
      <div className='bg-[#232323]  rounded-b-[32px]'>
        <div className='flex justify-between items-center px-[60px]'>

   
                <div className='flex flex-col gap-10'>
                    <h2 className='text-[64px] tracking-tight font-helvetica-neue-5 leading-[98%] text-white'>An accompanying <br /> mobile app, for even <br />  granular controls
                    </h2>

                    <div className="flex items-center gap-8 ">
                            <button  className='py-[16px] leading-none  px-[40px] text-black bg-[#ffffff] rounded-full text-sm '>Join the Waitlist</button>
                            <button><a href="#" className=' border-white text-white border-b-[1.5px] text-sm py-[8px]'>See what's in the box</a></button>
                    </div>
                </div>

                <div className='pt-[32px]'>
                    <img src={mockup} alt="" className='w-[330px] h-' />
                </div>

            </div>
        </div>
     </div>

    </div>
  )
}
