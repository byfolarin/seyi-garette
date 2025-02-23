import WomanMic from '../../src/assets/images/womanmic.jpg'
import StudioMic from '../../src/assets/images/micstudio.jpg'
import { motion } from 'framer-motion'
import { LazyImage } from './LazyLoadImg'

export default function FourthSection() {
    return (
      <div className="relative z-[21] px-[16px] lg:px-[48px] py-[50px] lg:py-[92px] bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row md:flex-row justify-between">
            <h2 className="w-full md:w-[50%] lg:w-[50%] font-helvetica-neue-5 md:text-2xl text-xl lg:text-2xl leading-tight">
              Your words deserve to be remembered and voice deserves to be heard clearly. Whether you're podcasting or
              performing, GARSETTI® One captures your sound with stunning clarity, ensuring every word carries weight.
            </h2>
                 
            <div className='flex flex-col lg:flex-row md:flex-row lg:justify-end align-middle lg:items-start gap-8 mb-10 font-helvetica-neue-5 w-full lg:w-[45%]'>
              <div className="flex flex-col lg:flex-row md:flex-row md:items-center lg:items-center gap-8">
                <button 
                  onClick={() => console.log('clicked button')}
                  className='py-4 cursor-pointer px-8 lg:py-[17px] lg:px-[40px] text-white bg-[#000000] rounded-full text-sm whitespace-nowrap'
                >
                  Join the Waitlist
                </button>

                <motion.button 
                  className='py-1 sm:py-0 relative group'
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <a href="#" className='text-sm py-1 hover:text-[#3d3d3d] relative inline-block'>
                    See what's in the box
                    <motion.span
                      className='absolute bottom-0 left-0 h-[1px] bg-black w-full'
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
          </div>

          <div className="flex flex-col lg:flex-row md:flex-row gap-4 pt-[58px] lg:pt-[64px]">
            <motion.div 
              className="w-full md:w-1/2 lg:w-1/2 lg:h-[807px] h-[356.5px] overflow-hidden"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ 
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              viewport={{ once: true }}
            >
              {/* <LazyImage
                src={WomanMic} 
                alt="Woman with microphone" 
                className="w-full h-full object-cover"
              /> */}
              <img 
                src={`https://res.cloudinary.com/dinfffgcg/image/upload/v1739632523/womanmic_dj28ln.jpg`} 
                alt="Woman with microphone" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 lg:w-1/2 lg:h-[807px] h-[356.5px] overflow-hidden"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ 
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.3
                }
              }}
              viewport={{ once: true }}
            >
              {/* <LazyImage
                src={StudioMic} 
                alt="Studio microphone" 
                className="w-full h-full object-cover"
              /> */}
              <img 
                src={`https://res.cloudinary.com/dinfffgcg/image/upload/v1739632521/micstudio_yugqed.jpg`} 
                alt="Studio microphone" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    )
}