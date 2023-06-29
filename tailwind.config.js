/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#C452D7',
        'pink-light': '#C963DB',
        'dark': '#2A243C',
        'dark-blue': '#3C2274',
        'hover-lighter-blue':"#6D51AA",
        'hover-darker-blue':"#2A145B",
        'gray-black': '#030203',

      },
      fontFamily: {
        main: ['Alegreya'],
      }
    },
  },
  plugins: [],
}
