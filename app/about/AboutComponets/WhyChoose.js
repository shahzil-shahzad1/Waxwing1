// components/WhyChooseUs.js
import FadeInSection from "@/components/FadeinSection";
import React from "react";

const features = [
    {
        title: "Tailored Excellence",
        description:
            "Our expert team of business analysts meticulously evaluates every client’s unique needs and aspirations. By diving deep into your goals, we design customized solutions that align seamlessly with your ambitions, ensuring impactful and meaningful results."
    },
    {
        title: "Uncompromising Quality",
        description:
            "Every project at InnovateTech is guided by our committed quality assurance team, who diligently oversee each phase of development. From inception to completion, we uphold the highest standards to deliver flawless outcomes that you can trust."
    },
    {
        title: "Collaborative Journey",
        description:
            "We believe in building partnerships rooted in trust and clarity. Our experts walk you through every step of the development process, offering transparent guidance and expert insights on technology and design choices to bring your vision to life with confidence."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] text-white py-16 px-6">
            {/* <div className=""> */}
            <FadeInSection direction="right" classes="max-w-[80%] max-xl:max-w-[57rem] mx-auto flex flex-col justify-start">

                <h2 className="text-3xl max-sm:text-[1.7rem] md:text-4xl font-semibold mb-12 ml-5 leading-[3rem] text-gray-50">
                    We are committed to develop innovative best possible solutions
                </h2>

                <div className="grid gap-4 md:grid-cols-3">
                    {features.map((item, index) => (
                        <div className="section bg-transparent p-6 flex justify-between w-full gap-3" key={index} >
                                    <div className="w-6 h-6 mt-1 bg-[aqua]"></div>
                                {/* Heading with left vertical bar */}
                                <div className="flex items-start flex-col">
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mt-3">{item.description}</p>
                                </div>
                        </div>
                    ))}
                </div>
            {/* </div> */}
            </FadeInSection>

        </section>
    );
}
