import { FaHeadset, FaRocket, FaCheckCircle } from "react-icons/fa"; // Example icons

export default function ValuePropositions() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto text-center px-4">
                {/* Heading */}
                <h2 className="text-4xl font-heading font-extrabold text-lapis tracking-tight">
                    Why Choose Us?
                </h2>
                <p className="mt-4 text-gray-700 text-lg">
                    Experience unmatched support and efficiency with our tailored solutions for your plumbing business.
                </p>

                {/* Value Proposition Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[
                        {
                            title: "24/7 Help & Support",
                            description:
                                "We’re here for you around the clock with dedicated support to solve issues and guide you through every step.",
                            icon: <FaHeadset className="h-12 w-12 text-lapis" />,
                        },
                        {
                            title: "Fast & Reliable",
                            description:
                                "Experience unmatched reliability with our fast and efficient processes tailored to your business needs.",
                            icon: <FaRocket className="h-12 w-12 text-lapis" />,
                        },
                        {
                            title: "Simple & Easy Process",
                            description:
                                "From setup to execution, our solutions are straightforward, making your journey effortless and stress-free.",
                            icon: <FaCheckCircle className="h-12 w-12 text-lapis" />,
                        },
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transform transition duration-300"
                        >
                            <div className="mb-4 flex justify-center">{value.icon}</div>
                            <h3 className="font-bold text-xl text-gray-800">
                                {value.title}
                            </h3>
                            <p className="mt-4 text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
