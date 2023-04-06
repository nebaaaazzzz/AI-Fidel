/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#008867',
      secondary: '#F8B936',
      accent: '#1FB2A5',
      neutral: '#191D24',
      'base-100': '#1f2937',
      info: '#3ABFF8',
      success: '#36D399',
      warning: '#FBBD23',
      error: '#F87272'
    },
    mytheme: {
      primary: '#008867',
      secondary: '#F8B936',
      accent: '#1FB2A5',
      neutral: '#191D24',
      'base-100': '#1f2937',
      info: '#3ABFF8',
      success: '#36D399',
      warning: '#FBBD23',
      error: '#F87272'
    },
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
};
