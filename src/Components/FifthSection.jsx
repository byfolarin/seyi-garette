import Mid1 from '../../src/assets/images/mid1.jpg'
import Mid2 from '../../src/assets/images/mid2.jpg'
import Mid3 from '../../src/assets/images/mid3.jpg'




export default function Fifth() {
    return (
        <div className="relative z-[22] px-[16px] md:px[32px] lg:px-[48px] py-[68px] bg-white">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">

                <div className='flex items-start pr-[48px] font-helvetica-neue-5 text-sm  text-[#555963]'>
                  <h4 className='border-l-[3px] border-[#E5E5E5] pl-6 font-medium'>Why choose <br /> GARSETTI One?</h4>  
                </div>

                <h2 className="font-DepartureMono text-[48px] leading-tight">
                    THE GARSETTI <br /> ARTISTIC MARVEL
                </h2>
  

        </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-4 pt-[64px]">

                         <div className='w-full lg:w-1/3'>
                            <div className=" h-[528px] overflow-hidden">
                                <img 
                                src={Mid1} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                                />
                            </div>

                            <div className='pt-8 font-helvetica-neue-5 flex flex-col gap-2'>
                                <h5 className='font-bold text-2xl font-DepartureMono tracking-tight'>Crisp Audio Capture</h5>
                                <p className='font-helvetica-neue-5 text-sm w-full lg:w-[80%] '>Experience not just an engineering marvel but an artistic one as well. The GARSETTI One seeks to further revolutionise audio capturing. </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-1/3'>
                        <div className="h-[528px] overflow-hidden">
                                <img 
                                src={Mid2} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                                />
                            </div>

                            <div className='pt-8 font-helvetica-neue-5 flex flex-col gap-2'>
                                <h5 className='font-bold text-2xl text-nowrap font-DepartureMono tracking-tight'>Universal Compatibility</h5>
                                <p className='font-helvetica-neue-5 text-sm w-full lg:w-[80%] '>Adapt to any recording environment with ease. Our universal port supports a wide range of setups, ensuring you’re always ready to create, no matter the device or platform.</p>
                            </div>
                        </div>

                        <div className='w-full lg:w-1/3'>
                        <div className="h-[528px] overflow-hidden">
                                <img 
                                src={Mid3} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                                />
                            </div>

                            <div className='pt-8 font-helvetica-neue-5 flex flex-col gap-2'>
                                <h5 className='font-bold text-2xl font-DepartureMono  tracking-tight'>Port Compatibility</h5>
                                <p className='font-helvetica-neue-5 text-sm w-full lg:w-[80%] '>Adapt to any recording environment with ease. Our universal port supports a wide range of setups, ensuring you’re always ready to create, no matter the device or platform.</p>
                            </div>
                        </div>

                       
            </div>


      </div>
    )
  }