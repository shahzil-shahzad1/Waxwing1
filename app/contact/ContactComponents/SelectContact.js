// components/ContactPage.js
import React from "react";
import Image from "next/image";
import FadeInSection from "@/components/FadeinSection";

const icons = [
  { src: "/Contactpage/phone.png", label: "Phone" },
  { src: "/Contactpage/mail.png", label: "Email" },
  { src: "/Contactpage/pencilform.png", label: "Form" },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] text-center">
      {/* <div className=""> */}
      <FadeInSection direction="down" classes="mb-12">
        {/* text-[clamp(40px,6vw,60px)] */}
        <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center  drop-shadow-lg tracking-wide">
          Contact Us
        </h1>
        <p className="text-xl sm:text-2xl text-[#d1fbff] mt-4 font-semibold drop-shadow">
          Get in Touch
        </p>
      </FadeInSection>
      {/* </div> */}

      {/* <div className=""> */}
      <FadeInSection direction="up" classes="mt-10 grid grid-cols-3 sm:grid-cols-3 gap-5 justify-center">

        {icons.map((item, index) => (
          <a
            href={`#${item.label}`}
            key={index}
            className="bg-[#111827] hover:bg-[#1f2937] text-[#87f5fb] hover:text-white p-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg flex flex-col items-center"
          >
            <Image
              src={item.src}
              alt={item.label}
              width={32}
              height={32}
              className="object-contain invert"
            />
            <span className="text-xs mt-2">{item.label}</span>
          </a>
        ))}
      {/* </div> */}
        </FadeInSection>

    </section>
  );
}
