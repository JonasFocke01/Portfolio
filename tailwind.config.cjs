module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#ff6f91',
      secondary: '#d65db1',
      accent: '#f9f871',
      success: '#4dea3f',
      warning: '#f4bb50',
      error: '#f74838',
      info: '#ffc75f',
      surface: '#ff9671',
      text: '#f7f7d7',
      black: '#000000'
    },
    extend: {
      fontFamily: {
        robotoslab: ['Roboto Slab', 'serif-serif'],
        kouhlen: ['Koulen', 'serif-serif'],
        lato: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: []
};
