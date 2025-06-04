// components/MorphingBubblesBackground.js
"use client";
import { useEffect, useRef } from "react";

const MorphingBubblesBackground = () => {
  const bubbleCount = 3;
  const containerRef = useRef(null);

  useEffect(() => {
    const bubbles = containerRef.current?.querySelectorAll(".morphing-bubble");
    if (!bubbles) return;

    const randomize = () => {
      bubbles.forEach((bubble) => {
        const size = 120 + Math.random() * 80;
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.top = `${top}%`;
        bubble.style.border = "1px solid #1198d9de";
        bubble.style.boxShadow = "0 0 15px aqua, 0 0 30px #1198d9de";
        // bubble.style.backgroundColor = "#1d518b"
      });
    };

    randomize();
    const interval = setInterval(randomize, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="morphing-background" ref={containerRef}>
      {Array.from({ length: bubbleCount }).map((_, index) => (
        <div key={index} className="morphing-bubble"></div>
      ))}
    </div>
  );
};

export default MorphingBubblesBackground;
