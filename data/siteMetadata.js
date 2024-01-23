// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '2Blog',
  author: '2Core',
  headerTitle: '2Blog',
  description: 'Cresça e digitalize sua empresa com os conteúdos do 2Blog',
  language: 'pt-BR',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.2core.com.br',
  siteRepo: '',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '',
  email: 'contato@2core.com.br',
  instagram: 'https://www.instagram.com/2core.company/',
  github: '',
  twitter: 'https://twitter.com/2core_company',
  facebook: 'https://www.facebook.com/profile.php?id=100087412010604',
  youtube: '',
  linkedin: '',
  locale: 'pt-BR',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: true, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: 'G-3CVEVBEJTX', // e.g. UA-000000-2 or G-XXXXXXX
  },
}

module.exports = siteMetadata
