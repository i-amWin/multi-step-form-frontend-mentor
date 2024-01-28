/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "hsl(var(--marine-blue))",
        "purplish-blue": "hsl(var(--purplish-blue))",
        "pastel-blue": "hsl(var(--pastel-blue))",
        "light-blue": "hsl(var(--light-blue))",
        "strawberry-red": "hsl(var(--strawberry-red))",
        "cool-gray": "hsl(var(--cool-gray))",
        "light-gray": "hsl(var(--light-gray))",
        magnolia: "hsl(var(--magnolia))",
        alabaster: "hsl(var(--alabaster))",
      },
    },
  },
  plugins: [],
};
