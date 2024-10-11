import WomanMic from '../../src/assets/images/womanmic.png'
import StudioMic from '../../src/assets/images/micstudio.png'



export default function Fifth() {
    return (
      <div className="px-[48px] pt-[42px]">
        <div className="flex gap-6">

                <div className='flex items-start gap-8 mb-10 font-helvetica-neue-5  text-[#555963]'>
                    Why choose <br /> GARSETTI One?
                </div>

                <h2 className="font-DepartureMono text-[48px] leading-tight">
                    THE GARSETTI <br /> ARTISTIC MARVEL
                </h2>
  

        </div>

            <div className="flex gap-4 pt-[64px]">

                        <div className="w-1/3 h-[528px] overflow-hidden">
                            <img 
                            src={WomanMic} 
                            alt="Woman with microphone" 
                            className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="w-1/3 h-[528px] overflow-hidden">
                            <img 
                            src={StudioMic} 
                            alt="Studio microphone" 
                            className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="w-1/3 h-[528px] overflow-hidden">
                            <img 
                            src={StudioMic} 
                            alt="Studio microphone" 
                            className="w-full h-full object-cover"
                            />
                        </div>
            </div>


      </div>
    )
  }