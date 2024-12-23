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
        gradient:
          "linear-gradient(to top right, #f8c9b7,#f2b4bf,#efa8c8,#cbb8d6, #a4c6e9)",
      },
      boxShadow: {
        lg: "0 10px 15px -10px rgb(0, 0, 0, 0.05)",
      },
      colors: {
        pink: {
          DEFAULT: "#ff6392",
          50: "#fef1f6",
          100: "#fee5f0",
          200: "#ffcbe2",
          300: "#ffa1c8",
          400: "#ff78ac",
          500: "#fa3a7f",
          600: "#ea1858",
          700: "#cc0a40",
          800: "#a80c35",
          foreground: "#FFFFFF",
        },
        cyan: {
          DEFAULT: "#02fdf4",
          foreground: "#FFFFFF",
        },
        blue: {
          DEFAULT: "#82c8f9",
          50: "#f3f9fc",
          100: "#e7f2f7",
          200: "#c9e4ee",
          300: "#a7d5e3",
          400: "#64b5cc",
          500: "#409db7",
          600: "#2f809a",
          700: "#27667d",
          800: "#245668",
          foreground: "#FFFFFF",
        },
        yellow: {
          DEFAULT: "#ffdd57",
          foreground: "#FFFFFF",
        },
        green: {
          DEFAULT: "#50ceac",
          foreground: "#FFFFFF",
        },
        purple: {
          DEFAULT: "#bd83e5",
          foreground: "#FFFFFF",
        },
        teal: {
          50: "#f3f9fc",
          100: "#e7f2f7",
          200: "#cae4ed",
          300: "#a8d5e3",
          400: "#64b5cc",
          500: "#419cb6",
          600: "#307e99",
          700: "#28657c",
          800: "#245668",
        },
        "powder-blue": {
          50: "#f3f8fb",
          100: "#e4eef5",
          200: "#cfe2ee",
          300: "#afcfe1",
          400: "#86b3d1",
          500: "#6c9cc5",
          600: "#5984b7",
          700: "#4e73a7",
          800: "#445e89",
        },
        "soft-pink": {
          50: "#fef1f6",
          100: "#fee5f0",
          200: "#ffcbe2",
          300: "#ffa1c9",
          400: "#ff66a4",
          500: "#fb3981",
          600: "#eb175a",
          700: "#eb175a",
          800: "#eb175a",
        },
        black: {
          DEFAULT: "#0d0b0c",
          foreground: "#FFFFFF",
        },
        white: {
          DEFAULT: "#fffffb",
        },
        tear: {
          DEFAULT: "#13161e",
          blue: "#b3d5f2",
        },
        her: {
          pink: "#fd7899",
          blue: "#82c8f9",
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
              DEFAULT: "#ff6392",
              foreground: "#FFFFFF",
            },
            cyan: {
              DEFAULT: "#02fdf4",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
