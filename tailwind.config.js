/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        background: "#ffffff",
        foreground: "#000000",
        "muted-foreground": "#6b7280",
      },
    },
  },
  plugins: [],
}