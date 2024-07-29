/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: {
      text: "#ffffff",
      textcl: "#202722",
      backgroundcl: "#070e09",
      primarycl: "#a0d9ad",
      secondarycl: "#2a7a3c",
      accentcl: "#41c85e",
    },
  },
  theme: {
    colors: {
      text: "#ffffff",
      textcl: "#202722",
      backgroundcl: "#070e09",
      primarycl: "#a0d9ad",
      secondarycl: "#2a7a3c",
      accentcl: "#41c85e",
    },

    extend: {},
  },

  plugins: [require("daisyui")],
}
