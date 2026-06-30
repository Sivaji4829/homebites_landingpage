/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B4D3B",     // Primary Green
          secondary: "#82C341",   // Secondary Green
          accent: "#FF7A00",      // Accent Orange
          offwhite: "#F8F5EE",    // Off White
          dark: "#1C1C1C",        // Dark Text
          light: "#FFFFFF",       // White
          gold: "#FFD700",        // Gold for stars
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(11, 77, 59, 0.15)',
        'premium-hover': '0 20px 40px -15px rgba(11, 77, 59, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

