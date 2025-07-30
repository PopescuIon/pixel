import { fileURLToPath } from 'node:url';

const base = '/pixel/';

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false, // Static site
  typescript: {
    shim: false,
  },
  nitro: {
    preset: 'static',
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
 
    baseURL: base,
    buildAssetsDir: 'assets',
    head: {
      title: 'webfolio',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        {
          name: 'keywords',
          content: 'Vue Nuxtjs Template webfolio Multi-Purpose themeforest',
        },
        {
          name: 'description',
          content: 'webfolio - Multi-Purpose Vue Nuxtjs Template',
        },
        { name: 'author', content: 'Uicamp' },
      ],
      link: [
        { rel: 'shortcut icon', href: `${base}assets/imgs/favicon.ico` },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        },

        { rel: 'stylesheet', href: `${base}assets/css/plugins.css` },
        { rel: 'stylesheet', href: `${base}assets/css/style.css` },
      ],
      script: [
        { src: `${base}assets/js/plugins.js` },
        { src: `${base}assets/js/TweenMax.min.js` },
        { src: `${base}assets/js/charming.min.js` },
        { src: `${base}assets/js/countdown.js` },
        { src: `${base}assets/js/ScrollTrigger.min.js` },
        { src: `${base}assets/js/gsap.min.js` },
        { src: `${base}assets/js/splitting.min.js` },
        { src: `${base}assets/js/isotope.pkgd.min.js` },
        { src: `${base}assets/js/imgReveal/imagesloaded.pkgd.min.js` },
        { src: `${base}assets/js/ScrollSmoother.min.js` },
        { src: `${base}assets/js/scripts.js`, defer: true },
      ],
    },
  },  
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },});
