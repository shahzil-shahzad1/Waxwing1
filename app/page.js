"use client";
// import GameSection from "@/components/GameSection";
// import HoverBackground from "../components/HoverBackground";
// import AnimationSection from "@/components/AnimationSection";
// import ProjectSection from "@/components/ProjectSection";

// Importing swiper for adding slider animations
import 'swiper/css';
import 'swiper/css/autoplay';

import IntroSection from '@/components/IntroSection';
import FallingStarsBackground from "@/components/FallingStars";
import "@/components/home.css";
import Architecture from "@/components/Architecture";
import NeonSquares from "@/components/Movinganimations";
import ProjectsSectionEnd from "@/components/ProjectsSectionEnd";
import About from "@/components/About";
import Technologies from '@/components/Technologies';
import Faqs from '@/components/Faqs';
export default function Home() {

  return (
      <div className="relative flex flex-col justify-center items-center w-full h-fit overflow-hidden">
        <IntroSection />

      <Architecture />

      <NeonSquares />

      <ProjectsSectionEnd />

      <About />

      <Technologies />

      <Faqs />

      </div>
  );
}