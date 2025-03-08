import { Helmet } from "react-helmet";

const SEO = () => (
  <Helmet>
    <title>SukoonSpa Bhopal - Premium Relaxation & Rejuvenation</title>
    // In SEO.jsx
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Experience the ultimate relaxation at SukoonSpa Bhopal. Our premium treatments include aromatherapy, deep tissue massage, and rejuvenating facials using organic products."
    />
    <meta
      name="keywords"
      content="Sukoonspa,sukoonspa,SkoonSpa,Luxury Spa, Spa in Bhopal,Spa Services in Bhopal, Best Spa Services, Aromatherapy, Massage, Facial Treatments, Organic Spa, Premium Spa"
    />
    <meta name="author" content="Luxury Spa" />
    <meta
      property="og:title"
      content="SukoonSpa Bhopal - Premium Relaxation & Rejuvenation"
    />
    <meta
      property="og:description"
      content="Experience the ultimate relaxation at SukoonSpa Bhopal. Our premium treatments include aromatherapy, deep tissue massage, and rejuvenating facials."
    />
    <meta property="og:image" content="/spa-og-image.jpg" />
    <meta property="og:url" content="https://sukoonspa.in" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="SukoonSpa Bhopal - Premium Relaxation & Rejuvenation"
    />
    <meta
      name="twitter:description"
      content="Experience the ultimate relaxation at SukoonSpa Bhopal with our premium treatments."
    />
    <meta name="twitter:image" content="/spa-og-image.jpg" />
    <link rel="canonical" href="https://luxuryspa.com" />
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "SpaService",
          "name": "sukoonspa Bhopal",
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

export default SEO;
