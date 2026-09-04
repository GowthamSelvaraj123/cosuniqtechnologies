import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Cosuniq Technologies — our vision, mission, story, and the creative technology team shaping ambitious digital experiences.",
  keywords: ["Cosuniq about", "creative technology team", "digital agency India", "Cosuniq mission", "Cosuniq vision"],
  openGraph: {
    title: "About Us | Cosuniq Technologies",
    description: "Learn about Cosuniq Technologies — our vision, mission, and the creative technology team shaping digital experiences.",
    url: "https://cosuniq.in/about",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "About Cosuniq Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Cosuniq Technologies",
    description: "Learn about Cosuniq Technologies — our vision, mission, and team.",
    images: ["/assets/og-image.png"],
  },
  alternates: { canonical: "https://cosuniq.in/about" },
};

export default function About() {
  return <AboutContent />;
}
