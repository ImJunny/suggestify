import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist } from "next/font/google";
import "./globals.css";

const IBMPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suggestify",
  description: "Find and share music suggestions with others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${IBMPlexSans.className} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
