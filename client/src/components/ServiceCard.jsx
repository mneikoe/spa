import React, { useState, useEffect } from "react";

const ServiceCard = ({ title, description, images, price }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual image change on hover
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

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
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
      <div className="relative h-56 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - view ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              index === currentImageIndex
                ? "opacity-100 translate-x-0 scale-100"
                : index < currentImageIndex
                ? "opacity-0 -translate-x-full scale-110"
                : "opacity-0 translate-x-full scale-110"
            }`}
            loading="lazy"
            onMouseEnter={() => handleImageChange(index)}
          />
        ))}

        {/* Image indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
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
