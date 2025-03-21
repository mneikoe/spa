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
  FaAirFreshener,
  FaBed,
  FaCentercode,
  FaCentos,
  FaCloudscale,
} from "react-icons/fa";

const Services = () => {
  const [selectedService, setSelectedService] = useState("");
  const services = [
    {
      title: "Aromatherapy Massage",
      images: [
        "https://sutherapycentre.com.au/wp-content/uploads/2021/11/Aroma-massage-scaled.jpg",
      ],
      price: "₹2,000",
      duration: "60 min",
      icon: <FaLeaf className="text-2xl text-emerald-600" />,
    },
    {
      title: "Deep Tissue Massage",
      images: [
        "https://images.squarespace-cdn.com/content/v1/609b733baea691347db710d4/86be2cfc-aa38-473e-8aa8-0cb4b0d73536/CPY_Therapy_CSMassage.jpg?format=750w",
      ],
      price: "₹2,200",
      duration: "60 min",
      icon: <FaHeart className="text-2xl text-emerald-600" />,
    },
    {
      title: "Sports Massage",
      images: [
        "https://www.a-gentle-touch.co.uk/wp-content/uploads/2020/09/Sports-Massage-scaled.jpeg",
      ],
      price: "₹2,000",
      duration: "30 min",
      icon: <FaHotTub className="text-2xl text-emerald-600" />,
    },
    {
      title: "Thai Foot Massage",
      images: [
        "https://bestchoicemassageco.com/wp-content/uploads/2018/11/545341285.jpg",
      ],
      price: "₹3,000",
      duration: "30 min",
      icon: <FaSun className="text-2xl text-emerald-600" />,
    },
    {
      title: "Head Massage",
      images: [
        "https://blog.californiaskincaresupply.com/wp-content/uploads/2022/04/man-beard-get-facial-1024x684.jpg",
      ],
      price: "₹1,500",
      duration: "20 min",
      icon: <FaBroom className="text-2xl text-emerald-600" />,
    },
    {
      title: "Swedish Massage",
      images: [
        "https://sunwellness.ca/wp-content/uploads/2019/09/RMT-Massage-Toronto.jpg",
      ],
      price: "₹3,500",
      duration: "60 min",
      icon: <FaHandsHelping className="text-2xl text-emerald-600" />,
    },
    {
      title: "Chocolate Massage",
      images: [
        "https://th.bing.com/th/id/R.abea7d4761b28d14682dec341bd66167?rik=aga7An8M8fH95g&riu=http%3a%2f%2fwww.meleluz.com.br%2fwp-content%2fuploads%2f2014%2f10%2fchocolate_massage.jpg&ehk=rnYWzQqkjcO4loR2xuvJXIu7AgnT9sofoIgy%2b7DpoG8%3d&risl=&pid=ImgRaw&r=0",
      ], // Reference local image correctly
      price: "₹2,500",
      duration: "60 min",
      icon: <FaMugHot className="text-2xl text-emerald-600" />,
    },
    {
      title: "Wine & Vodka Massage",
      images: [wineVodka1], // Reference local image correctly
      price: "₹3,500",
      duration: "60 min",
      icon: <FaWineBottle className="text-2xl text-emerald-600" />,
    },
    {
      title: "Body Polishing",
      images: [bodyPol1], // Reference local image correctly
      price: "₹3,000",
      duration: "30 min",
      icon: <FaCannabis className="text-2xl text-emerald-600" />,
    },
    {
      title: "Ubtan Massage",
      images: [ubtan1], // Reference local image correctly
      price: "₹3,000",
      duration: "60 min",
      icon: <FaSeedling className="text-2xl text-emerald-600" />,
    },
    {
      title: "Thai Massage",
      images: [thaimsg1], // Reference local image correctly
      price: "₹3,500",
      duration: "60 min",
      icon: <FaDragon className="text-2xl text-emerald-600" />,
    },
    {
      title: "Potli Massage",
      images: [
        "https://th.bing.com/th/id/OIP.U6ocsPOiFHd7gci7t_5gLgAAAA?rs=1&pid=ImgDetMain",
      ],
      price: "₹3,000",
      duration: "60 min",
      icon: <FaCentos className="text-2xl text-emerald-600" />,
    },
    {
      title: "Foot Massage",
      images: [
        "https://northwichfootclinic.co.uk/wp-content/uploads/2021/08/thai-foot-massage-northwich-cheshire.jpg",
      ],
      price: "₹2,000",
      duration: "30 min",
      icon: <FaCentercode className="text-2xl text-emerald-600" />,
    },
    {
      title: "Hot Stone Massage",
      images: [
        "https://img.grouponcdn.com/deal/g8JjckFez5dfRPwLXcju/jq-6143x3686/v1/c700x420.jpg",
      ],
      price: "₹2,000",
      duration: "30 min",
      icon: <FaAirFreshener className="text-2xl text-emerald-600" />,
    },
    {
      title: "Ayurvedic Treatment Massage",
      images: [
        "https://img.freepik.com/premium-photo/ayurvedic-massage-with-kizhi-herbal-bags-made-from-various-dried-herbs-wrapped-cotton_1048944-9494730.jpg",
      ],
      price: "₹2,000",
      duration: "30 min",
      icon: <FaCloudscale className="text-2xl text-emerald-600" />,
    },
    {
      title: "Couples Retreat Massage",
      images: [
        "https://media.istockphoto.com/id/1262423480/photo/romantic-date-in-spa-salon-with-relaxing-massage.jpg?s=612x612&w=0&k=20&c=eMigkxiHdKvYlKgWqfH7aPJ09Sph8eDUGfWJPwIvI8k=",
      ],
      price: "₹5,500",
      duration: "60 min",
      icon: <FaBed className="text-2xl text-emerald-600" />,
    },
  ];
  const handleServiceScroll = (title) => {
    const id = title.toLowerCase().replace(/ /g, "-");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
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
