import { games } from "@/app/constant"
import Template from "./Template"
const GamesService = () => {
  return (
    <div className="SectionHolder h-[90vh] bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316]" id="games">

      <Template content={games} title = "Games Service"/>
    </div>
  )
}

export default GamesService
