import type { Metadata, Viewport } from "next";
import type { RootLayoutProps } from "@/data/type";
import { metadata as content } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  icons: { icon: "/assets/favicon.png", apple: "/assets/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: content.themeColor };

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang={content.language}>
      <body>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
