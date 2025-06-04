import { ecommerceStores } from "@/app/constant"
import Template from "./Template"
const EcommerceService = () => {
  return (
    <div className="SectionHolder h-[90vh] bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211]" id="stores">
        <Template content={ecommerceStores} title="Online Stores Service" />
    </div>
  )
}

export default EcommerceService
