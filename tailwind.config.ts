import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003C3C",
        secondary: "#052A2A",
        accent: "#14C79E",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
