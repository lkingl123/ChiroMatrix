export default function NewPractices() {
    return (
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div className="bg-blue-600 py-16 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">
            Starting a New Plumbing Business?
          </h1>
          <p className="text-lg font-light">
            Let us help you establish your brand and grow your business.
          </p>
        </div>
  
        {/* Introduction Section */}
        <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              We specialize in marketing for new plumbing businesses.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you've just started or are about to open, our team can help make your
              first year easier. We’ve helped plumbing professionals like you take the next
              steps in building successful businesses.
            </p>
            <p className="mt-6 text-blue-600 font-medium">
              Interested in any of our services or packages?{" "}
              <a
                href="/services-programs"
                className="underline hover:text-blue-800 transition-colors duration-300"
              >
                Click here to explore services.
              </a>
            </p>
          </div>
  
          {/* Right Column */}
          <div className="bg-blue-600 text-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4">
              We’ve supported over 200 plumbing businesses.
            </h2>
            <p>
              From branding to advertising, our team has helped plumbing professionals
              thrive in the digital age.
            </p>
          </div>
        </div>
  
        {/* Steps Section */}
        <div className="bg-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-6 grid gap-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <img
                src="/step1-image.jpg"
                alt="Step 1 Branding"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Step 1: Branding
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The first step in establishing your plumbing business is creating a strong
                  brand. From logos to messaging, we ensure your brand reflects your values
                  and connects with your audience.
                </p>
                <a
                  href="/services-programs/branding"
                  className="mt-6 inline-block text-blue-600 underline hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  Learn more about Branding →
                </a>
              </div>
            </div>
  
            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Step 2: Website
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your website is the face of your plumbing business. We create modern,
                  responsive websites tailored to showcase your expertise and attract
                  customers.
                </p>
                <a
                  href="/services-programs/web-design"
                  className="mt-6 inline-block text-blue-600 underline hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  Learn more about Websites →
                </a>
              </div>
              <img
                src="/step2-image.jpg"
                alt="Step 2 Website"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
  
            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <img
                src="/step3-image.jpg"
                alt="Step 3 Advertising"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Step 3: New Leads Through Online Advertising
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Targeted advertising helps bring the right customers directly to you. Our
                  campaigns are designed to maximize visibility and conversions.
                </p>
                <a
                  href="/services-programs/advertising"
                  className="mt-6 inline-block text-blue-600 underline hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  Learn more about Advertising →
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Call-to-Action Section */}
        <div className="bg-blue-600 text-white py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">6 Month Process</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Let us guide your plumbing business with a step-by-step system focused on
            branding, website development, and online advertising. Your success is our goal.
          </p>
        </div>
  
        {/* Call-to-Action Section */}
        <div className="bg-gray-800 text-white py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Business?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Take the next step today! Contact our team to schedule a consultation and see
            how we can bring your plumbing business to life with tailored solutions.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    );
  }
  