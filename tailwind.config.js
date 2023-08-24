const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '150-px': '150px',
      },
      boxShadow: {
        '3xl': '0px 0px 10px 1px rgba(0,0,0,0.1);',
      },
      animation: {
        'loading': 'loadingKeyframes 2.5s cubic-bezier(.79, 0, .47, .97) infinite;',
      },
      keyframes: {
        loadingKeyframes: {
          '0%': { transform: 'translate(0, -1em) rotate(-45deg)' },
          '5%': { transform: 'translate(0, -1em) rotate(-50deg)' },
          '20%': { transform: 'translate(1em, -2em) rotate(47deg)' },
          '25%': { transform: 'translate(1em, -2em) rotate(45deg)' },
          '30%': { transform: 'translate(1em, -2em) rotate(40deg)' },
          '45%': { transform: 'translate(2em, -3em) rotate(137deg)' },
          '50%': { transform: 'translate(2em, -3em) rotate(135deg)' },
          '55%': { transform: 'translate(2em, -3em) rotate(130deg)' },
          '70%': { transform: 'translate(3em, -4em) rotate(217deg)' },
          '75%': { transform: 'translate(3em, -4em) rotate(220deg)' },
          '100%': { transform: 'translate(0, -1em) rotate(-225deg)'}
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
