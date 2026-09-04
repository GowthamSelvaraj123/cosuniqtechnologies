import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosuniq Academy",
  description:
    "Join Cosuniq Academy — learn design, development, and digital skills through hands-on training programs led by industry professionals.",
  keywords: [
    "Cosuniq Academy",
    "web development course",
    "UI UX training",
    "digital skills India",
    "design bootcamp",
    "coding course Coimbatore",
  ],
  openGraph: {
    title: "Cosuniq Academy | Learn Design & Development",
    description:
      "Join Cosuniq Academy — hands-on training in design, development, and digital skills led by industry professionals.",
    url: "https://cosuniq.in/academy",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cosuniq Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosuniq Academy | Learn Design & Development",
    description: "Hands-on training in design, development, and digital skills.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/academy" },
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
