import React, { useState, useEffect, Suspense, lazy, memo } from "react";

const Home = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading Home...</div>}>
        {currentPage === "home" && <Home />}
      </Suspense>
      <Suspense fallback={<div>Loading About...</div>}>
        {currentPage === "about" && <About />}
      </Suspense>
      <Suspense fallback={<div>Loading Services...</div>}>
        {currentPage === "services" && <Services />}
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        {currentPage === "contact" && <Contact />}
      </Suspense>
    </div>
  );
};

export default memo(App);
