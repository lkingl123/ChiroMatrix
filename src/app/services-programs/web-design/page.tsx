"use client";
import { FaLaptopCode, FaMobileAlt, FaServer, FaCheckCircle } from "react-icons/fa";

export default function WebDesignPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-lapis to-cerulean text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-heading font-bold tracking-tight leading-tight">
            Build Stunning Websites for Your Chiropractor Business
          </h1>
          <p className="mt-6 text-lg font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Your website is your digital storefront. Make it stand out with
            professional designs that attract customers and grow your business.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Why Web Design Matters */}
        <section className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-lapis">
            Why Web Design Matters
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A well-designed website builds trust and credibility, helping you
            convert visitors into customers. With mobile-friendly designs and
            fast loading times, your chiropractor business will be ready to compete
            online.
          </p>
        </section>

        {/* Section 2: Our Web Design Services */}
        <section>
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-lapis">
            Our Web Design Services
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaLaptopCode className="text-4xl text-indigo" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-indigo">
                Custom Website Design
              </h3>
              <p className="text-gray-700 font-sans text-base leading-relaxed">
                Unique designs tailored to your chiropractor business and audience.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaMobileAlt className="text-4xl text-indigo" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-indigo">
                Mobile Optimization
              </h3>
              <p className="text-gray-700 font-sans text-base leading-relaxed">
                Ensure your website looks great and works perfectly on all devices.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <FaServer className="text-4xl text-indigo" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-indigo">
                Hosting & Support
              </h3>
              <p className="text-gray-700 font-sans text-base leading-relaxed">
                Reliable hosting and ongoing support to keep your site running smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-gradient-to-r from-cerulean to-sky text-white py-16 px-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-heading font-bold text-center mb-8">
            Why Choose Us for Web Design?
          </h2>
          <ul className="list-none space-y-4 text-lg font-sans max-w-3xl mx-auto">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Experienced in designing for chiropractor businesses.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Focus on user-friendly and mobile-first designs.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Comprehensive services from design to hosting.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              100% satisfaction guarantee.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-lapis">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today to get started on your custom chiropractor website.
          </p>
          <a
            href="/contact"
            className="inline-block bg-lapis text-white font-sans font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-cerulean transition duration-300"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
}
