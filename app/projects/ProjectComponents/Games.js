import FadeInSection from "@/components/FadeinSection";

const gamesproject = [
    {
        img: "/Projectpage/bike.gif",
        name: "Bike Game",
        owner: "Webnet Team",
        link: "https://vercel.com",
        className: "h-[6.5rem] w-[6.5rem]"
    },
    {
        img: "/Projectpage/snake.gif",
        name: "Snake Game",
        owner: "Webnet Team",
        link: "https://vercel.com",
        className: "h-[6.5rem] w-[6.5rem]"
    },
    {
        img: "/Projectpage/flappybird.gif",
        name: "Flappy Bird Game",
        owner: "Webnet Team",
        link: "https://vercel.com",
        className: "h-[5rem] w-[5rem]"
    },
    {
        img: "/Projectpage/car.gif",
        name: "Car Game",
        owner: "Webnet Team",
        link: "https://vercel.com",
        className: "h-[6.5rem] w-[6.5rem]"
    }
]

const cards = [
    "2ASC5K",
    "AA56R",
    "AA60",
    "Z9LP2",
    "YT83K"
];

const Games = () => {
    return (
        <div className='h-fit w-full py-20 flex flex-col gap-12 items-center justify-center bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316]' id='games'>
            {/* <div className=""> */}
            <FadeInSection direction="right" classes="flex flex-col items-center gap-5">
                <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center ">Games</h1>
                <p className="text-center text-sm sm:text-base w-[60%] text-white">We can build amazing games and attaching games which everyone wants to play. The games can build on demands.</p>
            </FadeInSection>
            {/* </div> */}
            {/* <div className="flex justify-center gap-7 w-fit items-center flex-wrap relative">
                {gamesproject.map((projectgame, index) => (
                    <a href="https://www.vercel.com" target="_blank" className="projectgamecard" key={index}>
                        <div className="first-content">
                            <img src={projectgame.img} alt="" className='h-full w-full bg-cover' />
                        </div>
                        <div className="second-content">
                            <h3 className='text-[17px] font-bold text-gray-50'>{projectgame.name}</h3>
                            <span className='text-[12px] font-extralight text-gray-500'>Build by {projectgame.owner}</span>
                        </div>
                    </a>
                ))}
            </div> */}
            <FadeInSection direction="left" classes="flex flex-wrap justify-center gap-4 w-[90vw] mx-auto">

                {/* <div className="flex flex-wrap justify-center gap-4 w-[90vw] mx-auto"> */}
                {gamesproject.map((project, i) => (
                    <a
                        href={project.link}
                        key={i}
                        target="_blank"
                        className="relative flex flex-col items-center justify-center 
                 w-[calc(70%-0.5rem)] 
                 sm:w-[calc(40%-0.5rem)] 
                 md:w-[calc(23.333%-0.5rem)] 
                 lg:w-[calc(15%-0.5rem)] 
                 h-40 
                 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 
                 border border-white/10 rounded-xl 
                 hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] 
                 shadow-2xl backdrop-blur-md 
                 transition duration-200 cursor-pointer"
                    >
                        {/* Image Placeholder (centered) */}
                        <div
                            className={`min-w-[100%] min-h-[65%] rounded-full flex items-center justify-center ${project.className}`}
                        >
                            <img
                                src={project.img}
                                alt={project.name}
                                className={`${project.className} object-cover`}
                            />
                        </div>

                        {/* Heading under image */}
                        <span className="text-gray-700 text-sm font-semibold text-center px-2">
                            {project.name}
                        </span>
                    </a>
                ))}
                {/* </div> */}
            </FadeInSection>

        </div>
    )
}

export default Games
