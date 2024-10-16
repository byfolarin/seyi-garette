import FooterImg from '../assets/images/Garsetti front  1.jpg'

export default function EightSection() {
  return (

    <div className='relative'>
            <div className=' bg-[#FF5931] absolute rounded-b-[80px] z-20 w-full  font-helvetica-neue-5 px-[49px]'>                 
                <div className="flex flex-col gap-6 items-center py-[110px] w-full mx-auto justify-center">             
                        <h3 className="w-[70%] text-2xl  text-center">
                            Choose more than just a tool – choose to create something timeless. <br /> Choose GARSETTI One
                        </h3>

                        <div className="flex items-center gap-8 ">
                                <button  className='py-[17px] leading-none  px-[40px] text-white bg-[#000000] rounded-full text-sm '>Join the Waitlist</button>
                                <button><a href="#" className=' border-black text-black border-b-[1.5px] text-sm py-[8px]'>Contact the Designer</a></button>
                        </div>
                </div>
            </div>


            <div className='relative'>
                 <img src={FooterImg} alt="" />
            </div>


            <div>
                <div className='flex absolute bottom-0 left-0 right-0 justify-center items-center tracking-tighter font-DepartureMono text-[220px] text-[#FF5931]'>
                    <h1 className='h1-stroke' >GARSETTI1</h1>              
                </div>
            </div>
            
          
    </div>
  )
}
