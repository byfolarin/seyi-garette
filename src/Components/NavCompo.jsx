import { div } from 'framer-motion/client'
import React from 'react'

export default function NavCompo() {
  return (


    <div className='fixed bottom-0 left-0 right-0 z-50 pb-[150px] font-DepartureMono'>
    <div className='font-helvetica-neue-5 mx-auto bg-[#1F1F1F]/50 backdrop-blur-lg border border-[#0000001e] text-white w-[340px] rounded-2xl'>
        <div className='py-[16px] px-[24px]'>
            <ul className='flex flex-col gap-4'>
                    <li>Etch your voice</li>
                    <li>Our belief of your voice</li>
                    <li>Your words deserve</li>
                    <li>The GARSETTI Marvel</li>
                    <li>What’s in the box?</li>
                    <li>What you’ve just witnessed</li>
                    <li>Footer | Closing</li>
            </ul>
        </div>
      
    </div>
    </div>
  )
}
