import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="vsc-initialized">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
