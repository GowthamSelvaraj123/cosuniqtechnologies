import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cosuniq Technologies. Tell us about your project and let's build something amazing together.",
  keywords: [
    "contact Cosuniq",
    "hire digital agency",
    "start a project",
    "web development quote India",
    "creative agency Coimbatore",
  ],
  openGraph: {
    title: "Contact Us | Cosuniq Technologies",
    description:
      "Get in touch with Cosuniq Technologies. Tell us about your project and let's build something amazing together.",
    url: "https://cosuniq.in/contact",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Contact Cosuniq Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Cosuniq Technologies",
    description: "Start your project with Cosuniq Technologies today.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
