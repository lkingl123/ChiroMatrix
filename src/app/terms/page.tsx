"use client";

export default function TermsOfService() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Terms of Service</h1>

      <p className="text-gray-700 mb-4">
        This Terms of Service Agreement is between you, the Client (referred to
        as the "Buyer"), and ChiroMatrix Services, LLC (referred to as the
        "Service Provider"). By paying any invoice from ChiroMatrix Services,
        you agree to the terms outlined below.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">1. Services</h2>
      <p className="mt-4 text-gray-700">
        The Service Provider agrees to provide the services outlined in your
        paid invoice. Services are limited to those specified in the invoice
        and any additional services will require separate agreements and fees.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        1.1 Website Development
      </h3>
      <p className="mt-2 text-gray-700">
        We design custom, responsive websites tailored to chiropractic practices.
        Features include online booking systems, patient forms, SEO optimization,
        and hosting/maintenance options.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        1.2 Marketing Services
      </h3>
      <p className="mt-2 text-gray-700">
        We provide digital marketing services including social media management
        and advertising on platforms like Facebook, Instagram, and LinkedIn. We
        also implement local SEO strategies to increase your practice's visibility
        in your region. Additionally, we offer email campaigns to boost patient
        retention and engagement.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        1.3 Branding and Content Creation
      </h3>
      <p className="mt-2 text-gray-700">
        We offer logo design, branding guidelines, color schemes, and content
        creation. This includes blog posts and patient education materials to
        enhance the credibility of your chiropractic practice.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">2. Payment Terms</h2>
      <p className="mt-4 text-gray-700">
        All invoices are due upon receipt. Payment methods include business
        checks or online credit card payments. Work will not commence or
        continue without full payment of the invoice.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">3. Cancellation and Termination</h2>
      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        3.1 Branding Services
      </h3>
      <p className="mt-2 text-gray-700">
        Refunds are provided on a tiered basis for logo designs:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Rounds 1-2: 75% refund of the project amount.</li>
        <li>Round 3: 25% refund.</li>
        <li>Round 4: No refunds.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        3.2 Website Services
      </h3>
      <p className="mt-2 text-gray-700">
        Website project cancellation after the second revision round will
        result in a 50% refund if written instructions were provided. No refunds
        are given after the second round of revisions.
      </p>
      <p className="mt-2 text-gray-700">
        Termination of partnership requires 30 days' written notice. Upon
        termination, the Buyer will receive domain and website files for a
        $400 transfer fee.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        3.3 Monthly Services
      </h3>
      <p className="mt-2 text-gray-700">
        Monthly services can be terminated with 30 days' written notice. Upon
        termination, the Buyer assumes responsibility for hosting and domain
        management.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">
        4. Intellectual Property Rights
      </h2>
      <p className="mt-4 text-gray-700">
        Ownership of branding assets (e.g., logos, business cards) transfers to
        the Buyer upon full payment. Written website content remains the
        intellectual property of the Service Provider.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">5. Limitation of Liability</h2>
      <p className="mt-4 text-gray-700">
        The Service Provider’s liability is limited to the amount paid by the
        Buyer. No responsibility is assumed for indirect or consequential
        losses, such as loss of business or data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8">6. Miscellaneous</h2>
      <p className="mt-4 text-gray-700">
        This agreement is governed by the laws of the Buyer’s jurisdiction. By
        paying an invoice from ChiroMatrix Services, LLC, the Buyer acknowledges
        and agrees to these terms.
      </p>

      <p className="mt-8 text-gray-700">
        For any questions, please contact us at{" "}
        <a
          href="mailto:support@chiromatrix.com"
          className="text-blue-400 hover:underline"
        >
          support@chiromatrix.com
        </a>
        .
      </p>
    </div>
  );
}
