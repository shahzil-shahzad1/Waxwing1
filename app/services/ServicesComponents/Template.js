"use client";
import FadeInSection from "@/components/FadeinSection";
import { useState } from "react";


const Template = ({content, title}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className="w-full py-20 flex gap-9 flex-col items-center px-4"
        >
            {/* <div className=""> */}
            <FadeInSection direction="right" classes="flex flex-col items-center gap-5 px-4 text-center">
                <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center">
                    {title}
                </h1>
            </FadeInSection>
            {/* </div> */}

            {/* <div className="">       */}
            <FadeInSection direction="left" classes="flex flex-wrap justify-center items-stretch gap-5 max-md:gap-16 w-full max-w-7xl px-4">

                {content.map((service, index) => (
                    <div key={index} className="flex flex-col items-center w-[70%] sm:w-[35%] md:w-[30%] lg:w-[17%] max-w-xs">
                        <div
                            className={`servicecard w-full h-full cursor-pointer transition-all duration-300 ${hoveredIndex === index ? "cardclienthover" : ""
                                }`}
                        >
                            {/* Icon image */}
                            <img
                                src={service.image}
                                alt={`${service.title} icon`}
                                className="w-12 h-12 mx-auto mb-4 invert"
                            />
                            <h3 className="text-lg font-bold text-center mb-3 text-white">{service.title}</h3>
                            <p className="text-sm text-gray-300 text-center mb-4">{service.description}</p>
                        </div>

                        <a href={service.link} alt={service.title}
                            className="mt-4 px-5 py-2 rounded-full bg-transparent text-white text-sm font-semibold border border-cyan-500/50 transition-all duration-200 hover:bg-[#185069]"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            Examples
                        </a>
                    </div>
                ))}
            {/* </div> */}
                        </FadeInSection>
        </div>
    );
};

export default Template;