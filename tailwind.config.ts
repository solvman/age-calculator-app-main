import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "hsl(259, 100%, 65%)",
      "light-red": "hsl(0, 100%, 67%)",
      white: "hsl(0, 0%, 100%)",
      "off-white": "hsl(0, 0%, 94%)",
      "light-grey": "hsl(0, 0%, 86%)",
      "smokey-grey": "hsl(0, 1%, 44%)",
      "off-black": "hsl(0, 0%, 8%)",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
      extrabold: "800",
    },
    extend: {
      fontFamily: {
        serif: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
export default config;
