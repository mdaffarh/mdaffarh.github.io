/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        biru: '#2D698B',
        'hijau-tua': '#A5B52A',
        'hijau-muda' : '#D9ED92',
        oren : '#ED9453', 
        ungu:'#B071FD',
        dark: '#3B5763'
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

