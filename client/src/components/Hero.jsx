/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import hero_1 from "../assets/hero_1.jpg";

import hero_3 from "../assets/hero_3.jpg";

const images = [
  hero_1,

  hero_3,

  "https://img.freepik.com/premium-photo/serene-spa-experience-with-aromatherapy_121111-937.jpghttps://img.freepik.com/premium-photo/ai-generative-beautiful-woman-undergoing-therapy-bathing-treatment-spa-studio_536047-5075.jpg",
  "https://static.vecteezy.com/system/resources/previews/027/180/498/non_2x/beautiful-girl-in-spa-salon-free-photo.jpg",
];

const Hero = () => {
  const [bgImage, setBgImage] = useState(images[0]);
  const [loadedImages, setLoadedImages] = useState([]);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => [...prev, src]);
      };
    });
  }, []);

  // Image rotation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setBgImage(images[index]);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center text-white relative transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl text-cyan-200 sm:text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Relax, Rejuvenate,{" "}
              <span className="text-amber-200 block mt-2 md:inline-block md:mt-0">
                Refresh
              </span>
            </h2>

            <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-xl mx-auto">
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
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0">
        <div className="text-center">
          <a href="#about" className="text-white animate-bounce inline-block">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </section>
  );
};

export default Hero;
