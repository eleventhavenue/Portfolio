// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0F172A',        // Rich navy blue background
          surface: '#1E293B',   // Lighter navy for surfaces
          text: '#F8FAFC',      // Off-white text
          muted: '#94A3B8',     // Muted slate for secondary text
          accent: '#0EA5E9'     // Bright cyan accent that pops
        },
        light: {
          bg: '#FFF9EC',        // Keeping the warm cream you love
          surface: '#F8ECD8',   // Slightly darker cream for surfaces
          text: '#2D2D2D',      // Darker text for better contrast
          muted: '#64748B',     // Muted text color for secondary content
          accent: '#0891B2'     // Cyan accent that complements the cream
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
