"use client";

export default function WhoWeAre() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <div className="text-center py-12 bg-blue-600 text-white rounded-md">
        <h1 className="text-4xl font-bold mb-4">Your Business, Unclogged</h1>
        <p className="text-lg">From faucets to websites, we ensure everything runs smoothly.</p>
      </div>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        {/* Mission */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to empower plumbing businesses with tailored websites,
            branding, and content solutions. We aim to elevate plumbing professionals
            by providing modern, responsive designs and impactful digital marketing
            strategies.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-blue-600 text-white p-6 rounded-md">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p>
            We envision a world where plumbing businesses are recognized for their expertise
            and professionalism. By bridging the gap between plumbers and their clients
            through exceptional online experiences, we aim to redefine the standards of
            the plumbing industry in the digital space.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member Animation */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center opacity-0"
              style={{
                animation: `fadeIn 1s ease-in-out ${index * 0.6}s forwards`,
              }}
            >
              <img
                src={`/team-member${index + 1}.jpg`}
                alt={`Team Member ${index + 1}`}
                className="w-40 h-40 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">[Team Member {index + 1}]</h3>
              <p className="text-gray-600">Role</p>
              <a
                href="mailto:example@example.com"
                className="mt-2 text-blue-400 hover:underline"
              >
                Email
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
