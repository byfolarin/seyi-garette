import GarretImg from '../../src/assets/images/Garsetti mic hero  1.png'



export default function HeroSection() {
  return (
    <div className="bg-[#B8BBC2] min-h-screen px-[48px] pt-[42px]">
      <p className="w-[439px] font-DepartureMono">
      FOR YEARS, OUR WORLD HAS BEEN TRANSFORMED BY SPEECHES FROM GREAT MEN WHO STOOD UP TO BE COUNTED. 
      THINK OF WHAT THEY SAID. THINK OF HOW THEY SAID IT. HERE’S YOUR WINDOW TO BEING REMEMBERED
      </p>

   
        <img src={GarretImg} alt="" className='absolute top-0 w-[70%]' />
     
    </div>
  )
}
