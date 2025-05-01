function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Discover Amazing Products at Great Prices
            </h1>
            <p className="text-lg mb-6">
              Explore our hand-picked collection and shop confidently with secure checkout and fast delivery.
            </p>
            <a
              href="/products"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition"
            >
              Shop Now
            </a>
          </div>
          <div className="w-1/2 md:w-1/3">
            <img
              src="https://rukminim2.flixcart.com/image/832/832/kzegk280/poster/a/g/4/small-hrithik-roshan-poster-multicolor-photo-paper-print-12-inch-original-imagbf7m79ts7pps.jpeg?q=70&crop=false"
              alt="Hero"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  