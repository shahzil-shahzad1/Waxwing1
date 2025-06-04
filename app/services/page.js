import OpeninggWave from "../projects/ProjectComponents/OpeningWave"
import FallingStarsBackground from "@/components/FallingStars"
import "./ServicesComponents/services.css"
import PortfolioService from "./ServicesComponents/PortfolioService"
import GamesService from "./ServicesComponents/GamesService"
import PortalsService from "./ServicesComponents/PortalsService"
import BusinessService from "./ServicesComponents/BusinessService"
import EcommerceService from "./ServicesComponents/EcommerceService"
import MorphingBubblesBackground from "./ServicesComponents/GlowingOrbsBackground"

// import { portfolios } from "../constant"
// import { games } from "../constant"
// import { ecommerceStores } from "../constant"
// import { portals } from "../constant"
// import { businessWeb } from "../constant"


// const services = [
//   portfolios,
//   games,
//   ecommerceStores,
//   portals,
//   businessWeb
// ]

const page = () => {
  return (
    <div >
      <div className="relative max-md:hidden z-[1] overflow-hidden w-full min-h-[100vh] bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] flex justify-center items-center">
        <FallingStarsBackground />
        <OpeninggWave />
      </div>

      {/* <div className="h-[100vh] bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] w-full overflow-hidden text-white flex items-center justify-center">
  <div className="projectpagecard animate-slideup">
    <a href="#portfolios"><span>PORTFOLIOS</span></a>
    <a href="#games"><span>GAMES</span></a>
    <a href="#stores"><span>ECOMMERCE STORES</span></a>
    <a href="#portals"><span>PORTALS</span></a>
  </div>
</div> */}

      {
        // services.map((service, index)=>(
        // <Template content = {service} key={index}/>
        // ))
      }

<div className="relative h-fit overflow-hidden">
      <MorphingBubblesBackground/>
      <PortfolioService />
      <GamesService />
      <PortalsService />
      <BusinessService />
      <EcommerceService />
</div>
      
    </div>
  )
}

export default page
