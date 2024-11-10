import React from 'react';
import Arrowdown from '../assets/arrowline.svg'
import ArrowGroup from '../assets/Group.svg'

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-[42px] font-helvetica-neue-5">
      <div className='flex w-[705px] mx-auto justify-between py-[24px] 
      px-[32px] text-white backdrop-blur-lg rounded-full bg-[#1F1F1F]/50 border border-[#0000001e]'>
        <div className='flex gap-2'>
          <div className='mix-blend-soft-light'>Section 01:</div>
          <div className='flex items-center gap-2'>
                 <div>Our belief of your voice</div>
                 <img src={Arrowdown} alt="" />
          </div>
  
        </div>
    
        <div className='flex gap-2'>
             <img src={ArrowGroup} alt="" />
             <div>Back to top</div>          
        </div>
      

        <button>Join the Waitlist</button>
      </div>
    </div>
  );
};

export default Navigation;