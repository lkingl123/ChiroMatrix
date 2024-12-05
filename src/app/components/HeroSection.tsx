"use client";

import { useState } from "react";

export default function HeroSection() {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted successfully");
            } else {
                console.error("Error submitting form");
            }
        } catch (error) {
            console.error("Error connecting to server:", error);
        }
    };

    return (
        <section
            className="bg-cover bg-center relative text-white py-16"
            style={{
                backgroundImage: "url('/herosection-image.jpg')", // Replace with your image path
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Hero Content */}
            <div className="relative max-w-4xl mx-auto text-center px-4">
                {/* Main Heading */}
                <h1 className="text-5xl font-heading font-extrabold tracking-tight leading-tight text-platinum">
                    Plumbing Solutions Made Easy
                </h1>

                {/* Subtext */}
                <p className="mt-6 text-lg font-light leading-relaxed text-platinum">
                    Partner with the team for Plumbing Websites, Plumbing Marketing Tools, and Strategic Consulting.
                    <br />
                    We brand the future of plumbing.
                </p>

                {/* Call-to-Action Form */}
                <div className="mt-8 bg-platinum bg-opacity-95 rounded-lg shadow-xl p-6 max-w-lg mx-auto text-gray-800">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="px-4 py-3 border border-lapis rounded-md focus:outline-none focus:ring-2 focus:ring-cerulean text-gray-900"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="px-4 py-3 border border-lapis rounded-md focus:outline-none focus:ring-2 focus:ring-cerulean text-gray-900"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-lapis text-platinum font-semibold py-3 rounded-md hover:bg-cerulean transition duration-300 text-center"
                        >
                            Request a Demo
                        </button>
                    </form>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4 relative">
                {/* Feature Cards */}
                {[
                    {
                        title: "Logo Design",
                        description:
                            "Your journey begins with branding and quickly becomes a matter of optimizing content and storytelling.",
                        linkText: "200+ Plumbing Logos ?",
                        link: "/services-programs/branding",
                    },
                    {
                        title: "Website Design & Hosting",
                        description:
                            "We design amazing plumbing websites and build data-driven marketing plans proven to grow practices.",
                        linkText: "200+ Plumbing Websites ?",
                        link: "/services-programs/web-design",
                    },
                    {
                        title: "SEO & Online Advertising",
                        description:
                            "Together, we can engage a broader audience and educate your community on the importance of plumbing care.",
                        linkText: "2x Your Customer Reach ?",
                        link: "/services-programs/seo",
                    },
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="bg-lapis rounded-lg p-6 shadow-lg text-center text-white hover:bg-cerulean transition-transform transform hover:scale-105"
                    >
                        <h3 className="text-lg font-semibold text-platinum">
                            {feature.title}
                        </h3>
                        <p className="mt-3 text-sm text-sky">{feature.description}</p>
                        <a
                            href={feature.link}
                            className="mt-4 inline-block text-platinum hover:underline text-sm font-medium"
                        >
                            {feature.linkText}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
