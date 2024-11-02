import React from 'react'

const SignUpModal = () => {
  return (
    <div className='w-[476px] flex flex-col gap-8'>
        <div className='flex justify-between items-center'>
                <h2 className='text-[36px] font-helvetica-neue-5'>Join the waitlist</h2>
                <p className='font-helvetica-neue-5 text-base'>Close</p>
        </div>

        <div className='flex items-center font-helvetica-neue-5 justify-between w-[476px] bg-[#FF5931] py-[12px] pr-[12px] pl-[32px] rounded-full'>
            <p className=' text-base'>Enter your email address</p>
            <button className='px-[23px] py-[16px] border rounded-full border-[#333333]'>Submit</button>
        </div>
   
    </div>
  )
}

export default SignUpModal
