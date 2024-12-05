/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use CSS variables for light and dark themes
        primaryText: 'var(--primary-text-color)',
        secondaryText: 'var(--secondary-text-color)',
        primaryBg: 'var(--primary-bg-color)',
        secondaryBg: 'var(--secondary-bg-color)',
        icon: 'var(--link-button-bg-color)',
      },
    },
  },
  plugins: [],
};
