import React from 'react'
import Link from 'next/link';
import FallingStarsBackground from './FallingStars';
import FadeInSection from './FadeinSection';

const IntroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] relative cursor-pointer z-[1] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-2 px-6 sm:px-10 md:px-16 lg:px-20 w-full">
      <FallingStarsBackground />

        {/* <div className="left h-fit flex justify-center items-center w-full lg:w-[50%] order-2 lg:order-1 max-lg:text-center"> */}
      <FadeInSection direction="right" classes="left h-fit flex justify-center items-center w-full lg:w-[50%] order-2 lg:order-1 max-lg:text-center">
          <div className="w-full max-w-[500px] px-4 sm:px-0  max-lg:flex max-lg:flex-col max-lg:items-center">
            <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] font-bold leading-tight">High-Performance Websites</h1>
            <hr className="border bg-cyan-500 border-cyan-500 my-3 mx-1 h-[5px] w-[100px]" />
            <p className="text-sm sm:text-base text-white">Waxwing is a collaborative team having professional designers and developers which make us your first priority of building web applications.</p>
            <div className="button flex sm:flex-row justify-normal sm:gap-5 mt-6  max-sm:flex max-sm:justify-center max-sm:gap-3">
              <Link href='/projects'>
                <button className="btn">
                  <span className="btn-text-one">Get started</span>
                  <span className="btn-text-two">Lets Go</span>
                </button>
              </Link>
              <Link href='/about'>
                <button className="btn">
                  <span className="btn-text-one">Learn More</span>
                  <span className="btn-text-two">Lets Go</span>
                </button>
              </Link>
            </div>
          </div>
      </FadeInSection>
        {/* </div> */}

      <FadeInSection direction="left" classes="ight relative w-full lg:w-[50%] flex justify-center items-center order-1 lg:order-2 mt-10 lg:mt-0">

        {/* <div className="right relative w-full lg:w-[50%] flex justify-center items-center order-1 lg:order-2 mt-10 lg:mt-0"> */}
          <div
            className="absolute w-32 h-32 lg:w-44 lg:h-44 rounded-full opacity-80 blur-xl z-[-1]"
            style={{
              top: "40%",
              left: "10%",
              background: "linear-gradient(45deg, #007f7f, #00b0b0, #00f2f2)",
              boxShadow: "0 0 30px #00f2f2, 0 0 60px #00f2f2",
            }}
          ></div>

          <img src="/pc.png" alt="" className="w-[70%] sm:w-[80%] lg:w-[90%] transition-all duration-700 hover:scale-105" />

          {/* Pink Drop */}
          <div
            className="absolute w-32 h-32 lg:w-44 lg:h-44 rounded-full opacity-80 blur-xl z-[-1]"
            style={{
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "linear-gradient(45deg, #d5006f, #e91e63, #f48fb1)",
              boxShadow: "0 0 30px #f48fb1, 0 0 60px #f48fb1",
            }}
          ></div>

          {/* Dark Blue Drop */}
          <div
            className="absolute w-32 h-32 lg:w-44 lg:h-44 rounded-full opacity-80 blur-xl z-[-1]"
            style={{
              top: "40%",
              right: "10%",
              background: "linear-gradient(45deg, #01579b, #0288d1, #4fc3f7)",
              boxShadow: "0 0 30px #4fc3f7, 0 0 60px #4fc3f7",
            }}
          ></div>
        {/* </div> */}
      </FadeInSection>
    </div>
  )
}

export default IntroSection
