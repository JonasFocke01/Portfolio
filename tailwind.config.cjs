module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#001D6E',
      secondary: '#0159C0',
      accent: '#0159C0',
      success: '#4dea3f',
      warning: '#f4bb50',
      error: '#f74838',
      info: '#0159C0',
      surface: '#003D9D',
      text: '#89DFFE',
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
