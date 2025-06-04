// components/StatsSection.js
import React from "react";

const stats = [
  {
    value: "8+",
    label: "Years of Experience"
  },
  {
    value: "15+",
    label: "Professional Experts"
  },
  {
    value: "40+",
    label: "Happy Clients"
  },
  {
    value: "200+",
    label: "Products Delivered"
  }
];

export default function StatsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-white text-5xl font-semibold">{stat.value}</h3>
              <p className="text-gray-300 text-base mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}