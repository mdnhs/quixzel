import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs: "350px",
        sm: "440px",
        md: "700px",
        lg: "900px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    colors: {
      primary: "#403d39",
      secondary: "#EB5E28",
      tertiary: "#9A8D77",
      quaternary: "#CCC5B9",
      white: "#FFF",
      background: "#fffcf2",
    },
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        common: ["var(--font-common)"],
      },
    },
  },
  plugins: [],
};
export default config;
