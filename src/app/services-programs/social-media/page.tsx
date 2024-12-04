"use client";

export default function SocialMediaPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16">
      {/* Page Header */}
      <header className="bg-sky text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-heading font-bold tracking-tight leading-tight">
            Amplify Your Plumbing Business on Social Media
          </h1>
          <p className="mt-6 text-lg font-sans font-light leading-relaxed">
            Connect, engage, and grow your audience with professional social
            media strategies tailored for plumbers.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Why Social Media Matters */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Why Social Media Matters
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            Social media is where your customers are. By establishing a strong
            presence, you can build trust, increase brand awareness, and grow
            your plumbing business.
          </p>
        </section>

        {/* Section 2: Our Social Media Services */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            Our Social Media Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Social Media Management
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Let us handle your social accounts, from posting to audience
                engagement.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Content Creation
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                High-quality posts, videos, and infographics tailored to your
                plumbing brand.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Paid Advertising
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Reach a broader audience with targeted ads on platforms like
                Facebook and Instagram.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits of Social Media for Plumbers */}
        <section className="bg-indigo text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-heading font-bold text-center mb-6">
            Benefits of Social Media for Your Business
          </h2>
          <ul className="list-disc list-inside text-lg font-sans space-y-4">
            <li>Build trust and relationships with your audience.</li>
            <li>Increase brand awareness and reach.</li>
            <li>Generate more leads and customer inquiries.</li>
            <li>Stay ahead of competitors in the digital space.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Shine on Social Media?
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-6">
            Contact us today to learn how we can help transform your social
            media presence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white font-sans font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </a>
        </section>
      </main>
    </div>
  );
}
