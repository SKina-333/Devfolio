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
        'IDM':"url('/idm.png')",
        'Tailwind':"url('/Tailwind.png')",
        'SQL':"url('/SQL.png')",
        'React':"url('/react.png')",
        'PHP':"url('/PHP.png')",
        'JS':"url('/JS.png')",
        'HTML':"url('/html.png')",
        'Git':"url('/Git.png')",
        'Figma':"url('/Figma.png')",
        'Extra':"url('/Extra.png')",
        'Css':"url('/css.png')",
        'LinkedIn':"url('/LinkedIn.png')",
        'Discord':"url('/Discord.png')",
        'Github':"url('/Github.png')",
        'Whatapps':"url('/Whatapps.png')",
        'Monash':"url('/Monash.png')",
        'Colorado':"url('/Colorado.png')",
        'ACET':"url('/ACET.png')",
        'Chat':"url('/ChatIcon.png')",
        'Gym':"url('/GymIcon.png')",
        'Cart':"url('/CartIcon.png')",
        'Sketch':"url('/Sketch.png')",
        
        
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
