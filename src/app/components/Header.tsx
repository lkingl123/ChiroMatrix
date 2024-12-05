"use client";
import { FaRegCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="/logo.svg"
                        alt="Plumbing Logo"
                        className="w-[100px] h-[100px] object-contain"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-lg font-heading">
                    <a
                        href="/who-we-are"
                        className="text-gray-700 hover:text-lapis transition duration-300 font-semibold"
                    >
                        WHO WE ARE
                    </a>

                    {/* WHAT WE DO Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown("whatWeDo")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="flex items-center text-gray-700 hover:text-lapis transition duration-300 cursor-pointer font-semibold">
                            WHAT WE DO
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 ml-2 transform transition-transform duration-300 ${
                                    activeDropdown === "whatWeDo" ? "rotate-0" : "rotate-180"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {activeDropdown === "whatWeDo" && (
                            <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-md z-10">
                                <a
                                    href="/what-we-do/new-practices"
                                    className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition rounded-t-md"
                                >
                                    For New Practices
                                </a>
                                <a
                                    href="/what-we-do/existing-practices"
                                    className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition rounded-b-md"
                                >
                                    For Existing Practices
                                </a>
                            </div>
                        )}
                    </div>

                    {/* SERVICES/PROGRAMS Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown("servicesPrograms")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="flex items-center text-gray-700 hover:text-lapis transition duration-300 cursor-pointer font-semibold">
                            SERVICES/PROGRAMS
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 ml-2 transform transition-transform duration-300 ${
                                    activeDropdown === "servicesPrograms" ? "rotate-0" : "rotate-180"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        {activeDropdown === "servicesPrograms" && (
                            <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-lg rounded-md z-10">
                                <a
                                    href="/services-programs/branding"
                                    className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition rounded-t-md"
                                >
                                    Logo + Branding
                                </a>
                                <a
                                    href="/services-programs/web-design"
                                    className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition"
                                >
                                    Web Design
                                </a>
                                <a
                                    href="/services-programs/seo"
                                    className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition"
                                >
                                    SEO Services
                                </a>
                                <a
                                    href="/services-programs/social-media"
                                    className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition rounded-b-md"
                                >
                                    Social Media Management
                                </a>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Call-to-Action Button */}
                <a
                    href="https://calendly.com/successplumbing/15min"
                    className="hidden md:inline-flex items-center bg-lapis text-white text-lg font-heading px-6 py-3 rounded-lg shadow-md hover:bg-cerulean transition duration-300 space-x-2"
                >
                    <FaRegCalendarAlt className="inline-block" />
                    <span>Book a Call</span>
                </a>

                {/* Mobile Hamburger Menu */}
                <button
                    className="md:hidden text-gray-700 text-2xl"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="bg-white shadow-lg md:hidden">
                    <nav className="flex flex-col space-y-2 py-4 px-6 text-lg font-heading text-gray-700">
                        <a
                            href="/who-we-are"
                            className="hover:text-lapis transition duration-300 font-semibold"
                        >
                            WHO WE ARE
                        </a>
                        {/* Mobile WHAT WE DO Dropdown */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown((prev) => (prev === "whatWeDo" ? null : "whatWeDo"))}
                                className="flex items-center justify-between text-gray-700 hover:text-lapis transition duration-300 font-semibold w-full text-left"
                            >
                                WHAT WE DO
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ml-2 transform transition-transform duration-300 ${
                                        activeDropdown === "whatWeDo" ? "rotate-0" : "rotate-180"
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === "whatWeDo" && (
                                <div className="pl-4">
                                    <a
                                        href="/what-we-do/new-practices"
                                        className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition"
                                    >
                                        For New Practices
                                    </a>
                                    <a
                                        href="/what-we-do/existing-practices"
                                        className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition"
                                    >
                                        For Existing Practices
                                    </a>
                                </div>
                            )}
                        </div>
                        {/* Mobile SERVICES/PROGRAMS Dropdown */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown((prev) => (prev === "servicesPrograms" ? null : "servicesPrograms"))}
                                className="flex items-center justify-between text-gray-700 hover:text-lapis transition duration-300 font-semibold w-full text-left"
                            >
                                SERVICES/PROGRAMS
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ml-2 transform transition-transform duration-300 ${
                                        activeDropdown === "servicesPrograms" ? "rotate-0" : "rotate-180"
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === "servicesPrograms" && (
                                <div className="pl-4">
                                    <a
                                        href="/services-programs/branding"
                                        className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition"
                                    >
                                        Logo + Branding
                                    </a>
                                    <a
                                        href="/services-programs/web-design"
                                        className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition"
                                    >
                                        Web Design
                                    </a>
                                    <a
                                        href="/services-programs/seo"
                                        className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition"
                                    >
                                        SEO Services
                                    </a>
                                    <a
                                        href="/services-programs/social-media"
                                        className="block px-4 py-2 text-gray-700 hover:bg-lapis hover:text-white transition"
                                    >
                                        Social Media Management
                                    </a>
                                </div>
                            )}
                        </div>
                        <a
                            href="https://calendly.com/successplumbing/15min"
                            className="mt-4 inline-flex items-center justify-center bg-lapis text-white text-lg font-heading px-6 py-3 rounded-lg shadow-md hover:bg-cerulean transition duration-300"
                        >
                            <FaRegCalendarAlt className="inline-block" />
                            <span>Book a Call</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
