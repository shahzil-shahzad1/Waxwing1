import { portals } from "@/app/constant"
import Template from "./Template"
const PortalsService = () => {
  return (
    <div className="SectionHolder h-fit bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211]" id="portals">
      <Template content={portals} title = "Portals Service"/>
     </div>
  )
}

export default PortalsService
