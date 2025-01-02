import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", // Αν έχεις components σε ξεχωριστό φάκελο
    "./routes/**/*.{js,jsx,ts,tsx}", // Αν έχεις ξεχωριστό routes φάκελο
  ],
  theme: {
    extend: {
      colors: {
        'gray-950': '#000000', // ή όποιο χρώμα θες
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
