/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes:
      [
          {
            mytheme: {
              primary: "#7C3AED",
            },
          },
      "dark",
    ]
  },
  theme: {
    extend: {
      colors: {
        background: '#09090A',

      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [require("daisyui")],
}
