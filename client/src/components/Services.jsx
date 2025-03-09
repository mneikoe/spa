import ServiceCard from "./ServiceCard";
import thaimsg1 from "../assets/thaimssg1.webp";
import chocmsg1 from "../assets/chocmssg1.webp";
import wineVodka1 from "../assets/wineVodka1.webp";
import bodyPol1 from "../assets/bodyPol1.webp";
import ubtan1 from "../assets/ubtan1.webp";

const Services = () => {
  const services = [
    {
      title: "Aromatherapy Massage",
      images: [
        "https://sutherapycentre.com.au/wp-content/uploads/2021/11/Aroma-massage-scaled.jpg",
      ],
      price: "₹2,500",
      description:
        "Experience the healing power of essential oils combined with massage techniques to promote relaxation and balance.",
    },
    {
      title: "Deep Tissue Massage",
      images: [
        "https://images.squarespace-cdn.com/content/v1/609b733baea691347db710d4/86be2cfc-aa38-473e-8aa8-0cb4b0d73536/CPY_Therapy_CSMassage.jpg?format=750w",
      ],
      price: "₹3,000",
      description:
        "Relieve chronic muscle tension with firm pressure and slow strokes that reach deeper layers of muscle and fascia.",
    },
    {
      title: "Luxury Facial Treatment",
      images: [
        "https://blog.californiaskincaresupply.com/wp-content/uploads/2022/04/man-beard-get-facial-1024x684.jpg",
      ],
      price: "₹2,800",
      description:
        "Revitalize your skin with our premium facial that cleanses, exfoliates, and hydrates for a youthful glow.",
    },
    {
      title: "Hot Stone Therapy",
      images: [
        "https://img.grouponcdn.com/deal/g8JjckFez5dfRPwLXcju/jq-6143x3686/v1/c700x420.jpg",
      ],
      price: "₹3,500",
      description:
        "Smooth basalt stones are heated and placed on key points of the body to melt away tension and promote deep relaxation.",
    },
    {
      title: "Ayurvedic Treatment",
      images: ["https://wallpaperaccess.com/full/713698.jpg"],
      price: "₹4,000",
      description:
        "Traditional Indian healing techniques to balance mind, body, and spirit using herbal oils and specific massage strokes.",
    },
    {
      title: "Couple's Retreat Package",
      images: [
        "https://media.istockphoto.com/id/1262423480/photo/romantic-date-in-spa-salon-with-relaxing-massage.jpg?s=612x612&w=0&k=20&c=eMigkxiHdKvYlKgWqfH7aPJ09Sph8eDUGfWJPwIvI8k=",
      ],
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
    },
    {
      title: "Chocolate Massage",
      images: [chocmsg1], // Reference local image correctly
      price: "₹3,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
    },
    {
      title: "Wine & Vodka Massage",
      images: [wineVodka1], // Reference local image correctly
      price: "₹3,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
    },
    {
      title: "Body Polishing",
      images: [bodyPol1], // Reference local image correctly
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
    },
    {
      title: "Ubtan Massage",
      images: [ubtan1], // Reference local image correctly
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
    },
    {
      title: "Thai Massage",
      images: [thaimsg1], // Reference local image correctly
      price: "₹5,500",
      description:
        "Share a relaxing experience with your loved one in our private suite with dual massages and complimentary refreshments.",
    },
    {
      title: "Potli Massage",
      images: [
        "https://img.freepik.com/premium-photo/ayurvedic-massage-with-kizhi-herbal-bags-made-from-various-dried-herbs-wrapped-cotton_1048944-9494730.jpg",
      ],
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

export default Services;
