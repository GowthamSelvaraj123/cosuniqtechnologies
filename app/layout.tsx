import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import GsapAnimations from "../components/GsapAnimations";

import type { Metadata } from "next";
import { plusJakartaSans } from "./fonts";

export const metadata: Metadata = {
  title: "Cosuniq Technologies | Creative Digital Solutions",
  description: "Cosuniq Technologies — creative software, SaaS, CRM, e-commerce, branding & video. Every brand has a story. We help you build it.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {/* Plus Jakarta Sans is loaded via next/font — no extra link needed */}
      </head>
      <body>
        <CustomCursor />
        <GsapAnimations />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
