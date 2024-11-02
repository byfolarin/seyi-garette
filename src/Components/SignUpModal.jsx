import { motion } from 'framer-motion';
import React, { useState } from 'react';

const SignUpModal = ({ onClose }) => {
  const [email, setEmail] = useState('');

  return ( 
    <div className='w-[476px] flex flex-col gap-8'>
        <div className='flex justify-between items-center'>
            <h2 className='text-[36px] font-helvetica-neue-5'>Join the waitlist</h2>
            <motion.button 
                onClick={onClose}
                className="py-1 sm:py-0 relative group leading-normal"
                whileHover="hover"
                initial="rest"
                animate="rest"
            >
                <a href="#" className="text-base text-black font-helvetica-neue-5 py-1 hover:text-[#3d3d3d] relative inline-block leading-normal">
                    Close
                    <motion.span
                        className="absolute bottom-0 left-0 h-[1px] bg-black w-full"
                        variants={{
                            rest: { width: '100%', left: '0%' },
                            hover: { 
                                width: ['100%', '0%', '0%', '100%'],
                                left: ['0%', '100%', '0%', '0%'],
                                transition: { 
                                    duration: 0.4,
                                    times: [0, 0.4, 0.5, 1]
                                }
                            }
                        }}
                    />
                </a>
            </motion.button>              
        </div>

        <div className='flex items-center font-helvetica-neue-5 justify-between w-[476px] bg-[#FF5931] py-[12px] pr-[12px] pl-[32px] rounded-full'>
            <input 
                type="email"
                placeholder="Enter your email address"
                className='text-base bg-transparent placeholder-[#333333] outline-none w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button 
                className={`px-[23px] py-[16px] rounded-full border border-[#333333] transition-colors duration-300 
                ${email.length > 0 ? 'bg-black text-white' : ''}`}
            >
                Submit
            </button>
        </div>
    </div>
  );
};

export default SignUpModal;