import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://femmeformstyle.com"),
  title: "Femme Form Style | Modern Femininity",
  description:
    "Femme Form — refined silhouettes, understated luxury, and timeless fashion designed to celebrate every form.",
  icons: {
    icon: "/images/femme-form-logo.jpg",
    apple: "/images/femme-form-logo.jpg",
  },
  openGraph: {
    title: "Femme Form Style | Modern Femininity",
    description:
      "Femme Form — refined silhouettes, understated luxury, and timeless fashion designed to celebrate every form.",
    images: ["/images/femme-form-logo.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
