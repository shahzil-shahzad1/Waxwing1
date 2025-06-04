/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      filter: {
        'blue-invert': 'invert(100%) sepia(100%) saturate(1000%) hue-rotate(200deg)',
      },
      screens: {
        '1000px': '1000px', // Adds your custom breakpoint
      },
    },
  },
  plugins: [],
};
