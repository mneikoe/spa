import { Helmet } from "react-helmet";

const SEO = () => (
  <Helmet>
    <title>SukoonSpa Bhopal - Premium Relaxation & Rejuvenation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Experience the ultimate relaxation at SukoonSpa Bhopal. Our premium treatments include aromatherapy, deep tissue massage, and rejuvenating facials using organic products."
    />
    <meta
      name="keywords"
      content="Sukoonspa, Spa in Bhopal, Massage in Bhopal, Best Spa Services, Aromatherapy, Luxury Spa"
    />
    <meta name="author" content="SukoonSpa" />

    {/* Open Graph (Facebook) */}
    <meta
      property="og:title"
      content="SukoonSpa Bhopal - Premium Relaxation & Rejuvenation"
    />
    <meta
      property="og:description"
      content="Experience relaxation at SukoonSpa Bhopal with premium treatments."
    />
    <meta property="og:image" content="https://sukoonspa.in/spa-og-image.jpg" />
    <meta property="og:url" content="https://sukoonspa.in" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="SukoonSpa Bhopal - Premium Relaxation & Rejuvenation"
    />
    <meta
      name="twitter:description"
      content="Experience the ultimate relaxation at SukoonSpa Bhopal with our premium treatments."
    />
    <meta
      name="twitter:image"
      content="https://sukoonspa.in/spa-og-image.jpg"
    />

    {/* Canonical URL */}
    <link rel="canonical" href="https://sukoonspa.in" />

    {/* Structured Data (Schema Markup) */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SpaService",
        name: "SukoonSpa Bhopal",
        image: "https://sukoonspa.in/spa-og-image.jpg",
        description:
          "Premium spa services in Bhopal offering aromatherapy, massages, and facial treatments.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Relaxation Avenue",
          addressLocality: "Bhopal",
          addressRegion: "MP",
          postalCode: "462001",
          addressCountry: "IN",
        },
        telephone: "+91 9876543210",
        priceRange: "₹₹₹",
        openingHours: "Mo-Su 09:00-21:00",
        sameAs: [
          "https://www.facebook.com/luxuryspabhopal",
          "https://www.instagram.com/luxuryspabhopal",
          "https://twitter.com/luxuryspabhopal",
        ],
      })}
    </script>
  </Helmet>
);

export default SEO;
