// app/metadata.ts (server-side)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keshav Chaudhary",
  description: "Portfolio showcasing projects, skills, and professional journey",
  keywords: ["Backend Developer", "Java", "Spring Boot", "REST API", "Software Engineer"],
  openGraph: {
    title: "Keshav Chaudhary Portfolio",
    description: "Explore my professional projects and expertise",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
