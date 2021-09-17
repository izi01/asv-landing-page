'use strict'

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `ASV Solutions`,
    description: ``,
    author: {
      name: 'Andreas Voit'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Website`,
        display: `minimal-ui`,
        path: `${__dirname}/src/images`,
        icon: `src/images/logo-gatsby.png`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#5d79e8`,
        // Disable the loading spinner.
        showSpinner: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
  ],
}
