import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import Head from "next/head"; // Import the Head component for managing <head> tags

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head>
                {/* Add the Google Fonts link */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Honk&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="vsc-initialized bg-background text-foreground font-sans">
                <Header />
                <main>{children}</main>
                <ChatBot />
                <Footer />
            </body>
        </html>
    );
}
