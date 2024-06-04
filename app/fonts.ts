import { League_Spartan } from "next/font/google";
import localFont from "next/font/local";

export const commonFont = League_Spartan({
  subsets:["latin"],
  display: "swap",
  variable: "--font-common",
});

export const titleFont = localFont({
  src: "../public/fonts/ZtShago-Bold.otf",
  display: "swap",
  variable: "--font-title",
});
