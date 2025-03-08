const About = () => (
  <section id="about" className="py-24 px-4 bg-gray-50">
    {" "}
    <div className="container mx-auto">
      {" "}
      <div className="flex flex-col md:flex-row items-center">
        {" "}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          {" "}
          <img
            src="https://img.freepik.com/premium-photo/cozy-spa-interior-pink-tones-with-soft-lighting-3d-illustration-ai-render_88188-2640.jpg"
            alt="Luxury Spa Interior"
            className="rounded-lg shadow-xl"
            width="600"
            height="400"
            loading="lazy"
          />{" "}
        </div>{" "}
        <div className="md:w-1/2">
          {" "}
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            {" "}
            About Us{" "}
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gold"></span>{" "}
          </h2>{" "}
          <p className="text-gray-700 mb-6 text-lg">
            {" "}
            Welcome to Sukoonspa, Bhopal's premier destination for relaxation
            and rejuvenation. Founded in 2025, we've been helping our clients
            achieve balance and wellness through our carefully curated
            treatments.{" "}
          </p>{" "}
          <p className="text-gray-700 mb-6 text-lg">
            {" "}
            Our spa offers luxurious treatments to relax your body and mind. We
            use organic products and the latest techniques to ensure a
            rejuvenating experience that will leave you feeling refreshed and
            renewed.{" "}
          </p>{" "}
          <div className="grid grid-cols-2 gap-4 text-center">
            {" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
              {" "}
              <h3 className="font-bold text-lg">Certified Therapists</h3>{" "}
              <p className="text-gray-600">20+ Experienced Staff</p>{" "}
            </div>{" "}
            <div className="bg-white p-4 rounded-lg shadow-md">
              {" "}
              <h3 className="font-bold text-lg">Premium Products</h3>{" "}
              <p className="text-gray-600">100% Organic & Natural</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </section>
);
export default About;
