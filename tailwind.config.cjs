/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        forest: {
          ...require('daisyui/src/colors/themes')['[data-theme=forest]'],
          primary: '#008867',
          accent: '#F8B936'
          ///TODO hover color
          // '.btn:hover': {
          //   opacity: 0.,
          // }
        }
      }
    ]
  }
};
