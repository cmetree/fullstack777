module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N9BX9CG',
        includeInDevelopment: false,
        defaultDataLayer: {
          platform: 'gatsby',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://dsvidshim.kr',
    title: 'COVID-19 한눈에 알아보기',
    description:
      '코로나19에 관한 세계 각 국가들의 통계 및 뉴스 등을 취합하여 다양한 차트를 제공합니다',
    image: 'https://davidshim.kr/corona.png',
  },
};
