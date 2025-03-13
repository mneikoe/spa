import React, { useState, useEffect, lazy, Suspense } from "react";
import SEO from "./components/SEO";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const scrollY = window.scrollY;
        if (scrollY < 500) {
          setCurrentPage("home");
        } else if (scrollY >= 500 && scrollY < 1500) {
          setCurrentPage("about");
        } else if (scrollY >= 1500 && scrollY < 2500) {
          setCurrentPage("services");
        } else {
          setCurrentPage("contact");
        }

        clearTimeout(timeoutId);
        timeoutId = null;
      }, 200); // Debounce scroll updates
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const seoData = {
    home: {
      title: "Welcome to Sukoon Spa",
      description:
        "Experience ultimate relaxation and rejuvenation at Sukoon Spa.",
      url: "https://sukoonspa.in",
      image: "https://sukoonspa.in/hero-image.jpg",
    },
    about: {
      title: "About Sukoon Spa",
      description:
        "Discover our luxurious treatments designed to relax and heal.",
      url: "https://sukoonspa.in/about",
      image: "https://sukoonspa.in/about-image.jpg",
    },
    services: {
      title: "Our Services - Sukoon Spa",
      description:
        "Explore a variety of spa treatments for ultimate relaxation.",
      url: "https://sukoonspa.in/services",
      image: "https://sukoonspa.in/services-image.jpg",
    },
    contact: {
      title: "Contact Sukoon Spa",
      description: "Reach out for bookings and inquiries.",
      url: "https://sukoonspa.in/contact",
      image: "https://sukoonspa.in/contact-image.jpg",
    },
  };

  return (
    <div>
      <SEO {...seoData[currentPage]} />
      <Header />
      <Hero />

      <Suspense fallback={<div>Loading content...</div>}>
        <About />
        <Services />
      </Suspense>

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
