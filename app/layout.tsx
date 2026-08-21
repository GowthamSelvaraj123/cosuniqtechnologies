import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-plus-jakarta",
});

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
