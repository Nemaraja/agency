/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // This ensures hover effects only work on devices that actually have a mouse
  // preventing "sticky" buttons on mobile phones.
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
