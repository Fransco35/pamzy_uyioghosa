/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "lab-background": "url('/src/assets/background_img.jpeg')",
        blackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100% )",
      },
    },
  },
  plugins: [],
};
