/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: 'rgba(var(--bg-primary) / <alpha-value>)',
        secondary_bg: 'rgba(var(--bg-secondary) / <alpha-value>)',
        text: 'rgba(var(--text) / <alpha-value>)',
        title: 'rgba(var(--title) / <alpha-value>)',
        details: 'rgba(var(--text-details) / <alpha-value>)',
        header: 'rgba(var(--header-bg) / <alpha-value>)',
      },

      screens: {
        'xl': '1333px',
      }
    },
  },
  plugins: [],
}