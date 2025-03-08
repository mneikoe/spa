import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaSpa,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

// SEO Component with structured data
const SEO = () => (
  <Helmet>
    <title>Luxury Spa Bhopal - Premium Relaxation & Rejuvenation</title>
    <meta
      name="description"
      content="Experience the ultimate relaxation at Luxury Spa Bhopal. Our premium treatments include aromatherapy, deep tissue massage, and rejuvenating facials using organic products."
    />
    <meta
      name="keywords"
      content="Luxury Spa, Spa in Bhopal, Best Spa Services, Aromatherapy, Massage, Facial Treatments, Organic Spa, Premium Spa"
    />
    <meta name="author" content="Luxury Spa" />
    <meta
      property="og:title"
      content="Luxury Spa Bhopal - Premium Relaxation & Rejuvenation"
    />
    <meta
      property="og:description"
      content="Experience the ultimate relaxation at Luxury Spa Bhopal. Our premium treatments include aromatherapy, deep tissue massage, and rejuvenating facials."
    />
    <meta property="og:image" content="/spa-og-image.jpg" />
    <meta property="og:url" content="https://luxuryspa.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Luxury Spa Bhopal - Premium Relaxation & Rejuvenation"
    />
    <meta
      name="twitter:description"
      content="Experience the ultimate relaxation at Luxury Spa Bhopal with our premium treatments."
    />
    <meta name="twitter:image" content="/spa-og-image.jpg" />
    <link rel="canonical" href="https://luxuryspa.com" />
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "SpaService",
          "name": "Luxury Spa Bhopal",
          "image": "/spa-og-image.jpg",
          "description": "Premium spa services in Bhopal offering aromatherapy, massages, and facial treatments.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Relaxation Avenue",
            "addressLocality": "Bhopal",
            "addressRegion": "MP",
            "postalCode": "462001",
            "addressCountry": "IN"
          },
          "telephone": "+91 9876543210",
          "priceRange": "₹₹₹",
          "openingHours": "Mo-Su 09:00-21:00",
          "sameAs": [
            "https://www.facebook.com/luxuryspabhopal",
            "https://www.instagram.com/luxuryspabhopal",
            "https://twitter.com/luxuryspabhopal"
          ]
        }
      `}
    </script>
  </Helmet>
);

// Animated Header with transparent to solid transition
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900 shadow-lg py-2"
          : "bg-gradient-to-b from-black to-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <FaSpa className="text-gold text-2xl" />
          <h1 className="text-2xl font-bold text-white">
            Luxury<span className="text-gold">Spa</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              "Home",
              "About",
              "Services",
              "Gallery",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gold transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <ul className="container mx-auto px-4 py-2">
            {[
              "Home",
              "About",
              "Services",
              "Gallery",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <li key={item} className="py-2">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gold transition-colors duration-300 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

// Enhanced Hero Section with parallax effect
const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-fixed bg-center text-white relative"
      style={{ backgroundImage: "url('/spa-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold leading-tight mb-4">
          Relax, Rejuvenate, <span className="text-gold">Refresh</span>
        </h2>
        <p className="text-xl mb-8">
          Experience the ultimate luxury spa treatments in Bhopal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="bg-gold hover:bg-opacity-80 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border-2 border-white hover:border-gold hover:text-gold text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <a href="#about" className="text-white animate-bounce block">
          <svg
            className="w-8 h-8 mx-auto"
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
    </section>
  );
};

// Improved About section with image
const About = () => (
  <section id="about" className="py-24 px-4 bg-gray-50">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <img
            src="/about-spa.jpg"
            alt="Luxury Spa Interior"
            className="rounded-lg shadow-xl"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            About Us
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gold"></span>
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Welcome to Luxury Spa, Bhopal's premier destination for relaxation
            and rejuvenation. Founded in 2015, we've been helping our clients
            achieve balance and wellness through our carefully curated
            treatments.
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            Our spa offers luxurious treatments to relax your body and mind. We
            use organic products and the latest techniques to ensure a
            rejuvenating experience that will leave you feeling refreshed and
            renewed.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">Certified Therapists</h3>
              <p className="text-gray-600">20+ Experienced Staff</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">Premium Products</h3>
              <p className="text-gray-600">100% Organic & Natural</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Enhanced Services with beautiful cards and images
const ServiceCard = ({ title, description, image, price }) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
    <img
      src={image}
      alt={title}
      className="w-full h-56 object-cover"
      loading="lazy"
      width="400"
      height="300"
    />
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-gold font-semibold">{price}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#contact"
        className="inline-block bg-gray-800 hover:bg-gold text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
      >
        Book Now
      </a>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Aromatherapy Massage",
      image: "/service-aromatherapy.jpg",
      price: "₹2,500",
      description:
        "Experience the healing power of essential oils combined with massage techniques to promote relaxation and balance.",
    },
    {
      title: "Deep Tissue Massage",
      image: "/service-deep-tissue.jpg",
      price: "₹3,000",
      description:
        "Relieve chronic muscle tension with firm pressure and slow strokes that reach deeper layers of muscle and fascia.",
    },
    {
      title: "Luxury Facial Treatment",
      image: "/service-facial.jpg",
      price: "₹2,800",
      description:
        "Revitalize your skin with our premium facial that cleanses, exfoliates, and hydrates for a youthful glow.",
    },
    {
      title: "Hot Stone Therapy",
      image: "/service-hot-stone.jpg",
      price: "₹3,500",
      description:
        "Smooth basalt stones are heated and placed on key points of the body to melt away tension and promote deep relaxation.",
    },
    {
      title: "Ayurvedic Treatment",
      image: "/service-ayurvedic.jpg",
      price: "₹4,000",
      description:
        "Traditional Indian healing techniques to balance mind, body, and spirit using herbal oils and specific massage strokes.",
    },
    {
      title: "Couple's Retreat Package",
      image: "/service-couples.jpg",
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
    },
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Indulge in our premium spa treatments designed to rejuvenate your body
          and mind
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Improved Gallery with lightbox effect
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    { src: "/spa-gallery1.jpg", alt: "Luxury spa reception" },
    { src: "/spa-gallery2.jpg", alt: "Massage treatment room" },
    { src: "/spa-gallery3.jpg", alt: "Facial treatment in progress" },
    { src: "/spa-gallery4.jpg", alt: "Relaxation area with tea service" },
    { src: "/spa-gallery5.jpg", alt: "Aromatherapy oils and products" },
    { src: "/spa-gallery6.jpg", alt: "Hot stone massage setup" },
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Our Gallery</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Take a visual tour of our luxurious spa facilities and treatments
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl mx-auto">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] max-w-full"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Enhanced Testimonials with profile images
const Testimonials = () => {
  const testimonials = [
    {
      text: "The aromatherapy massage was absolutely divine! The therapist was attentive and professional. I left feeling completely rejuvenated and will definitely be back soon.",
      name: "Priya Sharma",
      role: "Regular Client",
      avatar: "/avatar-female1.jpg",
    },
    {
      text: "My wife and I tried the couple's retreat package for our anniversary and it was the perfect gift. The private suite was beautiful and the massages were exceptional.",
      name: "Rahul Gupta",
      role: "First-time Visitor",
      avatar: "/avatar-male1.jpg",
    },
    {
      text: "I've been to many spas across India, and Luxury Spa truly stands out for its attention to detail and quality of treatments. The Ayurvedic massage was authentic and healing.",
      name: "Anjali Patel",
      role: "Wellness Enthusiast",
      avatar: "/avatar-female2.jpg",
    },
    {
      text: "The facial treatment gave me visible results from the first session. The staff is knowledgeable and uses high-quality products that worked wonders for my skin.",
      name: "Vikram Singh",
      role: "Monthly Member",
      avatar: "/avatar-male2.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">What Our Clients Say</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Hear from our satisfied clients about their Luxury Spa experience
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                    loading="lazy"
                    width="64"
                    height="64"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gold text-gray-900 rounded-full p-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="italic text-gray-300 mb-4">
                  "{testimonial.text}"
                </p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gold text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Contact section with form
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Form submitted! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gold"></span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Book your appointment today or reach out with any questions. Our
              team is ready to assist you in your journey to relaxation and
              wellness.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Our Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gray-800 p-3 rounded-full text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600">
                      123 Relaxation Avenue, MP Nagar, Bhopal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gray-800 p-3 rounded-full text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gray-800 p-3 rounded-full text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@luxuryspa.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Weekdays</h4>
                  <p className="text-gray-600">9:00 AM - 9:00 PM</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Weekends</h4>
                  <p className="text-gray-600">10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Book an Appointment
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="aromatherapy">Aromatherapy Massage</option>
                    <option value="deep-tissue">Deep Tissue Massage</option>
                    <option value="facial">Luxury Facial Treatment</option>
                    <option value="hot-stone">Hot Stone Therapy</option>
                    <option value="ayurvedic">Ayurvedic Treatment</option>
                    <option value="couples">Couple's Retreat Package</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gold text-white font-bold py-3 rounded-lg transition-colors duration-300"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Footer with social links

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <FaSpa className="text-gold text-2xl" />
            <h2 className="text-2xl font-bold">
              Luxury<span className="text-gold">Spa</span>
            </h2>
          </div>
          <p className="text-gray-400 mb-6">
            Experience ultimate relaxation and rejuvenation at Bhopal's premier
            luxury spa destination.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gold" />
              123 Relaxation Avenue, Bhopal
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2 text-gold" />
              +91 9876543210
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-gold" />
              info@luxuryspa.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-gold transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gold transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gold transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 9:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>10:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Luxury Spa. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
const App = () => (
  <div>
    <SEO />
    <Header />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);
export default App;
