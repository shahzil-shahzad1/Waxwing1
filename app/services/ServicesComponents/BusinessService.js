import { businessWeb } from "@/app/constant"
import Template from "./Template"
const BusinessService = () => {
  return (
    <div className="SectionHolder h-[90vh] bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316]" id="busweb">
        <Template content={businessWeb} title="Business Web Service" />
    </div>
  )
}

export default BusinessService
