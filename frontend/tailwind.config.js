/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'iit-maroon': {
          DEFAULT: '#800000',
          dark: '#660000',
        },
        'iit-blue': '#004080', // <-- Add this new color
        'iit-gray': {
          light: '#f8f9fa',
          medium: '#6c757d',
          dark: '#343a40',
        },
        'link-blue': '#0d6efd',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};