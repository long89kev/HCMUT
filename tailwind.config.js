/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ff5eda",
        secondary: "#292929",
        accent: "#31b8ec",
        info: "#38bdf8",
        success: "#4ade80",
        warning: "#facc15",
        error: "#fb7185",
        neutral: "#3d3938",
        text: "#ffffff",
        background: "#1c1917",
      }
    },
  },
  plugins: [],
}

