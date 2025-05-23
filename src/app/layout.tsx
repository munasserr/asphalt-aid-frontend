import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AsphaltAid - Smart Road Infrastructure Reporting",
  description: "Revolutionary road infrastructure reporting system that enables citizens to report road problems like potholes and cracks while leveraging AI to assess severity levels.",
  keywords: ["road infrastructure", "pothole reporting", "AI", "road maintenance", "civic engagement"],
  authors: [{ name: "AsphaltAid Team" }],
  openGraph: {
    title: "AsphaltAid - Smart Road Infrastructure Reporting",
    description: "Report road issues and help improve infrastructure with AI-powered severity assessment.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2E2E2E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
