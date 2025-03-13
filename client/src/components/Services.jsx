import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import thaimsg1 from "../assets/thaimssg1.webp";

import wineVodka1 from "../assets/wineVodka1.webp";
import bodyPol1 from "../assets/bodyPol1.webp";
import ubtan1 from "../assets/ubtan1.webp";
import {
  FaSpa,
  FaLeaf,
  FaHeart,
  FaHotTub,
  FaWineBottle,
  FaHandsHelping,
  FaSun,
  FaSeedling,
  FaDragon,
  FaBroom,
  FaCannabis,
  FaMugHot,
} from "react-icons/fa";

const Services = () => {
  const [selectedService, setSelectedService] = useState("");
  const services = [
    {
      title: "Aromatherapy Massage",
      images: [
        "https://sutherapycentre.com.au/wp-content/uploads/2021/11/Aroma-massage-scaled.jpg",
      ],
      price: "₹2,500",
      description: "Experience the healing power of essential oils...",
      icon: <FaLeaf className="text-2xl text-emerald-600" />,
    },
    {
      title: "Deep Tissue Massage",
      images: [
        "https://images.squarespace-cdn.com/content/v1/609b733baea691347db710d4/86be2cfc-aa38-473e-8aa8-0cb4b0d73536/CPY_Therapy_CSMassage.jpg?format=750w",
      ],
      price: "₹3,000",
      description:
        "Relieve chronic muscle tension with firm pressure and slow strokes that reach deeper layers of muscle and fascia.",
      icon: <FaHeart className="text-2xl text-emerald-600" />,
    },
    {
      title: "Luxury Facial Treatment",
      images: [
        "https://blog.californiaskincaresupply.com/wp-content/uploads/2022/04/man-beard-get-facial-1024x684.jpg",
      ],
      price: "₹2,800",
      description:
        "Revitalize your skin with our premium facial that cleanses, exfoliates, and hydrates for a youthful glow.",
      icon: <FaHotTub className="text-2xl text-emerald-600" />,
    },
    {
      title: "Hot Stone Therapy",
      images: [
        "https://img.grouponcdn.com/deal/g8JjckFez5dfRPwLXcju/jq-6143x3686/v1/c700x420.jpg",
      ],
      price: "₹3,500",
      description:
        "Smooth basalt stones are heated and placed on key points of the body to melt away tension and promote deep relaxation.",
      icon: <FaSun className="text-2xl text-emerald-600" />,
    },
    {
      title: "Ayurvedic Treatment",
      images: ["https://wallpaperaccess.com/full/713698.jpg"],
      price: "₹4,000",
      description:
        "Traditional Indian healing techniques to balance mind, body, and spirit using herbal oils and specific massage strokes.",
      icon: <FaBroom className="text-2xl text-emerald-600" />,
    },
    {
      title: "Couple's Retreat Package",
      images: [
        "https://media.istockphoto.com/id/1262423480/photo/romantic-date-in-spa-salon-with-relaxing-massage.jpg?s=612x612&w=0&k=20&c=eMigkxiHdKvYlKgWqfH7aPJ09Sph8eDUGfWJPwIvI8k=",
      ],
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
      icon: <FaHandsHelping className="text-2xl text-emerald-600" />,
    },
    {
      title: "Chocolate Massage",
      images: [
        "https://th.bing.com/th/id/R.abea7d4761b28d14682dec341bd66167?rik=aga7An8M8fH95g&riu=http%3a%2f%2fwww.meleluz.com.br%2fwp-content%2fuploads%2f2014%2f10%2fchocolate_massage.jpg&ehk=rnYWzQqkjcO4loR2xuvJXIu7AgnT9sofoIgy%2b7DpoG8%3d&risl=&pid=ImgRaw&r=0",
      ], // Reference local image correctly
      price: "₹3,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
      icon: <FaMugHot className="text-2xl text-emerald-600" />,
    },
    {
      title: "Wine & Vodka Massage",
      images: [wineVodka1], // Reference local image correctly
      price: "₹3,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
      icon: <FaWineBottle className="text-2xl text-emerald-600" />,
    },
    {
      title: "Body Polishing",
      images: [bodyPol1], // Reference local image correctly
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
      icon: <FaCannabis className="text-2xl text-emerald-600" />,
    },
    {
      title: "Ubtan Massage",
      images: [ubtan1], // Reference local image correctly
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
      icon: <FaSeedling className="text-2xl text-emerald-600" />,
    },
    {
      title: "Thai Massage",
      images: [thaimsg1], // Reference local image correctly
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
      icon: <FaDragon className="text-2xl text-emerald-600" />,
    },
    {
      title: "Potli Massage",
      images: [
        "https://img.freepik.com/premium-photo/ayurvedic-massage-with-kizhi-herbal-bags-made-from-various-dried-herbs-wrapped-cotton_1048944-9494730.jpg",
      ],
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
      icon: <FaSpa className="text-2xl text-emerald-600" />,
    },
  ];
  const handleServiceScroll = (title) => {
    const id = title.toLowerCase().replace(/ /g, "-");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setSelectedService(title);
    }
  };
  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Indulge in our premium spa treatments designed to rejuvenate your body
          and mind
        </p>

        {/* Icon Grid Menu */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceScroll(service.title)}
              className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-2
                ${
                  selectedService === service.title
                    ? "bg-amber-50 border-2 border-amber-300 shadow-lg"
                    : "bg-white border-2 border-gray-100 hover:border-amber-200 hover:shadow-md"
                }`}
            >
              <span className="shrink-0">{service.icon}</span>
              <span className="font-semibold text-gray-700 text-sm md:text-base">
                {service.title}
              </span>
            </button>
          ))}

          <button
            onClick={() => {
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" });
              setSelectedService("");
            }}
            className="p-4 rounded-xl border-2 border-gray-100 hover:border-amber-200 bg-white hover:shadow-md transition-all duration-300 col-span-full"
          >
            View All Services
          </button>
        </div>

        {/* Services Cards with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              id={service.title.toLowerCase().replace(/ /g, "-")}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
