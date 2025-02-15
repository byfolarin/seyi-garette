import { motion } from 'framer-motion'
import mockup from '../assets/images/iPhone 14 Pro.png'
import { LazyImage } from './LazyLoadImg'


export default function SeventhSection() {
  return (
    <div className='bg-[#FF5931] relative z-[25]  font-helvetica-neue-5 px-[16px] lg:px-[49px]'>

      <div className="max-w-[1440px] mx-auto">


    <div className='pb-[60px]'>
      <div className='bg-[#232323]  rounded-b-[32px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center px-[16px] lg:px-[60px]'>

   
                <div className='flex flex-col gap-10'>
                    <h2 className='text-4xl pt-[45px] md:text-[48px] lg:text-[64px] tracking-tight font-helvetica-neue-5 leading-[98%] text-white'>An accompanying <br className='hidden lg:block' /> mobile app, for even <br />  granular controls
                    </h2>

                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 ">
                    <button 
                onClick={()=> console.log('clicked button')}
                    className='py-4 cursor-pointer px-8 lg:py-[17px] lg:px-[40px] text-black bg-[#ffffff] 
                    rounded-full text-sm whitespace-nowrap'>Join the Waitlist
                </button>

                <motion.button 
                  className='py-1 sm:py-0 relative group'
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <a href="#" className='text-sm py-1 hover:text-[#b6b6b6] text-white relative inline-block'>
                  Contact the designer
                    <motion.span
                      className='absolute bottom-0 left-0 h-[1px] bg-white w-full'
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
                </div>

                <div className='pt-[32px] pb-[0.5px]'>
                  <LazyImage src={mockup} className='w-[330px]' />
                    {/* <img src={mockup} alt="" className='w-[330px]' /> */}
                </div>

            </div>
        </div>
     </div>
     </div>


    </div>
  )
}
