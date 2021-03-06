module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@jonas_focke/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#DD4814',
      secondary: '#77216F',
      accent: '#AEA79F',
      success: '#4dea3f',
      warning: '#f4bb50',
      error: '#f74838',
      info: '#0159C0',
      surface: '#661e34',
      text: '#ffe7d6',
      black: '#000000'
    },
    extend: {
      // fontFamily: {
      //   robotoslab: ['Roboto Slab', 'serif-serif'],
      //   kouhlen: ['Koulen', 'serif-serif'],
      //   lato: ['Lato', 'sans-serif']
      // }
    },
    backgroundImage: {
      wallpaper: "url('/static/wallpaper.jpg')"
    }
  },
  plugins: []
};
