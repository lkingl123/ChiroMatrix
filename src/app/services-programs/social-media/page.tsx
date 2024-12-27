"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaCheckCircle } from "react-icons/fa";

export default function SocialMediaPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-sky to-cerulean text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-heading font-bold tracking-tight leading-tight">
            Amplify Your Chiropractor Business on Social Media
          </h1>
          <p className="mt-6 text-lg font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Connect, engage, and grow your audience with professional social
            media strategies tailored for chiropractors.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Why Social Media Matters */}
        <section className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-lapis">
            Why Social Media Matters
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Social media is where your customers are. By establishing a strong
            presence, you can build trust, increase brand awareness, and grow
            your chiropractor business.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <FaFacebookF className="text-4xl text-blue-600 hover:text-blue-800 transition duration-300" />
            <FaInstagram className="text-4xl text-pink-500 hover:text-pink-700 transition duration-300" />
            <FaTwitter className="text-4xl text-sky-400 hover:text-sky-600 transition duration-300" />
          </div>
        </section>

        {/* Section 2: Our Social Media Services */}
        <section>
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-lapis">
            Our Social Media Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-heading font-bold mb-4 text-indigo">
                Social Media Management
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Let us handle your social accounts, from posting to audience
                engagement.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-heading font-bold mb-4 text-indigo">
                Content Creation
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                High-quality posts, videos, and infographics tailored to your
                chiropractor brand.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-heading font-bold mb-4 text-indigo">
                Paid Advertising
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Reach a broader audience with targeted ads on platforms like
                Facebook and Instagram.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of Social Media for chiropractor */}
        <section className="bg-gradient-to-r from-indigo to-lapis text-white py-16 px-6 rounded-lg">
          <h2 className="text-4xl font-heading font-bold text-center mb-8">
            Benefits of Social Media for Your Business
          </h2>
          <ul className="list-none text-lg font-sans space-y-4 max-w-3xl mx-auto">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Build trust and relationships with your audience.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Increase brand awareness and reach.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Generate more leads and customer inquiries.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-4" />
              Stay ahead of competitors in the digital space.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-lapis">
            Ready to Shine on Social Media?
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how we can help transform your social
            media presence.
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
