require(`dotenv`).config({path: `.env`,})
const path = require('path')
  
module.exports = {
  siteMetadata: {
    name: `YOU'RE 30!!!`,
    siteUrl: `https://www.itsyourbirthdaybaeo.com`,
    tagline: ``,
    githubLink: ``,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
            modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-remove-fingerprints`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'ktvorv1hy2ct',
        accessToken: 'uZDvkVA6AwhSwUaCKDn9CoyDooqiw4KZ0PCl0TkkRaM',
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/
        }
      }
    }
  ],
}
