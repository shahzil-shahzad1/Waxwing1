import Image from "next/image"
import Xicon from "./Xicon"
import LinkedInIcon from "./Linkedinicon"
import FadeInSection from "./FadeinSection"
const About = () => {
  const cardsdata = [
    {
      name: "Isabella Meson",
      role: "Cofounder & Project Manager",
      linkedin: "https://www.linkedin.com",
      x: "https://www.x.com",
    },
    {
      name: "William Jacob",
      role: "Indoneisa Devleopment Manager",
      linkedin: "https://www.linkedin.com",
      x: "https://www.x.com",
    },
    {
      name: "Noah Michael",
      role: "Cofounder & Head of Business Dev...",
      linkedin: "https://www.linkedin.com",
      x: "https://www.x.com",
    },
    {
      name: "Abigail Jayden",
      role: "Cofounder & Marketing Lead",
      linkedin: "https://www.linkedin.com",
      x: "https://www.x.com",
    },
    {
      name: "Ethan Alexander",
      role: "Cofounder & Head of Product",
      linkedin: "https://www.linkedin.com",
      x: "https://www.x.com",
    },
    {
      name: "Mia Matthew",
      role: "Cofounder & Senior Developer",
      linkedin: "https://www.linkedin.com",
      x: "https://www.x.com",
    },
    {
      name: "Josua Liam",
      role: "Compilance & Communications",
      linkedin: "https://www.linkedin.com",
      x: "https://www.x.com",
    },
    {
      name: "Lilly James",
      role: "Cofounder & Finance & Admin",
      linkedin: "https://www.linkedin.com",
      x: "https://www.x.com",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316]">
    <FadeInSection direction = "down" classes="w-[100vw]">
    <div className='about flex justify-start items-center w-full h-fit flex-col'>
      <h1 className="text-gray-50  text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] font-bold max-md:text-center max-md:w-[90%] max-md:mb-2">Our Motivated Team</h1>
      <p className=" w-[750px] text-center text-sm sm:text-base text-white">Meet our brilliant mindset.</p>

      {/* to make cards 4 in every raw  cardscontainer make full width and each card have 20% width and add class aboutsection in card*/}
      <div className="fade-lift-up cardscontainer my-10 flex justify-center items-center w-[80vw] gap-6 flex-wrap px-5">
        {cardsdata.map((card, index)=>(
          <div className="relative card flex flex-col justify-between items-start bg-transparent border border-gray-700 rounded-sm border-spacing-x-2 px-5 py-7 hover:bg-[#104d8e]  transition-all duration-300 cursor-pointer" key={index}>
          <div className="bg-[#104d8e] w-[8px] h-[100%] absolute left-0 top-0">  </div>
          <div className="flex justify-between items-center w-[100%] gap-2">
            <h3 className="text-xl text-gray-50 font-bold">{card.name}</h3>
            <div className="flex justify-center items-center gap-3">
              <span>
                <a href={card.linkedin}>
                  <LinkedInIcon className="w-3 h-3 fill-[#0c72d4] hover:fill-white" />
                </a>
              </span>
              <span>
                <a href={card.x}>
                  <Xicon className="w-3 h-3 fill-[#0c72d4] hover:fill-white" color="#00ffff" />
                </a>
              </span>
            </div>
          </div>
          <div className="w-[100%] text-gray-400 text-[70%] mt-1 font-light">
            <p>{card.role}</p>
          </div>
        </div>
        ))}

      </div>
    </div>
    </FadeInSection>
    </div>
  )
}

export default About
