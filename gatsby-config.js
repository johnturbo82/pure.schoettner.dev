module.exports = {
  siteMetadata: {
    title: "pure.schoettner.dev",
    author: 'Oliver Schöttner',
    street: "Steigerwaldstr. 33",
    postal_code: "85049",
    city: "Ingolstadt",
    email: "oliver@schoettner.dev",
    mailto: "mailto:me@johnturbo.com",
    mobile: "0170 / TURBO ON",
    mobileto: "tel:+491708872666",
    siteUrl: "https://pure.schoettner.dev",
    lang: 'de',
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://www.jt1.rocks/graphql",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `schoettner.dev`,
        short_name: `JT1`,
        start_url: `/`,
        background_color: `#12355b`,
        theme_color: `#ff6978`,
        display: `standalone`,
        icon: `src/images/jt.png`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
