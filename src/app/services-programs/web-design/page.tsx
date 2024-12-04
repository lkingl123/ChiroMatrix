"use client";

export default function WebDesignPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16">
      {/* Page Header */}
      <header className="bg-lapis text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-heading font-bold tracking-tight leading-tight">
            Build Stunning Websites for Your Plumbing Business
          </h1>
          <p className="mt-6 text-lg font-sans font-light leading-relaxed">
            Your website is your digital storefront. Make it stand out with
            professional designs that attract customers and grow your business.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Why Web Design Matters */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Why Web Design Matters
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            A well-designed website builds trust and credibility, helping you
            convert visitors into customers. With mobile-friendly designs and
            fast loading times, your plumbing business will be ready to compete
            online.
          </p>
        </section>

        {/* Section 2: Our Web Design Services */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            Our Web Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Custom Website Design
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Unique designs tailored to your plumbing business and audience.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Mobile Optimization
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Ensure your website looks great and works perfectly on all
                devices.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Hosting & Support
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Reliable hosting and ongoing support to keep your site running
                smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="bg-cerulean text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-heading font-bold text-center mb-6">
            Why Choose Us for Web Design?
          </h2>
          <ul className="list-disc list-inside text-lg font-sans space-y-4">
            <li>Experienced in designing for plumbing businesses.</li>
            <li>Focus on user-friendly and mobile-first designs.</li>
            <li>Comprehensive services from design to hosting.</li>
            <li>100% satisfaction guarantee.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-6">
            Contact us today to get started on your custom plumbing website.
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
