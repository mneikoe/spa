/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceCard = ({ title, description, images, price }) => {
  const [inView, setInView] = useState(false);

  // Intersection Observer to detect if the component is in view
  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    const cardElement = document.getElementById(title);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => observer.disconnect();
  }, [handleIntersection, title]);

  const handleWhatsAppBooking = () => {
    const rawNumber = "9826451565";
    const countryCode = "91";
    const phoneNumber = `${countryCode}${rawNumber.replace(/\D/g, "")}`;

    const message = `Hi SukoonSpa! I want to book the ${title} service (${price}).\nPlease let me know available slots.`;
    const encodedMessage = encodeURIComponent(message);

    // Check if user is on mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Open the link programmatically
    const link = document.createElement("a");
    link.href = whatsappURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      id={title} // Ensure unique ID for intersection observer
      className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 group"
    >
      <div className="relative h-56 overflow-hidden">
        {inView && (
          <LazyLoadImage
            src={
              typeof images[0] === "string"
                ? images[0]
                : URL.createObjectURL(images[0])
            } // Check if it's a local image or URL
            alt={`${title} - view 1`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            style={{
              willChange: "opacity",
              backfaceVisibility: "hidden",
            }}
          />
        )}

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
