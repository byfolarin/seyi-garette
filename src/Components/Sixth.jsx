import Box1 from '../../src/assets/images/In the box 1.jpg'
import Box2 from '../../src/assets/images/USBC Cable 1.jpg'
import Tick from '../../src/assets/images/Vector 4.svg'




export default function Sixth() {
    return (
        <div className="relative z-[24] px-[16px] md:px[32px] lg:px-[48px] py-[68px] bg-white">
        <div className="flex flex-collg:flex-row gap-6">


                <div className='w-full lg:w-[70%] flex flex-col lg:flex-row gap-12'>
                    <div className='flex items-start w-full font-helvetica-neue-5 text-[#555963]'>
                     <h4 className='border-l-[3px] pl-6 font-medium border-[#E5E5E5]'>Check out what’s <br /> in the box</h4>   
                 </div>

                    <h2 className="font-helvetica-neue-5 text-2xl leading-tight ">
                    Complete your GARSETTI One microphone setup with our range of high-performance accessories. Each accessory is designed to enhance your sound and make your recording process seamless.
                    </h2>

                  


                </div>


                    <div className='font-helvetica-neue-5'>

                        <ul>

                            <div className='flex gap-[16px] items-center align-middle pb-[16px]'>
                                <img src={Tick} alt="" />
                               <li>GARSETTI One </li>
                            </div>

                            <div className='flex gap-[16px] items-center align-middle pb-[16px]'>
                                <img src={Tick} alt="" />
                               <li>Microphone Stand Adapter</li>
                            </div>

                            <div className='flex gap-[16px] items-center align-middle pb-[16px]'>
                                <img src={Tick} alt="" />
                               <li>Microphone Shock Mount </li>
                            </div>

                            <div className='flex gap-[16px] items-center align-middle pb-[16px]'>
                                <img src={Tick} alt="" />
                               <li>USB Type C Cable</li>
                            </div>

                            <div className='flex gap-[16px] items-center align-middle pb-[16px]'>
                                <img src={Tick} alt="" />
                               <li>Fastening Screws & Bolts</li>
                            </div>

                        </ul>

                    </div>
                   
            
        </div>

                    <div className="flex flex-col lg:flex-row gap-4 pt-[64px]">
                                <div className='w-full lg:w-2/3'>
                                    <div className=" h-[528px] overflow-hidden">
                                        <img 
                                        src={Box1} 
                                        alt="Studio microphone" 
                                        className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className='w-full lg:w-1/3'>
                                <div className="h-[528px] overflow-hidden">
                                        <img 
                                        src={Box2} 
                                        alt="Studio microphone" 
                                        className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>                                     
                    </div>


      </div>
    )
  }