"use client";
import { useEffect, useRef } from "react";

export default function HoverBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let circles = [];
    let mouse = { x: 0, y: 0 };

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      circles = [];
      for (let i = 0; i < 100; i++) {
        circles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          radius: Math.random() * 10 + 5, // Random radius between 5 and 15
          color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Random color
        });
      }
    }

    function drawCircles() {
      ctx.clearRect(0, 0, width, height);
      circles.forEach((circle) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });
    }

    function animate() {
      circles.forEach((circle) => {
        circle.x += circle.speedX * 0.5;
        circle.y += circle.speedY * 0.5;

        if (circle.x > width || circle.x < 0) circle.speedX *= -1;
        if (circle.y > height || circle.y < 0) circle.speedY *= -1;
      });

      drawCircles();
      requestAnimationFrame(animate);
    }

    function onMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      circles.forEach((circle) => {
        let dx = circle.x - mouse.x;
        let dy = circle.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          circle.x += dx * 0.05;
          circle.y += dy * 0.05;
        }
      });
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", onMouseMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
        zIndex: -1,
        overflow: "hidden"
      }}>
        

    </canvas>
  );
}