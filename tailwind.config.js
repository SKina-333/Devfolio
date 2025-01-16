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
        'IDM':"url('./public/assets/idm.png')",
        'Tailwind':"url('./public/assets/Tailwind.png')",
        'SQL':"url('./public/assets/SQL.png')",
        'React':"url('./public/assets/react.png')",
        'PHP':"url('./public/assets/PHP.png')",
        'JS':"url('./public/assets/JS.png')",
        'HTML':"url('./public/assets/html.png')",
        'Git':"url('./public/assets/Git.png')",
        'Figma':"url('./public/assets/Figma.png')",
        'Extra':"url('./public/assets/Extra.png')",
        'Css':"url('./public/assets/css.png')",
        'LinkedIn':"url('./public/assets/LinkedIn.png')",
        'Discord':"url('./public/assets/Discord.png')",
        'Github':"url('./public/assets/Github.png')",
        'Whatapps':"url('./public/assets/Whatapps.png')",
        'Monash':"url('./public/assets/Monash.png')",
        'Colorado':"url('./public/assets/Colorado.png')",
        'ACET':"url('./public/assets/ACET.png')",
        'Chat':"url('./public/assets/ChatIcon.png')",
        'Gym':"url('./public/assets/GymIcon.png')",
        'Cart':"url('./public/assets/CartIcon.png')",
        'Sketch':"url('./public/assets/Sketch.png')",
        
        
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
