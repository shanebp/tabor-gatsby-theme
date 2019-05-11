module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `philopress`,
    wordPressUrl: `https://nationalyoga.com/headless`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `https://nationalyoga.com/headless` },
    },
  ],
};
