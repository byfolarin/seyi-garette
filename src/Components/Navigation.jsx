import React from 'react';

const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-[42px] font-helvetica-neue-5">
      <div className='flex w-[705px] mx-auto justify-between py-[24px] 
      px-[32px] text-white backdrop-blur-lg rounded-full bg-[#1F1F1F]/50 border border-[#0000001e]'>
        <div className='flex'>
          <div>Section 01:</div>
          <div>Our belief of your voice</div>
        </div>
    
        <div>Back to top</div>

        <button>Join the Waitlist</button>
      </div>
    </div>
  );
};

export default Navigation;