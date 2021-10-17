module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-dark": "#32475B",
        "bookmark-green": "#41B883"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
