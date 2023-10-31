import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bartosz Kuruc - Marketing Specialist",
  description: "Bartosz Kuruc - Marketing Specialist",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden bg-gray-50 max-container">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
