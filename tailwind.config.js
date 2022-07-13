module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bungee: ["Bungee", "cursive"],
        Montserrat: ["Montserrat", "cursive"],
       }, 
      colors: {
        'orange-light' : '#fa795a',
        'orange-dark':'#be3a18',
        "black-light" : '#141617',
        "yellow-light" : '#f6d285',
        'quote' : '#f5f4f4',
        'quote-text' : '#676766',
        'input' : '#eeefef',
      }
    },
  },
  plugins: [],
}