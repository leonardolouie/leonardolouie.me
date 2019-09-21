// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = "skFIa3m7CYEU96M77u1LXbH891nhPhK0TjLNUTzT90nCaxckBrbCf1Ky538PIx6bkwmC3MEywhJri6s1ZuWVnli4p4SUcCbaxsN17r1JjHCVn7e1sqW0NpaRIOH4Mofp5QWzjkIy9gcGhGeUmdFUr3pKSFsvhC0gZKbhvnuUNdKIdo9EP0mv"
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    }
  ]
}
