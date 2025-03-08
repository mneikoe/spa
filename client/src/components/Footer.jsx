import React from "react";
import {
  FaSpa,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <FaSpa className="text-gold text-2xl" />
            <h2 className="text-2xl font-bold">
              Sukoon<span className="text-rose-400">Spa</span>
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
        <p>&copy; {new Date().getFullYear()} Sukoonspa. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
