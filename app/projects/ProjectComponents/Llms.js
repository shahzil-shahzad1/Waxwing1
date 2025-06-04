import FadeInSection from "@/components/FadeinSection"

const lmscards = [
  {
    name: "Student Portal",
    image: "/Projectpage/student.png",
    link: "https://vercel.com",
  },
  {
    name: "Admission Portal",
    image: "/Projectpage/admission.png",
    link: "https://vercel.com",
  },
  {
    name: "Faculty Portal",
    image: "/Projectpage/staff.png",
    link: "https://vercel.com",
  },
  {
    name: "Parent Portal",
    image: "/Projectpage/parent.png",
    link: "https://vercel.com",
  },
]
const Llms = () => {
  return (
    // <div className="bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211]">
    // <div id='portals' className="h-5 w-full"></div>
    <div className='h-fit w-full py-20  flex flex-col gap-12 items-center justify-center bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] px-4' id='portals'>
      {/* <div className=""> */}
      <FadeInSection direction="right" classes="flex flex-col items-center gap-5">
        <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center ">Universities Portals</h1>
        <p className="text-center text-sm sm:text-base w-[60%] text-white">We can build attractive and user-friendly portals that will attach the students with the Unviersities.</p>
      </FadeInSection>
      {/* </div> */}

      {/* <div className=""> */}
      <FadeInSection direction="left" classes="flex justify-center gap-7 w-full items-center flex-wrap relative">

        {lmscards.map((lms, index) => (
          <a
            href={lms.link}
            target="_blank"
            className="lmscard flex justify-center items-center flex-col 
                 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%] 
                 min-w-[120px] max-w-[180px] h-44 text-white"
            key={index}
          >
            <div className="w-10 h-10">
              <img
                src={lms.image}
                alt={lms.name}
                className="w-full h-full invert object-cover"
              />
            </div>
            <span className="text-[14px] md:text-[16px] font-[600] mt-[20px] text-center text-white">
              {lms.name}
            </span>
          </a>
        ))}
          </FadeInSection>
      {/* </div> */}
    </div>
    // </div>
  )
}

export default Llms
