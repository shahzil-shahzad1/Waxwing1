import { portfolios } from "@/app/constant"
import Template from "./Template"
const PortfolioService = () => {
  return (
    <div className="h-[90vh] bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211]" id="portfolios">
      <Template content={portfolios} title = "Portfolios Service" />
    </div>
  )
}

export default PortfolioService
