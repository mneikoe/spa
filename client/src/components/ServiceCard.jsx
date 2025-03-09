/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const ServiceCard = ({ title, description, images, price }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);

  // Preload images on component mount
  useEffect(() => {
    const preloadImages = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    setPreloadedImages(preloadImages);
  }, [images]);

  // Auto-rotate images with optimized timer
  useEffect(() => {
    let timeout;
    const scheduleChange = () => {
      timeout = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        scheduleChange();
      }, 3000);
    };
    scheduleChange();
    return () => clearTimeout(timeout);
  }, [images.length]);

  // Manual image change with immediate feedback
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  // Keep existing WhatsApp booking functionality
  const handleWhatsAppBooking = () => {
    // ... (existing WhatsApp booking code)
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
      <div className="relative h-56 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - view ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 transform-gpu ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            loading="lazy"
            decoding="async"
            onMouseEnter={() => handleImageChange(index)}
            style={{
              willChange: "opacity",
              backfaceVisibility: "hidden",
            }}
          />
        ))}

        {/* Image indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
        <span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm z-20">
          {price}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleWhatsAppBooking}
          className="w-full bg-gray-800 hover:bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
