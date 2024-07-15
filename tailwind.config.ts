import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        lg: "0 10px 15px -10px rgb(0, 0, 0, 0.05)",
      },
      colors: {
        pink: {
          DEFAULT: "var(--pink)",
          foreground: "#FFFFFF",
        },
        cyan: {
          DEFAULT: "var(--cyan)",
          foreground: "#FFFFFF",
        },
        blue: {
          DEFAULT: "var(--blue)",
          foreground: "#FFFFFF",
        },
        yellow: {
          DEFAULT: "var(--yellow)",
          foreground: "#FFFFFF",
        },
        green: {
          DEFAULT: "var(--green)",
          foreground: "#FFFFFF",
        },
        purple: {
          DEFAULT: "var(--purple)",
          foreground: "#FFFFFF",
        },
        black: {
          DEFAULT: "var(--black)",
          foreground: "#FFFFFF",
        },
        white: {
          DEFAULT: "var(--white)",
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            pink: {
              DEFAULT: "var(--pink)",
              foreground: "#FFFFFF",
            },
            cyan: {
              DEFAULT: "var(--cyan)",
              foreground: "#FFFFFF",
            },
            yellow: {
              DEFAULT: "var(--yellow)",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
