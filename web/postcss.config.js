const tailwind = require('tailwindcss')

module.exports = () => {
  return {
    plugins: [tailwind('./tailwind.config.js'), require('autoprefixer')]
  }
}
