/* eslint-disable no-unused-vars */
/*import React, { useState, useEffect, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Service.css";
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
    link.ariaLabel = `Book ${title} service via WhatsApp`;
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
            className="w-full h-full object-cover lazy-image"
            loading="lazy"
            decoding="async"
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
          aria-label="Book your appointment via WhatsApp"
          className="w-full bg-gray-800 hover:bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;*/
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Service.css";
const ServiceCard = ({ id, title, duration, images, price }) => {
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
      threshold: 0.5,
    });

    const cardElement = document.getElementById(id);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => observer.disconnect();
  }, [handleIntersection, id]); // Changed dependency to id instead of title
  const cab = 299;
  const handleWhatsAppBooking = () => {
    const rawNumber = "6269036845";
    const countryCode = "91";
    const phoneNumber = `${countryCode}${rawNumber.replace(/\D/g, "")}`;

    const totalCost = Number(price) + cab; // Ensure price is a number

    const message = `Hello Sukoon Spa,\n\nI would like to book the *${title}* service.\nService cost: ${price} (additional cab charges of ₹${cab} applicable).\n\nPlease share the available slots at your earliest convenience.\n\nThank you!`;

    const encodedMessage = encodeURIComponent(message);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

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
      id={id} // Use the passed id prop instead of title
      className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 group"
    >
      <div className="relative h-56 overflow-hidden">
        {inView && (
          <LazyLoadImage
            src={images[0]}
            alt={`${title} - view 1`}
            className="w-full h-full object-cover optimize-visibility"
            loading="lazy"
            decoding="async"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
        <span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm z-20">
          {price}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{duration}</p>
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
