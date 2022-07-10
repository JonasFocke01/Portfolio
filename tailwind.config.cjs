module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
      surface: '#2C001E',
      text: '#333333',
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
      wallpaper: "url('/static/windows_wallpaper.jpg')"
    }
  },
  plugins: []
};
