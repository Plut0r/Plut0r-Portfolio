module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: "#1C1C1E",
        greenBg: "#145051",
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};
