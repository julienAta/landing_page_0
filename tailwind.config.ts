import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Segoe UI"],
    },
    extend: {
      backgroundImage: {
        backgroundimage: "url('/background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
