import React from 'react'

export default function SeventhSection() {
  return (
    <div className='bg-[#FF5931] h-[980px] font-helvetica-neue-5 px-[49px]'>

      <div className='bg-[#232323]'>

        <div>
            <h2 className='text-[64px] tracking-tight font-helvetica-neue-5 leading-[0.9] text-white'>An accompanying <br /> mobile app, for even <br />  granular controls
            </h2>

            <div className="flex items-center gap-8 ">
                    <button  className='py-[16px] leading-none  px-[40px] text-black bg-[#ffffff] rounded-full text-sm '>Join the Waitlist</button>
                    <button><a href="#" className=' border-white text-white border-b-[1.5px] text-sm py-[8px]'>See what's in the box</a></button>
            </div>

        </div>
      </div>

    </div>
  )
}
