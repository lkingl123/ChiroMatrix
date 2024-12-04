"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import Head from "next/head";
import SpinnerWrapper from "./components/SpinnerWrapper"; // Import the updated Spinner wrapper

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Honk&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="vsc-initialized bg-background text-foreground font-sans">
        <Header />
        <SpinnerWrapper>{children}</SpinnerWrapper>
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
