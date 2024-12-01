/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'cakePHP':"url('./src/assets/cakephp.png')",
        'html':"url('./src/assets/html.png')",
        'css':"url('./src/assets/css.png')",
        'javascript':"url('./src/assets/javascript.png')",
        'postman':"url('./src/assets/postman.png')",
        'vite':"url('./src/assets/vite.png')",
        'figma':"url('./src/assets/figma.png')",
        'node':"url('./src/assets/nodejs.png')",
        'react':"url('./src/assets/react.png')",
        'tailwind':"url('./src/assets/tailwind.png')",
        'express':"url('./src/assets/express.png')",
        'mysql':"url('./src/assets/mysql.png')",
        'mongodb':"url('./src/assets/mongodb.png')",
        'postgres':"url('./src/assets/postgres.png')",
        'php':"url('./src/assets/php.png')",
        'git':"url('./src/assets/github.png')",
        'spotify':"url('./src/assets/spotify.png')",
        'gsap':"url('./src/assets/gsap.jpg')"
        
      },
      fontFamily: {
        Poppins: ["Poppins, serif"],
        Playfair: ["Playfair Display, serif"],
        Dancing: ["Dancing Script, cursive"],
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 5s linear infinite',
      },
    },
  },
  plugins: [],
};
