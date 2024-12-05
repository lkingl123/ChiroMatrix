"use client";
import { FaSearch, FaChartLine, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export default function SEOPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-cerulean to-sky text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-heading font-bold tracking-tight leading-tight">
            Boost Your Plumbing Business with SEO
          </h1>
          <p className="mt-6 text-lg font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Drive traffic, improve visibility, and grow your customer base with
            our specialized SEO services for plumbers.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Why SEO Matters */}
        <section className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-lapis">
            Why SEO Matters
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Search Engine Optimization is the key to getting your plumbing
            business found online. It ensures you rank high on search engines
            and reach customers actively searching for your services.
          </p>
        </section>

        {/* Section 2: Our SEO Services */}
        <section>
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-lapis">
            Our SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaSearch className="text-4xl text-indigo" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-indigo">
                Keyword Research
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Identify the top-performing keywords to target the right
                audience for your plumbing services.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaChartLine className="text-4xl text-indigo" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-indigo">
                On-Page Optimization
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Optimize your website's content, structure, and metadata to
                improve search engine rankings.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-4xl text-indigo" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-indigo">
                Local SEO
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Dominate local searches with strategies tailored to plumbers in
                your area.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of Working with Us */}
        <section className="bg-gradient-to-r from-lapis to-indigo text-white py-16 px-6 rounded-lg">
          <h2 className="text-4xl font-heading font-bold text-center mb-8">
            Benefits of Our SEO Services
          </h2>
          <ul className="list-none text-lg font-sans space-y-4 max-w-3xl mx-auto">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Increased website traffic and visibility.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Better customer engagement and conversion rates.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Long-term results that grow with your business.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Custom strategies designed for plumbing businesses.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-lapis">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about how our SEO services can
            transform your plumbing business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-lapis text-white font-sans font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-indigo transition duration-300"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
}
