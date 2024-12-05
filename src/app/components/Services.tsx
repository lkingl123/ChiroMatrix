import { FaTools, FaBullhorn, FaWater } from "react-icons/fa"; // Example icons
import { CgWebsite } from "react-icons/cg";
import { PiStrategyBold } from "react-icons/pi";

export default function Services() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto text-center px-4">
                {/* Heading */}
                <h2 className="text-4xl font-heading font-extrabold text-lapis tracking-tight">
                    Our Services
                </h2>
                <p className="mt-4 text-gray-700 text-lg">
                    Empowering plumbing businesses with cutting-edge websites, branding, and marketing strategies.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[
                        {
                            title: "Website Design & Development",
                            description:
                                "Build professional, user-friendly websites tailored specifically for plumbing businesses to attract more customers.",
                            icon: <CgWebsite className="h-12 w-12 text-lapis" />,
                        },
                        {
                            title: "SEO & Online Advertising",
                            description:
                                "Boost your online visibility with targeted SEO and ad campaigns designed to drive local leads for plumbers.",
                            icon: <FaBullhorn className="h-12 w-12 text-lapis" />,
                        },
                        {
                            title: "Branding & Strategy",
                            description:
                                "Stand out in the plumbing industry with compelling branding and tailored marketing strategies to grow your business.",
                            icon: <PiStrategyBold className="h-12 w-12 text-lapis" />,
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transform transition duration-300"
                        >
                            <div className="mb-4 flex justify-center">{service.icon}</div>
                            <h3 className="font-bold text-xl text-gray-800">
                                {service.title}
                            </h3>
                            <p className="mt-4 text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
