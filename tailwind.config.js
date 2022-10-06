/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        0.5: '0.125rem',
        18: '4.25rem'
      },
      colors: {
        textColor: '#111111',
        bgColor: '#FAFAFA',
        darkBgColor: '#1D1F21',
        darkTextColor: '#EEEEEE',
        themeOrange: '#F47B51',
        themeRed: '#D63447',
        themeGreen: '#2C7E60'
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      }
    }
  },
  plugins: []
}
