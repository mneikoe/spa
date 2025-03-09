import React, { useState, useEffect } from "react";
import SEO from "./components/SEO";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // You can detect the current section/page and update the title and description dynamically
    // For now, we are simulating dynamic sections
    const handleScroll = () => {
      if (window.scrollY < 500) {
        setCurrentPage("home");
      } else if (window.scrollY >= 500 && window.scrollY < 1500) {
        setCurrentPage("about");
      } else if (window.scrollY >= 1500 && window.scrollY < 2500) {
        setCurrentPage("services");
      } else {
        setCurrentPage("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define meta data for each section dynamically
  const seoData = {
    home: {
      title: "Welcome to Sukoon Spa",
      description:
        "Experience ultimate relaxation and rejuvenation at Sukoon Spa. Our signature therapies will calm your body and soul.",
      url: "https://sukoonspa.in",
      image: "https://sukoonspa.in/hero-image.jpg",
    },
    about: {
      title: "About Sukoon Spa",
      description:
        "At Sukoon Spa, we offer a range of luxurious and therapeutic treatments designed to relax and rejuvenate you.",
      url: "https://sukoonspa.in/about",
      image: "https://sukoonspa.in/about-image.jpg",
    },
    services: {
      title: "Our Services - Sukoon Spa",
      description:
        "Discover the wide range of services we offer, from aromatherapy to deep tissue massages. Choose what suits your needs best.",
      url: "https://sukoonspa.in/services",
      image: "https://sukoonspa.in/services-image.jpg",
    },
    contact: {
      title: "Contact Sukoon Spa",
      description:
        "Get in touch with us for bookings and inquiries. We are always here to assist you with your spa needs.",
      url: "https://sukoonspa.in/contact",
      image: "https://sukoonspa.in/contact-image.jpg",
    },
  };

  const currentSeoData = seoData[currentPage];

  return (
    <div>
      <SEO
        title={currentSeoData.title}
        description={currentSeoData.description}
        image={currentSeoData.image}
        url={currentSeoData.url}
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
