/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'PoP': ['Poppins', 'sans-serif'],
        'ch': ['Noto Sans TC', 'sans-serif'],
      },
      backgroundImage: {
        'keyVision': "url('@/assets/img/10002.jpg')",
        'keyVision_mb': "url('@/assets/img/10015.jpg')",
      }
    },
  },
  plugins: [],
};
