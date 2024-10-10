import GarsettiFront from '../../src/assets/images/iFront 1.png'

export default function SecondSection() {
  return (
    <div className="bg-[#CECECE] min-h-screen px-[48px] pt-[42px] relative overflow-hidden flex items-center justify-center">
      
      {/* Background text */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='flex items-center gap-24 font-DepartureMono text-[185.15px] text-white opacity-50'>
          <h1>GARSE</h1>
          <h1>TTI1</h1> 
        </div>
      </div>

      {/* Foreground image */}
      <div className="relative z-10 max-w-96">
        <img 
          src={GarsettiFront} 
          alt="Garrett with microphone" 
          className="object-cover w-full h-auto"
        />
      </div>

      
    </div>
  )
}