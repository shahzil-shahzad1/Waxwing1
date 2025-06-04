import FallingStarsBackground from "@/components/FallingStars";
import FadeInSection from "./FadeinSection";
const Architecture = () => {
  return (
    <div className="second bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] relative min-h-[100vh]">
        <FallingStarsBackground /> 
      <FadeInSection direction="down" classes="w-[100vw]">
        <div className="flex justify-center flex-col items-center gap-5 px-20 w-full overflow-hidden py-20 z-[1]">
        <img src="/logo.png" alt="" className="w-16 h-w-16 fade-fall-down " />
        <h1 className="text-gray-50 fade-fall-down  text-[1.75rem] font-bold sm:text-[2.4rem] md:text-[2.8rem] max-md:text-center">Client-Service Model</h1>
        <p className=" fade-fall-down w-[60vw] text-center max-md:text-sm max-sm:text-xs text-white">This Client Service Architecture followed by us to make your presence online. Our respected team hoped that everyone follow this architecture to deal with us.</p>
        <div className=" fade-fall-down w-[80vw] max-lg:w-[100vw]">
        <img src="/architecture.png" alt="Architecture" className=" fade-fall-down transition-all duration-500 cursor-pointer hover:brightness-125 w-full max-lg:ml-[20px] max-md:ml-[10px]" />
        </div>
        </div>
    </FadeInSection>
      </div>
  )
}

export default Architecture
