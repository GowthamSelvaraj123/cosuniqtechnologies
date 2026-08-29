import type { Metadata } from "next";
import InitReveal from "../../components/InitReveal";
import ServicesPage from "../../components/ServicesPage";

export const metadata: Metadata = {
  title: "Services | Cosuniq Technologies",
  description: "Explore Cosuniq's full range of digital services — web development, UI/UX design, e-commerce, custom software, mobile apps, and cloud infrastructure.",
};

export default function Services() {
  return (
    <>
      <InitReveal />
      <ServicesPage />
    </>
  );
}

