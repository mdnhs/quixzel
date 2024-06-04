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
    },
    colors: { primary: "#403d39", secondary: "#EB5E28", tertiary: "9A8D77" },
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
