// import {car,bike,unnamed,flappybird} from "/"
let games = [
    {
        name: "Flappy Bird",
        img: '/flappybird.avif'
    },
    {
        name: "Snake Game",
        img: '/unnamed.jpg'
    },
    {
        name: "Car Game",
        img: '/car.jpg'
    },
    {
        name: "Bike Game",
        img: "/bike.avif"
    }
]
const GameSection = () => {
    return (
        // <div className="h-[600px]">
            <div className="gamesection h-fit my-10 py-5 flex flex-col justify-normal items-center gap-20">
                <div className="animeheadings flex flex-col items-center gap-5">
                    <h1 className="text-8xl font-extrabold">Gaming Section.</h1>
                    <p className="text-xl font-sans font-extralight text-gray-100 text-center w-[60%]">We can build multiple type of web games which you must like. But the games built and added in website on demand.</p>
                </div>
                <div className="flex justify-center items-center gap-10 flex-wrap relative">
                    {
                     games.map((game, index)=>(
                         <a href="/" className="" key={index}>
                        <div className="gamecard">
                            <div className="gamecard-details w-[90%] h-[90%]">
                                <img src={game.img} alt={game.name} className="w-full h-full rounded-lg" />
                            </div>
                            <button className="gamecard-button font-semibold">{game.name}</button>
                        </div>
                    </a>
                        ))
                    }
                </div>
            </div>
    // </div>
    )
}

export default GameSection
