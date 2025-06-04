// components/EmailSection.js
import React from "react";
import Image from "next/image";
import FadeInSection from "@/components/FadeinSection";

export default function EmailSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] py-20 px-6" id="Email">
      {/* <div className=""> */}
      <FadeInSection direction="down" classes="max-w-4xl mx-auto text-center">

        <div className="w-10 h-10 mx-auto mb-4 relative">
          <Image
            src="/Contactpage/mail.png"
            alt="Email Icon"
            layout="fill"
            className="invert object-contain"
          />
        </div>
        <h2 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center  drop-shadow mb-4">
          Drop Us a Line
        </h2>
        <p className="text-center text-sm sm:text-base w-[60%] mx-auto text-white">
          Whether it’s a project inquiry or a question, we’d love to hear from you.
        </p>
        <a
          href="mailto:contact@yourdomain.com"
        //   text-[#f78fd6]
          className="inline-block mt-6 text-[#87f5fb] text-xl sm:text-2xl font-semibold hover:underline transition"
        >
          contact@yourdomain.com
        </a>
      </FadeInSection>
      {/* </div> */}
    </section>
  );
}
