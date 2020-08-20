module.exports = {
  banner: true,
  input: ['./src/index.js'],
  output: {
    extractCSS: true
  },
  plugins: {
    vue: {
      css: true
    },
    postcss: true
  }
};
