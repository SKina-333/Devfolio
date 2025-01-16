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
        'IDM':"url('/assets/idm.png')",
        'Tailwind':"url('/assets/Tailwind.png')",
        'SQL':"url('/assets/SQL.png')",
        'React':"url('/assets/react.png')",
        'PHP':"url('/assets/PHP.png')",
        'JS':"url('/assets/JS.png')",
        'HTML':"url('/assets/html.png')",
        'Git':"url('/assets/Git.png')",
        'Figma':"url('/assets/Figma.png')",
        'Extra':"url('/assets/Extra.png')",
        'Css':"url('/assets/css.png')",
        'LinkedIn':"url('/assets/LinkedIn.png')",
        'Discord':"url('/assets/Discord.png')",
        'Github':"url('/assets/Github.png')",
        'Whatapps':"url('/assets/Whatapps.png')",
        'Monash':"url('/assets/Monash.png')",
        'Colorado':"url('/assets/Colorado.png')",
        'ACET':"url('/assets/ACET.png')",
        'Chat':"url('/assets/ChatIcon.png')",
        'Gym':"url('/assets/GymIcon.png')",
        'Cart':"url('/assets/CartIcon.png')",
        'Sketch':"url('/assets/Sketch.png')",
        
        
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
