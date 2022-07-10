module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#050e74',
      secondary: '#006cc0',
      accent: '#00bbc6',
      success: '#4dea3f',
      warning: '#f4bb50',
      error: '#f74838',
      info: '#eb8a7b',
      surface: '#0042a4',
      text: '#00dfbe',
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
