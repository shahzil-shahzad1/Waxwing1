"use client";
import React, { useEffect, useRef, useState } from "react";

const directionMap = {
  up: "translate-y-16",
  down: "-translate-y-16",
  left: "translate-x-16",
  right: "-translate-x-16",
};

const FadeInSection = ({ children, direction, delay = 0 , classes}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(ref.current); // Trigger only once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const translateClass = directionMap[direction];

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? `opacity-100 translate-x-0 translate-y-0 ${classes}` : `opacity-0 ${translateClass}`}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
