import TeamPage from "./AboutComponets/AboutIntroSection"

import AboutLanding from "./AboutComponets/AboutLanding"
import StatsSection from "./AboutComponets/StateSection"
import WhyChooseUs from "./AboutComponets/WhyChoose"

const page = () => {
  return (
    <div>
      <AboutLanding/>
      <TeamPage/>
      <StatsSection/>
      <WhyChooseUs/>
    </div>
  )
}

export default page
