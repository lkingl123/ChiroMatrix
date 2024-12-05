"use client";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import Head from "next/head";
import SpinnerWrapper from "./components/SpinnerWrapper";
import FAQ from "./components/FAQ";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
      <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
        />
      </Head>
      <body className="vsc-initialized bg-background text-foreground font-sans">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <SpinnerWrapper>{children}</SpinnerWrapper>
        </Suspense>
        <FAQ />
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
