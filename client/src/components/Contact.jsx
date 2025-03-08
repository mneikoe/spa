import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const serviceOptions = {
    aromatherapy: "Aromatherapy Massage",
    "deep-tissue": "Deep Tissue Massage",
    facial: "Luxury Facial Treatment",
    "hot-stone": "Hot Stone Therapy",
    ayurvedic: "Ayurvedic Treatment",
    couples: "Couple's Retreat Package",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "9111021231"; // Replace with your WhatsApp number
    const serviceName = serviceOptions[formData.service] || formData.service;

    const message = encodeURIComponent(
      `New Booking Request:\n\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Service: ${serviceName}\n` +
        `Message: ${formData.message}\n\n` +
        `Please confirm this appointment.`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    // Reset form
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
                    <p className="text-gray-600">+91 9826451565</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gray-800 p-3 rounded-full text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">sukoonspa.in@gmail.com</p>
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

export default Contact;
