import type { Metadata } from "next";
import { commonFont, titleFont } from "./fonts";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { AOSInit } from "@/components/animation/aos";

export const metadata: Metadata = {
  title: "Quixzel",
  description: "Developer partners of creative souls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${commonFont.variable} ${titleFont.variable} font-common bg-background`}
    >
      <AOSInit />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
