import type { Metadata } from "next";
import AcademyClient from "./AcademyClient";

export const metadata: Metadata = {
  title: "Academy",
  description: "Cosuniq Academy — a practical, mentor-led learning environment for the next generation of AI engineers, designers, and startup builders.",
  keywords: ["Cosuniq Academy", "learn web development India", "AI engineering course", "full stack bootcamp", "startup course India", "learn React Next.js"],
  openGraph: {
    title: "Academy | Cosuniq Technologies",
    description: "Cosuniq Academy — mentor-led courses on AI engineering, branding, and startup building. Learn. Build. Ship.",
    url: "https://cosuniq.in/academy",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Cosuniq Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy | Cosuniq Technologies",
    description: "Cosuniq Academy — mentor-led courses on AI engineering, branding, and startup building.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/academy" },
};

export default function Academy() {
  return <AcademyClient />;
}
