const bgImage =
  "https://img.freepik.com/premium-photo/cozy-spa-interior-pink-tones-with-soft-lighting-3d-illustration-ai-render_88188-2640.jpg";

const About = () => (
  <section id="about" className="py-24 px-4 bg-gray-50">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      {/* Left Section - Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <picture>
          <source
            srcSet={bgImage.replace(".jpg", "-small.webp")}
            type="image/webp"
            media="(max-width: 480px)"
          />
          <source
            srcSet={bgImage.replace(".jpg", "-medium.webp")}
            type="image/webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet={bgImage.replace(".jpg", "-large.webp")}
            type="image/webp"
            media="(max-width: 1200px)"
          />
          <img
            src={bgImage}
            alt="Spa Experience"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Right Section - Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 relative inline-block">
          About Us
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gold"></span>
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Welcome to <strong>Sukoon Spa</strong>, Bhopal's premier destination
          for relaxation and rejuvenation. Founded in 2025, we've been helping
          our clients achieve balance and wellness through our carefully curated
          treatments.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          Our spa offers luxurious treatments to relax your body and mind. We
          use organic products and the latest techniques to ensure a
          rejuvenating experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 text-center">
          {[
            { title: "Certified Therapists", desc: "20+ Experienced Staff" },
            { title: "Premium Products", desc: "100% Organic & Natural" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
