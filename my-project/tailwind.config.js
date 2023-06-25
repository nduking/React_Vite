/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk","sans-serif"]
    },
    colors: {
      "startup-white": "#fff",
      "startup-green": "#25DAc5",
      "startup-blue": "#2f1893",
      "startup-grey": "#808080",
    },
  },
  plugins: [],
}
}