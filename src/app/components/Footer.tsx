import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Information</h3>
          <p>Chiropractic Websites, LLC</p>
          <p>123 Wellness Lane</p>
          <p>Suite B #456</p>
          <p>City, State ZIP</p>
          <p className="mt-2">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-cerulean hover:underline flex items-center gap-2"
            >
              <FiPhone className="inline-block" /> (123) 456-7890
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@chiropracticwebsites.com"
              className="text-cerulean hover:underline"
            >
              info@chiropracticwebsites.com
            </a>
          </p>
          <p>
            Web:{" "}
            <a
              href="https://www.chiropracticwebsites.com"
              className="text-cerulean hover:underline"
            >
              www.chiropracticwebsites.com
            </a>
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/services-programs/branding"
                className="text-cerulean hover:underline"
              >
                Chiropractic Logos and Branding
              </a>
            </li>
            <li>
              <a
                href="/services-programs/web-design"
                className="text-cerulean hover:underline"
              >
                Chiropractic Website Design
              </a>
            </li>
            <li>
              <a
                href="/services-programs/seo"
                className="text-cerulean hover:underline"
              >
                Chiropractic SEO
              </a>
            </li>
            <li>
              <a
                href="/services-programs/social-media"
                className="text-cerulean hover:underline"
              >
                Chiropractic Social Media
              </a>
            </li>
          </ul>
        </div>

        {/* Get Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get Support</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@chiropracticwebsites.com"
              className="text-cerulean hover:underline"
            >
              support@chiropracticwebsites.com
            </a>
          </p>
          <p>Mon-Fri: 9:00 AM – 6:00 PM</p>
          <p className="mt-2">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-cerulean hover:underline"
            >
              <FiPhone className="inline-block" /> (123) 456-7890
            </a>
          </p>
          <p className="mt-4">
            <a href="/terms" className="text-cerulean hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        {/* Social Links */}
        <div className="max-w-7xl mx-auto px-6 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <FaInstagram size={24} />
          </a>
        </div>

        <p className="mt-4 text-center text-gray-400 text-sm">
          &copy; 2024 Chiropractic Websites | Privacy Policy
        </p>
      </div>
    </footer>
  );
}
