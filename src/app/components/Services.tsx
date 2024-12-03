import { FaTools, FaBullhorn, FaWater } from "react-icons/fa"; // Example icons
import { CgWebsite } from "react-icons/cg";
import { PiStrategyBold } from "react-icons/pi";

export default function Services() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center px-4">
                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-blue-600 tracking-tight">
                    Our Services
                </h2>
                <p className="mt-4 text-gray-700 text-lg">
                    Empowering plumbing businesses with cutting-edge websites, branding, and marketing strategies.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Service 1 */}
                    <div className="group relative bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-out">
                        <div className="text-blue-600 mb-4 flex justify-center">
                            <CgWebsite className="h-12 w-12" />
                        </div>
                        <h3 className="font-bold text-xl text-gray-800">
                            Website Design & Development
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Build professional, user-friendly websites tailored specifically for plumbing businesses to attract more customers.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="group relative bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-out">
                        <div className="text-blue-600 mb-4 flex justify-center">
                            <FaBullhorn className="h-12 w-12" />
                        </div>
                        <h3 className="font-bold text-xl text-gray-800">
                            SEO & Online Advertising
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Boost your online visibility with targeted SEO and ad campaigns designed to drive local leads for plumbers.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="group relative bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-out">
                        <div className="text-blue-600 mb-4 flex justify-center">
                            <PiStrategyBold className="h-12 w-12" />
                        </div>
                        <h3 className="font-bold text-xl text-gray-800">
                            Branding & Strategy
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Stand out in the plumbing industry with compelling branding and tailored marketing strategies to grow your business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
