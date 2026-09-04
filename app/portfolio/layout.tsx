import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Work",
  description:
    "Explore Cosuniq Technologies' selected work across software, e-commerce, branding, UI/UX design, and video production.",
  keywords: [
    "Cosuniq portfolio",
    "digital agency work",
    "web design projects",
    "branding portfolio",
    "creative agency projects India",
  ],
  openGraph: {
    title: "Portfolio & Work | Cosuniq Technologies",
    description:
      "Explore Cosuniq's selected projects across software, e-commerce, branding, and video production.",
    url: "https://cosuniq.in/portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cosuniq Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Work | Cosuniq Technologies",
    description: "Explore Cosuniq's selected projects across software, branding, and video.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/portfolio" },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
