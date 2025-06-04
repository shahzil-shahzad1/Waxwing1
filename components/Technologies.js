'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css'; // Swiper base styles
import 'swiper/css/autoplay'; // Autoplay module styles (required for Swiper 10+)

const companies = [
  { name: 'React.js', logo: '/react.png', link: "https://www.reactjs.org" },
  { name: 'Next.js', logo: '/nextjs.png', link: "https://www.nextjs.org" },
  { name: 'MongoDB', logo: '/mongodb.png', link: "https://www.mongodb.com" },
  { name: 'Node.js', logo: '/nodejs.png', link: "https://www.nodejs.org" },
  { name: 'Three.js', logo: '/three.js.png', link: "https://www.threejs.org" },
];

export default function Technologies() {
  return (
    <div className="w-full h-fit bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] py-16 px-6">
      <h2 className="text-center text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] text-gray-50 font-bold">
        Technologies We Prefer
      </h2>

      <Swiper
        modules={[Autoplay]} // activate autoplay
        slidesPerView={3}     // 3 items visible
        spaceBetween={30}     // spacing between them
        loop={true}           // continuous loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // keeps autoplay running even after user interaction
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-3xl mx-auto my-10"
      >
        {companies.map((company, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className='techcard flex justify-center items-center flex-col "backdrop-blur-md bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] border border-white/10 transition-all duration-300 w-fit h-fit px-10 py-8 rounded-md cursor-pointer hover:backdrop-blur-3xl hover:border-white/20 max-sm:px-[1.4rem] max-sm:py-4 max-sm:text-sm text-white'>
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 w-auto transition duration-300"
              />
              <h4 className='text-white'>{company.name}</h4>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
