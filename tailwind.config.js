/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        circle1Anim:{
          '50%':{left:'22%',transform:'scale(1.11) ' },
          
        },
        circle2Anim:{
          '50%':{transform:'scale(1.1)',left:'53%'}
        }
        
      }
    },
  },
  plugins: [],
};
