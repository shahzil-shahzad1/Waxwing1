let projects = [
  {
    name: "Portfolio",
    img: '/portfolio.png',
    para: 'We can build user-friendly and heartwarming projects including Portfolios, Onlie Stores.'
  },
  {
    name: "Ecommerce Store",
    img: '/ecommercestore.webp',
    para: 'We can build user-friendly and heartwarming projects including Portfolios, Onlie Stores.'
  },
  {
    name: "Universities Portal",
    img: 'lms.webp',
    para: 'We can build user-friendly and heartwarming projects including Portfolios, Onlie Stores.'
  },
  {
    name: "Business Website",
    img: '/businesslanding.jpg',
    para: 'We can build user-friendly and heartwarming projects including Portfolios, Onlie Stores.'
  }
]
const ProjectSection = () => {
  return (
    <div className="h-fit my-10 py-5 flex flex-col items-center gap-20">
      <div className="animeheadings flex flex-col items-center gap-5">
        <h1 className="text-8xl font-extrabold">Projects.</h1>
        <p className="text-xl font-sans font-extralight text-gray-100 text-center w-[60%]">We can build user-friendly and heartwarming projects including Portfolios, Onlie Stores, LLM's, Games, Business Websites and e.t.c.</p>
      </div>
      <div className="flex justify-center items-center gap-10">
        {
          projects.map((project, index) => (
            <a href="/" className="projectcard" key={index}>
              <div className="projectcard-image"><img src={project.img} alt={project.name} className="w-full h-full rounded-lg" /></div>
              <div className="projectcategory"> {project.name} </div>
              <div className="projectheading"> {project.para}</div>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectSection
