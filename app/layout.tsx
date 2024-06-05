import dynamic from "next/dynamic";
import { AOSInit } from "@/components/animation/aos";
import type { Metadata } from "next";
import { commonFont, titleFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quixzel",
  description: "Developer partners of creative souls.",
};

const NavBar = dynamic(() => import("../components/NavBar/Scroll"), {
  ssr: true,
});

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
