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
        'IDM':"url('./src/assets/idm.png')",
        'Tailwind':"url('./src/assets/Tailwind.png')",
        'SQL':"url('./src/assets/SQL.png')",
        'React':"url('./src/assets/react.png')",
        'PHP':"url('./src/assets/PHP.png')",
        'JS':"url('./src/assets/JS.png')",
        'HTML':"url('./src/assets/html.png')",
        'Git':"url('./src/assets/Git.png')",
        'Figma':"url('./src/assets/Figma.png')",
        'Extra':"url('./src/assets/Extra.png')",
        'Css':"url('./src/assets/css.png')",
        'LinkedIn':"url('./src/assets/LinkedIn.png')",
        'Discord':"url('./src/assets/Discord.png')",
        'Github':"url('./src/assets/Github.png')",
        'Whatapps':"url('./src/assets/Whatapps.png')",
        'Monash':"url('./src/assets/Monash.png')",
        'Colorado':"url('./src/assets/Colorado.png')",
        'ACET':"url('./src/assets/ACET.png')",
        'Chat':"url('./src/assets/ChatIcon.png')",
        'Gym':"url('./src/assets/GymIcon.png')",
        'Cart':"url('./src/assets/CartIcon.png')",
        'Sketch':"url('./src/assets/Sketch.png')",
        
        
      },
      fontFamily: {
        Poppins: ["Poppins, serif"],
        Playfair: ["Playfair Display, serif"],
        Dancing: ["Dancing Script, cursive"],
        Anonymous: ["Anonymous Pro, serif"],
        Poltawski: ["Poltawski Nowy, serif"],
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
