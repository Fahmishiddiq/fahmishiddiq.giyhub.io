/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#eab308',
        secondary : '#64748b',
        dark: '#0f172a',
        yellow: '#0c0a09',
        orange: '#fde047',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

