import "./ProjectComponents/projects.css"
import FallingStarsBackground from "@/components/FallingStars"
import OpeninggWave from "./ProjectComponents/OpeningWave"
// import RubiksCube from "./ProjectComponents/VideoHoverGrid"

import Portfolio from "./ProjectComponents/Portfolios"
import Games from "./ProjectComponents/Games"
import Llms from "./ProjectComponents/Llms"
import Businesspages from "./ProjectComponents/Businesspages"
import Store from "./ProjectComponents/Store"


const page = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* <div className="h-[100vh] bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] w-full overflow-hidden text-white flex items-center justify-center">
        <div className="projectpagecard">
          <a href="#portfolios"><span>PORTFOLIOS</span></a>
          <a href="#games"><span>GAMES</span></a>
          <a href="#stores"><span>ECOMMERCE STORES</span></a>
          <a href="#portals"><span>PORTALS</span></a>
        </div>
        </div> */}
      <div className="relative max-md:hidden z-[1] overflow-hidden w-full min-h-[100vh] bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] flex justify-center items-center">
        <FallingStarsBackground />
        {/* <RubiksCube /> */}
        <OpeninggWave />
      </div>

      <Portfolio />
      <Games />
      <Llms />
      <Businesspages />
      <Store />
    </div>
  )
}

export default page
