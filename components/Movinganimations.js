"use client";

import { useEffect, useRef } from "react";
import FadeInSection from "./FadeinSection";

export default function NeonSquares() {
    const containerRef = useRef(null);
    const squaresRef = useRef([]);
    const images = [
        "/portfolio.png",
        "/group.jpg",
        "/landingpage.jpeg",
        "/gamingpage.png",
        "/store.webp",
    ];

    const getImageSize = (src) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () =>
                resolve({ width: img.naturalWidth, height: img.naturalHeight });
        });
    };

    useEffect(() => {
        const container = containerRef.current;
        const colors = [
            "linear-gradient(45deg, #00ffff, #0ff)",
            "linear-gradient(45deg, #00008b, #0000cd)",
            "linear-gradient(45deg, #ffb6c1, #ffc0cb)",
        ];

        const spacing = 160;

        const createSquare = async (i) => {
            const square = document.createElement("div");
            const image = document.createElement("img");
            image.src = images[i];
            image.style.width = "80%";
            image.style.height = "80%";
            image.style.borderRadius = "12px";

            const { width, height } = await getImageSize(image.src);
            const aspectRatio = width / height;

            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const baseWidth = vw < 640 ? 40 : vw < 1024 ? 70 : 90;
            const boxWidth = baseWidth + Math.random() * 40;
            const boxHeight = boxWidth / aspectRatio;

            square.classList.add("neon-square");
            square.style.width = `${boxWidth}px`;
            square.style.height = `${boxHeight}px`;
            square.style.position = "absolute";
            square.style.top = "0";
            square.style.left = "0";
            square.style.transition = "transform 0.5s ease-in-out";

            const gradient = colors[Math.floor(Math.random() * colors.length)];
            let shadowColor = "#0ff";
            if (gradient.includes("#00008b")) shadowColor = "#4fc3f7";
            else if (gradient.includes("#ffb6c1")) shadowColor = "#f48fb1";

            square.style.borderRadius = "12px";
            square.style.boxShadow = `
                0 0 10px ${shadowColor},
                0 0 20px ${shadowColor},
                0 0 40px ${shadowColor},
                inset 0 0 10px ${shadowColor}
            `;
            square.style.border = `1px solid ${shadowColor}`;

            square.appendChild(image);
            container.appendChild(square);
            squaresRef.current.push({
                element: square,
                width: boxWidth,
                height: boxHeight,
            });
        };

        const setupSquares = async () => {
            for (let i = 0; i < images.length; i++) {
                await createSquare(i);
            }

            moveSquares(); // first move
        };

        const moveSquares = () => {
            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const maxW = container.offsetWidth;
            const maxH = container.offsetHeight;

            squaresRef.current.forEach((squareObj) => {
                const { element, width, height } = squareObj;

                const padding = 20; // space from the edges
                const maxX = maxW - width - padding;
                const maxY = maxH - height - padding;

                const offsetX = Math.random() * maxX;
                const offsetY = Math.random() * maxY;

                // Use `transform` to animate (centered)
                element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        };

        setupSquares();
        const moveInterval = setInterval(moveSquares, 4000);

        return () => {
            clearInterval(moveInterval);
            squaresRef.current.forEach((s) => s.element.remove());
            squaresRef.current = [];
        };
    }, []);

    return (
        <FadeInSection direction="down" classes="w-[100vw]">
            <div className="bg-gradient-to-b from-[rgb(0,2,17)] via-[#010312] to-[#020316] flex flex-col justify-center items-center gap-1 pt-10 overflow-hidden relative w-full min-h-screen">
                <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] font-bold text-center">
                    Best Animations
                </h1>
                <p className="w-full max-w-[750px] text-center text-white px-4">
                    Experience the magic with us.
                </p>
                <div className="relative w-full h-[75vh] overflow-hidden flex justify-center items-center">
                    <div
                        ref={containerRef}
                        className="relative w-[50vw] h-[75vh] cursor-pointer"
                    ></div>
                </div>
            </div>
        </FadeInSection>
    );
}
