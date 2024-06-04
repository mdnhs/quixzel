import type { Metadata } from "next";
import { commonFont, titleFont } from "./fonts";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Quixzel",
  description: "The developer partners of creative souls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${commonFont.variable} ${titleFont.variable} font-common`}
    >
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
