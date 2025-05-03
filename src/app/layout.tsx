import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaikh Abdul Sami | Portfolio",
  description: "Tech Lead & Full Stack Developer Portfolio",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Shaikh Abdul Sami" }],
  metadataBase: new URL("https://abdulsami.dev"),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulsami.dev",
    title: "Shaikh Abdul Sami | Portfolio",
    description: "Tech Lead & Full Stack Developer Portfolio",
    siteName: "Shaikh Abdul Sami Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-300 text-light-100`}
      >
        {children}
      </body>
    </html>
  );
}
