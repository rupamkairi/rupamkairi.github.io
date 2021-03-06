require('dotenv').config();

export default {
  target: 'static',
  env: {
    crisp_websiteId: process.env.Crisp_websiteId,
  },
  head: {
    title: process.env.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [{ src: '~plugins/crisp.js', mode: 'client' }],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity',
    '@nuxtjs/dotenv',
  ],
  sanity: {
    projectId: process.env.Sanity_projectId,
    dataset: process.env.Sanity_dataset,
    useCdn: true,
  },
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
};
