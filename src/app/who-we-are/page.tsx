"use client";

export default function WhoWeAre() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-lapis to-cerulean text-white rounded-md shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Your Chiropractic Practice, Reimagined</h1>
        <p className="text-xl font-light">
        From spinal health to digital presence, we ensure your practice thrives online.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
        {/* Mission */}
        <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-lapis mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
          Our mission is to empower chiropractic practices with customized websites,
            branding, and digital marketing strategies. We help you connect with your
            patients by providing modern, responsive designs and effective marketing
            solutions tailored to your chiropractic practice.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-br from-lapis to-cerulean text-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="leading-relaxed">
          We envision a world where chiropractic practices are recognized for their
            healing touch and professionalism. By bridging the gap between chiropractors
            and their patients through exceptional online experiences, we aim to
            revolutionize the standards of the chiropractic industry in the digital space.
          </p>
        </div>
      </div>



      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Team Member Animation */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center opacity-0 transform scale-95"
              style={{
                animation: `fadeInUp 0.8s ease-in-out ${index * 0.8}s forwards`,
              }}
            >
              <img
                src={`/team-member${index + 1}.jpg`}
                alt={`Team Member ${index + 1}`}
                className="w-40 h-40 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Team Member {index + 1}
              </h3>
              <p className="text-gray-600">Role</p>
              <a
                href="mailto:example@example.com"
                className="mt-2 text-blue-600 hover:underline"
              >
                Email
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
