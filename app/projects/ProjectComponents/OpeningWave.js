"use client";
import React from "react";
import { motion } from "framer-motion";

const wavePath1 =
  "M 0 100 Q 100 0, 200 100 T 400 100 T 600 100 T 800 100 T 1000 100";
const wavePath2 =
  "M 0 100 Q 100 200, 200 100 T 400 100 T 600 100 T 800 100 T 1000 100";

const cells = [
  { text: "Portfolios", link: "#portfolios" },
  { text: "Games", link: "#games" },
  { text: "Portals", link: "#portals" },
  { text: "Business Web", link: "#busweb" },
  { text: "Stores", link: "#stores" },
];

const DNACell = ({ index, text, link }) => (
  <a
    href={link}
    className="absolute text-sm font-semibold text-white flex items-center justify-center transition px-3 py-1 rounded-full shadow-lg hover:scale-105 wavelinktext"
    style={{
      left: `calc(${index * 20}% + 2%)`,
      top: "185px",
      width: "16%",
      height: "135px",
    }}
  >
    {text}
  </a>
);

const OpeninggWave = () => {
  return (
    <div className="openingwavediv relative w-full h-[500px] overflow-hidden">
      <svg viewBox="0 0 1000 200" className="w-full h-full">
        
      <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00B4DB" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#00B4DB" />
          </linearGradient>
        </defs>

        <motion.path
          d={wavePath1}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.path
          d={wavePath2}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
      </svg>

      {/* Responsive Cells */}
      {cells.map((cell, index) => (
        <DNACell key={index} index={index} {...cell} />
      ))}
    </div>
  );
};

export default OpeninggWave;