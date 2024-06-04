import type { Metadata } from "next";
import { commonFont, titleFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quixzel",
  description: "The design partners of creative souls.",
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
      <body>{children}</body>
    </html>
  );
}
