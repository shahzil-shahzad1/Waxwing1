import Image from "next/image";
import Link from "next/link";
import FadeInSection from "./FadeinSection";

const ProjectsSectionEnd = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] relative h-fit py-20 px-6 sm:px-10 md:px-16 lg:px-20 w-full gap-10">
      
      {/* Left Image */}
      {/* <div className="w-[90%] lg:w-1/2 flex justify-center"> */}
      <FadeInSection direction="right" classes="w-[90%] lg:w-1/2 flex justify-center">
        <Image
          src="/illus.png"
          width={600}
          height={600}
          alt="Projects Illustration"
          className="object-center w-[100%]"
          />
      {/* </div> */}
          </FadeInSection>

      {/* Right Content */}
      {/* <div className=""> */}
      <FadeInSection direction="left" classes="w-full lg:w-1/2 text-center lg:text-left">

        <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] font-bold leading-tight">
          Projects Open world of learning.
        </h1>
        <p className="my-6 text-white text-sm sm:text-base md:text-[1.05rem] leading-relaxed">
          Wanna check out some really cool stuff? Our Projects page is full of fun ideas and amazing things we’re super excited about! Each project has a story that’ll grab you—think awesome tech and designs that make you smile. It’s a place to get inspired and maybe dream up your own big idea. Don’t wait! Click "Learn More" and come see what we’re up to. It’s gonna be a blast, and we can’t wait to show you. Jump in and let’s have some fun together!
        </p>
        <button>
          <Link
            href="/projects"
            className="learnmorebutton text-[aqua] font-semibold text-sm sm:text-base md:text-[1.05rem] transition-all duration-300"
          >
            Learn More <span style={{ color: "aqua" }}>&#10230;</span>
          </Link>
        </button>
      </FadeInSection>
      {/* </div> */}
    </div>
  );
};

export default ProjectsSectionEnd;
