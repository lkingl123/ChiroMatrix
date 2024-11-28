export default function Services() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>
                <p className="mt-4 text-gray-600">
                    We offer comprehensive plumbing solutions to meet your needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="p-4 border rounded shadow">
                        <h3 className="font-bold text-lg">Emergency Repairs</h3>
                        <p className="mt-2 text-sm">Quick and reliable 24/7 service.</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="font-bold text-lg">Pipe Installations</h3>
                        <p className="mt-2 text-sm">Expert pipe and fixture installations.</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="font-bold text-lg">Drain Cleaning</h3>
                        <p className="mt-2 text-sm">Thorough solutions for blockages.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
