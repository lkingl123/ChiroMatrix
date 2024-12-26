"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import SpinnerWrapper from "./components/SpinnerWrapper";
import FAQ from "./components/FAQ";
import Head from "next/head";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="ChiroMatrix - Elevating Chiropractic Websites and Marketing" />
        <meta name="keywords" content="chiropractic, website design, marketing, ChiroMatrix" />
        <meta name="author" content="ChiroMatrix" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>ChiroMatrix</title>
      </Head>
      <body className="bg-background text-foreground font-sans vsc-initialized antialiased">
        {/* Header */}
        <Header />

        {/* Main content wrapped with a suspense spinner */}
        <main className="min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <SpinnerWrapper>{children}</SpinnerWrapper>
          </Suspense>
        </main>

        {/* Additional Components */}
        <FAQ />
        <ChatBot />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
