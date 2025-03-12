import { useState, useEffect, useRef } from "react";
import hero_1 from "../assets/hero_1.webp";
import hero_3 from "../assets/hero_3.webp";
import "./Hero.css";

const images = [
  hero_1,
  hero_3,
  "https://img.freepik.com/premium-photo/serene-spa-experience-with-aromatherapy_121111-937.jpg",
  "https://static.vecteezy.com/system/resources/previews/027/180/498/non_2x/beautiful-girl-in-spa-salon-free-photo.jpg",
];

const Hero = () => {
  const [bgImage, setBgImage] = useState(images[0]);
  const imageIndex = useRef(0); // Use ref to avoid re-renders

  // Preload images once
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      imageIndex.current = (imageIndex.current + 1) % images.length;
      setBgImage(images[imageIndex.current]);
    }, 5000); // Optimized interval timing

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section relative h-screen flex items-center justify-center text-white transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-cyan-200">
            Relax, Rejuvenate,{" "}
            <span className="text-amber-200 block mt-2 md:inline-block">
              Refresh
            </span>
          </h2>

          <p className="text-lg md:text-xl my-6 max-w-xl mx-auto">
            Experience the ultimate luxury spa treatments in Bhopal
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="#services"
              className="border-2 border-white hover:border-gold hover:text-gold
                        text-white font-semibold
                        px-6 py-3 sm:px-8 sm:py-4 rounded-full
                        text-sm sm:text-base md:text-lg
                        transition-all duration-300 shadow-lg"
              aria-label="View our services"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:border-gold hover:text-gold
                        text-white font-semibold
                        px-6 py-3 sm:px-8 sm:py-4 rounded-full
                        text-sm sm:text-base md:text-lg
                        transition-all duration-300 shadow-lg"
              aria-label="Book a session"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <a
          href="#about"
          className="text-white animate-bounce inline-block"
          aria-label="Scroll down"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
