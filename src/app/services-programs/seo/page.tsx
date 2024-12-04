"use client";

export default function SEOPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16">
      {/* Page Header */}
      <header className="bg-cerulean text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl font-heading font-bold tracking-tight leading-tight">
            Boost Your Plumbing Business with SEO
          </h1>
          <p className="mt-6 text-lg font-sans font-light leading-relaxed">
            Drive traffic, improve visibility, and grow your customer base with
            our specialized SEO services for plumbers.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-16">
        {/* Section 1: Why SEO Matters */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Why SEO Matters</h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            Search Engine Optimization is the key to getting your plumbing
            business found online. It ensures you rank high on search engines
            and reach customers actively searching for your services.
          </p>
        </section>

        {/* Section 2: Our SEO Services */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            Our SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Keyword Research
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Identify the top-performing keywords to target the right
                audience for your plumbing services.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
                On-Page Optimization
              </h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">
                Optimize your website's content, structure, and metadata to
                improve search engine rankings.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-xl font-heading font-semibold mb-4">
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
        <section className="bg-lapis text-white py-12 px-6 rounded-lg">
          <h2 className="text-3xl font-heading font-bold text-center mb-6">
            Benefits of Our SEO Services
          </h2>
          <ul className="list-disc list-inside text-lg font-sans space-y-4">
            <li>Increased website traffic and visibility.</li>
            <li>Better customer engagement and conversion rates.</li>
            <li>Long-term results that grow with your business.</li>
            <li>Custom strategies designed for plumbing businesses.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-6">
            Contact us today to learn more about how our SEO services can
            transform your plumbing business.
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
