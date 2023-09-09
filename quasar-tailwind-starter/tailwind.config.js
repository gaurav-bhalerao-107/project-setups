module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./public/**/*.{vue,js,ts,svg}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#1658ff',
        'primary-light':'#4e80ef',
        'primary-dark': '#1658ff',
        'white-shade':'#EFEFEF',
        'black-shade' : '#0B0B0B',
      },
    },

    fontFamily: {
      "bungee-shade": ['Bungee Shade', 'Bungee Shade'],
      "carter-one": ['Carter One', 'Carter One'],
      "ceviche-one": ['Ceviche One', 'Ceviche One'],
      "ultra',": ['Ultra', 'serif'],
      "yatra-one": ['Yatra One', 'Yatra One'],
      "poppins": ['Poppins', 'sans-serif']
    },

    screens: {
      'xs': '450px',
      // => @media (min-width: 450px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}
