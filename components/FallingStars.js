"use client";
import { useEffect, useRef } from "react";

export default function FallingStarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let stars = [];

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars = [];

      for (let i = 0; i < 80; i++) {
        stars.push(createStar());
      }
    }

    function getRandomColor() {
      const random = Math.random();
      if (random < 0.6) return "#00ffff"; // 60% Aqua
      if (random < 0.8) return "#0055ff"; // 20% Dark Blue
      return "#ff66b2"; // 20% Light Pink
    }

    function createStar() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: Math.random() * 2 - 1, // Horizontal drift
        speedY: Math.random() * 1 + 0.5, // Slower falling speed
        radius: Math.random() * 2 + 1, // Star size
        glow: Math.random() * 10 + 5, // Glow intensity
        color: getRandomColor(),
      };
    }

    function drawStars() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.shadowBlur = star.glow;
        ctx.shadowColor = star.color;
        ctx.fillStyle = star.color;
        ctx.fill();
      });
    }

    function animate() {
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        // Reset position when star moves out of bounds
        if (star.y > height || star.x < 0 || star.x > width) {
          Object.assign(star, createStar(), { y: 0 });
        }
      });

      drawStars();
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        overflow: "hidden",
      }}
    ></canvas>
  );
}