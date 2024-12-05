export default function ExistingPractices() {
    return (
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-lapis to-cerulean py-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Supporting Existing Plumbing Businesses
          </h1>
          <p className="text-lg font-light max-w-2xl mx-auto">
            Take your plumbing business to the next level with our tailored strategies.
          </p>
        </div>
  
        {/* Introduction Section */}
        <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              We specialize in marketing for existing plumbing businesses.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you've been in business for years or are looking to grow, our team can help refine your marketing approach to attract more customers. We provide modern solutions tailored for plumbing professionals.
            </p>
          </div>
  
          {/* Right Column */}
          <div className="bg-gradient-to-r from-cerulean to-sky text-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4">
              Join hundreds of successful plumbing businesses.
            </h2>
            <p>
              From branding to SEO, we've partnered with businesses like yours to drive growth and customer satisfaction.
            </p>
          </div>
        </div>
  
        {/* Steps Section */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-6 grid gap-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <img
                src="/step1-existing.jpg"
                alt="Step 1 Website Optimization"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Step 1: Website Optimization
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ensure your website is up-to-date with modern, responsive design and fast-loading pages. We enhance your website to improve user experience and engagement.
                </p>
                <a
                  href="/services-programs/web-design"
                  className="mt-6 inline-block text-lapis underline hover:text-cerulean font-medium transition-colors duration-300"
                >
                  Learn more about Website Optimization →
                </a>
              </div>
            </div>
  
            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Step 2: Advertising and Lead Generation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our targeted advertising campaigns bring in qualified leads to grow your business. Reach more customers and showcase your plumbing services with effective marketing strategies.
                </p>
                <a
                  href="/services-programs/advertising"
                  className="mt-6 inline-block text-lapis underline hover:text-cerulean font-medium transition-colors duration-300"
                >
                  Learn more about Advertising →
                </a>
              </div>
              <img
                src="/step2-existing.jpg"
                alt="Step 2 Advertising"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
  
            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <img
                src="/step3-existing.jpg"
                alt="Step 3 SEO"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Step 3: Growing Your Online Presence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Improve your search engine rankings and online visibility. We help your business get found by more customers with effective SEO strategies tailored for plumbing professionals.
                </p>
                <a
                  href="/services-programs/seo"
                  className="mt-6 inline-block text-lapis underline hover:text-cerulean font-medium transition-colors duration-300"
                >
                  Learn more about SEO →
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-r from-lapis to-cerulean text-white py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Your Growth Starts Here</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Ready to grow your plumbing business? Contact us today to learn how our strategies can help take your business to new heights.
          </p>
          <a
            href="https://calendly.com/successplumbing/15min"
            className="bg-white text-lapis py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-300 transition duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    );
  }
  