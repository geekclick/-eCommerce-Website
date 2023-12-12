/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg": 'url("/src/assets/ProfilePageImages/BG.png")',
        "bg1": 'url("/src/assets/PhysicalPageImages/ProductImgSLider/1.png")',
      }
    },
  },
  plugins: [],
}