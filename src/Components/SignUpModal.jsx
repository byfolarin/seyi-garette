import React from 'react'

const SignUpModal = () => {
  return (
    <div>
        <div className='flex justify-between'>
                <h2 className='text-[36px] font-helvetica-neue-5'>Join the waitlist</h2>
                <p className='font-helvetica-neue-5 text-base'>Close</p>
        </div>


        <div className='flex items-center'>
            <p>Enter your email address</p>
            <button className='px-[23px] py-[16px] border rounded-full border-[#333333]'>Submit</button>
        </div>
   
    </div>
  )
}

export default SignUpModal
