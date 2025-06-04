// components/PhoneSection.js
import React from "react";
import Image from "next/image";
import FadeInSection from "@/components/FadeinSection";

export default function PhoneSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] py-20 px-6" id="Phone">
      {/* <div className=""> */}
      <FadeInSection direction="down" classes="max-w-4xl mx-auto text-center">

        <div className="w-10 h-10 mx-auto mb-4 relative">
          <Image
            src="/Contactpage/phone.png"
            alt="Phone Icon"
            layout="fill"
            className="invert object-contain"
          />
        </div>
        <h2 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center ] drop-shadow mb-4">
          Talk to Us
        </h2>
        <p className="text-center text-sm sm:text-base w-[60%] mx-auto text-white">
          We’re here to answer your queries and guide you through every step.
        </p>
        <a
          href="tel:+1234567890"
          className="inline-block mt-6 text-[#87f5fb] text-xl sm:text-2xl font-semibold hover:underline transition"
          >
          +1 (234) 567-890
        </a>
      {/* </div> */}
          </FadeInSection>
    </section>
  );
}
