/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cardbg: "#F9F9F9",
        muted: "rgba(28,28,28,.4)",
      },
    },
  },
  // plugins: [require("daisyui")],
  scrollbar: ["rounded"],
  plugins: [],
};
