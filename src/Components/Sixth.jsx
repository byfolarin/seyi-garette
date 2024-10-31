import { motion } from 'framer-motion'
import Box1 from '../../src/assets/images/In the box 1.jpg'
import Box2 from '../../src/assets/images/USBC Cable 1.jpg'
import Tick from '../../src/assets/images/Vector 4.svg'

export default function Sixth() {
    return (
        <div className="relative z-[24] px-4 md:px-8 lg:px-12 py-[60px] lg:py-16 font-helvetica-neue-5 bg-white">
            {/* Previous content remains the same until the images section */}
            <div className="max-w-[1440px] mx-auto">
            
            <div className="flex flex-col lg:flex-row justify-between">
                <div className='w-full lg:w-[70%] flex flex-col lg:flex-row gap-4'>


                    <div className='flex items-start w-full font-helvetica-neue-5 text-[#555963]'>
                        <h4 className='border-l-[3px] pl-6 font-medium border-[#E5E5E5]'>Check out what's <br /> in the box</h4>   
                    </div>



                    <div className='flex flex-col justify-between'>


                        <h2 className="font-helvetica-neue-5 pt-[32px] text-2xl leading-tight">
                            Complete your GARSETTI One microphone setup with our range of high-performance accessories. Each accessory is designed to enhance your sound and make your recording process seamless.
                        </h2>


                        <div className="flex flex-col lg:flex-row md:flex-row md:items-center pt-[40px] lg:items-center gap-8">

                            <button 
                                onClick={()=> console.log('clicked button')}
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
                                    Contact the designer
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

                <div className='font-helvetica-neue-5 pt-[61px] lg:pt-0'>
                    <ul>
                        <div className='flex gap-4 items-center pb-4'>
                            <img src={Tick} alt="" />
                            <li>GARSETTI One </li>
                        </div>
                        <div className='flex gap-4 items-center pb-4'>
                            <img src={Tick} alt="" />
                            <li>Microphone Stand Adapter</li>
                        </div>
                        <div className='flex gap-4 items-center pb-4'>
                            <img src={Tick} alt="" />
                            <li>Microphone Shock Mount </li>
                        </div>
                        <div className='flex gap-4 items-center pb-4'>
                            <img src={Tick} alt="" />
                            <li>USB Type C Cable</li>
                        </div>
                        <div className='flex gap-4 items-center pb-4'>
                            <img src={Tick} alt="" />
                            <li>Fastening Screws & Bolts</li>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 pt-[32px] lg:pt-16 ">
                <motion.div 
                    className='w-full lg:w-2/3'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut" }
                    }}
                    viewport={{ once: true }}
                >
                    <div className="lg:h-[528px] h-[260.5px] overflow-hidden">
                        <motion.div 
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ transformOrigin: 'center center' }}
                        >
                            <img 
                                src={Box1} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                    className='w-full lg:w-1/3'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                    }}
                    viewport={{ once: true }}
                >
                    <div className="lg:h-[528px] h-[260.5px] overflow-hidden">
                    <motion.div 
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ transformOrigin: 'center center' }}
                        >
                            <img 
                                src={Box2} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            </div>
        </div>
    )
}