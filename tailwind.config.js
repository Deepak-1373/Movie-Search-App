module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0f171e",
        "secondary-color": "#1a242f",
        "font-primary": "#ffffff",
        "font-secondary": "#79b8f3",
      },
      gridTemplateColumns: {
        16: "repeat(auto-fill, minmax(220px, 1fr))",
      },
    },
  },
  plugins: [],
};
