module.exports = {
  purge: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
