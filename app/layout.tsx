import type { Metadata, Viewport } from "next";
import type { RootLayoutProps } from "@/data/type";
import { metadata as content } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  icons: { icon: "/assets/favicon.png", apple: "/assets/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: content.themeColor };

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang={content.language}
      className="scroll-smooth motion-reduce:scroll-auto"
    >
      <body className="m-0 bg-paper font-sans text-[1.0625rem] leading-[1.75] text-ink [text-rendering:optimizeLegibility] [&_:where(:focus-visible)]:rounded [&_:where(:focus-visible)]:[outline:3px_solid_var(--color-gold)] [&_:where(:focus-visible)]:outline-offset-2 motion-reduce:**:animate-none! motion-reduce:**:transition-none! motion-reduce:**:scroll-auto! motion-reduce:[&_*::before]:transition-none! motion-reduce:[&_*::after]:transition-none!">
        <LanguageProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
