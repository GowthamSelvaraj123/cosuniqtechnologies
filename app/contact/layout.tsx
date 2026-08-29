import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cosuniq Technologies",
  description: "Contact Cosuniq Technologies in Udumalpet / Coimbatore. Request a quote for software, CRM, e-commerce, web, branding, or video.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
