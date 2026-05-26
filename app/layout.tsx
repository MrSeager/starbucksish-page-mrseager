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
  title: "Starbucks Rewards page by Mr.Seager",
  description: "Starbucks Rewards page made by Mr.Seager using Next.JS, TypeScript and Tailwind",
  icons: { 
    icon: "/images/icon.png", 
  },
  openGraph: {
    title: "Starbucks Rewards page by Mr.Seager",
    description: "Starbucks Rewards page made by Mr.Seager using Next.JS, TypeScript and Tailwind",
    images: [
      {
        url: "/images/C1-Starbucks.png",
        width: 200,
        height: 200,
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/images/C1-Starbucks.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
