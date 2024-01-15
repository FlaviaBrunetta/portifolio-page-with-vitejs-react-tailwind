/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      colors: {
        orange: "#F18F01",
        sinopia: "#C73E1D",
        magenta: "#A23B72",
        darkPurple: "#3B1F2B",
        blue: "#2E86AB",
      },
    },
  },
  plugins: [],
};
