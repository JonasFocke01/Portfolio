module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#252535',
      secondary: '#6e5570',
      accent: '#ffbb6b',
      success: '#4dea3f',
      warning: '#f4bb50',
      error: '#f74838',
      info: '#eb8a7b',
      surface: '#b26b82',
      text: '#f9f871',
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
