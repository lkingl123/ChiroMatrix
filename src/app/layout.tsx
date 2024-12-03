import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="vsc-initialized">
                <Header />
                <main>{children}</main>
                <ChatBot />
                <Footer />
            </body>
        </html>
    );
}
