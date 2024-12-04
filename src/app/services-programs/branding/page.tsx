"use client";

export default function BrandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16">
      {/* Page Header */}
      <header className="bg-lapis text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-heading font-bold tracking-tight leading-tight">
            Elevate Your Plumbing Brand
          </h1>
          <p className="mt-6 text-lg font-sans font-light leading-relaxed">
            Build trust, recognition, and loyalty with professional branding tailored for plumbing businesses.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Why Branding Matters */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Why Branding Matters
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            A strong brand creates a lasting impression and sets you apart from competitors. With the right branding,
            you can build trust and loyalty with your customers.
          </p>
        </section>

        {/* Section 2: Our Branding Services */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            Our Branding Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Logo Design
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                A unique and memorable logo is the foundation of your brand. We create designs that resonate with your
                customers.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Brand Guidelines
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Ensure consistency across all platforms with a comprehensive branding guide tailored to your business.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
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
        <section className="bg-cerulean text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-heading font-bold text-center mb-6">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-lg font-sans space-y-4">
            <li>Specialized in plumbing industry branding.</li>
            <li>Experienced designers who understand your market.</li>
            <li>Tailored solutions to meet your unique needs.</li>
            <li>Commitment to delivering high-quality results on time.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-6">
            Contact us today and take the first step toward elevating your plumbing business.
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
