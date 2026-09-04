import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import GsapAnimations from "../components/GsapAnimations";

import type { Metadata } from "next";
import { plusJakartaSans } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosuniq.in"),
  title: {
    default: "Cosuniq Technologies | Creative Digital Agency",
    template: "%s | Cosuniq Technologies",
  },
  description:
    "Cosuniq Technologies — full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & video production. Every brand has a story. We help you build it.",
  keywords: [
    "Cosuniq Technologies",
    "creative agency",
    "digital agency",
    "web development",
    "branding",
    "UI UX design",
    "SaaS development",
    "e-commerce",
    "video production",
    "software development India",
  ],
  authors: [{ name: "Cosuniq Technologies", url: "https://cosuniq.in" }],
  creator: "Cosuniq Technologies",
  publisher: "Cosuniq Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cosuniq.in",
    siteName: "Cosuniq Technologies",
    title: "Cosuniq Technologies | Creative Digital Agency",
    description:
      "Full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & video production. Every brand has a story. We help you build it.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cosuniq Technologies — Creative Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosuniq Technologies | Creative Digital Agency",
    description:
      "Full-service creative agency delivering software, SaaS, CRM, e-commerce, branding & video production.",
    images: ["/assets/og-image.png"],
    creator: "@cosuniq",
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  verification: {
    google: "google097b26a13a458c1c",
  },
  alternates: {
    canonical: "https://cosuniq.in",
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
