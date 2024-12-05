"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function BrandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-lapis to-cerulean text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-5xl font-heading font-bold tracking-tight leading-tight">
            Elevate Your Plumbing Brand
          </h1>
          <p className="mt-6 text-lg font-sans font-light leading-relaxed">
            Build trust, recognition, and loyalty with professional branding tailored for plumbing businesses.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-platinum text-indigo font-sans font-medium px-8 py-4 rounded-lg shadow-md hover:bg-white hover:text-lapis transition duration-300"
          >
            Get Started Now
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Why Branding Matters */}
        <section className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-lapis">
            Why Branding Matters
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            A strong brand creates a lasting impression and sets you apart from competitors. With the right branding,
            you can build trust and loyalty with your customers.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add some icons */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-lapis text-4xl mb-4">&#128221;</div>
              <h3 className="text-xl font-heading font-bold mb-4">
                Professional Websites
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Build credibility and attract customers with a polished website tailored to plumbing businesses.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-lapis text-4xl mb-4">&#127979;</div>
              <h3 className="text-xl font-heading font-bold mb-4">
                Marketing Expertise
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We craft marketing strategies that help plumbing businesses stand out and drive customer engagement.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-lapis text-4xl mb-4">&#127760;</div>
              <h3 className="text-xl font-heading font-bold mb-4">
                Local SEO
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dominate local search results and ensure your plumbing business is visible to nearby customers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Our Branding Services */}
        <section>
          <h2 className="text-4xl font-heading font-bold text-center text-lapis mb-12">
            Our Branding Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-indigo">
                Logo Design
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                A unique and memorable logo is the foundation of your brand. We create designs that resonate with your
                customers.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-indigo">
                Brand Guidelines
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Ensure consistency across all platforms with a comprehensive branding guide tailored to your business.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-indigo">
                Marketing Materials
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                From business cards to brochures, we provide professionally designed materials that align with your
                brand.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-gradient-to-r from-cerulean to-sky text-white py-16 px-6 rounded-lg">
  <h2 className="text-4xl font-heading font-bold text-center mb-6">
    Why Choose Us?
  </h2>
  <ul className="list-none text-lg font-sans space-y-4 max-w-3xl mx-auto">
    <li className="flex items-center">
      <FaCheckCircle className="text-green-400 mr-4" />
      Specialized in plumbing industry branding.
    </li>
    <li className="flex items-center">
      <FaCheckCircle className="text-green-400 mr-4" />
      Experienced designers who understand your market.
    </li>
    <li className="flex items-center">
      <FaCheckCircle className="text-green-400 mr-4" />
      Tailored solutions to meet your unique needs.
    </li>
    <li className="flex items-center">
      <FaCheckCircle className="text-green-400 mr-4" />
      Commitment to delivering high-quality results on time.
    </li>
  </ul>
</section>


        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-4 text-lapis">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-6">
            Contact us today and take the first step toward elevating your plumbing business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo text-white font-sans font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
}
