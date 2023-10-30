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
          50: "#2de1fc",
          70: "#1ac7e5",
        },
        red: {
          50: "#DC143C",
          // 50: "#CE2029",
          // 50: "#CD5C5C",
          // 50: "#BC8F8F",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        gold: {
          // 50: "#ffbf00",
          // 50: "#BF40BF",
          50: "#ffffff",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
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
