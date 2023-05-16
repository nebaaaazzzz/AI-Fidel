/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'cxs': '344px',
        'cxm': '399px',
        'cxl': '640px',
      },
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        forest: {
          ...require('daisyui/src/colors/themes')['[data-theme=forest]'],
          primary: '#008867',
          accent: '#F8B936',
          'bg-base-300': 'red'
          ///TODO hover color
          // '.btn:hover': {
          //   opacity: 0.,
          // }
        }
      }
    ]
  }
};
