/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          30: "#81ecfc",
          50: "#2de1fc",
          70: "#1ac7e5",
          90: "#000066",
        },
        red: {
          50: "#DC143C",
        },
        coral: {
          50: "#ff6b6b",
          70: "#e64c4c",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, #585858, #141414)",
      },
      borderWidth: {
        "2.5": "2.5px",
        "3": "3px",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
  plugins: [],
};
