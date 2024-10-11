import Mid1 from '../../src/assets/images/mid1.png'
import Mid2 from '../../src/assets/images/mid2.png'
import Mid3 from '../../src/assets/images/mid3.png'




export default function Fifth() {
    return (
      <div className="px-[48px] py-[42px]">
        <div className="flex gap-6">

                <div className='flex items-start gap-8 mb-10 font-helvetica-neue-5  text-[#555963]'>
                    Why choose <br /> GARSETTI One?
                </div>

                <h2 className="font-DepartureMono text-[48px] leading-tight">
                    THE GARSETTI <br /> ARTISTIC MARVEL
                </h2>
  

        </div>

            <div className="flex gap-4 pt-[64px]">

                         <div className='w-1/3'>
                            <div className=" h-[528px] overflow-hidden">
                                <img 
                                src={Mid1} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                                />
                            </div>

                            <div className='pt-8 font-helvetica-neue-5 flex flex-col gap-1'>
                                <h5 className='font-bold text-xl'>Crisp Audio Capture</h5>
                                <p className='font-helvetica-neue-5 text-base'>Experience not just an engineering marvel but an artistic one as well. The GARSETTI One seeks to further revolutionise audio capturing. </p>
                            </div>
                        </div>

                        <div className='w-1/3'>
                        <div className="h-[528px] overflow-hidden">
                                <img 
                                src={Mid2} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                                />
                            </div>

                            <div className='pt-8 font-helvetica-neue-5 flex flex-col gap-1'>
                                <h5 className='font-bold text-xl'>Universal Port Compatibility</h5>
                                <p className='font-helvetica-neue-5 text-base'>Adapt to any recording environment with ease. Our universal port supports a wide range of setups, ensuring you’re always ready to create, no matter the device or platform.</p>
                            </div>
                        </div>

                        <div className='w-1/3'>
                        <div className="h-[528px] overflow-hidden">
                                <img 
                                src={Mid3} 
                                alt="Studio microphone" 
                                className="w-full h-full object-cover"
                                />
                            </div>

                            <div className='pt-8 font-helvetica-neue-5 flex flex-col gap-1'>
                                <h5 className='font-bold text-xl'>Universal Port Compatibility</h5>
                                <p className='font-helvetica-neue-5 text-base'>Adapt to any recording environment with ease. Our universal port supports a wide range of setups, ensuring you’re always ready to create, no matter the device or platform.</p>
                            </div>
                        </div>

                       
            </div>


      </div>
    )
  }